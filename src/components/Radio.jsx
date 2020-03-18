import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLoadingMethod } from '../actions';

export class Radio extends Component {
	handleChangeMethod = type => () => {
		const { changeLoadingMethod } = this.props;
		changeLoadingMethod({ type });
	};

	render() {
		const { loadingMethodState } = this.props;
		const randomuser = loadingMethodState === 'randomuser';
		const faker = !randomuser;

		return (
			<div className="radio">
				<div class="custom-control custom-radio">
					<input
						onChange={this.handleChangeMethod('randomuser')}
						type="radio"
						class="custom-control-input"
						id="randomuser"
						name="radio-stacked"
						checked={randomuser}
					/>
					<label class="custom-control-label" for="randomuser">
						randomuser.me
					</label>
				</div>
				<div class="custom-control custom-radio">
					<input
						onChange={this.handleChangeMethod('faker')}
						type="radio"
						class="custom-control-input"
						id="faker"
						name="radio-stacked"
						checked={faker}
					/>
					<label class="custom-control-label" for="faker">
						faker
					</label>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ loadingMethodState }) => ({ loadingMethodState });

const mapDispatchToProps = { changeLoadingMethod };

export default connect(mapStateToProps, mapDispatchToProps)(Radio);
