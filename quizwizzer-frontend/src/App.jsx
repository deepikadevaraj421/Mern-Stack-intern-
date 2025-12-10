import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelect from "./pages/auth/RoleSelect";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import Dashboard from "./pages/student/Dashboard";
import Quizzes from "./pages/student/Quizzes";
import QuizPreview from "./pages/student/QuizPreview";
import PlayQuiz from "./pages/student/PlayQuiz";
import Score from "./pages/student/Score";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/quizzes" element={<Quizzes />} />
        <Route path="/student/quiz/:id" element={<QuizPreview />} />
        <Route path="/student/play/:id" element={<PlayQuiz />} />
        <Route path="/student/score/:score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
