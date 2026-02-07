interface StatBarProps {
  label: string;
  value: number;
  color?: string;
}

export function StatBar({ label, value }: StatBarProps) {
  const totalBlocks = 20;
  const filled = Math.round((value / 100) * totalBlocks);
  const empty = totalBlocks - filled;
  const bar = "\u2588".repeat(filled) + "\u2591".repeat(empty);

  return (
    <div className="stat-bar">
      <span className="stat-bar-label">{label}</span>
      <span className="stat-bar-meter">
        <span className="stat-bar-blocks">{bar}</span>
        <span className="stat-bar-value">{value}</span>
      </span>
    </div>
  );
}
