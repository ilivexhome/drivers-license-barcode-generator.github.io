import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
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
        <label>{this.props.label}</label>
        <input onChange={this._handleChange} type="text" className="form-control" />
      </div>
    );
  }
}
