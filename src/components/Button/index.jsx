import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { setStart } from "../../store/quizSlice";

const Button = ({ text }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setStart(true));
  };
  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
