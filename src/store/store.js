import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducer = combineReducers({});

const store = createStore(
	reducer,
	applyMiddleware(thunks, createLogger({ collapsed: true }))
);

export default store;

export {};
