import path from "node:path";

import { conceptRoute, dirOfRoute } from "./index-routes";
import { sectionTone, TONE_COLOR } from "./section-tone";
import { entriesUnder, getSortedPages } from "./source";
import { stagedBody } from "./stage-manifest";

/**
 * A document's "Related topics", as the record writes them.
 *
 * Read from the document's own `## Related topics` list in the staged
 * (per-audience) copy — the site invents no relation. A link whose target this
 * build does not admit resolves to no page, so it simply has no card.
 */

/** The "Related topics" section's relative `.md` links, resolved to routes. */
export function relatedRoutes(pagePath: string): string[] {
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

export interface RelatedTopic {
  readonly url: string;
  readonly title: string;
  readonly description: string | null;
  /** The top-level section it sits in, by its display title. */
  readonly section: string | null;
  /** The section's tone colour (lib/section-tone.ts). */
  readonly color: string;
}

/** The related documents of one page, in the order the record lists them. */
export function relatedTopics(pagePath: string): RelatedTopic[] {
  const normalized = pagePath.replaceAll("\\", "/");
  const pages = getSortedPages();
  const sections = entriesUnder("").map((entry) => {
    const dir = entry.documents > 0 ? dirOfRoute(entry.url) : null;
    return { dir, url: entry.url, title: entry.title, tone: sectionTone(entry.title, dir !== null) };
  });

  const seen = new Set<string>();
  const out: RelatedTopic[] = [];
  for (const route of relatedRoutes(normalized)) {
    const page = pages.find((p) => p.url.replace(/\/$/, "") === route);
    if (page === undefined || seen.has(page.url)) continue;
    seen.add(page.url);
    const targetPath = page.path.replaceAll("\\", "/");
    const section =
      sections.find((s) => s.dir !== null && targetPath.startsWith(`${s.dir}/`)) ??
      sections.find((s) => s.url === page.url);
    out.push({
      url: page.url,
      title: page.data.title,
      description: page.data.description?.trim() || null,
      section: section?.title ?? null,
      color: TONE_COLOR[section?.tone ?? "ai"],
    });
  }
  return out;
}
