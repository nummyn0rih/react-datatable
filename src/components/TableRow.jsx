import React from 'react';

const TableRow = ({ user }) => {
	return (
		<tr>
			<th scope="row">
				<div className="media">
					<img src={user.picture.medium} className="mr-3" alt="userAvatar" />
				</div>
			</th>
			<td>{user.name.first}</td>
			<td>{user.name.last}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
		</tr>
	);
};

export default TableRow;
