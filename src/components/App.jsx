import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Table from './Table';
import '../App.css';

export class App extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<Table />
			</Fragment>
		);
	}
}

export default connect(null, null)(App);
