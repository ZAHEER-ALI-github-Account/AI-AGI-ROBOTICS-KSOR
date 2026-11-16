"use client";

import { useEffect, useRef, type ReactElement } from "react";

/**
 * The reading pages' background: a few dozen points of light drifting slowly,
 * with faint lines between near neighbours. A plain 2D canvas — no WebGL, no
 * library — so it costs almost nothing next to the text it sits behind.
 *
 * It sleeps when the tab is hidden, draws one still frame under reduced
 * motion, and halves its density on small screens.
 */
const COLORS = ["0 229 255", "139 92 246", "255 200 87"] as const;

interface Mote {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: (typeof COLORS)[number];
  phase: number;
}

export function ParticleField(): ReactElement {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (element == null || context == null) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let motes: Mote[] = [];
    let frame = 0;
    let last = performance.now();

    const seed = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      element.width = Math.round(width * dpr);
      element.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, (width * height) / 22000));
      motes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.04 - Math.random() * 0.1,
        r: 0.6 + Math.random() * 1.4,
        // Mostly cyan, some violet, a rare gold.
        color: COLORS[i % 11 === 0 ? 2 : i % 3 === 0 ? 1 : 0],
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (time: number): void => {
      const dt = Math.min(64, time - last) / 16.7;
      last = time;
      context.clearRect(0, 0, width, height);

      for (const m of motes) {
        if (!reduced) {
          m.x += m.vx * dt;
          m.y += m.vy * dt;
          if (m.y < -10) m.y = height + 10;
          if (m.x < -10) m.x = width + 10;
          if (m.x > width + 10) m.x = -10;
        }
      }

      // Faint links between close motes.
      const LINK = 120;
      for (let i = 0; i < motes.length; i += 1) {
        for (let j = i + 1; j < motes.length; j += 1) {
          const a = motes[i];
          const b = motes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          const alpha = (1 - Math.sqrt(d2) / LINK) * 0.09;
          context.strokeStyle = `rgb(${a.color} / ${alpha})`;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      for (const m of motes) {
        const twinkle = reduced ? 0.6 : 0.45 + 0.35 * Math.sin(time / 1400 + m.phase);
        context.fillStyle = `rgb(${m.color} / ${twinkle})`;
        context.shadowColor = `rgb(${m.color} / 0.8)`;
        context.shadowBlur = 6;
        context.beginPath();
        context.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        context.fill();
      }
      context.shadowBlur = 0;

      if (!reduced) frame = requestAnimationFrame(draw);
    };

    const start = (): void => {
      cancelAnimationFrame(frame);
      last = performance.now();
      frame = requestAnimationFrame(draw);
    };
    const onVisibility = (): void => {
      if (document.hidden) cancelAnimationFrame(frame);
      else if (!reduced) start();
    };
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = (): void => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        seed();
        if (reduced) draw(performance.now());
      }, 150);
    };

    seed();
    start();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      aria-hidden
      data-particle-field=""
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
    />
  );
}
