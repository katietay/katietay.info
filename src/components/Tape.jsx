import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { useEffects } from "../effects.jsx";

// One VHS tape spine. It is a real link: keyboard, screen reader, middle-click
// and "open in new tab" all behave normally. Only a plain click plays the
// insert animation before navigating.
// Click sequence: the tape flies into the VCR slot (onLoaded runs the zoom into
// the TV), then the page changes. `targetRef` is the VCR slot.
export default function Tape({ tape, targetRef, onCue, onStart, onLoaded, busy }) {
  const controls = useAnimationControls();
  const navigate = useNavigate();
  const ref = useRef(null);
  const { reducedMotion, effects } = useEffects();

  const handleClick = async (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (busy) return;
    if (reducedMotion || !effects || !targetRef.current || !ref.current) {
      navigate(tape.path);
      return;
    }
    onStart(tape);
    // Fly the tape from its spot in the stack into the VCR slot. It squashes to
    // the slot's shape as it goes in, then disappears inside.
    const from = ref.current.getBoundingClientRect();
    const to = targetRef.current.getBoundingClientRect();
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const sx = (to.width * 0.92) / from.width;
    const sy = (to.height * 0.9) / from.height;
    // The list is a 3D scene, so z-index does nothing here. Depth decides who is
    // in front: push the chosen tape toward the viewer while it crosses the other
    // tapes, then bring it back to the plane so it lands exactly on the slot.
    await controls.start({
      x: [null, 0, dx],
      y: [null, -22, dy],
      z: [0, 100, 100, 0],
      scaleX: [null, 1.03, sx],
      scaleY: [null, 1.03, sy],
      opacity: [null, 1, 1, 0],
      transition: {
        duration: 0.85,
        times: [0, 0.3, 1],
        ease: "easeInOut",
        z: { duration: 0.85, times: [0, 0.18, 0.8, 1], ease: "linear" },
        opacity: { duration: 0.85, times: [0, 0.3, 0.88, 1], ease: "linear" },
      },
    });
    await onLoaded(tape);
    navigate(tape.path);
  };

  return (
    // Hover is tracked on the <li>, which never moves. If the moving tape
    // tracked it, the tape could slide out from under the pointer, lose hover,
    // slide back, and loop.
    <li
      className="tape-slot"
      style={{ "--tilt": `${tape.tilt}deg`, "--nudge": `${tape.nudge}px` }}
      onMouseEnter={() => onCue(tape)}
      onMouseLeave={() => onCue(null)}
    >
      <motion.div ref={ref} animate={controls} className="tape-motion">
        <Link
          to={tape.path}
          className="tape"
          onClick={handleClick}
          onFocus={() => onCue(tape)}
          onBlur={() => onCue(null)}
        >
          <span className="tape-end" aria-hidden="true" />
          <span className="tape-runtime" aria-hidden="true">{tape.runtime}</span>
          <span className="tape-label" data-wear={tape.wear}>
            <span className="tape-paper">
              <span className="tape-title" style={{ "--hand": `${tape.hand}deg` }}>{tape.label}</span>
            </span>
          </span>
          <span className="tape-end" aria-hidden="true" />
        </Link>
      </motion.div>
    </li>
  );
}
