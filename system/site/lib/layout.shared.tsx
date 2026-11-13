import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * What the Fumadocs layouts share. The record's identity, sign-in and search
 * live in the site navbar (components/site-navbar.tsx), which stands above
 * every route — so the shell's own nav title is the way into the record's
 * CONTENTS rather than a second copy of the record's name, and the theme
 * switch is gone because the design system is dark-only (app/layout.tsx).
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      url: "/docs",
      title: (
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-fd-muted-foreground uppercase">
          Contents
        </span>
      ),
    },
    themeSwitch: { enabled: false },
  };
}
