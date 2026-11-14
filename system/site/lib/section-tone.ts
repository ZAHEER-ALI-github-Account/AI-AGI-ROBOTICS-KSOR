/**
 * Which colour of the design system a section of the record wears: gold for
 * AGI, violet for robotics, cyan for AI, and a cool neutral for reference
 * material (the glossary, the reference list). Read from the section's own
 * title — nothing here names a folder — so a retitled or new section takes the
 * right tone at the next build. Used by the homepage's section cards and,
 * later, the knowledge graph.
 */
export type SectionTone = "agi" | "robotics" | "ai" | "reference";

export const TONE_COLOR: Readonly<Record<SectionTone, string>> = {
  agi: "#ffc857",
  robotics: "#8b5cf6",
  ai: "#00e5ff",
  reference: "#7da2ff",
};

/**
 * @param title    the section's display title
 * @param isFolder whether it holds documents (a single top-level document,
 *                 such as a glossary, is reference material)
 */
export function sectionTone(title: string, isFolder: boolean): SectionTone {
  if (/\bAGI\b|general intelligence/i.test(title)) return "agi";
  if (!isFolder) return "reference";
  if (/robot/i.test(title)) return "robotics";
  return "ai";
}
