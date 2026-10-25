import { createContext, useContext, useEffect, useState } from "react";

// Two separate settings:
// - reducedMotion: from the OS. Freezes animation, never overridden.
// - effects: the visitor's own toggle for static and scanlines. Defaults to on,
//   remembered per browser.
const EffectsContext = createContext({ effects: true, reducedMotion: false, setEffects: () => {} });
const KEY = "ktwd-effects";

function readStored() {
  try {
    const v = localStorage.getItem(KEY);
    return v === null ? true : v === "on";
  } catch {
    return true;
  }
}

export function EffectsProvider({ children }) {
  const [effects, setEffectsState] = useState(readStored);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (typeof matchMedia !== "function") return;
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.effects = effects ? "on" : "off";
  }, [effects]);

  const setEffects = (next) => {
    setEffectsState(next);
    try {
      localStorage.setItem(KEY, next ? "on" : "off");
    } catch {
      /* storage blocked; setting lasts for this visit only */
    }
  };

  return (
    <EffectsContext.Provider value={{ effects, reducedMotion, setEffects }}>
      {children}
    </EffectsContext.Provider>
  );
}

export const useEffects = () => useContext(EffectsContext);
