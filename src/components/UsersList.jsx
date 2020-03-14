import React, { Fragment } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TableRow from './TableRow';
import Spinner from './Spinner';
import useActions from '../hooks/useActions';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { fetchUsers } from '../actions';
import routes from '../routes';

const UsersList = () => {
	const users = useSelector(
		({ users: { byId, modifiedIds } }) => modifiedIds.map(id => byId[id]),
		shallowEqual
	);
	const [addFetchUsersDispatch] = useActions([fetchUsers]);
	const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

	function fetchMoreListItems() {
		// setTimeout(() => {
		// 	addFetchUsersDispatch(routes.randomUsers(10));
		// 	setIsFetching(false);
		// }, 2000);
		addFetchUsersDispatch(routes.randomUsers(10));
		setIsFetching(false);
	}

	return (
		<Fragment>
			{users.length > 0 &&
				users.map(user => <TableRow user={user} key={user.id} />)}
			{isFetching && <Spinner />}
		</Fragment>
	);
};

export default UsersList;
