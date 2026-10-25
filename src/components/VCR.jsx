import { forwardRef, useEffect, useState } from "react";

// CSS VCR that sits under the tape stack. The tape slot (`ref`) is where a
// tape flies in. Everything here is decorative; the tapes carry the real links.
// The display shows the visitor's own local time, in their locale's format
// (12 or 24 hour), and keeps it current.
function useLocalTime() {
  const read = () => {
    const parts = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t)?.value ?? "";
    const ampm = get("dayPeriod").toUpperCase();
    const hour = ampm ? get("hour") : get("hour").padStart(2, "0");  // 24-hour clocks read 05:11
    return { hm: `${hour}:${get("minute")}`, ampm };
  };
  const [t, setT] = useState(read);
  useEffect(() => {
    const id = setInterval(() => setT(read()), 5000);
    return () => clearInterval(id);
  }, []);
  return t;
}

// mode: "idle" | "load" | "play"
const VCR = forwardRef(function VCR({ mode }, slotRef) {
  const time = useLocalTime();
  const text = mode === "load" ? "LOAD" : mode === "play" ? "PLAY" : time.hm;
  return (
    <div className="vcr" data-mode={mode} aria-hidden="true">
      <div className="vcr-main">
        <span className="vcr-logo">KT&middot;VHS HI-FI</span>
        <div className="vcr-slot" ref={slotRef}>
          <span className="vcr-lip" />
        </div>
      </div>
      <div className="vcr-side">
        <span className="vcr-display">
          <span>{text}</span>
          {mode === "idle" && time.ampm ? <span className="vcr-ampm">{time.ampm}</span> : null}
        </span>
        <span className="vcr-btns">
          <span /><span /><span />
        </span>
      </div>
      <span className="vcr-feet" />
    </div>
  );
});

export default VCR;
