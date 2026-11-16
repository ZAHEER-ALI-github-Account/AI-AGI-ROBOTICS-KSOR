"use client";

import type { ReactElement } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * How far through the document the reader is: a thin neon line pinned under
 * the navbar. Spring-smoothed, except under reduced motion, where it tracks the
 * scroll exactly.
 */
export function ReadingProgress(): ReactElement {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-14 z-50 h-[2px] bg-white/[0.04]">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-neural-cyan via-neural-violet to-neural-gold shadow-[0_0_12px_rgb(0_229_255/60%)]"
        style={{ scaleX: reduced ? scrollYProgress : smooth }}
      />
    </div>
  );
}
