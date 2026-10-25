import { useEffect, useRef } from "react";
import { useEffects } from "../effects.jsx";

// TV snow drawn on a small canvas and scaled up.
// WCAG 2.3.2 (AAA) has no small-area exception, so even single grains must
// not "flash". A flash needs a change of 0.1 or more in relative luminance.
// Every grain is clamped to sRGB 50..100 (relative luminance 0.032..0.127),
// so the biggest possible change is 0.095. It reads as static, never flashes.
const W = 180;
const H = 135;
const FPS = 14;

export default function Static({ intensity = 1 }) {
  const ref = useRef(null);
  const intensityRef = useRef(intensity);
  const { effects, reducedMotion } = useEffects();
  const animate = effects && !reducedMotion;

  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const img = ctx.createImageData(W, H);
    const d = img.data;
    let raf = 0;
    let last = 0;
    let bar = Math.random() * H;

    const draw = () => {
      const k = intensityRef.current;
      // Grey band: mid-grey base, amplitude scales with intensity.
      const base = 70 + 6 * k;
      const amp = 22 + 34 * k;
      for (let y = 0; y < H; y++) {
        // Slow rolling band, a little brighter, like bad tracking.
        const dist = Math.abs(y - bar);
        const lift = dist < 10 ? (10 - dist) * 1.2 * k : 0;
        for (let x = 0; x < W; x++) {
          const v = Math.min(100, Math.max(50, base + lift + (Math.random() - 0.5) * amp));
          const i = (y * W + x) * 4;
          d[i] = v * 0.96;
          d[i + 1] = v;
          d[i + 2] = v * 0.96;
          d[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      bar = (bar + 0.6) % (H + 20);
    };

    const loop = (t) => {
      if (t - last > 1000 / FPS) {
        draw();
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };

    draw();
    if (animate) raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  return <canvas ref={ref} width={W} height={H} className="static" aria-hidden="true" />;
}
