// Button.jsx
import React from "react";
import "../css/Button.css";

function Button({ text, onClick, type = "button", disabled = false }) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
