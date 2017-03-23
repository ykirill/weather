import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import DevTools from '../containers/DevTools';
import reducers from '../reducers';

const initialState = {};
const rootReducer = combineReducers(Object.assign({}, reducers)); // wtf?

const loggerMiddlware = createLogger({
  level: 'info',
  collapsed: false,
});

const enhancer = compose(
  applyMiddleware(thunk, loggerMiddlware),
  DevTools.instrument(),
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;
