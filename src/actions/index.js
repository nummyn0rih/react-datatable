import axios from 'axios';
import { createAction } from 'redux-actions';

export const sortUsers = createAction('USERS_SORT');
export const searchUsers = createAction('USERS_SEARCH');
export const cleanSearch = createAction('USERS_SEARCH_CLEAN');
export const changeDisplayCheck = createAction('CHECK_DISPLAY_CHANGE');
export const dragColumn = createAction('COLUMN_DRAG');

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
		// eslint-disable-next-line no-console
		console.error(e);
		throw e;
	}
};
