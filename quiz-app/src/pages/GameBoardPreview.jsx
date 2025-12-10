import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GameBoard from "../components/GameBoard";

function GameBoardPreview({ quiz, setPage, setCurrentQuestionIndex }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />
        <main className="main-area">
          <div className="page-header">
            <h1>Game Board Preview</h1>
            <div className="muted">This is the teacher view preview (front-end)</div>
          </div>

          <GameBoard quiz={quiz} />

          <div style={{ marginTop: 16 }}>
            <button className="btn" onClick={() => { setCurrentQuestionIndex(0); setPage("question"); }}>
              Go to Question Screen
            </button>
            <button className="btn outline" onClick={() => setPage("dashboard")}>Back</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default GameBoardPreview;
