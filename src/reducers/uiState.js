import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const uiState = handleActions(
	{
		[actions.sortUsers](state, { payload: { type } }) {
			const { columns } = state;
			const newColumns = columns.map(col =>
				col.name === type
					? { ...col, direction: col.direction === 'asc' ? 'desc' : 'asc' }
					: col
			);
			return { columns: newColumns, activeDirection: type };
		},
		[actions.changeDisplayCheck](state, { payload: { name } }) {
			const { columns } = state;
			const newColumns = columns.map(col =>
				col.name === name ? { ...col, display: !col.display } : col
			);
			return { ...state, columns: newColumns };
		},
		[actions.dragColumn](state, { payload: { items } }) {
			return { ...state, columns: items };
		},
	},
	{
		columns: [
			{ name: 'avatar', title: 'Аватар', direction: '', display: true },
			{ name: 'firstName', title: 'Имя', direction: 'asc', display: true },
			{ name: 'lastName', title: 'Фамилия', direction: 'asc', display: true },
			{ name: 'email', title: 'Email', direction: 'asc', display: true },
			{ name: 'phone', title: 'Телефон', direction: 'asc', display: true },
		],
		activeDirection: 'none',
	}
);

export default uiState;
