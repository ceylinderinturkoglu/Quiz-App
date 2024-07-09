import React from "react";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setStart } from "../../store/quizSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { start } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setStart(true));
    navigate("/quiz");
  };

  return (
    <div>
      <Dropdown />
      <Button text={"Quize Başla"} onClick={handleClick} />
    </div>
  );
};

export default Home;
