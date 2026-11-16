"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, PointerEvent, ReactElement } from "react";

import { TONE_COLOR, type SectionTone } from "@/lib/section-tone";

/** One top-level section of the record, as the homepage shows it. */
export interface SectionCard {
  readonly url: string;
  readonly title: string;
  /** Documents it holds; 0 for a single top-level document. */
  readonly documents: number;
  /** The first few document titles inside it, in reading order. */
  readonly preview: readonly string[];
  /** The document's own description, for a single top-level document. */
  readonly description: string | null;
  readonly tone: SectionTone;
}

const TONE_LABEL: Readonly<Record<SectionTone, string>> = {
  agi: "AGI",
  robotics: "Robotics",
  ai: "AI",
  reference: "Reference",
};

const grid: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  shown: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** The spotlight follows the pointer across the card. */
function trackPointer(event: PointerEvent<HTMLAnchorElement>): void {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  target.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function SectionCards({ sections }: { sections: readonly SectionCard[] }): ReactElement | null {
  const reduced = useReducedMotion();
  if (sections.length === 0) return null;

  return (
    <section id="sections" aria-labelledby="sections-heading" className="relative scroll-mt-20">
      <div className="mx-auto w-full max-w-[97rem] px-4 pt-16 pb-28 md:px-6">
        <motion.div
          data-reveal
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-neural-cyan uppercase">The record</p>
            <h2 id="sections-heading" className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold">
              {sections.length} sections
            </h2>
          </div>
          <ul className="flex flex-wrap gap-4 font-mono text-[10px] tracking-[0.18em] text-fd-muted-foreground uppercase">
            {(["ai", "robotics", "agi", "reference"] as const).map((tone) => (
              <li key={tone} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="size-2 rounded-full"
                  style={{ background: TONE_COLOR[tone], boxShadow: `0 0 10px ${TONE_COLOR[tone]}` }}
                />
                {TONE_LABEL[tone]}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.ul
          data-reveal
          variants={grid}
          initial={reduced ? false : "hidden"}
          whileInView="shown"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {sections.map((section, i) => {
            const color = TONE_COLOR[section.tone];
            return (
              <motion.li key={section.url} data-reveal variants={reduced ? undefined : card} className="flex">
                <Link
                  href={section.url}
                  onPointerMove={trackPointer}
                  style={{ "--tone": color } as CSSProperties}
                  className="glass group relative flex w-full flex-col overflow-hidden rounded-2xl p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--tone)_55%,transparent)] hover:shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--tone)_70%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {/* Spotlight and a hairline of the section's colour. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(260px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklab, ${color} 16%, transparent), transparent 70%)`,
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-x-5 top-0 h-px opacity-70"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                  />

                  <span className="relative flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-wider tabular-nums" style={{ color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-fd-muted-foreground uppercase">
                      <span aria-hidden className="size-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                      {TONE_LABEL[section.tone]}
                    </span>
                  </span>

                  <span className="relative mt-6 font-display text-xl leading-snug font-semibold tracking-[-0.01em] text-balance">
                    {section.title}
                  </span>

                  {section.preview.length > 0 ? (
                    <ul className="relative mt-3 grid gap-1 text-[13px] leading-snug text-fd-muted-foreground">
                      {section.preview.map((title) => (
                        <li key={title} className="truncate">
                          {title}
                        </li>
                      ))}
                    </ul>
                  ) : section.description === null ? null : (
                    <span className="relative mt-3 line-clamp-3 text-[13px] leading-snug text-fd-muted-foreground">
                      {section.description}
                    </span>
                  )}

                  <span className="relative mt-auto flex items-center justify-between pt-6 font-mono text-[10px] tracking-[0.16em] text-fd-muted-foreground uppercase">
                    {section.documents > 0
                      ? `${section.documents} document${section.documents === 1 ? "" : "s"}`
                      : "Document"}
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color }}
                    />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
