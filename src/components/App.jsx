import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import '../App.css';

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = {};

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Table />
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
