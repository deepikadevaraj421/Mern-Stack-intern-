/*
 Simple visual board: a row of squares (players) + a track for positions.
 This is purely presentational.
*/
function GameBoard({ quiz }) {
  const squares = new Array(10).fill(0);
  return (
    <div className="gameboard-wrap">
      <div className="gameboard-title">Game Board Preview</div>
      <div className="track">
        {squares.map((_, i) => (
          <div className="track-cell" key={i}>{i + 1}</div>
        ))}
      </div>

      <div className="players-preview">
        <div className="player-card">
          <div className="avatar">A</div>
          <div className="pname">Player 1</div>
        </div>

        <div className="player-card">
          <div className="avatar">B</div>
          <div className="pname">Player 2</div>
        </div>
      </div>

      <div className="board-info muted">
        Quiz: <strong>{quiz.title}</strong> · Questions: {quiz.questions.length}
      </div>
    </div>
  );
}

export default GameBoard;
