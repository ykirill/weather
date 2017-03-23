import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './containers/Root';

import './index.html';

render(
  <Root store={ store }/>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = Root;
    render(
      <NewRoot store={store}/>,
      document.getElementById('app'),
    );
  });
}
