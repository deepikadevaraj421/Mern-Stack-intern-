import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function StudentJoin({ setPage, setPlayerName, playerName }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />
        <main className="main-area center-area">
          <div className="join-card">
            <h2>Join game</h2>
            <p className="muted">Enter a nickname to join (front-end demo)</p>
            <input
              placeholder="Your nickname"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <div style={{ marginTop: 12 }}>
              <button
                className="btn"
                onClick={() => {
                  if (!playerName) return alert("Enter a nickname");
                  setPage("lobby");
                }}
              >
                Join Lobby
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default StudentJoin;

