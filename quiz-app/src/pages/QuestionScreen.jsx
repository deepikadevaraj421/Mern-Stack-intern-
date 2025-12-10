import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { useState, useEffect } from "react";

function QuestionScreen({ quiz, currentQuestionIndex, setCurrentQuestionIndex, setPage, setFinalScores }) {
  const [index, setIndex] = useState(currentQuestionIndex || 0);
  const [time, setTime] = useState(quiz.timePerQuestion || 20);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const total = quiz.questions.length;

  useEffect(() => {
    setTime(quiz.timePerQuestion || 20);
    setSelected(null);
    setShowAnswer(false);
  }, [index, quiz]);

  // simple countdown
  useEffect(() => {
    if (showAnswer) return;
    const t = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setShowAnswer(true);
          clearInterval(t);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [showAnswer]);

  const handleAnswer = (opt) => {
    setSelected(opt);
    setShowAnswer(true);
  };

  const next = () => {
    if (index + 1 < total) {
      setIndex(index + 1);
      setCurrentQuestionIndex(index + 1);
    } else {
      // computing fake final scores for demo
      const mockScores = [
        { name: "Alice", score: 4 },
        { name: "Bob", score: 3 },
        { name: "You", score: selected === quiz.questions[index].answer ? 1 : 0 },
      ];
      setFinalScores(mockScores);
      setPage("scoreboard");
    }
  };

  const q = quiz.questions[index];
  const progress = Math.round(((index + 1) / total) * 100);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />
        <main className="main-area center-area">
          <div className="question-screen-card">
            <div className="q-header">
              <div>
                <h3>{quiz.title}</h3>
                <div className="muted">Question {index + 1} of {total}</div>
              </div>

              <div>
                <div className="timer-pill">{time}s</div>
              </div>
            </div>

            <ProgressBar value={progress} />

            <QuestionCard q={q} onAnswer={handleAnswer} showAnswer={showAnswer} />

            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={next}>Next</button>
              <button className="btn outline" onClick={() => setPage("dashboard")}>Exit</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default QuestionScreen;
