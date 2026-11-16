import type { ReactElement, ReactNode } from "react";

import { PageTransition } from "@/components/polish/page-transition";

/** The fade between the home page and the knowledge graph. */
export default function Template({ children }: { children: ReactNode }): ReactElement {
  return <PageTransition className="flex flex-1 flex-col">{children}</PageTransition>;
}
