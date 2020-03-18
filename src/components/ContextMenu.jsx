import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {
	displayContextMenu,
	changeTableCellValue,
	removeTableCellValue,
} from '../actions';

export class ContextMenu extends Component {
	handleContextMenu = event => {
		if (!event.target.closest('tbody')) return;
		if (event.target.closest('td').dataset.name === 'avatar') return;

		event.preventDefault();
		const userId = event.target.closest('tr').dataset.id;
		const userPropType = event.target.closest('td').dataset.name;
		const { displayContextMenu } = this.props;
		displayContextMenu({ visible: true, userId, userPropType });

		const clickX = event.clientX;
		const clickY = event.clientY;
		const screenW = window.innerWidth;
		const screenH = window.innerHeight;
		const rootW = this.root.offsetWidth;
		const rootH = this.root.offsetHeight;

		const right = screenW - clickX > rootW;
		const left = !right;
		const top = screenH - clickY > rootH;
		const bottom = !top;

		if (right) this.root.style.left = `${clickX + 5}px`;
		if (left) this.root.style.left = `${clickX - rootW - 5}px`;
		if (top) this.root.style.top = `${clickY + 5}px`;
		if (bottom) this.root.style.top = `${clickY - rootH - 5}px`;
	};

	handleClick = event => {
		if (!event.target.closest('tbody')) return;
		const {
			contexMenuState: { visible },
		} = this.props;
		if (!visible) return;
		const wasOutside = !this.root.contains(event.target);

		if (wasOutside && visible) {
			const { displayContextMenu, reset } = this.props;
			displayContextMenu({ visible: false });
			reset();
		}
	};

	handleScroll = () => {
		const {
			contexMenuState: { visible },
		} = this.props;

		if (visible) {
			const { displayContextMenu, reset } = this.props;
			displayContextMenu({ visible: false });
			reset();
		}
	};

	handleChangeValue = value => {
		const {
			reset,
			displayContextMenu,
			changeTableCellValue,
			contexMenuState: { userId, userPropType },
		} = this.props;
		changeTableCellValue({ ...value, userId, userPropType });
		displayContextMenu({ visible: false });
		reset();
	};

	handleRemoveValue = () => {
		const {
			reset,
			displayContextMenu,
			removeTableCellValue,
			contexMenuState: { userId, userPropType },
		} = this.props;
		removeTableCellValue({ userId, userPropType });
		displayContextMenu({ visible: false });
		reset();
	};

	componentDidMount = () => {
		document.addEventListener('contextmenu', this.handleContextMenu);
		document.addEventListener('click', this.handleClick);
		document.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount = () => {
		document.removeEventListener('contextmenu', this.handleContextMenu);
		document.removeEventListener('click', this.handleClick);
		document.removeEventListener('scroll', this.handleScroll);
	};

	render() {
		const {
			contexMenuState: { visible },
			handleSubmit,
		} = this.props;

		return (
			(visible || null) && (
				<div
					ref={ref => {
						this.root = ref;
					}}
					className="contextMenu"
				>
					<div className="card col-12">
						<form onSubmit={handleSubmit(this.handleChangeValue)}>
							<div className="">
								<label htmlFor="contextMenu">Изменить значение ячейки</label>
								<Field
									className="form-control"
									name="contextMenu"
									component="input"
									type="text"
									id="contextMenu"
									placeholder="Введите значение"
								/>
							</div>
							<div className="btn-wrap">
								<button
									onClick={handleSubmit(this.handleChangeValue)}
									type="button"
									className="btn btn-secondary"
								>
									Обновить
								</button>
								<button
									onClick={this.handleRemoveValue}
									type="button"
									className="btn btn-secondary"
								>
									Удалить
								</button>
							</div>
						</form>
					</div>
				</div>
			)
		);
	}
}

const mapStateToProps = contexMenuState => contexMenuState;

const mapDispatchToProps = {
	displayContextMenu,
	changeTableCellValue,
	removeTableCellValue,
};

const ConnectedContextMenu = connect(
	mapStateToProps,
	mapDispatchToProps
)(ContextMenu);
export default reduxForm({
	form: 'contextForm',
})(ConnectedContextMenu);
