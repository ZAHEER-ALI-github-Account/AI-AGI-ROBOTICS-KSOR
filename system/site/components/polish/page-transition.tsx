"use client";

import { useLayoutEffect, useRef, type ReactElement, type ReactNode } from "react";
import { animate } from "framer-motion";

/**
 * The fade between pages, used by the route templates (app/template.tsx and
 * the section templates under it), which Next re-mounts on every navigation.
 *
 * Opacity only: a transform or a filter on an ancestor would turn every
 * `position: fixed` inside it (the reading progress bar, the particle canvas)
 * into a child of the moving box for the length of the fade.
 *
 * The FIRST page of a visit is never faded: it arrives as server HTML, and
 * hiding that until JavaScript runs would blank the page for a reader whose
 * bundle is slow or fails. Reduced motion: no fade.
 */
const firstPath = typeof window === "undefined" ? null : window.location.pathname;
let navigated = false;

function shouldAnimate(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (!navigated && window.location.pathname === firstPath) return false;
  navigated = true;
  return true;
}

export function PageTransition({
  children,
  className,
  targets,
}: {
  children: ReactNode;
  className?: string;
  /**
   * Fade these elements instead of the wrapper. For a layout whose grid places
   * the page's own children, the wrapper is `display: contents` and cannot
   * carry an opacity of its own.
   */
  targets?: string;
}): ReactElement {
  const wrapper = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!shouldAnimate()) return;
    const elements: HTMLElement[] =
      targets === undefined
        ? wrapper.current === null
          ? []
          : [wrapper.current]
        : Array.from(document.querySelectorAll<HTMLElement>(targets));
    const controls = elements.map((el) =>
      animate(el, { opacity: [0, 1] }, { duration: 0.45, ease: [0.22, 1, 0.36, 1] }),
    );
    return () => {
      for (const c of controls) c.stop();
      for (const el of elements) el.style.opacity = "";
    };
  }, [targets]);

  return (
    <div ref={wrapper} className={className} style={targets === undefined ? undefined : { display: "contents" }}>
      {children}
    </div>
  );
}
