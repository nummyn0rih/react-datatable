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
			const newAllIds = [...ids, ...allIds];
			return {
				byId: { ...byId, ...users },
				allIds: newAllIds,
				modifiedIds: newAllIds,
			};
		},
		[actions.searchUsers](state, { payload: { search } }) {
			const { byId, allIds } = state;
			if (!search) {
				return { ...state, modifiedIds: allIds };
			}

			const filtredUsers = allIds.filter(id => {
				const values = Object.values(byId[id]).map(i => i.toString().toLowerCase());
				for (const value of values) {
					if (value.includes(search.toLowerCase())) {
						return true;
					}
				}
				return false;
			});
			return { ...state, modifiedIds: filtredUsers };
		},
		[actions.cleanSearch](state) {
			const { allIds } = state;
			return { ...state, modifiedIds: allIds };
		},
	},
	{
		byId: {},
		allIds: [],
		modifiedIds: [],
	}
);

export default users;
