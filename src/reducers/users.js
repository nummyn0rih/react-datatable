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
				firstName: user.name.first,
				lastName: user.name.last,
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
		[actions.sortUsers](state, { payload: { type, direction } }) {
			const { allIds, byId } = state;
			switch (direction) {
				case 'asc': {
					const sortedIds = [...allIds].sort((a, b) => {
						if (byId[a][type] === byId[b][type]) return 0;
						return byId[a][type] > byId[b][type] ? 1 : -1;
					});
					return {
						...state,
						allIds: sortedIds,
						modifiedIds: sortedIds,
					};
				}
				case 'desc': {
					const sortedIds = [...allIds].sort((a, b) => {
						if (byId[a][type] === byId[b][type]) return 0;
						return byId[a][type] > byId[b][type] ? -1 : 1;
					});
					return {
						...state,
						allIds: sortedIds,
						modifiedIds: sortedIds,
					};
				}
				default:
					throw new Error(`Unknown direction state: '${direction}'!`);
			}
		},
		[actions.changeTableCellValue](
			state,
			{ payload: { userId, userPropType, contextMenu } }
		) {
			const { byId } = state;
			const updatedUser = { ...byId[userId], [userPropType]: contextMenu };
			const newById = { ...byId, [userId]: updatedUser };
			return { ...state, byId: newById };
		},
		[actions.removeTableCellValue](state, { payload: { userId, userPropType } }) {
			const { byId } = state;
			const updatedUser = { ...byId[userId], [userPropType]: '' };
			const newById = { ...byId, [userId]: updatedUser };
			return { ...state, byId: newById };
		},
	},
	{
		byId: {},
		allIds: [],
		modifiedIds: [],
	}
);

export default users;
