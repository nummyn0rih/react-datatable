import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import CheckForm from './CheckForm';
import Table from './Table';
import '../App.css';

export class App extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<CheckForm />
				<Table />
			</Fragment>
		);
	}
}

export default connect(null, null)(App);
