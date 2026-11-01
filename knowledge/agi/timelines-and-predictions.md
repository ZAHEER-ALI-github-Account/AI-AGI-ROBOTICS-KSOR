---
type: Document
title: Expert timelines and predictions for AGI
description: When researchers and lab leaders think AGI-level systems might arrive, what trend data shows, and why forecasts differ so widely.
status: draft
order: 707
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: grace-survey
    title: "Grace et al. — Thousands of AI Authors on the Future of AI (2024)"
    resource: https://arxiv.org/abs/2401.02843
  - id: metr
    title: "Kwa et al. (METR) — Measuring AI Ability to Complete Long Software Tasks (2025)"
    resource: https://arxiv.org/abs/2503.14499
  - id: epoch-compute
    title: "Epoch AI — Training compute of frontier AI models grows by 4-5x per year"
    resource: https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year
  - id: kaplan
    title: "Kaplan et al. — Scaling Laws for Neural Language Models (2020)"
    resource: https://arxiv.org/abs/2001.08361
  - id: anthropic-core-views
    title: "Anthropic — Core views on AI safety"
    resource: https://www.anthropic.com/news/core-views-on-ai-safety
  - id: ssi
    title: "Safe Superintelligence Inc."
    resource: https://ssi.inc/
  - id: normal-technology
    title: "Narayanan & Kapoor — AI as Normal Technology (Knight First Amendment Institute, 2025)"
    resource: https://knightcolumbia.org/content/ai-as-normal-technology
  - id: moonshot-goal3
    title: "JST — Moonshot R&D Program Goal 3: Coevolution of AI and robots"
    resource: https://www.jst.go.jp/moonshot/en/program/goal3/
---

**In short:** nobody knows when AGI will arrive, or whether it will. Surveys of
AI researchers give a median around the 2040s for machines outperforming
humans at every task, with very wide uncertainty; some lab leaders expect it
much sooner; other scholars expect a slow, ordinary diffusion. Trend data on
compute and task length is the main evidence each side cites.

## Explanation

### What researchers say

In the largest survey of its kind, 2,778 researchers who had published in
top-tier AI venues gave their forecasts:[^grace-survey]

| Milestone | 10% chance by | 50% chance by |
| --------- | ------------- | ------------- |
| Unaided machines outperform humans in every possible task | 2027 | 2047 |
| All human occupations fully automatable | 2037 | 2116 |

The 2047 estimate was 13 years earlier than in the same team's survey one year
before.[^grace-survey] The gap between "every task" and "every occupation"
shows how much the answer depends on the question asked.

### What the labs say

Anthropic wrote that transformative impact "could start to arrive soon –
perhaps in the coming decade".[^anthropic-core-views] Safe Superintelligence
Inc. states on its home page that "superintelligence is within
reach".[^ssi] These are statements of belief by organisations building the
technology.

### What the trends show

- **Compute.** Epoch AI finds that the training compute of frontier AI models
  has grown by about 4–5× per year.[^epoch-compute]
- **Scaling laws.** Language model performance improves as a power law in
  model size, data and compute.[^kaplan]
- **Task length.** METR finds the length of software tasks frontier models can
  complete with 50% success has doubled roughly every seven months since 2019;
  if that continues and generalises, within five years AI could automate many
  software tasks that take humans a month.[^metr] METR itself stresses the
  limits of extrapolating this trend.[^metr]

### A sceptical view

Narayanan and Kapoor describe AI as "normal technology" — a description of
current AI, a prediction for the foreseeable future and a prescription for
policy — as an alternative to treating it as a potential
superintelligence.[^normal-technology]

### A long-range national target

Japan's Moonshot programme sets 2050 as the target for AI robots that
autonomously learn, adapt and act alongside people.[^moonshot-goal3]

## Key points

- Surveyed researchers put a 50% chance of machines beating humans at every
  task by 2047.[^grace-survey]
- Some lab leaders expect transformative AI within a
  decade.[^anthropic-core-views][^ssi]
- Compute and task-length trends are rising fast.[^epoch-compute][^metr]
- Sceptics expect AI to diffuse like a normal technology.[^normal-technology]

## Related topics

- [What is AGI?](what-is-agi.md)
- [Different viewpoints](viewpoints.md)
- [Predictions to 2050](../future/predictions-to-2050.md)
- [Possible impact of AGI](impact.md)

[^grace-survey]: Grace et al., 2024.
[^metr]: Kwa et al., 2025.
[^epoch-compute]: Epoch AI.
[^kaplan]: Kaplan et al., 2020.
[^anthropic-core-views]: Anthropic.
[^ssi]: Safe Superintelligence Inc.
[^normal-technology]: Narayanan & Kapoor, 2025.
[^moonshot-goal3]: JST Moonshot Goal 3.
