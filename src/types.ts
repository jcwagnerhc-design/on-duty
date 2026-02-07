export interface StatEffects {
  studentTrust?: number;
  colleagueRespect?: number;
  personalWellbeing?: number;
  academicRigor?: number;
}

export interface Stats {
  studentTrust: number;
  colleagueRespect: number;
  personalWellbeing: number;
  academicRigor: number;
}

export interface Choice {
  id: string;
  label: string;
  text: string;
  consequence: string;
  effects: StatEffects;
  flags?: string[];
  nextSceneId?: string;
  requiresFlag?: string;
  requiresChoice?: string;
}

export interface Scene {
  id: string;
  narrative: string;
  choices: Choice[];
  background?: string;
}

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  setupNarrative: string;
  scenes: Scene[];
}

export interface InterstitialEvent {
  id: string;
  text: string;
  effects: StatEffects;
}

export type GamePhase =
  | "title"
  | "scene"
  | "consequence"
  | "chapterSummary"
  | "interstitial"
  | "endReport";

export interface ChapterEvent {
  choiceLabel: string;
  choiceText: string;
  consequence: string;
  effects: StatEffects;
}

export interface GameState {
  stats: Stats;
  flags: string[];
  currentScenarioIndex: number;
  currentSceneId: string;
  phase: GamePhase;
  selectedChoice: Choice | null;
  chapterEvents: ChapterEvent[];
  chapterStatSnapshot: Stats;
  pendingInterstitials: InterstitialEvent[];
  currentInterstitialIndex: number;
}
