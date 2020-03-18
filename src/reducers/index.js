import { combineReducers } from 'redux';
import { reducer as formReduser } from 'redux-form';
import users from './users';
import loadingMethodState from './loadingMethodState';
import usersFetchingState from './usersFetchingState';
import uiState from './uiState';

export default combineReducers({
	users,
	loadingMethodState,
	usersFetchingState,
	uiState,
	form: formReduser,
});
