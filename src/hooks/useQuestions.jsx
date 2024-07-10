import { useEffect, useState } from "react";

const useQuestions = (difficulty) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/data/questions.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredQuestions = data.filter(
          (question) => question.difficulty === difficulty
        );
        setQuestions(filteredQuestions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [difficulty]);

  return { questions, loading, error };
};

export default useQuestions;
