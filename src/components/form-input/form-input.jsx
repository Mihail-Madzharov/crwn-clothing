import React from "react";
import "./form-input.scss";

export const FormInput = ({ handleChange, label, otherProps, value }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};
