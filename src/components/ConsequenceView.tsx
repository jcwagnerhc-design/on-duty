import type { Choice, StatEffects } from "../types";

interface ConsequenceViewProps {
  choice: Choice;
  onContinue: () => void;
}

function formatEffects(effects: StatEffects): string[] {
  const lines: string[] = [];
  const names: Record<string, string> = {
    studentTrust: "Student Trust",
    colleagueRespect: "Colleague Respect",
    personalWellbeing: "Personal Wellbeing",
    academicRigor: "Academic Rigor",
  };

  for (const [key, label] of Object.entries(names)) {
    const val = effects[key as keyof StatEffects];
    if (val && val !== 0) {
      const sign = val > 0 ? "+" : "";
      lines.push(`${label}: ${sign}${val}`);
    }
  }
  return lines;
}

export function ConsequenceView({ choice, onContinue }: ConsequenceViewProps) {
  const effects = formatEffects(choice.effects);
  const hasEffects = effects.length > 0;

  return (
    <div className="consequence-view">
      <div className="consequence-chosen">
        <span className="consequence-prompt">{">"} </span>
        <span className="consequence-choice-text">{choice.text}</span>
      </div>

      <div className="consequence-divider">{"· · ·"}</div>

      <div className="consequence-narrative">
        {choice.consequence.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {hasEffects && (
        <div className="consequence-effects">
          <div className="effects-border">{"┌" + "─".repeat(36) + "┐"}</div>
          {effects.map((e, i) => (
            <div
              key={i}
              className={`effect-line ${e.includes("+") ? "effect-positive" : "effect-negative"}`}
            >
              {"│"} {e}
            </div>
          ))}
          <div className="effects-border">{"└" + "─".repeat(36) + "┘"}</div>
        </div>
      )}

      {choice.flags && choice.flags.length > 0 && (
        <div className="consequence-flags">
          {choice.flags.map((flag) => (
            <span key={flag} className="flag-tag">
              * {flag.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      )}

      <button className="continue-button" onClick={onContinue}>
        {choice.nextSceneId ? "> CONTINUE" : "> END OF CHAPTER"}
      </button>
    </div>
  );
}
