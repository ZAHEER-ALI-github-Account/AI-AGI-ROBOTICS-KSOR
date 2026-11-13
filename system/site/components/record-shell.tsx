import type { ReactElement, ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { appName } from "@/lib/shared";
import { basePath, getSortedPageTree, getSortedPages } from "@/lib/source";

/**
 * The chrome every page of the record wears: the governed tree as a sidebar,
 * search, and the record's own identity at its foot.
 *
 * The FRONT DOOR wears it too. A system of record whose first page hides the
 * record behind a marketing layout makes a reader click before they can see
 * what is in it; the docs homes of AI-first projects put their first page
 * inside this same shell (modelcontextprotocol.io redirects to a document,
 * Cursor's `/docs` renders one — both checked 2026-08-22). One shell, defined
 * once: two copies of it drift, and the drift shows up as a sidebar that
 * disagrees with itself between two routes.
 */
export function RecordShell({ children }: { children: ReactNode }): ReactElement {
  const documents = getSortedPages().length;

  return (
    <DocsLayout
      tree={getSortedPageTree()}
      {...baseOptions()}
      // Dark-only site: no theme switch (baseOptions also turns it off; said
      // again here so the sidebar's own bordered switch bar stays hidden).
      themeSwitch={{ enabled: false }}
      // After the spread: a future sidebar key in baseOptions must not
      // silently swallow the attribution (review finding, 2026-08-18).
      sidebar={{
        // `key`, because the shell renders this footer as one child of an
        // ARRAY (fumadocs-ui 16.14.5, layouts/docs/slots/sidebar.js — the
        // branch that also holds the language select, icon links and theme
        // switch). Without it React logs "Each child in a list should have a
        // unique key prop" naming RecordShell, on every page. Invisible in a
        // production build, which is why it survived: it only shows in the
        // dev server, where the adopter meets it first.
        // The build's mark (and any audience notice) is in the site footer on
        // every route, and the theme switch is gone with the light theme
        // (app/layout.tsx), so this keeps only the record's identity.
        footer: (
          <div key="record-footer" className="mt-3 flex flex-col gap-2">
            {/* The record's own identity, on every page rather than only the
                home page: the slug is what citations carry and llms.txt is the
                door an agent is told to read. */}
            <p className="text-xs text-fd-muted-foreground">
              <span className="font-mono">{appName}</span> · {documents} document
              {documents === 1 ? "" : "s"} ·{" "}
              <a
                href={`${basePath}/llms.txt`}
                className="underline underline-offset-4 transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
              >
                llms.txt
              </a>
            </p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
