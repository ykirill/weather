import React, { PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const Form = ({ onSubmit }) => (
  <div>
    <form action="getName" onSubmit={e => onSubmit(e)}>
      <FormGroup>
        <ControlLabel htmlFor="city">
          Enter a city name:
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
