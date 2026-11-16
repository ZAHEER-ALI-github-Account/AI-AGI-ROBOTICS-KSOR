"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Lenis smooth scrolling for the whole site.
 *
 * It scrolls the window itself, so everything that listens to native scroll —
 * the hero's GSAP ScrollTrigger, the reading progress bar, the table of
 * contents — keeps working untouched. It stands aside wherever scrolling
 * belongs to something else: dialogs, menus, the sidebar and the table of
 * contents scroll natively, and the 3D graph keeps the wheel for zooming
 * (`data-lenis-prevent`). Under reduced motion Lenis itself turns smoothing
 * off, and a touch screen keeps its native scroll.
 */
const NATIVE =
  "[role=dialog], [role=menu], [data-radix-popper-content-wrapper], #nd-sidebar, #nd-toc, #site-mobile-menu, pre, [data-lenis-prevent]";

export function SmoothScroll(): null {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const instance = new Lenis({
      autoRaf: true,
      lerp: 0.11,
      wheelMultiplier: 1,
      // In-page links (#section) glide too, landing below the navbar.
      anchors: { offset: -88 },
      // When a dialog locks the page (overflow: hidden), Lenis pauses.
      autoToggle: true,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
      prevent: (node) => node.closest(NATIVE) !== null,
    });
    lenis.current = instance;
    return () => {
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  // A new page has a new height, and the router has already put the window at
  // its top: let Lenis measure again from there instead of gliding back.
  useEffect(() => {
    const instance = lenis.current;
    if (instance === null) return;
    instance.resize();
    if (window.location.hash === "") instance.scrollTo(window.scrollY, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
