import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const rootReducer = combineReducers(Object.assign({}, reducers));

const enhancer = compose(
  applyMiddleware(thunk),
);

const persistedState = localStorage.getItem('WeatherAppState') ?
  JSON.parse(localStorage.getItem('WeatherAppState')) :
  {};

const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(() => {
  localStorage.setItem('WeatherAppState', JSON.stringify(store.getState()));
});

export default store;
