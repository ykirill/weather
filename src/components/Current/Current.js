import React, { Component, PropTypes } from 'react';
import { Panel, Media, Table, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';

import s from './current.pcss';

export default class Current extends Component {
  static propTypes = {
    city: PropTypes.object.isRequired,
    onRefreshClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
  };
  convertToMmHg(pressure) {
    return Math.round((pressure / 1000) * 750.06);
  }
  convertToCelsius(temperature) {
    return Math.round((temperature - 273.15));
  }
  render() {
    const { city, onRefreshClick, onSaveClick } = this.props;
    const imgUrl = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
    const header = (
      <Media>
        <Media.Left align="top">
          <img width={50} height={50} src={imgUrl} alt="Image"/>
        </Media.Left>
        <Media.Body className={s.middle}>
          <Media.Heading>
            {city.name}, {city.sys.country}

            <ButtonGroup className={s.head_btns}>
              <Button onClick={() => onSaveClick(city.name)}>
                <Glyphicon glyph="floppy-disk"/>
              </Button>
              <Button onClick={() => onRefreshClick(city.name)}>
                <Glyphicon glyph="refresh"/>
              </Button>
            </ButtonGroup>
          </Media.Heading>
        </Media.Body>
      </Media>
    );
    return (
      <Panel header={header}>
        <Table responsive>
          <tbody className={s.table}>
            <tr>
              <td colSpan="2">Temperature:</td>
              <td>{this.convertToCelsius(city.main.temp)}<sup>o</sup> C</td>
            </tr>
            <tr>
              <td colSpan="2">Pressure:</td>
              <td>{this.convertToMmHg(city.main.pressure)} mm Hg</td>
            </tr>
            <tr>
              <td colSpan="2">Humidity:</td>
              <td>{city.main.humidity} %</td>
            </tr>
            <tr>
              <td colSpan="2">Cloudiness:</td>
              <td>{city.clouds.all} %</td>
            </tr>
            <tr>
              <td>Wind:</td>
              <td>{Math.round(city.wind.speed)} m/s</td>
              <td>{Math.round(city.wind.deg)}<sup>o</sup></td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    );
  }
}
