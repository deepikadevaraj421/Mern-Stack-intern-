import "../../styles/auth.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const role = new URLSearchParams(useLocation().search).get("role");

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = () => {
    if (role === "teacher") navigate("/teacher/dashboard");
    else navigate("/student/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{role === "teacher" ? "Teacher Login" : "Student Login"}</h2>

        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

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

export default Login;
