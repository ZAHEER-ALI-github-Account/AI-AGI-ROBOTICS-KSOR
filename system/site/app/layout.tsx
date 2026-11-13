import { RootProvider } from "fumadocs-ui/provider/next";
// The design system's two faces (build.md): Space Grotesk for headings, Inter
// for body. Self-hosted from npm rather than next/font/google, which fetches
// the face from Google at BUILD time — a project that could not build offline,
// and two builds of one commit that could differ byte-wise (review finding,
// 2026-08-18). These ship their woff2 files inside the package, so the build
// bundles them and a page requests nothing from a font CDN.
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./global.css";
import type { Metadata, Viewport } from "next";
import { appTitle } from "@/lib/shared";
import { basePath, badgeByUrl } from "@/lib/source";
import { readStageManifest } from "@/lib/stage-manifest";
import KsorSearchDialog from "@/components/search-dialog";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: appTitle,
    template: `%s | ${appTitle}`,
  },
  description: "The Knowledge System of Record for humans and AI agents.",
  // A build that shows drafts (`KSOR_DRAFTS=show`) is a preview, and a static
  // site's pages are open-web artefacts: it says so to every crawler rather
  // than letting a draft be indexed under the record's name (build spec §3).
  ...(readStageManifest().drafts === "shown" ? { robots: { index: false, follow: false } } : {}),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    // Dark-only: the design system is a near-black ground, so the class is
    // written into the markup (correct before any script runs) and the theme
    // is forced below rather than offered as a switch.
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {/* Which documents carry a badge, for the search dialog — it
            runs in the browser over a static index that has no field for it.
            Delivered in the document rather than as a dialog prop because
            RootProvider types `options` against the SHIPPED dialog's props, and
            casting that away would hide a real break the day those props move.
            `<` is escaped: a title or route is authored content, and closing
            this tag early would be script injection from the record. */}
        <script
          type="application/json"
          id="ksor-statuses"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(badgeByUrl()).replaceAll("<", "\\u003c"),
          }}
        />
        <RootProvider
          theme={{ forcedTheme: "dark", defaultTheme: "dark", enableSystem: false }}
          search={{
            // Static search: the browser downloads the index that
            // app/api/search exports at build time (staticGET) and runs
            // Orama client-side — no server needed, so search keeps
            // working on any static host.
            //
            // Our own dialog, composed from the shell's primitives, so a
            // withdrawn document is marked in the RESULTS too — the last
            // surface where it looked identical to the one that replaced it,
            // and the one whose snippet quotes its obsolete figures.
            SearchDialog: KsorSearchDialog,
            options: { api: `${basePath}/api/search` },
          }}
        >
          {/* Inside the provider: the navbar's search bar opens its dialog. */}
          <SiteNavbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </RootProvider>
      </body>
    </html>
  );
}
