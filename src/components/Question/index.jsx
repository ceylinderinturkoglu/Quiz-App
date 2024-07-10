import React, { useEffect, useState } from "react";

const Question = ({ questions }) => {
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(2);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const pointsPerQuestion = 100 / questions.length;

  const handleClick = (selectedAnswer) => {
    if (selectedAnswer === question.correct_answer) {
      setScore((prevScore) => prevScore + pointsPerQuestion);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    } else {
      setIsCompleted(true);
      console.log(
        `Final Score: ${
          score +
          (selectedAnswer === question.correct_answer ? pointsPerQuestion : 0)
        }`
      );
    }
  };

  useEffect(() => {
    if (isCompleted) return;

    setQuestion(questions[questionIndex]);
    setTimer(2);

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
    <div>
      <p>
        {questionIndex + 1} / {questions.length} - {question.question}
      </p>
      <p>Zaman: {timer} saniye</p>
      <p>Doğru Cevap: {question.correct_answer}</p>
      <ul>
        {question.answers?.map((answer, index) => (
          <li key={index} onClick={() => handleClick(answer)}>
            {answer}
          </li>
        ))}
      </ul>
      {isCompleted && <p>Final Score: {score}</p>}
    </div>
  );
};

export default Question;
