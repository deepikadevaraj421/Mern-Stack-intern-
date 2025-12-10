import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import QuizTile from "../components/QuizTile";

function Dashboard({ quizzes, setActiveQuiz, goToQuizEditor, setPage }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />

        <main className="main-area">
          <div className="page-header">
            <h1>Teacher Dashboard</h1>
            <div className="small-muted">Create and preview quizzes</div>
          </div>

          <div className="tiles-grid">
            {quizzes.map((q) => (
              <QuizTile
                key={q.id}
                quiz={q}
                onEdit={(quiz) => goToQuizEditor(quiz)}
                onPreview={(quiz) => {
                  setActiveQuiz(quiz);
                  setPage("board");
                }}
              />
            ))}
          </div>

          <div className="help-card">
            <h3>How to demo</h3>
            <ol>
              <li>Click Edit to open the quiz editor.</li>
              <li>Click Preview to see the board/teacher view.</li>
              <li>Use Student Join to simulate a student joining.</li>
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
