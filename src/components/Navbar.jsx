import React, { Component } from 'react';
import SearchForm from './SearchForm';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<span className="navbar-brand">React + redux datatable</span>
				<SearchForm />
			</nav>
		);
	}
}

export default Navbar;
