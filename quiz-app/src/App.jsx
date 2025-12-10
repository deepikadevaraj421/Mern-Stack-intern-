import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import CreateQuiz from "./pages/CreateQuiz";
import QuizEditor from "./pages/QuizEditor";
import StudentJoin from "./pages/StudentJoin";
import Lobby from "./pages/Lobby";
import GameBoardPreview from "./pages/GameBoardPreview";
import QuestionScreen from "./pages/QuestionScreen";
import ScoreboardPage from "./pages/ScoreboardPage";
import sampleQuizzes from "./data/sampleQuizzes";

/*
 App holds top-level navigation state to simulate multi-page UI.
 We use a simple `page` string and pass necessary setters/props.
*/
function App() {
  const [page, setPage] = useState("dashboard");
  const [activeQuiz, setActiveQuiz] = useState(sampleQuizzes[0]);
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([
    { name: "Alice", score: 0 },
    { name: "Bob", score: 0 },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalScores, setFinalScores] = useState([]);

  const goToQuizEditor = (quiz) => {
    setActiveQuiz(quiz);
    setPage("editor");
  };

  return (
    <div className="app-root">
      {page === "dashboard" && (
        <Dashboard
          quizzes={sampleQuizzes}
          setActiveQuiz={setActiveQuiz}
          goToQuizEditor={goToQuizEditor}
          setPage={setPage}
        />
      )}

      {page === "create" && <CreateQuiz setPage={setPage} />}

      {page === "editor" && (
        <QuizEditor quiz={activeQuiz} setActiveQuiz={setActiveQuiz} setPage={setPage} />
      )}

      {page === "join" && (
        <StudentJoin
          setPage={setPage}
          setPlayerName={setPlayerName}
          playerName={playerName}
        />
      )}

      {page === "lobby" && (
        <Lobby
          playerName={playerName}
          setPage={setPage}
          players={players}
          setPlayers={setPlayers}
        />
      )}

      {page === "board" && (
        <GameBoardPreview quiz={activeQuiz} setPage={setPage} setCurrentQuestionIndex={setCurrentQuestionIndex} />
      )}

      {page === "question" && (
        <QuestionScreen
          quiz={activeQuiz}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setPage={setPage}
          setFinalScores={setFinalScores}
        />
      )}

      {page === "scoreboard" && (
        <ScoreboardPage finalScores={finalScores} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
