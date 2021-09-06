import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';

// this is the reducer
// IT DETERMINES YOUR STATE
// whatever you return from here IS the state
const users = (state = [], action) => {
	switch (action.type) {
		case 'SET_USERS':
			state = action.users;
			break;
	}

	return state;
};

// holds your state
const reducer = combineReducers({
	users,
});

const store = createStore(
	reducer,
	applyMiddleware(thunks, createLogger({ collapsed: true }))
);

// a thunk is basically a function that you call in order to do something
// makes an axios call to /api/users
// thunk
const getUsers = () => {
	return async (dispatch) => {
		// this is where you get your data
		const { data: users } = await axios.get('/api/users');

		// action creator
		const action = {
			type: 'SET_USERS',
			users,
		};

		dispatch(action);
	};
};

export default store;

export { getUsers };

window.store = store;
