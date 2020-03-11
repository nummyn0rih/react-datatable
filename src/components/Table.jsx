import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import { fetchUsers } from '../actions';
import routes from '../routes';

export class Table extends Component {
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

const mapStateToProps = state => {
	const {
		users: { byId, modifiedIds },
	} = state;
	const users = modifiedIds.map(id => byId[id]);

	return { users };
};

const mapDispatchToProps = {
	fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
