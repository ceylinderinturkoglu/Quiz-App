import React from "react";
import "./style.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn common-style" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
