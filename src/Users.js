import React from 'react';
import { connect } from 'react-redux';

const Users = (props) => {
	console.log(props);
	return null;
};

// params: the state of the store
// return: object
const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps)(Users);
