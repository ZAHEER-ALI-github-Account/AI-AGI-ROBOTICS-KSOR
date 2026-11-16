import type { ReactElement, ReactNode } from "react";

import { PageTransition } from "@/components/polish/page-transition";

/**
 * The fade between documents. The sidebar stays put; only the article card
 * and its table of contents fade in, because the docs layout's grid places
 * them itself and the wrapper has to stay out of its way.
 */
export default function Template({ children }: { children: ReactNode }): ReactElement {
  return <PageTransition targets="#nd-page, #nd-toc">{children}</PageTransition>;
}
