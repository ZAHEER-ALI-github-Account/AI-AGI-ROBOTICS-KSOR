---
type: Document
title: Large language models in robots
description: How language and vision-language models became robot "brains" — from SayCan and PaLM-E to vision-language-action models like RT-2, π0, Gemini Robotics and GR00T.
status: stable
order: 308
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: saycan
    title: "Ahn et al. — Do As I Can, Not As I Say: Grounding Language in Robotic Affordances (2022)"
    resource: https://arxiv.org/abs/2204.01691
  - id: palm-e
    title: "Driess et al. — PaLM-E: An Embodied Multimodal Language Model (2023)"
    resource: https://arxiv.org/abs/2303.03378
  - id: rt2
    title: "Brohan et al. — RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control (2023)"
    resource: https://arxiv.org/abs/2307.15818
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
  - id: fm-survey
    title: "Hu et al. — Toward General-Purpose Robots via Foundation Models: A Survey and Meta-Analysis (2023)"
    resource: https://arxiv.org/abs/2312.08782
---

**In short:** large language models (LLMs) know a great deal about the world
but have no body. Since 2022 researchers have connected them to robots — first
as planners that choose among a robot's skills, then as **vision-language-action
(VLA) models** that look at camera images, read an instruction and directly
output robot motions.

## Explanation

### Step 1: language models as planners

SayCan (2022) let a language model propose the next step of a task while each
of the robot's pre-trained skills reported how likely it was to succeed. The
robot became the model's "hands and eyes"; the model supplied the know-how.
This let a mobile manipulator complete long, abstract spoken
instructions.[^saycan]

### Step 2: models that see

PaLM-E (2023) fed images and robot state directly into a language model,
"interleaving" them with text. One model handled robot manipulation planning,
visual question answering and captioning, and benefited from training on all of
them together.[^palm-e]

### Step 3: models that act — VLAs

RT-2 (2023) fine-tuned a vision-language model on robot data and expressed
actions as text tokens, so the same network both describes the world and moves
the arm. It generalised to new objects and could follow commands that were not
in the robot data, such as picking up "an improvised hammer" (a
rock).[^rt2]

### Sharing data across robots

Robot data is scarce, so labs pooled it. Open X-Embodiment assembled data from
22 different robots across 21 institutions, covering 527 skills, and showed
that a model trained on all of it (RT-X) improved several robots at once.[^open-x]

### 2024–2025: generalist robot policies

- **π0** (Physical Intelligence) built a flow-matching action model on top of a
  vision-language model, trained across many robot types, for tasks such as
  laundry folding and box assembly.[^pi0]
- **Gemini Robotics** (Google DeepMind) is a VLA built on Gemini 2.0 that
  handles unseen objects and environments, can learn new short tasks from as
  few as 100 demonstrations, and adapts to new robot bodies.[^gemini-robotics]
- **GR00T N1** (NVIDIA) is an open foundation model for humanoids that pairs a
  slow vision-language "System 2" with a fast motor "System 1".[^gr00t]

### Open problems

A survey of foundation models in robotics notes that today's robots are mostly
designed, trained and deployed for specific tasks, need extensively labelled
data, and "struggle to remain robust to distribution shifts" when the world
differs from their training — the gap general-purpose robots must
close.[^fm-survey]

## Key points

- LLMs first served as planners grounded in what a robot can do.[^saycan]
- Multimodal models added vision and robot state.[^palm-e]
- VLA models output actions directly.[^rt2][^pi0][^gemini-robotics][^gr00t]
- Pooled cross-robot datasets help models transfer.[^open-x]

## Related topics

- [Natural language processing](natural-language-processing.md)
- [The sense–think–act loop](../ai-and-robotics/sense-think-act.md)
- [General-purpose robots](../future/general-purpose-robots.md)
- [Embodied AGI](../agi/embodied-agi.md)
- [Humanoid robots](../types-of-robots/humanoid-robots.md)

[^saycan]: Ahn et al., 2022.
[^palm-e]: Driess et al., 2023.
[^rt2]: Brohan et al., 2023.
[^open-x]: Open X-Embodiment Collaboration, 2023.
[^pi0]: Black et al., 2024.
[^gemini-robotics]: Gemini Robotics Team, 2025.
[^gr00t]: NVIDIA, 2025.
[^fm-survey]: Hu et al., 2023.
