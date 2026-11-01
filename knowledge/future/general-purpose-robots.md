---
type: Document
title: General-purpose robots
description: The push from single-task machines to robots that can learn many tasks — the data, models and simulation that could get there.
status: draft
order: 803
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: fm-survey
    title: "Hu et al. — Toward General-Purpose Robots via Foundation Models: A Survey and Meta-Analysis (2023)"
    resource: https://arxiv.org/abs/2312.08782
  - id: open-x
    title: "Open X-Embodiment Collaboration — Open X-Embodiment: Robotic Learning Datasets and RT-X Models (2023)"
    resource: https://arxiv.org/abs/2310.08864
  - id: pi0
    title: "Black et al. — π0: A Vision-Language-Action Flow Model for General Robot Control (2024)"
    resource: https://arxiv.org/abs/2410.24164
  - id: gemini-robotics
    title: "Gemini Robotics Team — Gemini Robotics: Bringing AI into the Physical World (2025)"
    resource: https://arxiv.org/abs/2503.20020
  - id: gr00t
    title: "NVIDIA — GR00T N1: An Open Foundation Model for Generalist Humanoid Robots (2025)"
    resource: https://arxiv.org/abs/2503.14734
  - id: mobile-aloha
    title: "Fu, Zhao & Finn — Mobile ALOHA (2024)"
    resource: https://arxiv.org/abs/2401.02117
  - id: cosmos
    title: "NVIDIA — Cosmos World Foundation Model Platform for Physical AI (2025)"
    resource: https://arxiv.org/abs/2501.03575
  - id: figure-03
    title: "Figure AI — Introducing Figure 03"
    resource: https://www.figure.ai/news/introducing-figure-03
---

**In short:** almost every robot today does one job. A general-purpose robot
would handle many tasks, in many places, and learn new ones quickly — the way
general-purpose computers replaced single-purpose machines. Robot foundation
models, pooled data and simulation are the current route toward it.

## Explanation

### From one task to many

A survey of foundation models in robotics notes that the field has mostly
built robots "for specific tasks, training them on specific datasets, and
deploying them within specific environments", which leaves them fragile when
conditions change. Building robots that work "in any environment, with any
object" is described as a long-standing goal.[^fm-survey]

### The ingredients

- **Generalist policies.** π0 trains one model across single-arm, dual-arm and
  mobile robots, then fine-tunes it for new skills.[^pi0] Gemini Robotics
  adapts to new robot bodies and learns short tasks from as few as 100
  demonstrations.[^gemini-robotics]
- **Shared data.** Open X-Embodiment's dataset spans 22 robots, 21 institutions
  and 527 skills; training on all of it improved several robots at
  once.[^open-x]
- **Cheap demonstrations.** Low-cost teleoperation systems such as Mobile
  ALOHA let people demonstrate whole-body household tasks for robots to
  imitate.[^mobile-aloha]
- **Simulated worlds.** World foundation models aim to give physical AI a
  digital twin of the world to train in.[^cosmos]
- **A body for any task.** Humanoids such as Figure 03 are designed explicitly
  as general-purpose robots that "learn directly from people".[^figure-03]
  NVIDIA's GR00T N1 is an open foundation model for such humanoids.[^gr00t]

### Will it work?

The Open X-Embodiment authors frame the open question directly: language and
vision consolidated around general pre-trained backbones — "can such a
consolidation happen in robotics?" Their model's positive transfer across
robots is early evidence that it might.[^open-x]

## Key points

- Today's robots are mostly single-purpose.[^fm-survey]
- Generalist robot policies train across many robot
  bodies.[^pi0][^gemini-robotics][^gr00t]
- Pooled data and simulation address the data shortage.[^open-x][^cosmos]

## Related topics

- [LLMs in robots](../core-technologies/llms-in-robots.md)
- [Humanoid robots: the road ahead](humanoid-robots-ahead.md)
- [Embodied AGI](../agi/embodied-agi.md)
- [Homes](../applications/homes.md)

[^fm-survey]: Hu et al., 2023.
[^open-x]: Open X-Embodiment Collaboration, 2023.
[^pi0]: Black et al., 2024.
[^gemini-robotics]: Gemini Robotics Team, 2025.
[^gr00t]: NVIDIA, 2025.
[^mobile-aloha]: Fu, Zhao & Finn, 2024.
[^cosmos]: NVIDIA, 2025.
[^figure-03]: Figure AI.
