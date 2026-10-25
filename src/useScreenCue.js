import { useCallback, useEffect, useRef, useState } from "react";

// What the TV shows while someone hovers or focuses a tape.
//
// Seizure safety (WCAG 2.3.1 / 2.3.2): switching between static and the title
// screen is a big brightness change. Sweeping the mouse across the tapes could
// trigger it many times a second, so changes are throttled:
//   - hover intent: the pointer must rest on a tape briefly before it cues
//   - leaving waits a moment, so moving tape to tape never drops back to static
//   - MIN_GAP between any two screen changes caps it at 2 per second
const ENTER_DELAY = 120;
const LEAVE_DELAY = 220;
const MIN_GAP = 500; // ms. At most 2 changes (1 full flash cycle) per second

export function useScreenCue() {
  const [cued, setCued] = useState(null);
  const shown = useRef(null);
  const wanted = useRef(null);
  const lastChange = useRef(-Infinity);
  const timer = useRef(0);

  const apply = useCallback(() => {
    if (wanted.current === shown.current) return;
    const wait = lastChange.current + MIN_GAP - performance.now();
    if (wait > 0) {
      timer.current = setTimeout(apply, wait);
      return;
    }
    shown.current = wanted.current;
    lastChange.current = performance.now();
    setCued(wanted.current);
  }, []);

  const request = useCallback(
    (tape) => {
      wanted.current = tape;
      clearTimeout(timer.current);
      timer.current = setTimeout(apply, tape ? ENTER_DELAY : LEAVE_DELAY);
    },
    [apply]
  );

  useEffect(() => () => clearTimeout(timer.current), []);
  return [cued, request];
}
