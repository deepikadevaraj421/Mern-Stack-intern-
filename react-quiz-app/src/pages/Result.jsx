import { useLocation, useNavigate } from "react-router-dom";
import "../styles/result.css";

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return navigate("/");

  return (
    <div className="result-container fade-in">
      <div className="result-card">
        <h1>Quiz Completed 🎉</h1>
        <h2>Your Score</h2>

        <p className="score">
          {state.score} / {state.total}
        </p>

        <button className="restart-btn" onClick={() => navigate("/")}>
          Play Again
        </button>
      </div>
    </div>
  );
}
