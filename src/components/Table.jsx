import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHead from './TableHead';
import UsersList from './UsersList';
import { fetchUsers } from '../actions';
import routes from '../routes';

export class Table extends Component {
	componentDidMount() {
		const { fetchUsers } = this.props;
		fetchUsers(routes.randomUsers(20));
	}

	render() {
		return (
			<table className="table table-hover table-striped table-dark">
				<thead>
					<TableHead />
				</thead>
				<tbody>
					<UsersList />
				</tbody>
			</table>
		);
	}
}

const mapDispatchToProps = {
	fetchUsers,
};

export default connect(null, mapDispatchToProps)(Table);
