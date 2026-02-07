interface ProgressTrackerProps {
  currentScenarioIndex: number;
  totalScenarios: number;
  currentDate: string;
  phase: string;
}

const months = ["SEP", "OCT", "NOV", "DEC"];

export function ProgressTracker({
  currentScenarioIndex,
  totalScenarios,
  currentDate,
  phase,
}: ProgressTrackerProps) {
  // Calculate progress: each scenario is a chunk, interstitials fall between
  const isComplete = phase === "endReport";
  const isSummaryOrInterstitial =
    phase === "chapterSummary" || phase === "interstitial";

  let progress: number;
  if (isComplete) {
    progress = 1;
  } else if (isSummaryOrInterstitial) {
    progress = (currentScenarioIndex + 1) / totalScenarios;
  } else {
    progress =
      (currentScenarioIndex + 0.5) / totalScenarios;
  }

  const filled = Math.round(progress * 32);
  const empty = 32 - filled;
  const bar = "\u2588".repeat(filled) + "\u2591".repeat(empty);

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <span className="progress-label">FALL TERM — RARE ACADEMY</span>
        <span className="progress-date">{currentDate}</span>
      </div>
      <div className="progress-bar-row">
        <span className="progress-month">SEP</span>
        <span className="progress-bar-text">{bar}</span>
        <span className="progress-month">DEC</span>
      </div>
      <div className="progress-months">
        {months.map((m, i) => (
          <span
            key={m}
            className={`progress-month-tick ${
              progress >= (i + 0.5) / months.length
                ? "month-reached"
                : "month-ahead"
            }`}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
