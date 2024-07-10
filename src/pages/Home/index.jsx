import React from "react";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setIsStart, setDifficulty } from "../../store/quizSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { difficulty } = useSelector((state) => state.quiz);

  const handleClick = () => {
    dispatch(setIsStart(true));
    navigate("/quiz");
  };

  const handleChange = (event) => {
    dispatch(setDifficulty(event.target.value));
  };

  return (
    <div>
      <Dropdown onChange={handleChange} defaultValue={difficulty} />
      <Button text={"Quize Başla"} onClick={handleClick} />
    </div>
  );
};

export default Home;
