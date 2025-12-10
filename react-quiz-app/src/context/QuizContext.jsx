import { createContext, useState } from "react";
import questions from "../data/questions";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = () => setCurrent((prev) => prev + 1);

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
  };

  return (
    <QuizContext.Provider
      value={{
        username,
        setUsername,
        current,
        nextQuestion,
        score,
        setScore,
        restartQuiz,
        questions
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
