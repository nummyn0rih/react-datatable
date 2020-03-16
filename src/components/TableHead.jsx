import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import IconSort from './IconSort';
import { sortUsers, dragColumn } from '../actions';
import IconFace from './IconFace';

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
	userSelect: 'none',
	background: isDragging ? '#2C8143' : '#343A40',
	...draggableStyle,
});

const getListStyle = isDraggingOver => ({
	background: isDraggingOver ? '#3F444A' : '#454D55',
});

export class TableHead extends Component {
	handleSortUsers = type => () => {
		if (type === 'avatar') return;
		const { sortUsers, columns } = this.props;
		const { direction } = columns.filter(col => col.name === type)[0];
		sortUsers({ type, direction });
	};

	onDragEnd = result => {
		if (!result.destination) {
			return;
		}

		const { columns, dragColumn } = this.props;
		const items = reorder(columns, result.source.index, result.destination.index);
		dragColumn({ items });
	};

	render() {
		const { columns, activeDirection } = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Droppable droppableId="droppable" direction="horizontal">
					{(provided, snapshot) => (
						<tr
							ref={provided.innerRef}
							{...provided.droppableProps}
							style={getListStyle(snapshot.isDraggingOver)}
						>
							{columns.map((col, index) => (
								<Draggable key={col.name} draggableId={col.name} index={index}>
									{(provided, snapshot) =>
										col.display && (
											<th
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												style={getItemStyle(
													snapshot.isDragging,
													provided.draggableProps.style
												)}
												onClick={this.handleSortUsers(col.name)}
												scope="col"
												key={col.name}
											>
												{col.name === activeDirection && (
													<IconSort direction={col.direction} />
												)}
												{col.name === 'avatar' ? <IconFace /> : col.title}
											</th>
										)
									}
								</Draggable>
							))}
							{provided.placeholder}
						</tr>
					)}
				</Droppable>
			</DragDropContext>
		);
	}
}

const mapStateToProps = ({ uiState: { columns, activeDirection } }) => ({
	columns,
	activeDirection,
});

const mapDispatchToProps = {
	sortUsers,
	dragColumn,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHead);
