---
type: Document
title: Embodied AGI and robotics
description: Why many researchers think general intelligence needs a body, and how robot foundation models connect AGI research to robotics.
status: draft
order: 702
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: brooks-1991
    title: "Brooks — Intelligence without representation, Artificial Intelligence 47 (1991)"
    resource: https://people.csail.mit.edu/brooks/papers/representation.pdf
  - id: embodied-survey
    title: "Liu et al. — Aligning Cyber Space with Physical World: A Comprehensive Survey on Embodied AI (2024)"
    resource: https://arxiv.org/abs/2407.06886
  - id: palm-e
    title: "Driess et al. — PaLM-E: An Embodied Multimodal Language Model (2023)"
    resource: https://arxiv.org/abs/2303.03378
  - id: gemini-robotics
    title: "Gemini Robotics Team — Gemini Robotics: Bringing AI into the Physical World (2025)"
    resource: https://arxiv.org/abs/2503.20020
  - id: cosmos
    title: "NVIDIA — Cosmos World Foundation Model Platform for Physical AI (2025)"
    resource: https://arxiv.org/abs/2501.03575
  - id: gr00t
    title: "NVIDIA — GR00T N1: An Open Foundation Model for Generalist Humanoid Robots (2025)"
    resource: https://arxiv.org/abs/2503.14734
  - id: moonshot-goal3
    title: "JST — Moonshot R&D Program Goal 3: Coevolution of AI and robots"
    resource: https://www.jst.go.jp/moonshot/en/program/goal3/
---

**In short:** embodied AI is intelligence that lives in a body and learns by
acting in the physical world. Many researchers argue that general intelligence
must be grounded in perception and action, and the new "physical AI" models
that control robots are where AGI research and robotics meet.

## Explanation

### Why a body?

As early as 1991 Rodney Brooks argued that intelligent behaviour can emerge
from systems that interact directly with the world through many simple
activity-producing layers, rather than from abstract internal
representations.[^brooks-1991] A 2024 survey goes further, calling embodied AI
"crucial for achieving Artificial General Intelligence" and a foundation for
applications that bridge cyberspace and the physical world.[^embodied-survey]

### Grounding language in the world

Language models learn from text, not from touching things. PaLM-E addressed
this "grounding" problem by feeding continuous sensor data into a language
model, "to establish the link between words and percepts".[^palm-e]

### Physical AI models

- **Gemini Robotics** brings Google DeepMind's Gemini models into the physical
  world; its authors describe it as "a substantial step towards developing
  general-purpose robots".[^gemini-robotics]
- **GR00T N1** is an open foundation model for generalist humanoid robots,
  built on the view that "general-purpose robots need a versatile body and an
  intelligent mind".[^gr00t]
- **Cosmos** argues that "physical AI needs to be trained digitally first",
  with world models that simulate the physical world.[^cosmos]

The survey identifies four main research targets: embodied perception,
embodied interaction, embodied agents, and sim-to-real
adaptation.[^embodied-survey]

### A national goal

Japan's Moonshot R&D programme sets as Goal 3 the "realization of AI robots
that autonomously learn, adapt to their environment, evolve in intelligence and
act alongside human beings, by 2050".[^moonshot-goal3]

## Key points

- Embodiment grounds intelligence in perception and
  action.[^brooks-1991][^embodied-survey]
- Robot foundation models link language, vision and
  action.[^palm-e][^gemini-robotics][^gr00t]
- World models let robots learn in simulation first.[^cosmos]
- Japan targets autonomous, evolving AI robots by 2050.[^moonshot-goal3]

## Related topics

- [What is AGI?](what-is-agi.md)
- [LLMs in robots](../core-technologies/llms-in-robots.md)
- [The sense–think–act loop](../ai-and-robotics/sense-think-act.md)
- [General-purpose robots](../future/general-purpose-robots.md)
- [Humanoid robots](../types-of-robots/humanoid-robots.md)

[^brooks-1991]: Brooks, 1991.
[^embodied-survey]: Liu et al., 2024.
[^palm-e]: Driess et al., 2023.
[^gemini-robotics]: Gemini Robotics Team, 2025.
[^cosmos]: NVIDIA, 2025.
[^gr00t]: NVIDIA, 2025.
[^moonshot-goal3]: JST Moonshot Goal 3.
