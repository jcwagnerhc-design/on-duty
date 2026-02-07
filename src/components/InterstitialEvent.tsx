import type { InterstitialEvent as InterstitialEventType, StatEffects } from "../types";

interface InterstitialEventProps {
  event: InterstitialEventType;
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

export function InterstitialEventView({ event, onContinue }: InterstitialEventProps) {
  const effects = formatEffects(event.effects);
  const hasEffects = effects.length > 0;

  return (
    <div className="interstitial-event">
      <div className="interstitial-box">
        <div className="interstitial-border-top">
          {"┌" + "─".repeat(48) + "┐"}
        </div>
        <div className="interstitial-content">
          <div className="interstitial-header">
            {"│"} <span className="interstitial-title">CAMPUS LIFE</span>
          </div>
          <div className="interstitial-divider">
            {"├" + "─".repeat(48) + "┤"}
          </div>
          <div className="interstitial-text">
            {event.text.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {hasEffects && (
            <div className="interstitial-effects">
              {effects.map((e, i) => (
                <span
                  key={i}
                  className={e.includes("+") ? "effect-positive" : "effect-negative"}
                >
                  {e}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="interstitial-border-bottom">
          {"└" + "─".repeat(48) + "┘"}
        </div>
      </div>
      <button className="continue-button" onClick={onContinue}>
        [ PRESS ENTER TO CONTINUE ]
      </button>
    </div>
  );
}
