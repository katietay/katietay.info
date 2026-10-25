import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TAPES } from "../tapes.js";
import { useEffects } from "../effects.jsx";
import { useRouteFocus } from "../focus.js";

// Shared frame for inner pages: VCR on-screen display in the corners,
// plain text nav, and the "be kind, rewind" footer.
function Counter() {
  const { effects, reducedMotion } = useEffects();
  const [s, setS] = useState(0);
  useEffect(() => {
    if (!effects || reducedMotion) return;
    const id = setInterval(() => setS((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [effects, reducedMotion]);
  const hh = Math.floor(s / 3600);
  const mm = String(Math.floor(s / 60) % 60).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return <span className="tabular">{`${hh}:${mm}:${ss}`}</span>;
}

export default function Deck({ tapeId, title, kicker = "Now playing", children }) {
  const tape = TAPES.find((t) => t.id === tapeId);
  useRouteFocus();
  return (
    <div className="deck">
      <div className="osd-corner tl" aria-hidden="true">
        <span className="rec">{"▶"} PLAY</span> <span>SP</span>
      </div>
      <div className="osd-corner tr" aria-hidden="true">
        <Counter />
      </div>

      <header className="deck-head">
        <Link to="/" className="eject">
          <span aria-hidden="true">{"⏏"}</span> Eject
          <span className="visually-hidden">: back to home page</span>
        </Link>
        <nav aria-label="Main">
          <ul className="deck-nav">
            {TAPES.map((t) => (
              <li key={t.id}>
                <NavLink to={t.path}>{t.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="tracking" aria-hidden="true" />

      <main id="main" className="deck-main">
        <p className="deck-kicker">{kicker}</p>
        <h1 className="deck-title">{title || tape.label}</h1>
        {children}
      </main>

      <footer className="deck-foot">{"■"} STOP &nbsp; BE KIND, REWIND</footer>
    </div>
  );
}
