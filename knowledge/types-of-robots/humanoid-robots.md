---
type: Document
title: Humanoid robots
description: Robots built in human form — why companies are building them, who the main players are, and how far they have really got.
status: stable
order: 402
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: atlas-2026
    title: "Boston Dynamics — Boston Dynamics unveils new Atlas robot to revolutionize industry (January 2026)"
    resource: https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/
  - id: hyundai-ces-2026
    title: "Hyundai Motor Group — Hyundai Motor Group marks CES 2026 with major AI robotics announcements and accolades"
    resource: https://www.hyundai.com/worldwide/en/newsroom/detail/0000001109
  - id: figure-03
    title: "Figure AI — Introducing Figure 03"
    resource: https://www.figure.ai/news/introducing-figure-03
  - id: agility-gxo
    title: "Agility Robotics — GXO signs industry-first multi-year agreement with Agility Robotics"
    resource: https://agilityrobotics.com/content/gxo-signs-industry-first-multi-year-agreement-with-agility-robotics
  - id: neo
    title: "1X — NEO Home Robot"
    resource: https://www.1x.tech/neo
  - id: gr00t
    title: "NVIDIA — GR00T N1: An Open Foundation Model for Generalist Humanoid Robots (2025)"
    resource: https://arxiv.org/abs/2503.14734
  - id: goldman-humanoid
    title: "Goldman Sachs — The global market for humanoid robots could reach $38 billion by 2035"
    resource: https://www.goldmansachs.com/insights/articles/the-global-market-for-robots-could-reach-38-billion-by-2035
---

**In short:** humanoid robots have a human-like body — two arms, usually two
legs, a head with cameras. The argument for them is that our homes, factories
and tools are built for human bodies. After decades as research projects,
humanoids entered early commercial deployment in 2024–2026, but most real work
so far is pilot-scale.

## Explanation

### Why a human shape?

NVIDIA's GR00T team puts it simply: "general-purpose robots need a versatile
body and an intelligent mind", and humanoids are a promising hardware platform
for generalist autonomy "in the human world".[^gr00t] A humanoid can in
principle use the same stairs, shelves and tools as a person.

### The main players and where they stand

- **Boston Dynamics (Atlas).** At CES in January 2026 Boston Dynamics and
  Hyundai unveiled the product version of the electric Atlas.[^atlas-2026]
  Hyundai Motor Group plans phased deployment starting with parts-sequencing
  tasks at its Metaplant America factory in Savannah, Georgia, with mass
  production and wider deployment from 2028 after process-by-process
  validation.[^hyundai-ces-2026]
- **Figure AI (Figure 03).** Figure's third-generation robot is designed for
  its Helix vision-language-action AI, for use in the home, and for high-volume
  manufacturing at its BotQ facility.[^figure-03]
- **Agility Robotics (Digit).** In 2024 logistics company GXO signed what
  Agility calls an industry-first multi-year Robots-as-a-Service agreement,
  with Digit humanoids working alongside other automation at a SPANX
  facility.[^agility-gxo]
- **1X (NEO).** 1X takes orders with a deposit for NEO, a humanoid for the
  home, and offers a scheduled "Expert Mode" for chores.[^neo]

### The AI inside

Modern humanoids depend on robot foundation models. GR00T N1 combines a
vision-language module that interprets scenes and instructions with a
diffusion-transformer module that generates fluid motor actions in real time,
and was demonstrated on the Fourier GR-1 humanoid.[^gr00t]

### Market expectations

Goldman Sachs Research projects a humanoid robot market of $38 billion by
2035, up from an earlier $6 billion estimate, with a base case of more than
250,000 humanoid shipments in 2030, almost all for industrial use.[^goldman-humanoid]
This is one bank's forecast, not a measured figure.

## Key points

- Humanoids aim to work in spaces designed for people.[^gr00t]
- Production Atlas was unveiled in January 2026; Hyundai plans phased factory
  deployment from 2028.[^atlas-2026][^hyundai-ces-2026]
- Figure, Agility and 1X target factories, logistics and
  homes.[^figure-03][^agility-gxo][^neo]
- Market forecasts are large but speculative.[^goldman-humanoid]

## Related topics

- [Humanoid robots: the road ahead](../future/humanoid-robots-ahead.md)
- [LLMs in robots](../core-technologies/llms-in-robots.md)
- [Embodied AGI](../agi/embodied-agi.md)
- [Action and control](../ai-and-robotics/action-and-control.md)

[^atlas-2026]: Boston Dynamics, January 2026.
[^hyundai-ces-2026]: Hyundai Motor Group, CES 2026 release.
[^figure-03]: Figure AI.
[^agility-gxo]: Agility Robotics.
[^neo]: 1X.
[^gr00t]: NVIDIA, 2025.
[^goldman-humanoid]: Goldman Sachs Research.
