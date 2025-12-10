function ProgressBar({ value = 0 }) {
  return (
    <div className="qw-progress">
      <div className="qw-progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}

export default ProgressBar;
