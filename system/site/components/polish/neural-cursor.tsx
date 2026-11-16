"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";

/**
 * The glowing cursor: a bright cyan dot exactly at the pointer, and a soft ring
 * that trails it and opens up over anything clickable.
 *
 * Desktop only — it mounts for a fine pointer that can hover, and never on a
 * touch screen. The system cursor comes back over text fields, where the
 * I-beam matters, and whenever the pointer leaves the window. Under reduced
 * motion the ring follows exactly instead of trailing.
 */
const INTERACTIVE = "a, button, [role=button], [role=menuitem], [role=tab], summary, label, select, [data-cursor=hover]";
const TEXT = "input, textarea, [contenteditable=true], [contenteditable='']";

export function NeuralCursor(): ReactElement | null {
  const [enabled, setEnabled] = useState(false);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dotEl = dot.current;
    const ringEl = ring.current;
    if (dotEl === null || ringEl === null) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("neural-cursor");

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let frame = 0;
    let visible = false;

    const setState = (state: string): void => {
      if (ringEl.dataset.state !== state) ringEl.dataset.state = state;
      if (dotEl.dataset.state !== state) dotEl.dataset.state = state;
    };

    const loop = (): void => {
      const k = reduced ? 1 : 0.2;
      rx += (x - rx) * k;
      ry += (y - ry) * k;
      ringEl.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      frame = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (event: PointerEvent): void => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        root.classList.add("neural-cursor-visible");
      }
      dotEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(TEXT)) setState("text");
      else if (target?.closest(INTERACTIVE) || document.body.style.cursor === "pointer") setState("hover");
      else setState("idle");
      if (frame === 0) frame = requestAnimationFrame(loop);
    };
    const onDown = (): void => ringEl.classList.add("is-down");
    const onUp = (): void => ringEl.classList.remove("is-down");
    const onLeave = (): void => {
      visible = false;
      root.classList.remove("neural-cursor-visible");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("neural-cursor", "neural-cursor-visible");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} aria-hidden className="neural-cursor-ring" data-state="idle" />
      <div ref={dot} aria-hidden className="neural-cursor-dot" data-state="idle" />
    </>
  );
}
