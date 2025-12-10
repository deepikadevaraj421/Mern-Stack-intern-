import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import "../styles/quiz.css";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const current = questions[index];

  const handleNext = () => {
    if (selected === null) return;

    if (selected === current.answer) setScore(score + 1);
    setSelected(null);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="quiz-container fade-in">
      <h2 className="q-title">{current.question}</h2>

      <div className="options">
        {current.options.map((opt, i) => (
          <button
            key={i}
            className={`opt-btn ${selected === i ? "active" : ""}`}
            onClick={() => setSelected(i)}
          >
            {opt}
          </button>
        ))}
      </div>

      <button className="next-btn" onClick={handleNext}>
        {index + 1 === questions.length ? "Finish" : "Next"}
      </button>

      <p className="progress">
        {index + 1}/{questions.length}
      </p>
    </div>
  );
}
