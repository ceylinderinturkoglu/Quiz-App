import React from "react";
import "./style.css";
import { setDifficulty } from "../../store/quizSlice";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const dispatch = useDispatch();
  const { difficulty } = useSelector((state) => state.quiz);
  const handleChange = (event) => {
    dispatch(setDifficulty(event.target.value));
  };
  return (
    <div className="select">
      <select onChange={handleChange} defaultValue={difficulty}>
        <option value="Kolay">Kolay</option>
        <option value="Orta">Orta</option>
        <option value="Zor">Zor</option>
      </select>
    </div>
  );
};

export default Dropdown;
