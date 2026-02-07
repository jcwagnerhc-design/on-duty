import { useState, useCallback } from "react";
import type { GameState, Stats, Choice, StatEffects, ChapterEvent } from "./types";
import { scenarios } from "./data/scenarios";
import { pickRandomEvents } from "./data/events";
import { TitleScreen } from "./components/TitleScreen";
import { SceneView } from "./components/SceneView";
import { ConsequenceView } from "./components/ConsequenceView";
import { ChapterSummary } from "./components/ChapterSummary";
import { EndReport } from "./components/EndReport";
import { StatsPanel } from "./components/StatsPanel";
import { ProgressTracker } from "./components/ProgressTracker";
import { InterstitialEventView } from "./components/InterstitialEvent";
import "./App.css";

const initialStats: Stats = {
  studentTrust: 50,
  colleagueRespect: 50,
  personalWellbeing: 50,
  academicRigor: 50,
};

function applyEffects(stats: Stats, effects: StatEffects): Stats {
  return {
    studentTrust: Math.max(0, Math.min(100, stats.studentTrust + (effects.studentTrust ?? 0))),
    colleagueRespect: Math.max(0, Math.min(100, stats.colleagueRespect + (effects.colleagueRespect ?? 0))),
    personalWellbeing: Math.max(0, Math.min(100, stats.personalWellbeing + (effects.personalWellbeing ?? 0))),
    academicRigor: Math.max(0, Math.min(100, stats.academicRigor + (effects.academicRigor ?? 0))),
  };
}

function addEffects(a: StatEffects, b: StatEffects): StatEffects {
  return {
    studentTrust: (a.studentTrust ?? 0) + (b.studentTrust ?? 0),
    colleagueRespect: (a.colleagueRespect ?? 0) + (b.colleagueRespect ?? 0),
    personalWellbeing: (a.personalWellbeing ?? 0) + (b.personalWellbeing ?? 0),
    academicRigor: (a.academicRigor ?? 0) + (b.academicRigor ?? 0),
  };
}

const timelineDates = [
  "Tuesday, September 17 — Week 3",
  "Late September",
  "Wednesday, October 9 — Week 6",
  "Late October",
  "December — End of Term",
];

const initialState: GameState = {
  stats: { ...initialStats },
  flags: [],
  currentScenarioIndex: 0,
  currentSceneId: "",
  phase: "title",
  selectedChoice: null,
  chapterEvents: [],
  chapterStatSnapshot: { ...initialStats },
  pendingInterstitials: [],
  currentInterstitialIndex: 0,
};

export default function App() {
  const [state, setState] = useState<GameState>(initialState);
  const [chapterEffects, setChapterEffects] = useState<StatEffects>({});

  const currentScenario = scenarios[state.currentScenarioIndex];
  const currentScene = currentScenario?.scenes.find(
    (s) => s.id === state.currentSceneId
  );

  // Determine current date for progress tracker
  let currentDate = timelineDates[0];
  if (state.phase === "title") {
    currentDate = "September — New Teacher Orientation";
  } else if (state.phase === "endReport") {
    currentDate = timelineDates[4];
  } else if (state.phase === "interstitial") {
    currentDate = timelineDates[state.currentScenarioIndex * 2 + 1] || timelineDates[1];
  } else {
    currentDate = scenarios[state.currentScenarioIndex]?.date || timelineDates[0];
  }

  const startGame = useCallback(() => {
    const firstScenario = scenarios[0];
    setState({
      ...initialState,
      phase: "scene",
      currentSceneId: firstScenario.scenes[0].id,
      chapterStatSnapshot: { ...initialStats },
    });
    setChapterEffects({});
  }, []);

  const handleChoice = useCallback(
    (choice: Choice) => {
      const newStats = applyEffects(state.stats, choice.effects);
      const newFlags = choice.flags ? [...state.flags, ...choice.flags] : state.flags;

      const event: ChapterEvent = {
        choiceLabel: choice.label,
        choiceText: choice.text,
        consequence: choice.consequence,
        effects: choice.effects,
      };

      setState((prev) => ({
        ...prev,
        stats: newStats,
        flags: newFlags,
        selectedChoice: choice,
        phase: "consequence",
        chapterEvents: [...prev.chapterEvents, event],
      }));
      setChapterEffects((prev) => addEffects(prev, choice.effects));
    },
    [state.stats, state.flags]
  );

  const handleContinue = useCallback(() => {
    const choice = state.selectedChoice;
    if (!choice) return;

    if (choice.nextSceneId) {
      setState((prev) => ({
        ...prev,
        currentSceneId: choice.nextSceneId!,
        selectedChoice: null,
        phase: "scene",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        selectedChoice: null,
        phase: "chapterSummary",
      }));
    }
  }, [state.selectedChoice]);

  const handleNextChapter = useCallback(() => {
    const nextIndex = state.currentScenarioIndex + 1;
    if (nextIndex >= scenarios.length) {
      setState((prev) => ({
        ...prev,
        phase: "endReport",
      }));
    } else {
      // Queue up interstitial events before the next chapter
      const events = pickRandomEvents(2);
      setState((prev) => ({
        ...prev,
        pendingInterstitials: events,
        currentInterstitialIndex: 0,
        phase: "interstitial",
      }));
    }
  }, [state.currentScenarioIndex]);

  const handleInterstitialContinue = useCallback(() => {
    const nextIdx = state.currentInterstitialIndex + 1;
    const currentEvent = state.pendingInterstitials[state.currentInterstitialIndex];

    // Apply effects from the current interstitial
    const newStats = currentEvent
      ? applyEffects(state.stats, currentEvent.effects)
      : state.stats;

    if (nextIdx < state.pendingInterstitials.length) {
      setState((prev) => ({
        ...prev,
        stats: newStats,
        currentInterstitialIndex: nextIdx,
      }));
    } else {
      // Done with interstitials, advance to next scenario
      const nextScenarioIndex = state.currentScenarioIndex + 1;
      const nextScenario = scenarios[nextScenarioIndex];
      setState((prev) => ({
        ...prev,
        stats: newStats,
        currentScenarioIndex: nextScenarioIndex,
        currentSceneId: nextScenario.scenes[0].id,
        phase: "scene",
        chapterEvents: [],
        chapterStatSnapshot: { ...newStats },
        pendingInterstitials: [],
        currentInterstitialIndex: 0,
      }));
      setChapterEffects({});
    }
  }, [state.currentInterstitialIndex, state.pendingInterstitials, state.stats, state.currentScenarioIndex]);

  const handleRestart = useCallback(() => {
    setState({ ...initialState });
    setChapterEffects({});
  }, []);

  const showHud = state.phase !== "title" && state.phase !== "endReport";
  const currentInterstitial = state.pendingInterstitials[state.currentInterstitialIndex];

  return (
    <div className="app">
      <div className="crt-overlay" />

      {showHud && (
        <div className="hud">
          <ProgressTracker
            currentScenarioIndex={state.currentScenarioIndex}
            totalScenarios={scenarios.length}
            currentDate={currentDate}
            phase={state.phase}
          />
          <StatsPanel stats={state.stats} />
        </div>
      )}

      <div className="main-content">
        {state.phase === "title" && <TitleScreen onStart={startGame} />}

        {state.phase === "scene" && currentScene && (
          <SceneView
            scenario={currentScenario}
            scene={currentScene}
            flags={state.flags}
            onChoice={handleChoice}
          />
        )}

        {state.phase === "consequence" && state.selectedChoice && (
          <ConsequenceView
            choice={state.selectedChoice}
            onContinue={handleContinue}
          />
        )}

        {state.phase === "chapterSummary" && (
          <ChapterSummary
            scenario={currentScenario}
            events={state.chapterEvents}
            statsBefore={state.chapterStatSnapshot}
            statsAfter={state.stats}
            totalEffects={chapterEffects}
            onContinue={handleNextChapter}
            isLastChapter={state.currentScenarioIndex >= scenarios.length - 1}
          />
        )}

        {state.phase === "interstitial" && currentInterstitial && (
          <InterstitialEventView
            event={currentInterstitial}
            onContinue={handleInterstitialContinue}
          />
        )}

        {state.phase === "endReport" && (
          <EndReport
            stats={state.stats}
            flags={state.flags}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
