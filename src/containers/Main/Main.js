import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWeather } from '../../actions/actions';
import Form from '../../components/Form/Form';

class Main extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Write a city name</h1>
        <Form onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.text;
          dispatch(getWeather(input.value));
          input.value = '';
        }}/>
        <h2>It's not enough</h2>
      </div>
    );
  }
}

export default connect(state => ({
  cityName: state.cityName,
}))(Main);
