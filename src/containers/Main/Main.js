import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Grid, Col } from 'react-bootstrap';

import {
  api, location,
} from '../../actions/index';

import Navigation from './components/Navigation';
import Form from './components/Form';
import Forecast from './components/Forecast';

import { isLocationValid } from '../../services/loacationServices';

class Main extends Component {
  componentWillMount() {
    // TODO predicate is not semantic
    if (!isLocationValid(this.props.userLocation)) {
      this.props.dispatch(location.request());
    }
  }
  componentDidMount() {
    // this.props.dispatch(getWeatherByUserCoords(this.props.userLocation));
  }
  onSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.text;
    this.props.dispatch(api.request(input.value));
    input.value = '';
  }
  render() {
    const { forecast } = this.props;
    return (
      <div>
        <Navigation/>
        <Grid>
          <Col xs={12} md={8}>
            <PageHeader>City</PageHeader>
            <Form onSubmit={e => this.onSubmit(e)}/>
            { Object.keys(forecast).length > 0 ?
              <Forecast
                forecast={forecast}
                onSaveClick={() => {}}
              /> : ''}
          </Col>
          <Col xs={12} md={4}>
{/*
            <PageHeader>Saved cities <small>({Object.keys(saved).length})</small></PageHeader>
*/}
            <Grid fluid={true}>
            </Grid>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default connect(state => ({
  forecast: state.weather.forecast,
  userLocation: state.userLocation,
  errors: state.errors,
}))(Main);
