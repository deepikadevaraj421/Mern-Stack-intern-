import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Lobby({ playerName, setPage, players, setPlayers }) {
  const joinMock = () => {
    // add the current player to the mock players list if not exist
    if (!players.some((p) => p.name === playerName)) {
      setPlayers([...players, { name: playerName, score: 0 }]);
    }
  };

  const startGame = () => {
    setPage("question");
  };

  // simulate join on mount
  if (playerName) joinMock();

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />
        <main className="main-area center-area">
          <div className="lobby-card">
            <h2>Lobby</h2>
            <p className="muted">Waiting for host to start the game (demo)</p>

            <div className="players-list">
              {players.map((p, i) => (
                <div key={i} className="player-row">
                  <div className="avatar small">{p.name.charAt(0) || "U"}</div>
                  <div>{p.name}</div>
                  <div className="muted">Score: {p.score}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={startGame}>Start Game (mock)</button>
              <button className="btn outline" onClick={() => setPage("join")}>Leave</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Lobby;
