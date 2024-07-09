import React from "react";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import { useSelector } from "react-redux";

const Home = () => {
  const { start } = useSelector((state) => state.quiz);
  console.log(start);
  return (
    <div>
      <Dropdown />
      <Button text={"Quize Başla"} />
    </div>
  );
};

export default Home;
