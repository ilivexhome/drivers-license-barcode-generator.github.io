import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class EyeColorInput extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string,
  }

  _renderEyeColorOptions() {
    return this.props.options.map((option, index) => {
      return (
        <div key={index}>{option}</div>
      );
    });
  }

  render() {
    return (
      <div className="form-group">
        <label>Eye Color</label>
        {this._renderEyeColorOptions()}
      </div>
    );
  }
}
