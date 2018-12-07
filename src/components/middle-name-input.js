import React from "react";
import PropTypes from "prop-types";
import NameInput from "./name-input";

const MiddleNameInput = ({ onChange }) => (
  <NameInput label={"Middle Name"} onChange={onChange} />
);

MiddleNameInput.propTypes = {
  onChange: PropTypes.func
};

export default MiddleNameInput;
