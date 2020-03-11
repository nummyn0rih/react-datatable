import React from 'react';

class TableRow extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<tr>
				<th scope="row">{user.id}</th>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
			</tr>
		);
	}
}

export default TableRow;
