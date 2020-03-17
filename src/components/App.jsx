import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import CheckForm from './CheckForm';
import Table from './Table';
import '../App.css';

export class App extends Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<CheckForm />
				<Table />
			</div>
		);
	}
}

export default connect(null, null)(App);
