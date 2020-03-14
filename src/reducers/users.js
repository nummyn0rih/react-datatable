import { handleActions } from 'redux-actions';
import uniqueId from 'lodash.uniqueid';
import * as actions from '../actions';

const users = handleActions(
	{
		[actions.fetchUsersSuccess](state, { payload: { results } }) {
			const { byId, allIds } = state;
			const users = results.map(user => ({
				...user,
				id: user.id.value || uniqueId(),
			}));
			const ids = users.map(user => user.id);
			const newAllIds = [...allIds, ...ids];
			const newById = users.reduce(
				(acc, user) => ({ ...acc, [user.id]: user }),
				{}
			);
			return {
				byId: { ...byId, ...newById },
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
					if (value.includes(search.trim().toLowerCase())) {
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
		[actions.sortUsers](state, { payload: { type } }) {
			console.log(type);
			return state;
		},
	},
	{
		byId: {},
		allIds: [],
		modifiedIds: [],
	}
);

export default users;
