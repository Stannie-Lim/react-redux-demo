import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from './Users';

import { getUsers } from './store/store';

class App extends Component {
	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		return <Users prop1='helo' prop2={5} prop4={false} />;
	}
}

// you can think of "dispatch" as "setState"
// params: dispatch
// return: object
const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => dispatch(getUsers()),
	};
};

export default connect(null, mapDispatchToProps)(App);
