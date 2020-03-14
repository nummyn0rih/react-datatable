import React from 'react';

const Loader = () => (
	<div className="list-group-loader">
		<div className="loader">asdfasdfasdf</div>
	</div>
);

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

const RowComponent = ({ user, loading }) => {
	return loading ? <Loader /> : <TableRow user={user} loading={loading} />;
};

export default RowComponent;
// export default TableRow;
