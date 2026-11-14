"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowRight, Network } from "lucide-react";

import type { NeuralCoreInput } from "@/components/home/neural-core-scene";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Three.js stays out of the server render and out of the first JS chunk: the
// scene is fetched in the browser after the page is interactive.
const NeuralCoreScene = dynamic(() => import("@/components/home/neural-core-scene"), {
  ssr: false,
  loading: () => null,
});

/** Mobile gets a lighter cloud. */
function particleCount(): number {
  if (typeof window === "undefined") return 2600;
  return window.matchMedia("(max-width: 767px)").matches ? 1300 : 2600;
}

export interface NeuralHeroProps {
  /** instance.md's title — "AI, AGI & Robotics". */
  title: string;
  /** instance.md's description, the record's own statement of scope. */
  purpose: string | null;
  /** instance.md's name, the machine identity. */
  name: string;
  documents: number;
  firstUrl: string;
}

export function NeuralHero({ title, purpose, name, documents, firstUrl }: NeuralHeroProps): ReactElement {
  const section = useRef<HTMLElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const input = useRef<NeuralCoreInput>({ morph: 0, pointerX: 0, pointerY: 0 });
  const [count, setCount] = useState(2600);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setCount(particleCount());
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    setMounted(true);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // The core leans towards the pointer anywhere on the page.
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      input.current.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      input.current.pointerY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Stop rendering the scene once the hero has scrolled away.
  useEffect(() => {
    const node = section.current;
    if (node === null) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: "100px",
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ── Text reveal: words rise out of their own line masks, then the
        //    subtitle sweeps in and the rest fades up. ──
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
        intro
          .from("[data-hero-eyebrow]", { opacity: 0, y: 12, duration: 0.6 })
          .from("[data-hero-word]", { yPercent: 115, rotate: 4, duration: 1.05, stagger: 0.07 }, "-=0.3")
          .from(
            "[data-hero-subtitle]",
            { clipPath: "inset(0 100% 0 0)", opacity: 0, duration: 1.1, ease: "power3.inOut" },
            "-=0.6",
          )
          .from("[data-hero-fade]", { opacity: 0, y: 18, duration: 0.8, stagger: 0.1 }, "-=0.5");

        // ── Scroll: the brain becomes a robot head while the hero is pinned
        //    (CSS sticky); the headline lifts away and the caption arrives. ──
        const scroll = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            onUpdate: (self) => {
              const morph = gsap.utils.clamp(0, 1, (self.progress - 0.08) / 0.72);
              input.current.morph = morph;
              setStage(morph < 0.5 ? 0 : 1);
            },
          },
        });
        scroll
          .to(copy.current, { opacity: 0.12, y: -70, filter: "blur(4px)", ease: "none", duration: 0.5 }, 0.05)
          .fromTo(
            "[data-hero-caption]",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.25 },
            0.62,
          )
          .to("[data-hero-progress]", { scaleX: 1, ease: "none", duration: 1 }, 0);
      });

      // Reduced motion: no intro, no morph — the brain simply rests.
      return () => mm.revert();
    },
    { scope: section },
  );

  const words = title.split(/\s+/).filter(Boolean);

  return (
    <section
      ref={section}
      aria-label="Introduction"
      className={reducedMotion ? "relative" : "relative h-[260vh]"}
    >
      <div className="sticky top-14 h-[calc(100svh-3.5rem)] min-h-[34rem] overflow-hidden">
        {/* The scene, behind everything. */}
        <div className="absolute inset-0">
          {mounted ? (
            <NeuralCoreScene input={input} count={count} reducedMotion={reducedMotion} active={active} />
          ) : null}
        </div>

        {/* Keep the headline legible over the cloud. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_20%_50%,rgb(5_6_10/78%),transparent_70%)] max-[899px]:bg-[radial-gradient(ellipse_90%_60%_at_50%_45%,rgb(5_6_10/70%),transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#05060a]"
        />

        <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-[97rem] items-center px-4 md:px-6">
          <div ref={copy} className="pointer-events-auto max-w-2xl">
            <p
              data-hero-eyebrow
              className="flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-fd-muted-foreground uppercase"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-neural-cyan shadow-[0_0_12px_#00e5ff]" />
              System of record <span aria-hidden className="text-white/20">/</span>
              <span className="normal-case">{name}</span>
            </p>

            <h1 className="mt-6 font-display font-semibold tracking-[-0.03em]">
              <span className="block text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98]">
                {words.map((word, i) => (
                  <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <span data-hero-word className="inline-block">
                      {word}
                    </span>
                    {i < words.length - 1 ? " " : null}
                  </span>
                ))}
              </span>
              <span
                data-hero-subtitle
                className="text-neural mt-3 block text-[clamp(1.25rem,2.6vw,2rem)] leading-tight tracking-[-0.015em]"
              >
                <span className="text-white/30">— </span>Knowledge Source of Record
              </span>
            </h1>

            {purpose === null ? null : (
              <p data-hero-fade className="mt-7 max-w-xl text-base/relaxed text-pretty text-[#a7b0c4] sm:text-lg/relaxed">
                {purpose}
              </p>
            )}

            <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={firstUrl}
                className="group inline-flex items-center gap-2.5 rounded-full bg-neural-cyan px-6 py-3 text-sm font-semibold text-[#00131a] shadow-[0_0_32px_-6px_rgb(0_229_255/70%)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_44px_-4px_rgb(0_229_255/85%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring motion-reduce:transition-none"
              >
                Open the record
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/graph"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
              >
                <Network aria-hidden className="size-4 text-neural-gold" />
                Knowledge graph
              </Link>
              <a
                href="#sections"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
              >
                {documents} documents
                <ArrowDown aria-hidden className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* The second beat, as the head forms. A label for the animation,
            not a claim — claims live in the record. */}
        {reducedMotion ? null : (
          <div
            data-hero-caption
            className="pointer-events-none absolute inset-x-0 bottom-[16%] z-10 mx-auto w-full max-w-[97rem] px-4 opacity-0 md:px-6"
          >
            <p className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-tight font-semibold tracking-[-0.02em]">
              Intelligence, <span className="text-neural">embodied.</span>
            </p>
          </div>
        )}

        {/* Stage indicator and scroll cue. */}
        {reducedMotion ? null : (
          <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-full max-w-[97rem] items-center gap-4 px-4 md:px-6">
            <span
              className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors ${stage === 0 ? "text-neural-cyan" : "text-fd-muted-foreground"}`}
            >
              Neural core
            </span>
            <span className="relative h-px w-24 overflow-hidden bg-white/10 sm:w-40">
              <span
                data-hero-progress
                className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-neural-cyan to-neural-violet"
              />
            </span>
            <span
              className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors ${stage === 1 ? "text-neural-violet" : "text-fd-muted-foreground"}`}
            >
              Embodied
            </span>
            <span className="ms-auto hidden items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-fd-muted-foreground uppercase sm:flex">
              Scroll <ArrowDown aria-hidden className="size-3 motion-safe:animate-bounce" />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
