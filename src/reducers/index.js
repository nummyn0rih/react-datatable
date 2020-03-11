import { combineReducers } from 'redux';
import { reducer as formReduser } from 'redux-form';
import users from './users';
import usersFetchingState from './usersFetchingState';

export default combineReducers({
	users,
	usersFetchingState,
	form: formReduser,
});
