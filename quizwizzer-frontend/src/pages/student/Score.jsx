import "../../styles/student.css";
import { useNavigate, useParams } from "react-router-dom";

function Score() {
  const navigate = useNavigate();
  const { score } = useParams();

  return (
    <div className="student-container">
      <div className="score-card">
        <h2>Quiz Completed!</h2>
        <h3>Your Score: {score}</h3>
        <button onClick={() => navigate("/student/dashboard")}>Back to Dashboard</button>
      </div>
    </div>
  );
}

export default Score;
