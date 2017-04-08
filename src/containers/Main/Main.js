import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Grid, Col } from 'react-bootstrap';

import {
  api,
} from '../../actions/index';
import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form';
import Current from '../../components/Current/Current';

class Main extends Component {
  componentWillMount() {
    // TODO App should't request user location every time
    // this.props.dispatch(getUserLocation());
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
    const { current, dispatch } = this.props;
    return (
      <div>
        <Navigation/>
        <Grid>
          <Col xs={12} md={8}>
            <PageHeader>City</PageHeader>
            <Form onSubmit={e => this.onSubmit(e)}/>
            { Object.keys(current).length > 0 ?
              <Current
                city={current}
                onRefreshClick={city => dispatch(api.request(city))}
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
  current: state.cities.current,
  saved: state.cities.saved,
  userLocation: state.userLocation,
}))(Main);
