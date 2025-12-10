function QuestionCard({ q, onAnswer, showAnswer }) {
  return (
    <div className="qw-question-card">
      <h2 className="q-text">{q.question}</h2>

      <div className="options-col">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            className={"opt-btn"}
            onClick={() => onAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {showAnswer && (
        <div className="answer-note">Answer: <strong>{q.answer}</strong></div>
      )}
    </div>
  );
}

export default QuestionCard;
