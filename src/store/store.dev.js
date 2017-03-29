import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import DevTools from '../containers/DevTools';
import reducers from '../reducers';

const rootReducer = combineReducers(Object.assign({}, reducers)); // wtf?

const loggerMiddlware = createLogger({
  level: 'info',
  collapsed: false,
});

const enhancer = compose(
  applyMiddleware(thunk, loggerMiddlware),
  DevTools.instrument(),
);

const persistedState = localStorage.getItem('WeatherAppState') ?
  JSON.parse(localStorage.getItem('WeatherAppState')) :
  {};

const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(() => {
  localStorage.setItem('WeatherAppState', JSON.stringify(store.getState()));
});

export default store;
