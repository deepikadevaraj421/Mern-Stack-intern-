function Navbar({ title = "QuizWizzer - Frontend Mock" }) {
  return (
    <header className="qw-navbar">
      <div className="nav-left">
        <div className="brand">QuizWizzer</div>
        <div className="subtitle">Frontend Demo</div>
      </div>
      <div className="nav-right">Demo</div>
    </header>
  );
}

export default Navbar;
