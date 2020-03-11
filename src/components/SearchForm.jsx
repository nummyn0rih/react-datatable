import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { searchUsers, cleanSearch } from '../actions';

class SearchForm extends Component {
	handleSearchUsers = value => {
		const { searchUsers, reset } = this.props;
		searchUsers({ ...value });
		reset();
	};

	handleClearSearch = () => {
		const { cleanSearch, reset } = this.props;
		cleanSearch();
		reset();
	};

	render() {
		const { handleSubmit, pristine, submitting } = this.props;

		return (
			<form
				onSubmit={handleSubmit(this.handleSearchUsers)}
				className="form-inline"
			>
				<Field
					className="form-control mr-sm-2"
					name="search"
					component="input"
					type="text"
					placeholder="Введите текст"
				/>
				<div className="btn-group" role="group">
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
						disabled={pristine || submitting}
					>
						Поиск
					</button>
					<button
						onClick={this.handleClearSearch}
						className="btn btn-outline-success my-2 my-sm-0"
						type="button"
					>
						Сбросить
					</button>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = {
	searchUsers,
	cleanSearch,
};

const ConnectedSearchForm = connect(null, mapDispatchToProps)(SearchForm);
export default reduxForm({
	form: 'searchForm',
})(ConnectedSearchForm);
