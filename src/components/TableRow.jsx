import React from 'react';

const TableRow = ({ user }) => {
	return (
		<tr>
			<th scope="row">{user.id}</th>
			<td>{user.firstName}</td>
			<td>{user.lastName}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
		</tr>
	);
};

export default TableRow;
