import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';
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
		fetchUsers(routes.randomUsers(20));
	}

	render() {
		console.log('BOOOM!');
		return (
			<table className="table table-hover table-striped table-dark">
				<thead>{this.renderTH()}</thead>
				<tbody>
					<UsersList />
				</tbody>
			</table>
		);
	}
}

const tableHeaders = ['', 'Имя', 'Фамилия', 'Email', 'Телефон'];
const mapStateToProps = () => ({ tableHeaders });

const mapDispatchToProps = {
	fetchUsers,
	sortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
