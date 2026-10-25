// The three menu tapes. Order here is top-to-bottom in the stack.
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
    id: "portfolio",
    path: "/portfolio",
    label: "Portfolio",
    osd: "PORTFOLIO",
    runtime: "T-120",
    wear: "tr",
    hand: 1.8,
    tilt: 1.6,
    nudge: -6,
  },
  {
    id: "about",
    path: "/about",
    label: "About",
    osd: "ABOUT",
    runtime: "T-160",
    wear: "none",
    hand: 1.5,
    tilt: 1.4,
    nudge: -10,
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
