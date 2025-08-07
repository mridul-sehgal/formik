import { ErrorMessage, Field } from "formik";
import React from "react";

function InputComponent({ label, name, type = "text" }) {
  return (
    <div className="input-box">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field className="input" name={name} type={type} />
      <br />
      <ErrorMessage className="error" name={name} component="div" />
      <br />
    </div>
  );
}

export default InputComponent;
