"use client";

import type { ReactElement, ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Every Framer Motion animation on the site honours the reader's
 * `prefers-reduced-motion`: movement is dropped, opacity changes stay.
 */
export function MotionProvider({ children }: { children: ReactNode }): ReactElement {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
