import React, { Component, PropTypes } from 'react';
import { Label } from 'react-bootstrap';

import s from './city.pcss';

export default class City extends Component {
  static propTypes = {
    city: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  render() {
    const { city, onClick } = this.props;
    return (
      <div className={s.tag}>
        <Label
          onClick={() => onClick(city.name)}
          bsStyle="primary"
        >
          {city.name}
        </Label>
      </div>
    );
  }
}
