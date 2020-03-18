import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const loadingMethodState = handleActions(
	{
		[actions.changeLoadingMethod](state, { payload: { type } }) {
			return type;
		},
	},
	'randomuser'
);

export default loadingMethodState;
