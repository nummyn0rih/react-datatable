import React from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import { fetchUsers } from '../actions';
import routes from '../routes';

const mapStateToProps = state => {
	const {
		users: { byId, allIds },
	} = state;
	const users = allIds.map(id => byId[id]);

	return { users };
};

const actionCreators = {
	fetchUsers,
};

class Table extends React.Component {
	handleSort = type => () => {
		const { sortUsers, orderBy, byId } = this.props;
		const order = orderBy[type];
		sortUsers({ type, order, byId });
	};

	componentDidMount() {
		const { fetchUsers } = this.props;
		fetchUsers(routes.dataSmall);
	}

	render() {
		const { users } = this.props;

		return (
			<table className="table table-dark">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Имя</th>
						<th scope="col">Фамилия</th>
						<th scope="col">Email</th>
						<th scope="col">Телефон</th>
					</tr>
				</thead>
				<tbody>
					{users.length > 0 &&
						users.map(user => <TableRow user={user} key={user.id} />)}
				</tbody>
			</table>
		);
	}
}

export default connect(mapStateToProps, actionCreators)(Table);
