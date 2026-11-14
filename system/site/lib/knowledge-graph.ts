import path from "node:path";

import { conceptRoute, dirOfRoute } from "./index-routes";
import { sectionTone, type SectionTone } from "./section-tone";
import { entriesUnder, getSortedPages } from "./source";
import { stagedBody } from "./stage-manifest";

/**
 * The record as a graph, for the 3D knowledge graph page.
 *
 * Nodes are the record's own documents plus one node per section folder; the
 * AGI section's node is the central hub. Lines are:
 *   - `related` — each document's "Related topics" list, read from its body,
 *   - `member`  — a document to its section,
 *   - `hub`     — the AGI hub to every other section.
 *
 * Everything is read from the staged (per-audience) copy of the record, so a
 * document this build may not show is not a node, and a link to it is not a
 * line. The layout is computed here, once, by a small seeded force simulation,
 * so the graph is the same on every load and the browser only has to draw it.
 */

export type GraphNodeKind = "article" | "section" | "hub";
export type GraphLinkKind = "related" | "member" | "hub";

export interface GraphNode {
  readonly url: string;
  readonly title: string;
  readonly description: string | null;
  readonly kind: GraphNodeKind;
  /** Key of the section it belongs to (its own key, for a section node). */
  readonly section: string;
  readonly color: string;
  readonly position: readonly [number, number, number];
  /** Related-topic connections, which sizes the node. */
  readonly degree: number;
}

export interface GraphLink {
  readonly source: number;
  readonly target: number;
  readonly kind: GraphLinkKind;
}

export interface GraphSection {
  readonly key: string;
  readonly title: string;
  readonly url: string;
  readonly tone: SectionTone;
  readonly color: string;
  /** Documents in it. */
  readonly count: number;
  /** Index of its node — the section node, or the document itself. */
  readonly node: number;
}

export interface KnowledgeGraph {
  readonly nodes: readonly GraphNode[];
  readonly links: readonly GraphLink[];
  readonly sections: readonly GraphSection[];
  /** Related-topic connections only. */
  readonly relatedCount: number;
}

/** Shades within each tone family, so neighbouring sections can be told apart. */
const PALETTE: Readonly<Record<SectionTone, readonly string[]>> = {
  ai: ["#00e5ff", "#38bdf8", "#2dd4bf", "#67e8f9", "#22d3ee", "#7dd3fc"],
  robotics: ["#8b5cf6", "#c084fc", "#a78bfa", "#d8b4fe"],
  agi: ["#ffc857"],
  reference: ["#7da2ff", "#93c5fd"],
};

function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The "Related topics" section's relative `.md` links, resolved to routes. */
function relatedRoutes(pagePath: string): string[] {
  const body = stagedBody(pagePath);
  const start = /^##\s+Related topics\s*$/im.exec(body);
  if (start === null) return [];
  const rest = body.slice(start.index + start[0].length);
  const end = /^##\s/m.exec(rest);
  const block = end === null ? rest : rest.slice(0, end.index);

  const routes: string[] = [];
  for (const match of block.matchAll(/\[[^\]]*\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g)) {
    const href = decodeURI(match[1].split("#")[0] ?? "");
    if (!href.endsWith(".md") || /^[a-z]+:/i.test(href)) continue;
    const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(pagePath), href));
    if (resolved.startsWith("..") || resolved.endsWith("index.md")) continue;
    routes.push(conceptRoute(resolved));
  }
  return routes;
}

type Vec = [number, number, number];

export function knowledgeGraph(): KnowledgeGraph {
  const pages = getSortedPages();
  const rand = seeded(20260815);

  // ── Sections, from the record's top level, in reading order. ──
  interface Draft {
    url: string;
    title: string;
    description: string | null;
    kind: GraphNodeKind;
    section: string;
    color: string;
    pagePath: string | null;
  }
  const drafts: Draft[] = [];
  const sections: (Omit<GraphSection, "node"> & { node: number; center: Vec; pinned: boolean })[] = [];
  const used: Record<SectionTone, number> = { ai: 0, robotics: 0, agi: 0, reference: 0 };

  for (const entry of entriesUnder("")) {
    const dir = entry.documents > 0 ? dirOfRoute(entry.url) : null;
    const tone = sectionTone(entry.title, dir !== null);
    const family = PALETTE[tone];
    const color = family[used[tone] % family.length];
    used[tone] += 1;
    const key = dir ?? entry.url;
    if (dir !== null) {
      sections.push({ key, title: entry.title, url: entry.url, tone, color, count: entry.documents, node: drafts.length, center: [0, 0, 0], pinned: true });
      drafts.push({ url: entry.url, title: entry.title, description: null, kind: tone === "agi" ? "hub" : "section", section: key, color, pagePath: null });
    } else {
      // A single top-level document (the glossary, the references) is its own
      // one-node section.
      const page = pages.find((p) => p.url === entry.url);
      sections.push({ key, title: entry.title, url: entry.url, tone, color, count: 1, node: drafts.length, center: [0, 0, 0], pinned: true });
      drafts.push({ url: entry.url, title: entry.title, description: entry.description, kind: "article", section: key, color, pagePath: page?.path.replaceAll("\\", "/") ?? null });
    }
  }

  // ── Every other document, under the section that holds it. ──
  const sectionOf = (pagePath: string): (typeof sections)[number] | undefined =>
    sections.find((s) => pagePath.startsWith(`${s.key}/`));
  for (const page of pages) {
    if (drafts.some((d) => d.url === page.url)) continue;
    const pagePath = page.path.replaceAll("\\", "/");
    const section = sectionOf(pagePath);
    if (section === undefined) continue;
    drafts.push({
      url: page.url,
      title: page.data.title,
      description: page.data.description?.trim() || null,
      kind: "article",
      section: section.key,
      color: section.color,
      pagePath,
    });
  }

  // ── Where each section sits: AGI at the centre, AI sections on an arc to
  //    the left, robotics and reference to the right — so the hub visibly
  //    joins the two clusters. ──
  const placeArc = (group: typeof sections, side: -1 | 1, radius: number): void => {
    group.forEach((section, i) => {
      const t = group.length === 1 ? 0.5 : i / (group.length - 1);
      const angle = (-0.42 + t * 0.84) * Math.PI; // top to bottom
      section.center = [
        side * radius * Math.cos(angle),
        radius * 0.78 * Math.sin(-angle),
        (i % 2 === 0 ? 1 : -1) * radius * 0.28,
      ];
    });
  };
  placeArc(sections.filter((s) => s.tone === "ai"), -1, 11);
  placeArc(sections.filter((s) => s.tone === "robotics" || s.tone === "reference"), 1, 11);
  for (const s of sections) if (s.tone === "agi") s.center = [0, 0, 0];

  // ── Links. ──
  const indexOf = new Map(drafts.map((d, i) => [d.url, i] as const));
  const links: GraphLink[] = [];
  const seen = new Set<string>();
  const add = (a: number, b: number, kind: GraphLinkKind): void => {
    if (a === b) return;
    const id = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(id)) return;
    seen.add(id);
    links.push({ source: a, target: b, kind });
  };
  const degree = new Array<number>(drafts.length).fill(0);
  drafts.forEach((draft, i) => {
    if (draft.pagePath === null) return;
    for (const route of relatedRoutes(draft.pagePath)) {
      const target = indexOf.get(route);
      if (target === undefined || target === i) continue;
      const before = links.length;
      add(i, target, "related");
      if (links.length > before) {
        degree[i] += 1;
        degree[target] += 1;
      }
    }
  });
  const relatedCount = links.length;
  drafts.forEach((draft, i) => {
    if (draft.kind !== "article") return;
    const section = sections.find((s) => s.key === draft.section);
    if (section !== undefined && section.node !== i) add(section.node, i, "member");
  });
  const hub = sections.find((s) => s.tone === "agi");
  if (hub !== undefined) for (const s of sections) if (s !== hub) add(hub.node, s.node, "hub");

  // ── Layout: articles orbit their section; related links pull gently
  //    across clusters; everything repels a little. ──
  const center = (i: number): Vec => sections.find((s) => s.key === drafts[i].section)?.center ?? [0, 0, 0];
  const pinned = drafts.map((d, i) => sections.some((s) => s.node === i));
  const pos: Vec[] = drafts.map((_, i) => {
    const c = center(i);
    if (pinned[i]) return [...c];
    return [c[0] + (rand() - 0.5) * 6, c[1] + (rand() - 0.5) * 6, c[2] + (rand() - 0.5) * 6];
  });
  const vel: Vec[] = drafts.map(() => [0, 0, 0]);
  const related = links.filter((l) => l.kind === "related");

  for (let step = 0; step < 360; step += 1) {
    const cooling = 1 - step / 400;
    for (let i = 0; i < pos.length; i += 1) {
      if (pinned[i]) continue;
      const force: Vec = [0, 0, 0];
      // Repulsion.
      for (let j = 0; j < pos.length; j += 1) {
        if (i === j) continue;
        const d: Vec = [pos[i][0] - pos[j][0], pos[i][1] - pos[j][1], pos[i][2] - pos[j][2]];
        const dist2 = Math.max(0.25, d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
        const push = 2.4 / dist2;
        const dist = Math.sqrt(dist2);
        force[0] += (d[0] / dist) * push;
        force[1] += (d[1] / dist) * push;
        force[2] += (d[2] / dist) * push;
      }
      // Pull to its section, to a shell ~3 units out.
      const c = center(i);
      const toC: Vec = [c[0] - pos[i][0], c[1] - pos[i][1], c[2] - pos[i][2]];
      const dc = Math.hypot(...toC) || 1;
      const pull = (dc - 3.2) * 0.06;
      force[0] += (toC[0] / dc) * pull;
      force[1] += (toC[1] / dc) * pull;
      force[2] += (toC[2] / dc) * pull;
      for (let k = 0; k < 3; k += 1) {
        vel[i][k] = (vel[i][k] + force[k]) * 0.82 * cooling;
      }
    }
    // Related links: a weak spring between the two ends.
    for (const link of related) {
      const a = pos[link.source];
      const b = pos[link.target];
      const d: Vec = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
      const dist = Math.hypot(...d) || 1;
      const pull = (dist - 6) * 0.0035;
      for (let k = 0; k < 3; k += 1) {
        if (!pinned[link.source]) vel[link.source][k] += (d[k] / dist) * pull;
        if (!pinned[link.target]) vel[link.target][k] -= (d[k] / dist) * pull;
      }
    }
    for (let i = 0; i < pos.length; i += 1) {
      if (pinned[i]) continue;
      for (let k = 0; k < 3; k += 1) pos[i][k] += vel[i][k];
    }
  }

  const round = (v: number): number => Math.round(v * 1000) / 1000;
  return {
    nodes: drafts.map((d, i) => ({
      url: d.url,
      title: d.title,
      description: d.description,
      kind: d.kind,
      section: d.section,
      color: d.color,
      position: [round(pos[i][0]), round(pos[i][1]), round(pos[i][2])] as const,
      degree: degree[i],
    })),
    links,
    sections: sections.map(({ key, title, url, tone, color, count, node }) => ({ key, title, url, tone, color, count, node })),
    relatedCount,
  };
}
