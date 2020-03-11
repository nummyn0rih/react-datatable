import React, { Fragment } from "react";
import { connect } from "react-redux";
// import * as actions from '../actions';
import "../App.css";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

class App extends React.Component {
  render() {
    return <Fragment>Init app</Fragment>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
