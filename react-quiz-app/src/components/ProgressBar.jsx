import "./ProgressBar.css";

function ProgressBar({ current, total }) {
  const width = ((current + 1) / total) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-fill" style={{ width: `${width}%` }}></div>
    </div>
  );
}

export default ProgressBar;

