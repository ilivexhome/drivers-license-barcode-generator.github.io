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
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" onChange={this._handleChange} type="text" className="form-control" />
      </div>
    );
  }
}
