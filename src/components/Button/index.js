import React from "react";
import "./Button.css";

const Button = ({ onClick, children, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {children}
    </button>
  );
};

export default Button;
