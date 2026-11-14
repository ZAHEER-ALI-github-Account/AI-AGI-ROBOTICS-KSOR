import type { Metadata } from "next";
import type { ReactElement } from "react";

import { KnowledgeGraph } from "@/components/graph/knowledge-graph";
import { knowledgeGraph } from "@/lib/knowledge-graph";

export const metadata: Metadata = {
  title: "Knowledge graph",
  description: "Every article in the record as a node in 3D space, joined by its related topics.",
};

/**
 * The 3D knowledge graph. The graph — nodes, links and layout — is computed
 * here at build time from the record (lib/knowledge-graph.ts); the browser
 * only draws it. A built site admits only what §2.5 admits, so a record of
 * drafts builds this page in its empty state.
 */
export default function GraphPage(): ReactElement {
  const graph = knowledgeGraph();

  if (graph.nodes.length === 0) {
    return (
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20">
        <p className="text-fd-muted-foreground">
          the record is empty — add a document to <code>knowledge/</code>
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col">
      <KnowledgeGraph graph={graph} />
    </main>
  );
}
