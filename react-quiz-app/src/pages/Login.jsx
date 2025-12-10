import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") return alert("Enter your name!");
    localStorage.setItem("username", name);
    navigate("/quiz");
  };

  return (
    <div className="login-container">
      <div className="login-card fade-in">
        <h1 className="title">QUIZ APP</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-box"
        />

        <button className="login-btn" onClick={handleLogin}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
