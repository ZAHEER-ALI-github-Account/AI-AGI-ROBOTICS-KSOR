"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { animate, inView } from "framer-motion";

/**
 * Fades the document's blocks up as they scroll into view (Framer Motion).
 *
 * It renders nothing and wraps nothing: the prose stays exactly the server's
 * HTML, so a reader without JavaScript — or a crawler — gets the whole page,
 * visible. Only blocks still BELOW the fold when the page mounts are hidden and
 * revealed; what is already on screen never flickers. Reduced motion: nothing.
 */
const BLOCKS = ":scope :is(h2, h3, h4, p, ul, ol, pre, table, blockquote, figure, [data-card], .ksor-callout)";

export function ProseReveal({ root = "#nd-page" }: { root?: string }): null {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = document.querySelector(root);
    if (container === null) return;

    const fold = window.innerHeight;
    const targets = Array.from(container.querySelectorAll<HTMLElement>(BLOCKS)).filter(
      (el) =>
        // A block inside another block moves with its parent.
        el.parentElement?.closest("li, blockquote, table, pre, figure, [data-card], .not-prose") === null &&
        el.getBoundingClientRect().top > fold,
    );
    for (const el of targets) {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
    }

    const stop = inView(
      targets,
      (el) => {
        animate(el, { opacity: 1, transform: "translateY(0px)" }, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
      },
      { margin: "0px 0px -8% 0px" },
    );

    return () => {
      stop();
      for (const el of targets) {
        el.style.opacity = "";
        el.style.transform = "";
      }
    };
  }, [pathname, root]);

  return null;
}
