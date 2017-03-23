import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import Main from '../Main/Main';

export default class extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Main/>
        </div>
      </Provider>
    );
  }
}
