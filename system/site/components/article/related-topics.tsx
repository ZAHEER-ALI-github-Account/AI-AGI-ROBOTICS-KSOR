"use client";

import Link from "next/link";
import type { CSSProperties, ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import type { RelatedTopic } from "@/lib/related";

const list: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * The document's own "Related topics" list, as cards: each target's title,
 * its one-sentence description and its section, tinted in the section's tone.
 */
export function RelatedTopics({ topics }: { topics: readonly RelatedTopic[] }): ReactElement | null {
  if (topics.length === 0) return null;

  return (
    <section id="related" aria-labelledby="related-heading" className="not-prose mt-14 scroll-mt-24">
      <div className="mb-5 flex items-center gap-3">
        <span aria-hidden className="h-4 w-1 rounded-full bg-gradient-to-b from-neural-cyan to-neural-violet" />
        <h2 id="related-heading" className="font-display text-xl font-semibold tracking-[-0.015em]">
          Related topics
        </h2>
        <span aria-hidden className="neural-hairline h-px flex-1 opacity-50" />
      </div>
      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        className="grid gap-3 sm:grid-cols-2"
      >
        {topics.map((topic) => (
          <motion.li key={topic.url} variants={item} className="flex">
            <Link
              href={topic.url}
              style={{ "--tone": topic.color } as CSSProperties}
              className="glass glass-hover group relative flex w-full flex-col overflow-hidden rounded-xl p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--tone),transparent)] opacity-60"
              />
              {topic.section === null ? null : (
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--tone)]">
                  <span aria-hidden className="size-1.5 rounded-full bg-[var(--tone)] shadow-[0_0_8px_var(--tone)]" />
                  {topic.section}
                </span>
              )}
              <span className="mt-2 flex items-start justify-between gap-3">
                <span className="font-display text-base leading-snug font-semibold text-fd-foreground">
                  {topic.title}
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="mt-0.5 size-4 shrink-0 text-fd-muted-foreground transition-[transform,color] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--tone)] motion-reduce:transition-none"
                />
              </span>
              {topic.description === null ? null : (
                <span className="mt-1.5 line-clamp-2 text-sm text-fd-muted-foreground">{topic.description}</span>
              )}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
