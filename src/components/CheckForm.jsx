import React, { Component } from 'react';
import Switch from './Switch';
import { connect } from 'react-redux';
import { changeDisplayCheck } from '../actions';

export class CheckForm extends Component {
	handleCheck = name => () => {
		const { changeDisplayCheck } = this.props;
		changeDisplayCheck({ name });
	};

	render() {
		const { columns } = this.props;
		return (
			<div className="check-form">
				{columns.map(col => (
					<Switch onChange={this.handleCheck(col.name)} key={col.name} {...col} />
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ uiState: { columns } }) => ({ columns });

const mapDispatchToProps = { changeDisplayCheck };

export default connect(mapStateToProps, mapDispatchToProps)(CheckForm);
