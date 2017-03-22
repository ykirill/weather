import React, { Component, PropTypes } from 'react';

export default class extends Component {
  render() {
    const env = process.env.NODE_ENV;
    return (
      <div>
        <h1>This environment is {env}</h1>
      </div>
    );
  }
}
