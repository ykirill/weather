import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import store from './store';
import Root from './containers/Root';

import './index.html';

render(
  <Provider store={{}}>
    <Root/>
  </Provider>,
  document.getElementById('app'),
);
