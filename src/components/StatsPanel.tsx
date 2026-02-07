import type { Stats } from "../types";
import { StatBar } from "./StatBar";

interface StatsPanelProps {
  stats: Stats;
}

export function StatsPanel({ stats }: StatsPanelProps) {
  return (
    <div className="stats-panel">
      <div className="stats-border-top">
        {"┌" + "─".repeat(44) + "┐"}
      </div>
      <div className="stats-header">
        {"│"} <span>STATUS</span>
      </div>
      <div className="stats-inner-divider">
        {"├" + "─".repeat(44) + "┤"}
      </div>
      <div className="stats-body">
        <StatBar label="Student Trust" value={stats.studentTrust} />
        <StatBar label="Colleague Respect" value={stats.colleagueRespect} />
        <StatBar label="Personal Wellbeing" value={stats.personalWellbeing} />
        <StatBar label="Academic Rigor" value={stats.academicRigor} />
      </div>
      <div className="stats-border-bottom">
        {"└" + "─".repeat(44) + "┘"}
      </div>
    </div>
  );
}
