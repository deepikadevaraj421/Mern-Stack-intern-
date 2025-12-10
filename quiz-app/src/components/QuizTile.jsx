function QuizTile({ quiz, onEdit, onPreview }) {
  return (
    <div className="quiz-tile">
      <h3>{quiz.title}</h3>
      <p className="muted">{quiz.description}</p>
      <div className="tile-actions">
        <button className="btn" onClick={() => onEdit(quiz)}>Edit</button>
        <button className="btn outline" onClick={() => onPreview(quiz)}>Preview</button>
      </div>
    </div>
  );
}

export default QuizTile;
