import "../../styles/student.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    id: 2,
    question: "Capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
];

function PlayQuiz() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  const handleOption = (opt) => {
    if (opt === questions[currentQ].answer) setScore(score + 1);
    if (currentQ + 1 < questions.length) setCurrentQ(currentQ + 1);
    else navigate(`/student/score/${score + (opt === questions[currentQ].answer ? 1 : 0)}`);
  };

  return (
    <div className="student-container">
      <div className="navbar">
        <h2>Playing Quiz {id}</h2>
      </div>

      <div className="quiz-question">
        <h3>{questions[currentQ].question}</h3>
        <div className="options">
          {questions[currentQ].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleOption(opt)}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayQuiz;
