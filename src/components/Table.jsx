import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import IconSort from './IconSort';
import { fetchUsers } from '../actions';
import routes from '../routes';

export class Table extends Component {
	renderTH = () => {
		const { tableHeaders } = this.props;
		return (
			<tr>
				{tableHeaders.map(header => (
					<th scope="col" key={header}>
						<IconSort />
						{header}
					</th>
				))}
			</tr>
		);
	};

	componentDidMount() {
		const { fetchUsers } = this.props;
		fetchUsers(routes.dataSmall);
	}

	render() {
		const { users } = this.props;
		return (
			<table className="table table-dark">
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
	const tableHeaders = ['#', 'Имя', 'Фамилия', 'Email', 'Телефон'];
	const users = modifiedIds.map(id => byId[id]);
	return { users, tableHeaders };
};

const mapDispatchToProps = {
	fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
