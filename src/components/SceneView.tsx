import type { Scenario, Scene, Choice } from "../types";

interface SceneViewProps {
  scenario: Scenario;
  scene: Scene;
  flags: string[];
  onChoice: (choice: Choice) => void;
}

export function SceneView({ scenario, scene, flags, onChoice }: SceneViewProps) {
  const isFirstScene = scene.id === scenario.scenes[0].id;

  const availableChoices = scene.choices.filter((choice) => {
    if (choice.requiresFlag && !flags.includes(choice.requiresFlag)) {
      return false;
    }
    return true;
  });

  const locationLabel =
    scenario.id === "dorm_duty"
      ? "CARTER HALL — 9:45 PM"
      : "THE HILLTOP — PERIOD 3";

  return (
    <div className="scene-view">
      <div className="scene-header">
        <div className="scene-title">{scenario.title}</div>
        <div className="scene-subtitle">{scenario.subtitle}</div>
      </div>

      <div className="scene-location-box">
        <div className="scene-location-border">
          {"┌" + "─".repeat(48) + "┐"}
        </div>
        <div className="scene-location-text">
          {"│"} {locationLabel}
        </div>
        <div className="scene-location-border">
          {"└" + "─".repeat(48) + "┘"}
        </div>
      </div>

      <div className="scene-narrative">
        {isFirstScene && (
          <div className="scene-setup">
            {scenario.setupNarrative.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        <div className="scene-text">
          {scene.narrative.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="scene-choices-header">
        {"─".repeat(42)}{"\n"}What do you do?
      </div>
      <div className="scene-choices">
        {availableChoices.map((choice) => (
          <button
            key={choice.id}
            className="choice-button"
            onClick={() => onChoice(choice)}
          >
            <span className="choice-label">{choice.label})</span>
            <span className="choice-text">{choice.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
