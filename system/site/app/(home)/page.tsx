import type { ReactElement } from "react";

import { NeuralHero } from "@/components/home/neural-hero";
import { SectionCards, type SectionCard } from "@/components/home/section-cards";
import { dirOfRoute } from "@/lib/index-routes";
import { sectionTone } from "@/lib/section-tone";
import { appName, appPurpose, appTitle } from "@/lib/shared";
import { entriesUnder, getSortedPages } from "@/lib/source";

/**
 * The front door: the Neural Core hero, then one card per section.
 *
 * Every string comes from `instance.md` or the record itself — the title and
 * purpose from instance.md, the sections and their documents from the
 * regenerated indexes — so the site still holds no authored content
 * (AGENTS.md, critical rule 1). A built site admits only what §2.5 admits, so
 * a record of drafts builds this page in its empty state.
 */
export default function HomePage(): ReactElement {
  // The first document in sidebar order — never a hardcoded path.
  const pages = getSortedPages();
  const [first] = pages;

  if (first === undefined) {
    return (
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20">
        <p className="text-fd-muted-foreground">
          the record is empty — add a document to <code>knowledge/</code>
        </p>
      </main>
    );
  }

  const sections: SectionCard[] = entriesUnder("").map((entry) => {
    const isFolder = entry.documents > 0;
    const dir = isFolder ? dirOfRoute(entry.url) : null;
    return {
      url: entry.url,
      title: entry.title,
      documents: entry.documents,
      preview: dir === null ? [] : entriesUnder(dir).slice(0, 3).map((child) => child.title),
      description: entry.description,
      tone: sectionTone(entry.title, isFolder),
    };
  });

  return (
    <main className="flex flex-1 flex-col">
      <NeuralHero
        title={appTitle}
        purpose={appPurpose}
        name={appName}
        documents={pages.length}
        firstUrl={first.url}
      />
      <SectionCards sections={sections} />
    </main>
  );
}
