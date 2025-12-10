import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function CreateQuiz({ setPage }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleCreate = () => {
    // This is just a mock. In real app you'd send to backend.
    alert(`Quiz "${title || "Untitled"}" created (demo).`);
    setPage("dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar onNavigate={setPage} />
        <main className="main-area">
          <div className="page-header">
            <h1>Create Quiz</h1>
            <div className="small-muted">This is a front-end demo only.</div>
          </div>

          <div className="editor-panel">
            <label>Quiz title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Science Quiz" />

            <label>Description</label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Short description" />

            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={handleCreate}>Create (mock)</button>
              <button className="btn outline" onClick={() => setPage("dashboard")}>Cancel</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CreateQuiz;
