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
	},
	{
		columns: [
			{ name: 'avatar', title: '', direction: '' },
			{ name: 'firstName', title: 'Имя', direction: 'asc' },
			{ name: 'lastName', title: 'Фамилия', direction: 'asc' },
			{ name: 'email', title: 'Email', direction: 'asc' },
			{ name: 'phone', title: 'Телефон', direction: 'asc' },
		],
		activeDirection: 'none',
	}
);

export default uiState;
