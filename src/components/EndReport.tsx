import type { Stats } from "../types";
import { StatBar } from "./StatBar";

interface EndReportProps {
  stats: Stats;
  flags: string[];
  onRestart: () => void;
}

function generateNarrative(stats: Stats, flags: string[]): string {
  const parts: string[] = [];

  parts.push(
    "Your first term at Rare Academy has come to an end. The leaves on the Loop turned gold, then bare. The radiators in Carter Hall found their rhythm. December arrived."
  );

  if (stats.studentTrust >= 55) {
    parts.push(
      "Students see you as someone they can approach — not just a rule-enforcer, but a person who listens. That trust was earned in small moments in Carter Hall and the Hilltop: a conversation you didn't have to have, a question you chose to ask instead of a lecture you could have given. When kids pass you on the Loop, they say hi first."
    );
  } else if (stats.studentTrust >= 45) {
    parts.push(
      "Your relationships with students are developing, though there's still some distance. They respect you, but they haven't quite decided whether you're safe to confide in. On the Loop, they nod. In Carter Hall, they're polite. That takes time — and consistency."
    );
  } else {
    parts.push(
      "Students are wary of you. Some of that may be inevitable — you're new, and trust is slow at a place like Rare Academy. But there were moments in Carter Hall, in the Hilltop classrooms, where you could have connected and didn't, and those absences were noticed."
    );
  }

  if (stats.colleagueRespect >= 55) {
    parts.push(
      "Your colleagues have noticed you. At the Grind and in the faculty lounge, your name comes up in positive contexts — 'the new teacher who actually addressed the language thing,' or 'the one who followed up with Coach Rivas.' Pat Almeida gave you a nod at the last faculty meeting. You're building a reputation as someone who takes the work seriously."
    );
  } else if (stats.colleagueRespect >= 45) {
    parts.push(
      "Among your colleagues, you're neither a standout nor a concern. You're the new teacher who's still figuring out the rhythms of Rare Academy, which is exactly where you should be. Ms. Tsao checks in sometimes. Pat Almeida hasn't said much. No one's worried about you, but no one's championing you either."
    );
  } else {
    parts.push(
      "There have been raised eyebrows at the Grind and in the faculty room. Pat Almeida has been diplomatic but pointed. Some colleagues wonder if you're fully committed to the community expectations at Rare Academy. It's early — reputations can shift. But first impressions at boarding schools tend to stick."
    );
  }

  if (stats.personalWellbeing >= 55) {
    parts.push(
      "You've managed to protect some space for yourself. The grading gets done, the Carter Hall rounds get walked, but you also know when to close the apartment door. You've found a corner table at the Grind. That's not selfishness — it's survival. Boarding school burns through teachers who don't learn that."
    );
  } else if (stats.personalWellbeing >= 45) {
    parts.push(
      "You're holding it together, but the edges are fraying. Some nights in your Carter Hall apartment you're up later than you should be, grading or replaying conversations from the Hilltop. The work is meaningful, but it's also relentless. You'll need to find a sustainable rhythm before next term."
    );
  } else {
    parts.push(
      "You're running on fumes. Every spare moment has been poured into the job — Carter Hall, the Hilltop, the emails, the conversations at the Grind. You care deeply, and it shows. But this pace isn't sustainable. Something will have to give."
    );
  }

  if (stats.academicRigor >= 55) {
    parts.push(
      "In the Hilltop classroom, you've held a standard. Students know that your class requires preparation and that shortcuts won't fly. Some of them resent it now; most of them will appreciate it later. The ones who did the work know it mattered."
    );
  } else if (stats.academicRigor >= 45) {
    parts.push(
      "Your classroom in the Hilltop is a mixed picture. You've been flexible — sometimes necessarily, sometimes because it was easier. The students appreciate your adaptability, but a few of the strong ones are starting to wonder if the bar is where it should be."
    );
  } else {
    parts.push(
      "Academically, you've given ground. The reading moves when there's a match at the Field House. The discussion gets scrapped when the class isn't ready. You're responsive to your students, but responsiveness without a floor becomes drift. Next term, you'll need to decide where the line is."
    );
  }

  if (flags.includes("homophobic_language_unaddressed")) {
    parts.push(
      "There's something else. That night in Carter Hall — the word you heard through the cracked door of Room 214 and walked past. It's still there, echoing faintly in the hallway. Not for you, maybe. But for the kid who heard it and then heard silence from the adult in the hallway. That's a debt you still carry."
    );
  }

  if (flags.includes("priya_frustrated")) {
    parts.push(
      "And there's Priya. She stopped raising her hand in the second half of the term in your Hilltop classroom. Her work is still good — technically. But the spark dimmed the day she told you she was frustrated and you shrugged it off. Students remember those moments longer than we think."
    );
  }

  if (flags.includes("tyler_needs_checkin")) {
    parts.push(
      "You have a note in the back of your mind about Tyler — the quiet kid who went silent during that Carter Hall conversation. You should check in with him next term. Maybe catch him on the Loop, or at the Grind. Some things don't announce themselves."
    );
  }

  if (flags.includes("coach_contacted")) {
    parts.push(
      "Your conversation with Coach Rivas opened a door. You're meeting at the Grind next week to talk about scheduling. Not every teacher-coach relationship at Rare Academy starts that well. There might be something there — a way to build a better system for when the Field House and the Hilltop collide."
    );
  }

  parts.push(
    "The first term is always the hardest. You're still learning the rhythms of Rare Academy — when to push, when to yield, when to speak up, and when to just be present. There are no perfect answers at a boarding school. Only the ones you can live with.\n\nSee you in January."
  );

  return parts.join("\n\n");
}

export function EndReport({ stats, flags, onRestart }: EndReportProps) {
  const narrative = generateNarrative(stats, flags);

  return (
    <div className="end-report">
      <div className="report-header">
        <pre className="report-box">
{"┌──────────────────────────────────────────────┐\n"}
{"│         END OF TERM REPORT                   │\n"}
{"│         Rare Academy — December               │\n"}
{"└──────────────────────────────────────────────┘"}
        </pre>
      </div>

      <div className="report-stats">
        <div className="report-section-header">FINAL ASSESSMENT</div>
        <pre className="report-stats-divider">{"─".repeat(42)}</pre>
        <StatBar label="Student Trust" value={stats.studentTrust} />
        <StatBar label="Colleague Respect" value={stats.colleagueRespect} />
        <StatBar label="Personal Wellbeing" value={stats.personalWellbeing} />
        <StatBar label="Academic Rigor" value={stats.academicRigor} />
      </div>

      <pre className="report-divider">{"═".repeat(42)}</pre>

      <div className="report-narrative">
        {narrative.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {flags.length > 0 && (
        <div className="report-flags">
          <div className="report-section-header">NOTES FOR NEXT TERM:</div>
          {flags.map((flag) => (
            <span key={flag} className="report-flag">
              * {flag.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      )}

      <pre className="report-divider">{"═".repeat(42)}</pre>

      <button className="restart-button" onClick={onRestart}>
        {">"} START A NEW TERM
      </button>
    </div>
  );
}
