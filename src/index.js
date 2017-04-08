import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import configureStore from './store';
import Root from './containers/Root';
import rootSaga from './sagas';

import './index.html';

const store = configureStore({});
store.runSaga(rootSaga);

render(
  <Root store={ store }/>,
  document.getElementById('app'),
);
