import type { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: "dorm_duty",
    title: "Chapter 1: Dorm Duty",
    subtitle: "Language in the Hallway",
    date: "Tuesday, September 17 — Week 3",
    setupNarrative:
      "It's 9:45 PM on a Tuesday in Carter Hall — the freshman dorm, a three-story brick building that always smells faintly of microwave popcorn and floor wax. The radiators are clanking their way through the first cool night of September. Outside, rain taps against the hallway windows overlooking the Loop.\n\nYou're doing your evening round. Most doors are closed, light leaking underneath. From somewhere on the second floor, someone is playing lo-fi beats too loudly. The fluorescent lights hum overhead.\n\nAs you pass Room 214, the door cracked about six inches, you hear a group of 9th graders laughing. Then one of them says, loudly:\n\n\"Bro, that's so gay.\"\n\nMore laughter. You can't tell exactly who said it.",
    scenes: [
      {
        id: "dorm_1",
        narrative:
          "You stop in the Carter Hall hallway. The laughter continues inside Room 214. Through the crack you can see the blue glow of a laptop screen reflected on the wall, a Rare Academy pennant tacked above a bunk bed. The radiator beside you ticks.\n\nDown the hall, the stairwell door clicks shut — someone heading to the bathroom. Otherwise, the floor is quiet.\n\nWhat do you do?",
        choices: [
          {
            id: "dorm_1a",
            label: "A",
            text: "Walk in immediately. \"Hey — we need to talk about what I just heard.\"",
            consequence:
              "You push the door open and step inside Room 214. The room goes silent. Four boys stare at you from various positions — Marcus and Derek on the bunk bed, Eli at the desk chair, another kid on the floor with a laptop propped on a pillow. Nobody says anything. A wrestling highlight reel plays on mute now. The energy is immediately defensive. Marcus crosses his arms. Eli looks at the floor.\n\nThe radiator ticks in the corner. Rain streaks the window behind them.\n\nYou have their attention. But it's the tense, wary kind.",
            effects: {},
            nextSceneId: "dorm_2a",
          },
          {
            id: "dorm_1b",
            label: "B",
            text: "Knock on the open door casually. Check in on the vibe first without leading with the comment.",
            consequence:
              "You knock twice on the door frame and lean in with a half-smile. \"Hey guys — what's going on in here?\"\n\nThey look up, relaxed. Derek waves from the top bunk. \"Just watching wrestling highlights.\" Marcus angles the laptop so you can see. They're watching a pin compilation — Coach Rivas's team from last weekend's tournament at the Field House.\n\nThe vibe is easy, comfortable. Eli offers you a Swedish Fish from a bag on his desk. You have an opening.",
            effects: {},
            nextSceneId: "dorm_2b",
          },
          {
            id: "dorm_1c",
            label: "C",
            text: "Let it go this time. Kids say stuff like this constantly. You'll address it if it becomes a pattern.",
            consequence:
              "You keep walking. The laughter fades behind you as you continue down the Carter Hall corridor, past the water fountain with the broken handle, past the RA bulletin board about \"Inclusive Community.\"\n\nYou tell yourself it's not worth the battle tonight. Kids talk like this all the time — it's not targeted at anyone specific. You'll keep an ear out.\n\nBut as you round the corner toward the stairwell, a small thought nags at you: what if someone in that room needed you to say something? The rain picks up outside. You head back to your apartment at the end of the hall.",
            effects: {
              personalWellbeing: 1,
              studentTrust: -1,
              colleagueRespect: -1,
            },
            flags: ["homophobic_language_unaddressed"],
          },
          {
            id: "dorm_1d",
            label: "D",
            text: "Make a mental note and email the dorm head, Pat Almeida. Let them handle the educational piece.",
            consequence:
              "You head back to your apartment at the end of Carter Hall and open your laptop. You draft a quick email to Pat Almeida, the dorm head — twenty years at Rare Academy, dry humor, has seen everything:\n\n\"Hi Pat — Heard some language on the 2nd floor tonight that we should probably address — 'gay' being used as a pejorative. Room 214 area. Wanted to flag it.\"\n\nPat responds the next morning at 6:47 AM: \"Thanks for flagging. I'll send a note to the floor.\" A generic email goes out about \"inclusive language expectations at Rare Academy.\" The boys in Room 214 don't connect it to the moment. The educational opportunity has passed.\n\nPat privately wishes you'd handled the first step yourself.",
            effects: {
              studentTrust: -1,
            },
          },
        ],
      },
      {
        id: "dorm_2a",
        narrative:
          "The four boys in Room 214 are watching you. The silence is heavy. Marcus — you think — mutters \"We were just joking around.\" Derek shifts uncomfortably on the top bunk. Eli's eyes stay on the floor.\n\nYou're standing in the doorway of a freshman dorm room in Carter Hall at 9:50 PM. Rain on the windows. The faint smell of someone's body spray. Four kids who are somewhere between defiant and nervous.\n\nHow do you handle this?",
        choices: [
          {
            id: "dorm_2a_a",
            label: "A",
            text: "Name it directly. \"The word 'gay' used as an insult isn't okay here. Let me explain why.\"",
            consequence:
              "You take a breath and speak clearly. You explain that language like that — even when it feels like \"just a joke\" — creates an environment where people don't feel safe. You mention that statistically, someone on this Carter Hall floor is probably LGBTQ+, and they just heard their identity used as a punch line.\n\nMarcus rolls his eyes. Derek picks at a thread on his blanket. But Eli — quiet, sitting at the desk by the window — catches your eye for just a second. After you leave and pull the door mostly shut, he appears in the hallway.\n\n\"Hey,\" he says quietly, glancing back toward the room. \"Thanks for saying that.\"\n\nIt lands. Not with everyone. But with the person who needed it most.",
            effects: {
              studentTrust: 1,
              colleagueRespect: 2,
            },
          },
          {
            id: "dorm_2a_b",
            label: "B",
            text: "Ask them to reflect. \"How would that land if someone in this room — or on this hall — is gay?\"",
            consequence:
              "The room is quiet for a long beat. Rain against the window. Then Marcus says, slowly: \"I mean... I guess it wouldn't feel great.\"\n\nYou let that sit. Derek adds from the top bunk: \"Yeah, my cousin is gay. I wouldn't say that around him.\" The conversation unfolds cautiously. It takes fifteen minutes you hadn't planned on spending. You notice one kid — Tyler, the one on the floor — goes very quiet and stares at his phone the entire time. He doesn't say a word.\n\nYou make a mental note to check in with Tyler separately. Maybe grab him after study hall, or catch him on the Loop.\n\nThe boys heard each other. That might matter more than hearing it from you. You head back to your apartment. Your stack of ungraded essays from the Hilltop sits untouched on your desk.",
            effects: {
              studentTrust: 2,
              personalWellbeing: -1,
            },
            flags: ["tyler_needs_checkin"],
          },
          {
            id: "dorm_2a_c",
            label: "C",
            text: "Keep it brief and firm. \"That language doesn't fly. I don't need to hear it again.\" Then leave.",
            consequence:
              "You deliver the line with eye contact and authority. A couple of heads nod. \"Yes sir/ma'am,\" from Marcus.\n\nYou pull the door closed behind you and continue your rounds through Carter Hall. Third floor, then back down. Clean. Quick. Professional.\n\nThe rain has stopped by the time you reach your apartment. Through the window you can see the lights of the Hilltop across the Loop, the last classrooms going dark.\n\nThey got the message. Whether they understood it is another question.",
            effects: {
              colleagueRespect: 1,
            },
          },
        ],
      },
      {
        id: "dorm_2b",
        narrative:
          "You're leaning against the door frame of Room 214. The boys are relaxed — Derek is even explaining a double-leg takedown to you, narrating Coach Rivas's strategy from the Field House match. Marcus is laughing. Eli offers you another Swedish Fish.\n\nThe vibe is good. But you heard what you heard on the way in. The word is still hanging in the air, even if they've forgotten about it.\n\nDo you bring it up?",
        choices: [
          {
            id: "dorm_2b_a",
            label: "A",
            text: "Bring it up naturally. \"I heard something on my way by — the word 'gay' as a put-down. Can we talk about that for a sec?\"",
            consequence:
              "The mood shifts slightly but doesn't break. Derek's face flickers — he knows it was him. You keep your tone conversational, not accusatory.\n\n\"Look, I'm not trying to make this a big thing. But words like that matter. Especially in Carter Hall, where you're all living together.\"\n\nThere's a pause. Then Derek goes: \"Yeah... my bad. I wasn't thinking.\" It's not performative. He means it.\n\nThe other boys nod. Marcus says, \"Fair enough.\" The conversation moves on naturally. You say goodnight, remind them lights-out is in ten, and head out into the hallway.\n\nThat's about as well as that can go.",
            effects: {
              studentTrust: 2,
              colleagueRespect: 1,
            },
          },
          {
            id: "dorm_2b_b",
            label: "B",
            text: "Hang out for a minute, then pivot. Watch a clip with them, then steer into \"you know, language matters in a dorm...\"",
            consequence:
              "You watch a clip — a solid pin from the Rare Academy dual meet at the Field House. You laugh at a good takedown. Then you ease into it: \"Hey, while I'm here — I want to mention something about language in the dorms. Words like 'gay' used as an insult? I know it feels like nothing, but it adds up. Especially in a place like Carter Hall where everyone's living on top of each other.\"\n\nThey listen. The message is softer — wrapped in camaraderie. It lands gently rather than sharply. Whether it sticks is hard to say.\n\nYou head out twenty minutes later than planned. The Loop is empty and dark. Your own grading sits untouched on your desk back at the apartment. The radiator clanks as you settle in.",
            effects: {
              studentTrust: 2,
              personalWellbeing: -1,
            },
          },
          {
            id: "dorm_2b_c",
            label: "C",
            text: "Just vibe and leave. The moment's passed and forcing it now would feel weird.",
            consequence:
              "You chat for another minute, say goodnight, and head out. The Carter Hall hallway is quiet now. Someone's turned off the lo-fi beats. The rain has stopped.\n\nYou tell yourself the moment passed. Maybe it did. But as you walk back to your apartment, past the RA bulletin board about \"Inclusive Community,\" that same small thought surfaces: what if someone in that room needed you to say something?\n\nYou didn't. And now the moment is gone.",
            effects: {
              personalWellbeing: 1,
              studentTrust: -1,
              colleagueRespect: -1,
            },
            flags: ["homophobic_language_unaddressed"],
          },
        ],
      },
    ],
  },
  {
    id: "english_class",
    title: "Chapter 2: English Class",
    subtitle: "The Missing Reading",
    date: "Wednesday, October 9 — Week 6",
    setupNarrative:
      "It's period 3, Wednesday morning. Gray October light filters through the tall windows of your classroom on the second floor of the Hilltop. The radiators are working overtime — someone has left a window cracked and the room smells like damp leaves and dry-erase markers.\n\nYour 10th grade English class files in with their copies of The Things They Carried — or, more accurately, without them. You assigned 30 pages for today, a passage that's central to the unit on memory and storytelling in war.\n\nAs class starts, the blank stares tell you everything. Maybe 4 out of 14 kids did the reading.\n\nAiden raises his hand: \"There was a big wrestling match last night at the Field House. Coach Rivas's team. A lot of us were there supporting the team.\"\n\nMurmurs of agreement ripple through the room. Through the window, you can see students crossing the Loop between classes, collars turned up against the wind.",
    scenes: [
      {
        id: "english_1",
        narrative:
          "Fourteen faces look at you from the seminar table. Four of them — Priya, James, Sofia, and Marco — have their books open with annotations. The rest are various shades of apologetic, defiant, or simply blank. Someone's coffee from the Grind is going cold on the windowsill.\n\nAiden's excuse hangs in the air. It's not unreasonable. It's also not your problem.\n\nYou have 45 minutes. What do you do with them?",
        choices: [
          {
            id: "english_1a",
            label: "A",
            text: "Hold the line. \"I appreciate that, but the reading was assigned three days ago. We're having the discussion as planned.\"",
            consequence:
              "You nod at Aiden and then open your discussion questions. \"Let's start with page 117. What does O'Brien mean when he says 'a true war story is never moral'?\"\n\nSilence. The wind pushes at the cracked window. Priya raises her hand. Then James. The four prepared students carry the conversation while the other ten sit in various states of discomfort — some scribbling fake notes, some watching rain streak down the Hilltop windows, some staring at the clock above the whiteboard.\n\nIt's a painful forty minutes. The discussion is thin. The energy is dead. But you held the line.",
            effects: {},
            nextSceneId: "english_2a",
          },
          {
            id: "english_1b",
            label: "B",
            text: "Pivot the lesson. Scrap the discussion, do a close-reading exercise with a short excerpt so everyone can engage.",
            consequence:
              "You take a beat, then pull out a two-page excerpt — the passage about the man Tim O'Brien killed on the trail. \"Okay, change of plans. Everyone open to page 124. We're going to read this together and annotate as we go.\"\n\nRelief washes across the room. You walk them through the passage line by line, the Hilltop classroom quiet except for pens on paper and the occasional question. Even the ones who didn't read are underlining, asking questions. Aiden, who started the wrestling excuse, ends up asking the sharpest question of the day.\n\nIt's a B-minus class. Good enough. Not great. You pack up your notes as the bell rings and students spill out toward the Loop.",
            effects: {
              academicRigor: -1,
              studentTrust: 1,
            },
          },
          {
            id: "english_1c",
            label: "C",
            text: "Give them a break. \"Okay, I get it. Take 15 minutes to read the key passage now, then we'll discuss.\"",
            consequence:
              "\"Alright,\" you say. \"I get it. Open to page 117. You've got fifteen minutes. Read through page 122. Then we talk.\"\n\nThe room goes quiet. Heads bend over books. Some are actually reading. Some are staring at the page and thinking about lunch at the dining hall.\n\nYou notice Ms. Tsao from across the Hilltop hallway walk past your open door, glance in, and see fourteen students silently reading during your class period. Her eyebrow goes up just slightly before she moves on. You make a mental note that she saw that.\n\nThe discussion afterward is shallow but at least everyone can participate. It's something.",
            effects: {
              academicRigor: -1,
              studentTrust: 1,
              colleagueRespect: -1,
            },
          },
          {
            id: "english_1d",
            label: "D",
            text: "Make it a teaching moment about priorities. Have an honest conversation about time management and competing commitments.",
            consequence:
              "You close your book. \"Okay. Let's actually talk about this. Not about the novel — about what just happened. Ten of you didn't do the reading. And the reason is a wrestling match at the Field House. So let's talk about that.\"\n\nThe room shifts. This isn't what they expected. You ask them real questions: How do you manage your time at Rare Academy? What happens when athletics and academics collide? Who sets your priorities — you, or the schedule? Does Coach Rivas know how late his matches run?\n\nIt becomes a genuine conversation. Kids are honest. Outside the Hilltop windows, the clouds break briefly and October sunlight cuts across the seminar table. The bell rings before you know it. You covered zero content today. But something happened in that room.",
            effects: {
              studentTrust: 1,
            },
            nextSceneId: "english_2d",
          },
        ],
      },
      {
        id: "english_2a",
        narrative:
          "The bell rings. Kids file out quickly, relieved, backpacks swinging as they head for the Hilltop stairwell. But Priya lingers. She approaches your desk, clutching her annotated copy of the book — pages flagged with colored tabs, margins dense with notes.\n\n\"That was really frustrating,\" she says. \"I spent an hour on that reading last night while everyone else was at the Field House. I had notes. I was ready to discuss. And it didn't even matter because nobody else did the work.\"\n\nShe's not wrong. And she's looking at you like she wants to know what you're going to do about it.",
        choices: [
          {
            id: "english_2a_a",
            label: "A",
            text: "Validate her. \"You're right, and I'm sorry. I'll figure out how to make this fair.\"",
            consequence:
              "\"Priya, you're right. That wasn't fair to you, and I should have handled it better. I'm going to figure out a way to make sure the people who do the work get recognized for it.\"\n\nHer shoulders relax a little. \"Thank you.\"\n\nShe leaves, heading down the Hilltop stairs toward the science wing. Now you're committed. A reading quiz for next class? A participation grade adjustment? Whatever it is, it means more prep time tonight in your Carter Hall apartment. Your stack of ungraded essays stares at you from the corner of your desk.\n\nBut Priya will remember that you listened. On the Loop outside, the wind picks up.",
            effects: {
              studentTrust: 2,
              academicRigor: 1,
              personalWellbeing: -1,
            },
            flags: ["priya_validated"],
          },
          {
            id: "english_2a_b",
            label: "B",
            text: "Use it as a lesson. \"I hear you. Part of being in a community is dealing with that. But your preparation matters to me.\"",
            consequence:
              "\"I hear you, Priya. And I want you to know — your preparation matters. To me and to the class, even when it doesn't feel like it. Part of being in a community like Rare Academy is that sometimes you carry more than your share. That's frustrating. But it also means something.\"\n\nShe nods slowly. She's not fully satisfied, but she feels heard. \"Okay. Thanks.\"\n\nShe heads out into the Hilltop corridor, merging with the between-period crowd. You feel like you threaded a needle — not perfectly, but well enough. Through the window, you watch students crossing the Loop in the gray October light.",
            effects: {
              studentTrust: 1,
              colleagueRespect: 1,
            },
          },
          {
            id: "english_2a_c",
            label: "C",
            text: "Shrug it off. \"Some days are like that. We'll get back on track.\"",
            consequence:
              "\"Eh, some days are like that, Priya. Don't worry about it. We'll get back on track tomorrow.\"\n\nHer face falls. She nods politely and leaves. But something has shifted. You can see it in the way she tucks her annotated book into her bag — carefully, like it matters to her, even if it doesn't seem to matter to anyone else. The colored tabs stick out from the pages like small flags of effort.\n\nThe following week, you notice Priya's annotations have stopped. Her hand goes up less often in your Hilltop classroom. She's still doing the reading. But the spark is dimmer.\n\nYou lost something in that moment.",
            effects: {
              studentTrust: -2,
            },
            flags: ["priya_frustrated"],
          },
        ],
      },
      {
        id: "english_2d",
        narrative:
          "The bell rings. As kids pack up, Jake — the one who brought up the wrestling match — lingers by your desk while the Hilltop hallway fills with noise outside.\n\n\"I mean, Coach Rivas basically told us we had to be at the match,\" he says. Other kids still in the room nod as they file past. \"It's not like we were just blowing off the reading.\"\n\nHe's not being disrespectful. He's being honest. And he's surfacing a real tension in boarding school life at Rare Academy — one that's way above your pay grade.",
        choices: [
          {
            id: "english_2d_a",
            label: "A",
            text: "Acknowledge the tension. \"That's real. There's a conflict there and I don't have a clean answer. But the reading still needs to happen.\"",
            consequence:
              "\"Jake, I believe you. And I think that's a real problem — when you feel like you're being pulled in two directions by adults who both have authority over your time. I don't have a clean answer for that.\"\n\nHe nods.\n\n\"But here's what I can tell you: the reading still needs to happen. Not because I'm being rigid — because the ideas in this book matter. And you deserve to engage with them, not just skip past them.\"\n\nJake looks at you for a second. \"Yeah. Okay. Fair.\" He heads out into the Hilltop hallway.\n\nIt's a small moment. But you were honest, and he respected that. You gather your things and head to the Grind for coffee, feeling drained but intact. The leaves on the Loop are turning gold.",
            effects: {
              studentTrust: 2,
              academicRigor: 1,
              personalWellbeing: -1,
            },
          },
          {
            id: "english_2d_b",
            label: "B",
            text: "Talk to the coach. After class, email Coach Rivas about the impact on academics.",
            consequence:
              "After class, you sit down at your Hilltop desk and draft an email to Coach Rivas:\n\n\"Hi Coach — I wanted to flag something. A number of my 10th graders didn't complete their English reading last night because of the wrestling match at the Field House. I totally support the team, but I'm wondering if there's a way we can coordinate so students aren't put in a position where they have to choose. Happy to chat about it — maybe at the Grind sometime this week?\"\n\nYou hit send. An hour later, the reply comes back:\n\n\"Thanks for reaching out. I hear you. Let's grab coffee Thursday and figure something out.\"\n\nThat's... actually the best-case scenario. Not every coach at Rare Academy responds that way. You got lucky — or maybe you just wrote a good email.",
            effects: {
              colleagueRespect: 2,
              studentTrust: 1,
            },
            flags: ["coach_contacted"],
          },
          {
            id: "english_2d_c",
            label: "C",
            text: "Assign it for tomorrow and move on. Just push the reading back a day.",
            consequence:
              "\"Tell you what — read it tonight. We'll pick up the discussion tomorrow. No harm, no foul.\"\n\nJake grins. \"Thanks.\" He's out the door and into the Hilltop corridor in seconds.\n\nIt's the path of least resistance. Everyone's happy in the moment. But you've set a precedent: if there's a conflict with the Field House schedule, the reading moves. Next time there's a match, or a dance, or a long weekend — the reading will move again.\n\nYou walk to the Grind for a coffee. Through the window, you watch students heading to the Field House for afternoon practice. You can feel the standard shifting under your feet, just slightly.",
            effects: {
              academicRigor: -1,
            },
          },
        ],
      },
    ],
  },
];
