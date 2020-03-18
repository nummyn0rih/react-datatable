import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Radio from './Radio';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				{/* <span className="navbar-brand">React + redux datatable</span> */}
				<Radio />
				<SearchForm />
			</nav>
		);
	}
}

export default Navbar;
