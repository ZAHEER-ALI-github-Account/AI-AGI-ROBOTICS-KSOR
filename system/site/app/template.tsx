import type { ReactElement, ReactNode } from "react";

import { PageTransition } from "@/components/polish/page-transition";

/** Re-mounted by Next on each navigation between the site's top-level areas. */
export default function Template({ children }: { children: ReactNode }): ReactElement {
  return <PageTransition className="flex flex-1 flex-col">{children}</PageTransition>;
}
