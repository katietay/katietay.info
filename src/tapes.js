// The menu tapes. Portfolio and About are hidden for now: their pages and tapes
// are removed from the menu and routes, and the page files stay in src/pages.
// `hand` is how crooked the handwriting is, in degrees.
// `wear` picks which corner of the paper label is torn: "tr", "bl", or "none".
export const TAPES = [
  {
    id: "services",
    path: "/services",
    label: "Services and pricing",
    osd: "SERVICES",
    runtime: "T-120",
    wear: "tr",
    hand: -2.5,
    tilt: -2.2,
    nudge: 14,
  },
  {
    id: "resume",
    path: "/resume",
    label: "Resume",
    osd: "RESUME",
    runtime: "T-120",
    wear: "bl",
    hand: -1,
    tilt: -0.6,
    nudge: 4,
  },
];

export const CALENDLY = "https://calendly.com/katietaylor24/30min";
