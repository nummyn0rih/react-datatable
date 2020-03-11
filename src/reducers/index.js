import { combineReducers } from 'redux';
import users from './users';
import usersFetchingState from './usersFetchingState';

export default combineReducers({
	users,
	usersFetchingState,
});
