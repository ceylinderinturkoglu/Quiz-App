import React from "react";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsStart,
  setDifficulty,
  resetScore,
  setIsCompleted,
} from "../../store/quizSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

  useEffect(() => {
    dispatch(resetScore());
    dispatch(setIsCompleted(false));
    dispatch(setIsStart(false));
  }, []);

  return (
    <main className="container">
      <h1>Quizingo</h1>
      <p>React hakkında quizler.</p>
      <div className="controls">
        <Dropdown onChange={handleChange} defaultValue={difficulty} />
        <Button text={"Quize Başla"} onClick={handleClick} />
      </div>
    </main>
  );
};

export default Home;
