function Sidebar({ onNavigate }) {
  return (
    <aside className="qw-sidebar">
      <button onClick={() => onNavigate("dashboard")} className="side-btn">Dashboard</button>
      <button onClick={() => onNavigate("create")} className="side-btn">Create Quiz</button>
      <button onClick={() => onNavigate("join")} className="side-btn">Student Join</button>
    </aside>
  );
}

export default Sidebar;
