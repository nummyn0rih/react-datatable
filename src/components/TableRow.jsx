import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableRow extends Component {
	render() {
		const { user, display } = this.props;
		return (
			<tr>
				{display.avatar && (
					<th scope="row">
						<div className="media">
							<img src={user.picture.medium} className="mr-3" alt="userAvatar" />
						</div>
					</th>
				)}
				{display.firstName && <td>{user.firstName}</td>}
				{display.lastName && <td>{user.lastName}</td>}
				{display.email && <td>{user.email}</td>}
				{display.phone && <td>{user.phone}</td>}
			</tr>
		);
	}
}

const mapStateToProps = ({ uiState: { columns } }) => {
	const display = columns.reduce(
		(acc, col) => ({ ...acc, [col.name]: col.display }),
		{}
	);
	return { display };
};

export default connect(mapStateToProps, null)(TableRow);
