"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactElement } from "react";
import { ChevronDown, Menu, Network, Search, X } from "lucide-react";
import { useSearchContext } from "fumadocs-ui/contexts/search";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

/** A top-level entry of the record, as the navbar lists it. */
export interface NavSection {
  readonly url: string;
  readonly title: string;
  readonly description: string | null;
  /** How many documents a folder holds; 0 for a single document. */
  readonly documents: number;
  /** Its position in governed order, from 1. */
  readonly index: number;
}

function isActive(pathname: string, url: string): boolean {
  return pathname === url || pathname.startsWith(`${url.replace(/\/$/, "")}/`);
}

function ordinal(index: number): string {
  return String(index).padStart(2, "0");
}

/** The record's sections as one menu: a glass panel of every top-level entry. */
export function NavSections({ sections }: { sections: readonly NavSection[] }): ReactElement | null {
  const pathname = usePathname();
  if (sections.length === 0) return null;
  const current = sections.find((section) => isActive(pathname, section.url));

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={cn(
          "group inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-fd-muted-foreground transition-colors outline-none hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring data-[state=open]:bg-white/5 data-[state=open]:text-fd-foreground",
          current !== undefined && "text-fd-foreground",
        )}
      >
        Sections
        {current === undefined ? null : (
          <span className="max-w-[14rem] truncate text-fd-primary">· {current.title}</span>
        )}
        <ChevronDown
          aria-hidden
          className="size-3.5 transition-transform group-data-[state=open]:rotate-180 motion-reduce:transition-none"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={12}
        className="glass-strong grid w-[min(44rem,calc(100vw-2rem))] grid-cols-1 gap-1 rounded-2xl border-[var(--neural-glass-border)] p-2 sm:grid-cols-2"
      >
        {sections.map((section) => {
          const active = isActive(pathname, section.url);
          return (
            <DropdownMenuItem
              key={section.url}
              asChild
              className="group/item items-start gap-3 rounded-xl px-3 py-2.5 focus:bg-[rgb(0_229_255/7%)]"
            >
              <Link href={section.url} aria-current={active ? "page" : undefined}>
                <span
                  className={cn(
                    "mt-0.5 font-mono text-[11px] tracking-wider text-fd-muted-foreground tabular-nums transition-colors group-focus/item:text-fd-primary",
                    active && "text-fd-primary",
                  )}
                >
                  {ordinal(section.index)}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block font-display text-[0.95rem] leading-snug font-medium text-fd-foreground",
                      active && "text-fd-primary",
                    )}
                  >
                    {section.title}
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] tracking-[0.14em] text-fd-muted-foreground uppercase">
                    {section.documents > 0
                      ? `${section.documents} document${section.documents === 1 ? "" : "s"}`
                      : "Document"}
                  </span>
                </span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** The knowledge graph, as a navbar link that knows when it is the current page. */
export function NavGraphLink(): ReactElement {
  const pathname = usePathname();
  const active = isActive(pathname, "/graph");
  return (
    <Link
      href="/graph"
      aria-current={active ? "page" : undefined}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring",
        active && "bg-white/5 text-fd-foreground",
      )}
    >
      <Network
        aria-hidden
        className={cn("size-4 transition-colors group-hover:text-neural-gold", active && "text-neural-gold")}
      />
      Knowledge graph
    </Link>
  );
}

/**
 * The search bar. It opens the record's own search dialog (Orama over the
 * static index — see app/layout.tsx), which also answers Ctrl/⌘ K anywhere.
 */
export function NavSearch(): ReactElement | null {
  const { enabled, setOpenSearch } = useSearchContext();
  const [modifier, setModifier] = useState("Ctrl");

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setModifier("⌘");
  }, []);

  if (!enabled) return null;

  return (
    <button
      type="button"
      onClick={() => setOpenSearch(true)}
      aria-label="Search the record"
      className="group flex h-9 items-center gap-2.5 rounded-full border border-[var(--neural-glass-border)] bg-white/[0.03] px-2.5 text-sm text-fd-muted-foreground transition-colors hover:border-[var(--neural-glass-border-hover)] hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring motion-reduce:transition-none sm:w-56 sm:px-3.5 lg:w-72"
    >
      <Search aria-hidden className="size-4 shrink-0 transition-colors group-hover:text-fd-primary" />
      <span className="hidden flex-1 text-start sm:inline">Search the record…</span>
      <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] tracking-wider sm:inline">
        {modifier} K
      </kbd>
    </button>
  );
}

/** The sections on a phone: a glass drawer under the navbar. */
export function MobileMenu({ sections }: { sections: readonly NavSection[] }): ReactElement | null {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on navigation, and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (sections.length === 0) return null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="site-mobile-menu"
        aria-label={open ? "Close sections" : "Open sections"}
        className="grid size-9 place-items-center rounded-full border border-[var(--neural-glass-border)] bg-white/[0.03] text-fd-muted-foreground transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
      >
        {open ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
      </button>
      {open ? (
        <div
          id="site-mobile-menu"
          className="glass-strong fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto border-t border-[var(--neural-glass-border)] px-4 py-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2"
        >
          <Link
            href="/graph"
            className="glass glass-hover mb-5 flex items-center gap-3 rounded-xl border-[color-mix(in_oklab,#ffc857_35%,transparent)] px-4 py-3"
          >
            <Network aria-hidden className="size-4 text-neural-gold" />
            <span className="font-display font-medium">Knowledge graph</span>
          </Link>
          <p className="mb-3 px-2 font-mono text-[10px] tracking-[0.2em] text-fd-muted-foreground uppercase">
            Sections
          </p>
          <ul className="grid gap-1.5">
            {sections.map((section) => {
              const active = isActive(pathname, section.url);
              return (
                <li key={section.url}>
                  <Link
                    href={section.url}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3",
                      active && "border-[var(--neural-glass-border-hover)]",
                    )}
                  >
                    <span className="font-mono text-[11px] text-fd-primary tabular-nums">
                      {ordinal(section.index)}
                    </span>
                    <span className="font-display font-medium">{section.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
