interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div className="title-screen">
      <pre className="ascii-art">{`
  ┌──────────────────────────────────────────┐
  │                                          │
  │    ██████╗ ███╗   ██╗                    │
  │   ██╔═══██╗████╗  ██║                    │
  │   ██║   ██║██╔██╗ ██║                    │
  │   ██║   ██║██║╚██╗██║                    │
  │   ╚██████╔╝██║ ╚████║                    │
  │    ╚═════╝ ╚═╝  ╚═══╝                    │
  │                                          │
  │   ██████╗ ██╗   ██╗████████╗██╗   ██╗   │
  │   ██╔══██╗██║   ██║╚══██╔══╝╚██╗ ██╔╝   │
  │   ██║  ██║██║   ██║   ██║    ╚████╔╝    │
  │   ██║  ██║██║   ██║   ██║     ╚██╔╝     │
  │   ██████╔╝╚██████╔╝   ██║      ██║      │
  │   ╚═════╝  ╚═════╝    ╚═╝      ╚═╝      │
  │                                          │
  └──────────────────────────────────────────┘`}
      </pre>
      <div className="title-subtitle">A Boarding School Simulation</div>
      <div className="title-location">Rare Academy — Fall Term</div>
      <div className="title-divider">{"─".repeat(42)}</div>
      <div className="title-description">
        You are a new teacher at a boarding school.{"\n"}
        Navigate dorm life, academics, and the{"\n"}
        gray areas in between.{"\n"}
        {"\n"}
        Every choice shapes your first term.
      </div>
      <div className="title-divider">{"─".repeat(42)}</div>
      <div className="title-stats-preview">
        Student Trust ........ 50{"\n"}
        Colleague Respect .... 50{"\n"}
        Personal Wellbeing ... 50{"\n"}
        Academic Rigor ....... 50
      </div>
      <button className="start-button" onClick={onStart}>
        {">"} BEGIN YOUR FIRST TERM
      </button>
      <div className="title-footer">
        A game about decisions with no clean answers.
      </div>
    </div>
  );
}
