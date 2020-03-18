import { combineReducers } from 'redux';
import { reducer as formReduser } from 'redux-form';
import users from './users';
import usersFetchingState from './usersFetchingState';
import uiState from './uiState';
import contexMenuState from './contexMenuState';

export default combineReducers({
	users,
	usersFetchingState,
	uiState,
	contexMenuState,
	form: formReduser,
});
