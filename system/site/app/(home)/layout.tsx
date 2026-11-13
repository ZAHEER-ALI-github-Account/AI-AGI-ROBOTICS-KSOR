import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/lib/layout.shared";

// The front door stands ALONE: no sidebar, no document chrome. The sidebar
// belongs to the record's pages, and `Open the record` is the door to them.
// The shell's own header is off — the site navbar (app/layout.tsx) is the
// front door's navbar, as it is every other route's.
export default function Layout({ children }: LayoutProps<"/">) {
  const options = baseOptions();
  return (
    <HomeLayout {...options} nav={{ ...options.nav, enabled: false }}>
      {children}
    </HomeLayout>
  );
}
