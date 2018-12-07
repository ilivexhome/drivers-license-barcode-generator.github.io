import React from "react";
import PropTypes from "prop-types";
import NameInput from "./name-input";

const FirstNameInput = ({ onChange }) => (
  <NameInput label={"First Name"} onChange={onChange} />
);

FirstNameInput.propTypes = {
  onChange: PropTypes.func
};

export default FirstNameInput;
