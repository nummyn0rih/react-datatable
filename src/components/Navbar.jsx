import React, { Component } from 'react';
import SearchForm from './SearchForm';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<SearchForm />
			</nav>
		);
	}
}

export default Navbar;
