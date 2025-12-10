import "../../styles/student.css";
import { useNavigate } from "react-router-dom";

const quizData = [
  { id: 1, title: "Math Quiz", category: "Math" },
  { id: 2, title: "Science Quiz", category: "Science" },
  { id: 3, title: "History Quiz", category: "History" },
];

function Quizzes() {
  const navigate = useNavigate();

  return (
    <div className="student-container">
      <div className="navbar">
        <h2>All Quizzes</h2>
        <button onClick={() => navigate("/student/dashboard")}>Back</button>
      </div>

      <div className="quiz-list">
        {quizData.map((quiz) => (
          <div
            key={quiz.id}
            className="quiz-item"
            onClick={() => navigate(`/student/quiz/${quiz.id}`)}
          >
            <span>{quiz.title}</span>
            <button className="start-btn">Preview</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quizzes;
