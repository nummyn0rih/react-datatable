import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const contexMenuState = handleActions(
	{
		[actions.displayContextMenu](state, { payload }) {
			return { ...state, ...payload };
		},
	},
	{
		visible: false,
		userId: '',
		userPropType: '',
	}
);

export default contexMenuState;
