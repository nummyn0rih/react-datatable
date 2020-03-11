import axios from 'axios';
import { createAction } from 'redux-actions';

// export const sortUsers = createAction('USERS_SORT');
// export const filterUsers = createAction('USERS_FILTER');

export const fetchUsersRequest = createAction('USERS_FETCH_REQUEST');
export const fetchUsersSuccess = createAction('USERS_FETCH_SUCCESS');
export const fetchUsersFailure = createAction('USERS_FETCH_FAILURE');

export const fetchUsers = url => async dispatch => {
	dispatch(fetchUsersRequest());
	try {
		const response = await axios.get(url);
		dispatch(fetchUsersSuccess(response.data));
	} catch (e) {
		dispatch(fetchUsersFailure());
		console.log(e);
		throw e;
	}
};
