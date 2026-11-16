---
type: Document
title: What is artificial general intelligence?
description: How researchers and labs define AGI, how it differs from today's narrow AI, and how progress toward it might be measured.
status: stable
order: 701
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: openai-charter
    title: "OpenAI — OpenAI Charter"
    resource: https://openai.com/charter/
  - id: levels-of-agi
    title: "Morris et al. (Google DeepMind) — Levels of AGI for Operationalizing Progress on the Path to AGI (2023)"
    resource: https://arxiv.org/abs/2311.02462
  - id: legg-hutter
    title: "Legg & Hutter — Universal Intelligence: A Definition of Machine Intelligence (2007)"
    resource: https://arxiv.org/abs/0712.3329
  - id: chollet
    title: "Chollet — On the Measure of Intelligence (2019)"
    resource: https://arxiv.org/abs/1911.01547
  - id: arc-agi-2
    title: "Chollet et al. — ARC-AGI-2: A New Challenge for Frontier AI Reasoning Systems (2025)"
    resource: https://arxiv.org/abs/2505.11831
  - id: sparks
    title: "Bubeck et al. — Sparks of Artificial General Intelligence: Early experiments with GPT-4 (2023)"
    resource: https://arxiv.org/abs/2303.12712
  - id: grace-survey
    title: "Grace et al. — Thousands of AI Authors on the Future of AI (2024)"
    resource: https://arxiv.org/abs/2401.02843
---

**In short:** artificial general intelligence (AGI) means AI that matches or
exceeds people across most tasks, not just one. Today's AI is *narrow* — very
good at specific things. There is no agreed definition of AGI, and no agreed
test for when it has arrived.

## Explanation

### Narrow AI versus general AI

A chess engine or an image classifier is built and trained for one kind of
task. General intelligence would transfer — learning new kinds of tasks
efficiently, the way people can. The difficulty begins with the word itself:
Legg and Hutter open their paper by noting that "nobody really knows what
intelligence is".[^legg-hutter]

### Competing definitions

- **Economic.** OpenAI's charter defines AGI as "highly autonomous systems that
  outperform humans at most economically valuable work".[^openai-charter]
- **Formal.** Legg and Hutter extract the essential features of experts'
  informal definitions of intelligence and formalise them mathematically into
  "a general measure of intelligence for arbitrary machines".[^legg-hutter]
- **Skill-acquisition.** François Chollet argues that measuring skill at given
  tasks is not enough, because skill can be "bought" with unlimited data; he
  defines intelligence as *skill-acquisition efficiency*.[^chollet]
- **Levels.** Google DeepMind researchers propose "Levels of AGI" that rate a
  system by depth (performance) and breadth (generality), and separately
  consider autonomy and risk.[^levels-of-agi]
- **Task-based.** A large survey of AI researchers asked when unaided machines
  could outperform humans "in every possible task".[^grace-survey]

### Measuring progress

Chollet's Abstraction and Reasoning Corpus (ARC) uses novel puzzles that need
little prior knowledge, to test fluid intelligence fairly between humans and
machines.[^chollet] Its 2025 successor, ARC-AGI-2, is designed to stay
accessible to people but hard for current AI.[^arc-agi-2]

### Are we there yet?

Researchers disagree. A 2023 study of an early version of GPT-4 argued that it
"could reasonably be viewed as an early (yet still incomplete) version" of an
AGI system, while also stressing its limitations.[^sparks] Others argue that
benchmark success does not show general intelligence.[^chollet] See
[different viewpoints](viewpoints.md).

## Key points

- AGI means broad, human-level (or better) capability across
  tasks.[^openai-charter][^levels-of-agi]
- Definitions differ: economic, formal, skill-acquisition and
  levels-based.[^legg-hutter][^chollet][^levels-of-agi]
- ARC benchmarks target general reasoning rather than memorised
  skill.[^chollet][^arc-agi-2]
- Whether current systems show "sparks" of AGI is disputed.[^sparks]

## Related topics

- [What is artificial intelligence?](../foundations/what-is-ai.md)
- [Embodied AGI](embodied-agi.md)
- [Key research challenges](research-challenges.md)
- [Expert timelines and predictions](timelines-and-predictions.md)
- [Different viewpoints](viewpoints.md)

[^openai-charter]: OpenAI Charter.
[^levels-of-agi]: Morris et al., 2023.
[^legg-hutter]: Legg & Hutter, 2007.
[^chollet]: Chollet, 2019.
[^arc-agi-2]: Chollet et al., 2025.
[^sparks]: Bubeck et al., 2023.
[^grace-survey]: Grace et al., 2024.
