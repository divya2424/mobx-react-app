import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import "./InputType.scss";

const InputText = (props) => {
  return (
    <Form.Group>
      {props.label ? <Form.Label>{props.label}</Form.Label> : null}
      <Form.Control
        type={props.type}
        className={props.class}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        maxLength={props.maxLength}
        disabled={props.disabled}
        onKeyPress={props.onKeyPress}
      />
      {props.error ? (
        <div className="error-message">{props.errorMessage}</div>
      ) : null}
    </Form.Group>
  );
};

InputField.defaultProps = {
  label: "",
  type: "text",
  class: "",
  name: "",
  placeholder: "",
  value: "",
  maxLength: 10000,
  disabled: false,
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  class: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
};
export default InputText;
