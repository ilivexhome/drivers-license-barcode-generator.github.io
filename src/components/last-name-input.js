import React from 'react';
import PropTypes from 'prop-types';
import NameInput from './name-input'

const LastNameInput = ({ onChange }) => <NameInput
  label={'Last Name'}
  onChange={onChange}
/>

LastNameInput.propTypes = {
  onChange: PropTypes.func
}

export default LastNameInput
