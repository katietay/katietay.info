import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import TV from "../components/TV.jsx";
import Tape from "../components/Tape.jsx";
import VCR from "../components/VCR.jsx";
import { TAPES } from "../tapes.js";
import { useRouteFocus } from "../focus.js";
import { useScreenCue } from "../useScreenCue.js";
import Consult from "../components/Consult.jsx";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const screenRef = useRef(null);
  const slotRef = useRef(null);
  const sceneRef = useRef(null);
  const sceneControls = useAnimationControls();
  const [cued, requestCue] = useScreenCue();
  const [playing, setPlaying] = useState(null);
  const [phase, setPhase] = useState("idle"); // idle | load | play | zoom
  useRouteFocus();

  // The zoom locks page scroll; always give it back when leaving.
  useEffect(() => () => { document.documentElement.style.overflow = ""; }, []);

  // A tape was clicked: the VCR starts loading.
  const handleStart = () => setPhase("load");

  // The tape is inside. The VCR and TV say PLAY, then the camera pushes in on
  // the TV screen until it fills the window. The page changes after that.
  const handleLoaded = async (tape) => {
    setPlaying(tape);
    setPhase("play");
    await wait(450);
    const scene = sceneRef.current;
    const screen = screenRef.current;
    if (!scene || !screen) return;
    const sr = screen.getBoundingClientRect();
    const sc = scene.getBoundingClientRect();
    const cx = sr.left + sr.width / 2;
    const cy = sr.top + sr.height / 2;
    const scale = Math.max(window.innerWidth / sr.width, window.innerHeight / sr.height) * 1.04;
    document.documentElement.style.overflow = "hidden";
    scene.style.transformOrigin = `${cx - sc.left}px ${cy - sc.top}px`;
    setPhase("zoom");
    await sceneControls.start({
      x: window.innerWidth / 2 - cx,
      y: window.innerHeight / 2 - cy,
      scale,
      transition: { duration: 0.95, ease: [0.6, 0, 0.25, 1] },
    });
  };

  const idle = phase === "idle";
  const vcrMode = phase === "idle" ? "idle" : phase === "load" ? "load" : "play";

  return (
    <main id="main" className="home" data-phase={phase}>
      <header className="home-head">
        <div>
          <h1 className="name">Katie Taylor</h1>
          <p className="kicker">Websites for schools, nonprofits, and small businesses. Accessible from the start.</p>
        </div>
        <Consult>Book a free consult</Consult>
      </header>

      <motion.section className="scene" aria-label="Pick a tape" ref={sceneRef} animate={sceneControls}>
        <div className="wall-glow" aria-hidden="true" />
        <TV ref={screenRef} cued={cued} playing={playing} />
        <div className="rack">
          <nav className="stack" aria-label="Main">
            <p className="stack-hint">Pick a tape</p>
            <ul>
              {TAPES.map((t) => (
                <Tape
                  key={t.id}
                  tape={t}
                  targetRef={slotRef}
                  onCue={(tape) => idle && requestCue(tape)}
                  onStart={handleStart}
                  onLoaded={handleLoaded}
                  busy={!idle}
                />
              ))}
            </ul>
          </nav>
          <VCR ref={slotRef} mode={vcrMode} />
        </div>
        <div className="shelf" aria-hidden="true" />
      </motion.section>

      <section className="intro" aria-labelledby="intro-h">
        <figure className="photo" style={{ "--tilt": "2.5deg" }}>
          <img
            src="/images/katie-illustration.webp"
            width="800"
            height="1000"
            alt="Illustration of Katie with blue hair and round glasses, smiling over her shoulder from a desk with a large monitor full of code"
          />
          <figcaption>Katie, Redmond WA</figcaption>
        </figure>
        <div>
          <h2 id="intro-h">Websites that work for every person who visits.</h2>
          <p className="lede">
            I'm Katie. I build, rebuild, and look after websites for schools, nonprofits, and small
            businesses. I taught for eight years before I wrote code for a living, so I explain
            things plainly, plan carefully, and think about the person on the other side of the screen.
          </p>
          <p className="cta-row">
            <Consult>Book a free consult</Consult>
            <Link className="btn ghost" to="/services">Services and pricing</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
