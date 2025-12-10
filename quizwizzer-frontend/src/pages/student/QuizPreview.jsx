import "../../styles/student.css";
import { useNavigate, useParams } from "react-router-dom";

function QuizPreview() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="student-container">
      <div className="navbar">
        <h2>Quiz Preview</h2>
        <button onClick={() => navigate("/student/quizzes")}>Back</button>
      </div>

      <div className="quiz-question">
        <h3>Quiz {id} - Example Questions</h3>
        <p>This quiz contains 5 questions. Time: 5 mins</p>
        <button className="start-btn" onClick={() => navigate(`/student/play/${id}`)}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizPreview;
