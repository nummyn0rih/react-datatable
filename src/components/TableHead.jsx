import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconSort from './IconSort';
import { sortUsers } from '../actions';

export class TableHead extends Component {
	handleSortUsers = type => () => {
		const { sortUsers, columns } = this.props;
		const direction = columns.reduce((acc, col) =>
			col.name === type ? col.direction : acc
		);
		sortUsers({ type, direction });
	};

	render() {
		const { columns, activeDirection } = this.props;
		return (
			<tr>
				{columns.map(
					col =>
						col.display && (
							<th
								onClick={col.name !== 'avatar' ? this.handleSortUsers(col.name) : null}
								scope="col"
								key={col.name}
							>
								{col.name === activeDirection && <IconSort direction={col.direction} />}
								{col.name !== 'avatar' ? col.title : null}
							</th>
						)
				)}
			</tr>
		);
	}
}

const mapStateToProps = ({ uiState: { columns, activeDirection } }) => ({
	columns,
	activeDirection,
});

const mapDispatchToProps = {
	sortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHead);
