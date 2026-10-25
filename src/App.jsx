import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import CuckooColors from "./pages/CuckooColors.jsx";
import { useEffects } from "./effects.jsx";

const TITLES = {
  "/": "Katie Taylor Web Design",
  "/resume": "Resume | Katie Taylor",
  "/services": "Services and pricing | Katie Taylor Web Design",
  "/portfolio": "Portfolio | Katie Taylor Web Design",
  "/about": "About | Katie Taylor Web Design",
  "/cuckoo-colors": "Cuckoo Colors | Katie Taylor Web Design",
};

function EffectsToggle() {
  const { effects, setEffects } = useEffects();
  return (
    <button
      type="button"
      className="fx-toggle"
      aria-pressed={effects}
      onClick={() => setEffects(!effects)}
    >
      Motion &amp; effects: {effects ? "on" : "off"}
    </button>
  );
}

export default function App() {
  const location = useLocation();
  const { reducedMotion, effects } = useEffects();
  const still = reducedMotion || !effects;

  // Each page gets its own title (2.4.2). Focus is handled by useRouteFocus.
  useEffect(() => {
    document.title = TITLES[location.pathname] ?? TITLES["/"];
  }, [location.pathname]);

  // Page change looks like the tape catching: a quick horizontal jolt.
  const variants = still
    ? { initial: { opacity: 1 }, enter: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, x: -6, filter: "brightness(1.6)" },
        enter: { opacity: 1, x: 0, filter: "brightness(1)", transition: { duration: 0.35 }, transitionEnd: { filter: "none", transform: "none" } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      };

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname} variants={variants} initial="initial" animate="enter" exit="exit">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            {/* Not in the tape menu on purpose; linked from the portfolio. */}
            <Route path="/cuckoo-colors" element={<CuckooColors />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <EffectsToggle />
    </>
  );
}
