import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FirstNameInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  _handleChange = (event) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event.target.value);
    }
  }

  render () {
    return (
      <div>
        <label>First Name</label>
        <input onChange={this._handleChange} type="text" className="" />

      </div>
    );
  }
}
