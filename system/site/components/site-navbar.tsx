import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

import mark from "@/app/icon.png";
import { SignIn } from "@/components/sign-in";
import {
  MobileMenu,
  NavGraphLink,
  NavSearch,
  NavSections,
  type NavSection,
} from "@/components/site-navbar-client";
import { appTitle } from "@/lib/shared";
import { entriesUnder } from "@/lib/source";

/**
 * The futuristic navbar every route wears: the record's mark and title, its
 * sections, and search.
 *
 * The section links are READ from the record — its top-level folders and
 * documents, in governed `order:` — never typed here, so the site still holds
 * no authored content (AGENTS.md, critical rule 1) and a section added to
 * `knowledge/` appears in the navbar at the next build. A built site admits
 * only what §2.5 admits, so a record of drafts shows no sections there.
 *
 * It is 3.5rem tall, and `--fd-banner-height` in app/global.css says so to the
 * docs layout, which is what keeps the sidebar and table of contents below it.
 */
export function SiteNavbar(): ReactElement {
  const sections: NavSection[] = entriesUnder("").map((entry, index) => ({
    url: entry.url,
    title: entry.title,
    description: entry.description,
    documents: entry.documents,
    index: index + 1,
  }));

  return (
    <header className="glass-strong sticky top-0 z-40 h-14 border-b border-[var(--neural-glass-border)]">
      <nav
        aria-label="Site"
        className="mx-auto flex h-full w-full max-w-[97rem] items-center gap-3 px-4 md:gap-6 md:px-6"
      >
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring"
        >
          <span className="relative grid size-8 shrink-0 place-items-center">
            <span
              aria-hidden
              className="absolute inset-0 rounded-lg bg-[conic-gradient(from_200deg,#00e5ff,#8b5cf6,#ffc857,#00e5ff)] opacity-70 blur-[6px] transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
            />
            <Image
              src={mark}
              alt=""
              width={28}
              height={28}
              priority
              className="relative size-7 rounded-md ring-1 ring-white/15"
            />
          </span>
          <span className="truncate font-display text-[0.95rem] font-semibold tracking-[-0.01em] text-fd-foreground">
            {appTitle}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <NavSections sections={sections} />
          {sections.length === 0 ? null : <NavGraphLink />}
        </div>

        <div className="ms-auto flex items-center gap-2">
          <NavSearch />
          <SignIn />
          <MobileMenu sections={sections} />
        </div>
      </nav>
      <div aria-hidden className="neural-hairline absolute inset-x-0 -bottom-px h-px opacity-70" />
    </header>
  );
}
