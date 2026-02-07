import type { Scenario, ChapterEvent, Stats } from "../types";

interface ChapterSummaryProps {
  scenario: Scenario;
  events: ChapterEvent[];
  statsBefore: Stats;
  statsAfter: Stats;
  onContinue: () => void;
  isLastChapter: boolean;
}

function statDiff(before: number, after: number): string {
  const diff = after - before;
  if (diff === 0) return " --";
  const sign = diff > 0 ? "+" : "";
  return `${sign}${diff}`;
}

function diffClass(before: number, after: number): string {
  const diff = after - before;
  if (diff > 0) return "diff-positive";
  if (diff < 0) return "diff-negative";
  return "diff-neutral";
}

function pad(s: string, len: number): string {
  return s + " ".repeat(Math.max(0, len - s.length));
}

export function ChapterSummary({
  scenario,
  events,
  statsBefore,
  statsAfter,
  onContinue,
  isLastChapter,
}: ChapterSummaryProps) {
  const w = 48;

  return (
    <div className="chapter-summary">
      <pre className="summary-box-top">{"┌" + "─".repeat(w) + "┐"}</pre>
      <div className="summary-title-row">
        {"│"} CHAPTER COMPLETE
      </div>
      <pre className="summary-box-mid">{"├" + "─".repeat(w) + "┤"}</pre>

      <div className="summary-scenario">{scenario.title}</div>
      <div className="summary-subtitle">{scenario.subtitle}</div>

      <pre className="summary-divider">{"─".repeat(42)}</pre>

      <div className="summary-choices">
        <div className="summary-section-header">YOUR DECISIONS:</div>
        {events.map((event, i) => (
          <div key={i} className="summary-event">
            <span className="summary-event-label">{i + 1}.</span>
            <span className="summary-event-text">{event.choiceText}</span>
          </div>
        ))}
      </div>

      <pre className="summary-divider">{"─".repeat(42)}</pre>

      <div className="summary-stats">
        <div className="summary-section-header">STAT CHANGES:</div>
        <pre className="summary-stats-table">
{`  ${pad("Stat", 22)} Before  Chg  After
  ${pad("─".repeat(22), 22)} ${pad("─".repeat(6), 6)} ${pad("─".repeat(4), 4)} ${pad("─".repeat(5), 5)}`}
        </pre>
        {([
          ["Student Trust", "studentTrust"],
          ["Colleague Respect", "colleagueRespect"],
          ["Personal Wellbeing", "personalWellbeing"],
          ["Academic Rigor", "academicRigor"],
        ] as const).map(([label, key]) => (
          <div key={key} className="summary-stat-row">
            <span className="summary-stat-label">{pad(label, 24)}</span>
            <span className="summary-stat-before">
              {String(statsBefore[key]).padStart(4)}
            </span>
            <span className={`summary-stat-diff ${diffClass(statsBefore[key], statsAfter[key])}`}>
              {statDiff(statsBefore[key], statsAfter[key]).padStart(5)}
            </span>
            <span className="summary-stat-after">
              {String(statsAfter[key]).padStart(5)}
            </span>
          </div>
        ))}
      </div>

      <pre className="summary-box-bottom">{"└" + "─".repeat(w) + "┘"}</pre>

      <button className="continue-button" onClick={onContinue}>
        {isLastChapter ? "> VIEW END OF TERM REPORT" : "> CONTINUE"}
      </button>
    </div>
  );
}
