import React, { Component, PropTypes } from 'react';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <form action="getName" onSubmit={e => onSubmit(e)}>
          <input type="text" name="text"/>
          <input type="submit" value={'send'}/>
        </form>
      </div>
    );
  }
}

export default Form;
