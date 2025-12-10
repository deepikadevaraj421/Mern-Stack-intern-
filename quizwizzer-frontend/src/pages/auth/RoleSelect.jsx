import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Select Role</h2>

        <button onClick={() => navigate("/login?role=student")}>
          Login as Student
        </button>

        <button
          className="role-btn"
          onClick={() => navigate("/login?role=teacher")}
        >
          Login as Teacher
        </button>

        <button
          className="link-btn"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Signup
        </button>
      </div>
    </div>
  );
}

export default RoleSelect;
