import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeightInput extends Component {
  static propTypes = {
    value: PropTypes.number,
    unit: PropTypes.string,
    unitOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  _renderUnitOptions() {
    return (
      <select onChange={this._handleChange}>
        {this.props.unitOptions.map((option, index) => {
          return (
            <option key={index}>{option}</option>
          )
        })}
      </select>
    );
  }

  render() {
    return (
      <div>
        <label>Height</label>
        <input type="text" />

        {this._renderUnitOptions()}
      </div>
    )
  }
}
