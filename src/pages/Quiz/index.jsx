import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Question from "../../components/Question";
import Button from "../../components/Button";
import "./style.css";

const Quiz = () => {
  const navigate = useNavigate();
  const { isStart, difficulty, score, isCompleted } = useSelector(
    (state) => state.quiz
  );
  const { questions, loading, error } = useQuestions(difficulty);

  const handleReset = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!isStart) {
      handleReset();
    }
  }, [isStart, navigate]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>Bir hata oluştu: {error.message}</p>;
  }

  return (
    <main className="container">
      {!isCompleted ? (
        questions && questions.length > 0 ? (
          <Question questions={questions} />
        ) : (
          <p>Soru bulunamadı.</p>
        )
      ) : (
        <div className="result">
          <span className="result__score">{score.toFixed(2)} puan</span>
          <Button text={"Tekrar Dene"} onClick={handleReset} />
        </div>
      )}
    </main>
  );
};

export default Quiz;
