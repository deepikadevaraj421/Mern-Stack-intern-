import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ScoreboardPage({ finalScores = [], setPage }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />
        <main className="main-area center-area">
          <div className="scoreboard">
            <h2>Scoreboard</h2>
            <div className="muted">Final results (demo)</div>

            <div className="score-rows">
              {finalScores.length ? finalScores.map((p, i) => (
                <div key={i} className="score-row">
                  <div className="avatar small">{p.name.charAt(0)}</div>
                  <div className="pname">{p.name}</div>
                  <div className="pscore">{p.score}</div>
                </div>
              )) : <div className="muted">No results yet</div>}
            </div>

            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={() => setPage("dashboard")}>Back to Dashboard</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ScoreboardPage;
