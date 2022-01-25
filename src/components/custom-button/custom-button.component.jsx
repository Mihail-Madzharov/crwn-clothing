import React from "react";
import "./custom-button.style.scss";
export const CustomButton = ({
  children,
  inverted,
  onCLickHandler,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
