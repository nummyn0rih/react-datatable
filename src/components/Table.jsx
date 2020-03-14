import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import IconSort from './IconSort';
import { fetchUsers, sortUsers } from '../actions';
import routes from '../routes';

export class Table extends Component {
	handleSortUsers = type => () => {
		const { sortUsers } = this.props;
		sortUsers({ type });
	};

	renderTH = () => {
		const { tableHeaders } = this.props;
		return (
			<tr>
				{tableHeaders.map(header => (
					<th onClick={this.handleSortUsers(header)} scope="col" key={header}>
						{header && <IconSort />}
						{header}
					</th>
				))}
			</tr>
		);
	};

	componentDidMount() {
		const { fetchUsers } = this.props;
		fetchUsers(routes.randomUsers);
	}

	render() {
		const { users } = this.props;
		return (
			<table className="table table-hover table-striped table-dark">
				<thead>{this.renderTH()}</thead>
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
	const tableHeaders = ['', 'Имя', 'Фамилия', 'Email', 'Телефон'];
	const users = modifiedIds.map(id => byId[id]);
	return { users, tableHeaders };
};

const mapDispatchToProps = {
	fetchUsers,
	sortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
