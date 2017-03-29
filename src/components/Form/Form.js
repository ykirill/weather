import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <form action="getName" onSubmit={e => onSubmit(e)}>
          <FormGroup>
            <ControlLabel htmlFor="city">
              Write a city name:
            </ControlLabel>
            <InputGroup>
              <FormControl id="city" type="text" name="text"/>

              <InputGroup.Button>
                <FormControl type="submit" value={'Send'}/>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}
