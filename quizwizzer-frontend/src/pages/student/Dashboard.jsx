import "../../styles/student.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="student-container">
      <div className="navbar">
        <h2>Student Dashboard</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate("/student/quizzes")}>
          View All Quizzes
        </div>

        <div className="card">
          Play Games (Coming Soon)
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
