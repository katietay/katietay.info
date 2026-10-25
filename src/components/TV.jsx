import { forwardRef } from "react";
import Static from "./Static.jsx";

// Placeholder CRT built in CSS. Swap `.tv-shell` for your Blender render
// (transparent WebP) and keep `.screen` positioned over the render's glass.
// Everything on the screen is decorative; the tapes carry the real links.
const TV = forwardRef(function TV({ cued, playing }, screenRef) {
  const mode = playing ? "play" : cued ? "cue" : "idle";
  const tape = playing || cued;

  return (
    <div className="tv" data-mode={mode}>
      <div className="tv-shell">
        <div className="tv-bezel">
          <div className="screen" ref={screenRef} aria-hidden="true">
            <Static intensity={mode === "idle" ? 1 : 0.35} />
            <div className="screen-tint" />
            <div className="osd">
              <div className="osd-row">
                <span>{mode === "idle" ? "CH 03" : mode === "play" ? "▶ PLAY" : "▶▶ CUE"}</span>
                <span>{mode === "idle" ? "" : "SP"}</span>
              </div>
              <div className="osd-center">
                {mode === "idle" ? (
                  <span key="idle" className="osd-blink">INSERT TAPE</span>
                ) : (
                  <span key={tape.id} className="osd-title">{tape.osd}</span>
                )}
              </div>
              <div className="osd-row">
                <span>{mode === "idle" ? "" : "TRACKING"}</span>
                <span>{mode === "idle" ? "AUTO" : tape.runtime}</span>
              </div>
            </div>
            <div className="scanlines" />
            <div className="glass" />
          </div>
        </div>
        <div className="tv-panel" aria-hidden="true">
          <span className="tv-badge">KT&middot;COLOR 19</span>
          <span className="tv-grille" />
          <span className="tv-knob" />
          <span className="tv-knob small" />
          <span className="tv-led" />
        </div>
      </div>
    </div>
  );
});

export default TV;
