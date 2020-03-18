import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHead from './TableHead';
import UsersList from './UsersList';
import { fetchUsers } from '../actions';
import routes from '../routes';

export class Table extends Component {
	componentDidUpdate() {
		const { loadingMethodState, fetchUsers } = this.props;
		switch (loadingMethodState) {
			case 'randomuser': {
				fetchUsers(routes.randomUsers(20));
				break;
			}
			case 'faker': {
				console.log('object');
				break;
			}
			default:
				throw new Error(`Unknown loading method: '${loadingMethodState}'!`);
		}
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

const mapStateToProps = ({ loadingMethodState }) => ({ loadingMethodState });

const mapDispatchToProps = {
	fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
