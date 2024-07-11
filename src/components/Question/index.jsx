import React, { useEffect, useState } from "react";
import { incrementScore, setIsCompleted } from "../../store/quizSlice";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const Question = ({ questions }) => {
  const dispatch = useDispatch();
  const { isCompleted } = useSelector((state) => state.quiz);

  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10);
  const pointsPerQuestion = 100 / questions.length;

  const handleClick = (selectedAnswer) => {
    selectedAnswer === question.correct_answer &&
      dispatch(incrementScore(pointsPerQuestion));

    questionIndex < questions.length - 1
      ? setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1)
      : dispatch(setIsCompleted(true));
  };

  useEffect(() => {
    if (isCompleted) return;

    setQuestion(questions[questionIndex]);
    setTimer(10);

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          handleClick("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [questionIndex, questions, isCompleted]);

  return (
    <div className="question">
      <div className="question__head">
        <span className="question__timer">{timer} saniye</span>
        <span className="question__count">
          {questionIndex + 1} / {questions.length}
        </span>
      </div>
      <div className="question__body">
        <span className="question__content">{question.question}</span>
        <ul className="question__answers">
          {question.answers?.map((answer, index) => (
            <li key={index} onClick={() => handleClick(answer)}>
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question;
