import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

import mark from "@/app/icon.png";
import { FooterMark } from "@/components/footer-mark";
import { appName, appPurpose, appTitle } from "@/lib/shared";
import { basePath, entriesUnder, getSortedPages } from "@/lib/source";

/**
 * The foot of every route: the record's identity and purpose (instance.md),
 * its sections (read from the record, like the navbar's), the machine surfaces
 * an agent reads, and the build's own mark — which also carries the audience
 * notice on any build below the public tier, so it must stay on every page.
 */
export function SiteFooter(): ReactElement {
  const sections = entriesUnder("");
  const documents = getSortedPages().length;

  // Plain anchors, so these need the base path by hand; they are files the
  // build writes, not routes the router knows.
  const machine = [
    { href: `${basePath}/llms.txt`, label: "llms.txt" },
    { href: `${basePath}/llms-full.txt`, label: "llms-full.txt" },
    { href: `${basePath}/.well-known/mcp/server.json`, label: "MCP server.json" },
  ];

  return (
    <footer className="relative mt-auto border-t border-[var(--neural-glass-border)] bg-[rgb(5_6_10/70%)] backdrop-blur-xl">
      <div aria-hidden className="neural-hairline absolute inset-x-0 -top-px h-px opacity-60" />
      <div className="mx-auto grid w-full max-w-[97rem] gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr_0.7fr] md:px-6">
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src={mark} alt="" width={28} height={28} className="size-7 rounded-md ring-1 ring-white/15" />
            <span className="font-display text-lg font-semibold tracking-[-0.01em]">{appTitle}</span>
          </Link>
          {appPurpose === null ? null : (
            <p className="mt-4 text-sm/relaxed text-pretty text-fd-muted-foreground">{appPurpose}</p>
          )}
          <p className="mt-4 font-mono text-[11px] tracking-wider text-fd-muted-foreground uppercase">
            {appName} · {documents} document{documents === 1 ? "" : "s"}
          </p>
        </div>

        {sections.length === 0 ? (
          <div />
        ) : (
          <div>
            <h2 className="font-mono text-[11px] font-medium tracking-[0.2em] text-fd-primary uppercase">
              Sections
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {sections.map((section) => (
                <li key={section.url}>
                  <Link
                    href={section.url}
                    className="text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="font-mono text-[11px] font-medium tracking-[0.2em] text-neural-violet uppercase">
            For agents
          </h2>
          <ul className="mt-4 grid gap-2 font-mono text-[13px]">
            {machine.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <p className="mx-auto w-full max-w-[97rem] px-4 py-5 font-mono text-[11px] tracking-wider text-fd-muted-foreground uppercase md:px-6">
          <FooterMark />
        </p>
      </div>
    </footer>
  );
}
