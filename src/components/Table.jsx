import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import IconSort from './IconSort';
import { fetchUsers, sortUsers } from '../actions';
import routes from '../routes';

export class Table extends Component {
	handleSortUsers = type => () => {
		const { sortUsers, columns } = this.props;
		const direction = columns.reduce((acc, col) =>
			col.name === type ? col.direction : acc
		);
		sortUsers({ type, direction });
	};

	renderTH = () => {
		const { columns, activeDirection } = this.props;
		return (
			<tr>
				{columns.map(col => (
					<th
						onClick={col.name !== 'avatar' ? this.handleSortUsers(col.name) : null}
						scope="col"
						key={col.name}
					>
						{col.title === activeDirection && <IconSort />}
						{col.title}
					</th>
				))}
			</tr>
		);
	};

	componentDidMount() {
		const { fetchUsers } = this.props;
		fetchUsers(routes.randomUsers(20));
	}

	render() {
		return (
			<table className="table table-hover table-striped table-dark">
				<thead>{this.renderTH()}</thead>
				<tbody>
					<UsersList />
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = ({ uiState: { columns, activeDirection } }) => ({
	columns,
	activeDirection,
});

const mapDispatchToProps = {
	fetchUsers,
	sortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
