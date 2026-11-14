"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import { MousePointer2, Move3d, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { FlightRequest } from "@/components/graph/knowledge-graph-scene";
import type { KnowledgeGraph as Graph } from "@/lib/knowledge-graph";

const KnowledgeGraphScene = dynamic(() => import("@/components/graph/knowledge-graph-scene"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full place-items-center font-mono text-[11px] tracking-[0.2em] text-fd-muted-foreground uppercase">
      Loading the graph…
    </div>
  ),
});

export function KnowledgeGraph({ graph }: { graph: Graph }): ReactElement {
  const router = useRouter();
  const [hovered, setHovered] = useState<number | null>(null);
  const [opening, setOpening] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const flight = useRef<FlightRequest | null>(null);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setMounted(true);
  }, []);

  const onHover = useCallback(
    (index: number | null) => {
      setHovered(index);
      if (index !== null) router.prefetch(graph.nodes[index].url);
    },
    [graph.nodes, router],
  );

  // Click: fly to the node, then open it.
  const onSelect = useCallback(
    (index: number) => {
      setOpening(index);
      flight.current = {
        node: index,
        onArrive: () => router.push(graph.nodes[index].url),
      };
    },
    [graph.nodes, router],
  );

  // Legend: fly to a section without leaving the page.
  const focusSection = useCallback((node: number) => {
    flight.current = { node };
  }, []);

  const shown = opening ?? hovered;
  const node = shown === null ? null : graph.nodes[shown];
  const section = node === null ? null : graph.sections.find((s) => s.key === node.section);
  const articles = graph.nodes.filter((n) => n.kind === "article").length;

  return (
    <div className="relative h-[calc(100svh-3.5rem)] min-h-[32rem] w-full overflow-hidden">
      <div className="absolute inset-0">
        {mounted ? (
          <KnowledgeGraphScene
            nodes={graph.nodes}
            links={graph.links}
            hovered={hovered}
            onHover={onHover}
            onSelect={onSelect}
            flight={flight}
            reducedMotion={reducedMotion}
          />
        ) : null}
      </div>

      {/* Header and legend. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto flex w-full max-w-[97rem] flex-col gap-4 px-4 pt-6 md:px-6">
        <div className="glass pointer-events-auto w-fit max-w-full rounded-2xl px-5 py-4">
          <p className="font-mono text-[10px] tracking-[0.22em] text-neural-cyan uppercase">Knowledge graph</p>
          <h1 className="mt-1.5 font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
            Every article, connected
          </h1>
          <p className="mt-1.5 font-mono text-[11px] tracking-wider text-fd-muted-foreground uppercase">
            {articles} articles · {graph.relatedCount} related-topic links · {graph.sections.length} sections
          </p>
        </div>

        <ul aria-label="Sections" className="pointer-events-auto flex max-w-3xl flex-wrap gap-1.5">
          {graph.sections.map((s) => (
            <li key={s.key}>
              <button
                type="button"
                onClick={() => focusSection(s.node)}
                onMouseEnter={() => setHovered(s.node)}
                onMouseLeave={() => setHovered(null)}
                className="glass-strong flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-fd-muted-foreground transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
              >
                <span aria-hidden className="size-2 rounded-full" style={{ background: s.color, boxShadow: `0 0 10px ${s.color}` }} />
                {s.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* What the pointer is on. */}
      <AnimatePresence>
        {node === null ? null : (
          <motion.div
            key={node.url}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="glass-strong pointer-events-none absolute right-4 bottom-20 z-10 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border p-5 md:right-6"
            style={{ borderColor: `color-mix(in oklab, ${node.color} 45%, transparent)` }}
            role="status"
          >
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: node.color }}>
              <span aria-hidden className="size-1.5 rounded-full" style={{ background: node.color }} />
              {node.kind === "article" ? (section?.title ?? "Article") : node.kind === "hub" ? "Central hub · section" : "Section"}
            </p>
            <p className="mt-2 font-display text-lg leading-snug font-semibold">{node.title}</p>
            {node.description === null ? null : (
              <p className="mt-2 line-clamp-3 text-sm text-fd-muted-foreground">{node.description}</p>
            )}
            <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-fd-muted-foreground uppercase">
              {opening === shown ? "Opening…" : node.kind === "article" ? `${node.degree} related · click to open` : "Click to open"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* How to use it. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 mx-auto flex w-full max-w-[97rem] flex-wrap gap-x-5 gap-y-1 px-4 font-mono text-[10px] tracking-[0.18em] text-fd-muted-foreground uppercase md:px-6">
        <span className="flex items-center gap-1.5"><Move3d aria-hidden className="size-3.5" /> Drag to rotate</span>
        <span className="flex items-center gap-1.5"><ZoomIn aria-hidden className="size-3.5" /> Scroll to zoom</span>
        <span className="flex items-center gap-1.5"><MousePointer2 aria-hidden className="size-3.5" /> Hover · click to open</span>
      </div>

      {/* The same graph as a list, for screen readers and keyboards. */}
      <nav aria-label="All articles by section" className="sr-only">
        <ul>
          {graph.sections.map((s) => (
            <li key={s.key}>
              <Link href={s.url}>{s.title}</Link>
              <ul>
                {graph.nodes
                  .filter((n) => n.kind === "article" && n.section === s.key && n.url !== s.url)
                  .map((n) => (
                    <li key={n.url}>
                      <Link href={n.url}>{n.title}</Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
