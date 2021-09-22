import React from "react";
import PropsTypes from "prop-types";

function TextInput(props) {
  let wrapperClass = "form-group";

  if (props.error.length > 0) wrapperClass += " has-error";

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        className="form-control"
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
      <div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
}

TextInput.propsTypes = {
  id: PropsTypes.number.isRequired,
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string,
  error: PropsTypes.string,
  label: PropsTypes.string.isRequired,
  onChange: PropsTypes.func.isRequired,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
