"use client";

import type { ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";

/** A block that rises into place the first time it scrolls into view. */
export function FadeIn({ children, className }: { children: ReactNode; className?: string }): ReactElement {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
