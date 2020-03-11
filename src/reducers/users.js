import { handleActions } from 'redux-actions';
import uniq from 'lodash.uniq';
import * as actions from '../actions';

const users = handleActions(
	{
		[actions.fetchUsersSuccess](state, { payload }) {
			const { byId, allIds } = state;
			const ids = uniq(payload.map(user => user.id));
			const users = payload.reduce(
				(acc, user) => ({ ...acc, [user.id]: user }),
				{}
			);
			return { byId: { ...byId, ...users }, allIds: [...allIds, ...ids] };
		},
	},
	{
		byId: {},
		allIds: [],
	}
);

export default users;
