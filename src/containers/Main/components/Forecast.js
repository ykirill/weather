import React, { PropTypes } from 'react';

const Forecast = ({ forecast }) => (
  <div>
    <h1>Here is forecast!</h1>
    <p>{ `${forecast}` }</p>
  </div>
);

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default Forecast;
