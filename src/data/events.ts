import type { InterstitialEvent } from "../types";

export const interstitialEvents: InterstitialEvent[] = [
  {
    id: "parent_email",
    text: "A parent emails you at 11:14 PM asking why their son got a B+ on his essay. You're already in bed in your Carter Hall apartment, lights off. Your phone buzzes on the nightstand. You pick it up, read the email twice, start composing three different replies, delete all of them, and put the phone face-down on the carpet.\n\nYou stare at the ceiling for ten minutes before sleep comes back.",
    effects: {
      personalWellbeing: -1,
    },
  },
  {
    id: "tsao_compliment",
    text: "You're cutting through the Hilltop on your way to second period when Ms. Tsao falls into step beside you. She's carrying a stack of photocopies and a coffee from the Grind.\n\n\"Hey — I heard you handled that dorm thing well the other night.\" She gives you a quick nod. \"Pat Almeida mentioned it at the faculty meeting. Just wanted you to know.\"\n\nShe peels off toward the science wing before you can respond. You didn't realize anyone knew about it.",
    effects: {
      colleagueRespect: 1,
    },
  },
  {
    id: "forgotten_handouts",
    text: "7:45 AM. You're halfway down the Loop when it hits you: the handouts for your first period class are sitting on the printer in your Carter Hall apartment. Your class starts at 8:00. The Hilltop is in the opposite direction.\n\nYou sprint back across the quad in untied shoes, past two students who look mildly alarmed, grab the stack off the printer, and make it to your classroom at 7:59 with your shirt untucked and your heart hammering.\n\nNobody notices. Small mercies.",
    effects: {},
  },
  {
    id: "saturday_premier_league",
    text: "Saturday duty. The campus is quiet — half the students are at an away game, the other half are scattered. You're doing a loop through Carter Hall common room when a sophomore, Mateo, looks up from the TV.\n\n\"Hey, do you watch the Premier League? Arsenal's on in five minutes.\"\n\nYou sit down. One game becomes two. Two becomes three. Mateo explains the offside rule to you incorrectly but with great enthusiasm. A few other students drift in. Someone makes microwave popcorn.\n\nIt's the most relaxed you've felt in weeks.",
    effects: {
      personalWellbeing: 1,
      studentTrust: 1,
    },
  },
];

export function pickRandomEvents(count: number): InterstitialEvent[] {
  const shuffled = [...interstitialEvents].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
