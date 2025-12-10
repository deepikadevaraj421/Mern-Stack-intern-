import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <select
          style={{ padding: "12px", marginBottom: "14px", width: "100%" }}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/login?role=" + role)}>
          Signup
        </button>

        <button
          className="link-btn"
          onClick={() => navigate("/")}
        >
          Back to Role Selection
        </button>
      </div>
    </div>
  );
}

export default Signup;
