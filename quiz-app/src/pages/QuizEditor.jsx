import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

/*
 Simple editor that allows adding/removing questions on front-end only.
*/
function QuizEditor({ quiz, setActiveQuiz, setPage }) {
  const [questions, setQuestions] = useState(quiz.questions || []);
  const [newQ, setNewQ] = useState({ question: "", options: ["", ""], answer: "" });

  const addOption = () => setNewQ((p) => ({ ...p, options: [...p.options, ""] }));
  const updateOption = (i, val) =>
    setNewQ((p) => {
      const o = [...p.options];
      o[i] = val;
      return { ...p, options: o };
    });

  const addQuestion = () => {
    if (!newQ.question || !newQ.answer) {
      alert("Please fill question and answer");
      return;
    }
    setQuestions((prev) => [
      ...prev,
      { id: `q-${prev.length + 1}`, question: newQ.question, options: newQ.options, answer: newQ.answer },
    ]);
    setNewQ({ question: "", options: ["", ""], answer: "" });
  };

  const removeQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const save = () => {
    setActiveQuiz({ ...quiz, questions });
    alert("Saved (front-end only)");
    setPage("dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />
        <main className="main-area">
          <div className="page-header">
            <h1>Quiz Editor — {quiz.title}</h1>
            <div className="small-muted">Edit questions (front-end demo)</div>
          </div>

          <div className="editor-list">
            <h3>Existing questions</h3>
            {questions.map((q) => (
              <div key={q.id} className="q-row">
                <div>{q.question}</div>
                <div>
                  <button className="btn outline" onClick={() => removeQuestion(q.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="editor-panel">
            <h3>Add new question</h3>
            <label>Question</label>
            <input value={newQ.question} onChange={(e) => setNewQ((p) => ({ ...p, question: e.target.value }))} />

            <label>Options</label>
            {newQ.options.map((opt, i) => (
              <input key={i} value={opt} onChange={(e) => updateOption(i, e.target.value)} placeholder={`Option ${i + 1}`} />
            ))}
            <div className="row">
              <button className="btn small" onClick={addOption}>Add option</button>
            </div>

            <label>Answer (must match one option)</label>
            <input value={newQ.answer} onChange={(e) => setNewQ((p) => ({ ...p, answer: e.target.value }))} />

            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={addQuestion}>Add Question</button>
              <button className="btn outline" onClick={save}>Save Quiz</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default QuizEditor;
