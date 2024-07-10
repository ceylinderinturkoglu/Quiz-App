import React, { useEffect } from "react";
import Question from "../../components/Question";
import { useSelector } from "react-redux";
import useQuestions from "../../hooks/useQuestions";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const { isStart, difficulty } = useSelector((state) => state.quiz);
  const { questions, loading, error } = useQuestions(difficulty);

  useEffect(() => {
    if (!isStart) {
      navigate("/");
    }
  }, [isStart, navigate]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>Bir hata oluştu: {error.message}</p>;
  }

  return (
    <div>
      {questions && questions.length > 0 ? (
        <Question questions={questions} />
      ) : (
        <p>Soru bulunamadı.</p>
      )}
    </div>
  );
};

export default Quiz;
