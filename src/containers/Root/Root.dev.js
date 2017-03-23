import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import DevTools from '../DevTools';

import Main from '../Main/Main';

class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Main/>
          <DevTools/>
        </div>
      </Provider>
    );
  }
}

export default Root;
