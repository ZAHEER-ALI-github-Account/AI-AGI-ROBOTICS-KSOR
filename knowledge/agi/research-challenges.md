---
type: Document
title: Key research challenges on the path to AGI
description: The open problems researchers say stand between today's AI and general intelligence — generalisation, reasoning, reliability, data, embodiment and measurement.
status: stable
order: 705
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: chollet
    title: "Chollet — On the Measure of Intelligence (2019)"
    resource: https://arxiv.org/abs/1911.01547
  - id: arc-agi-2
    title: "Chollet et al. — ARC-AGI-2: A New Challenge for Frontier AI Reasoning Systems (2025)"
    resource: https://arxiv.org/abs/2505.11831
  - id: marcus
    title: "Marcus — Deep Learning: A Critical Appraisal (2018)"
    resource: https://arxiv.org/abs/1801.00631
  - id: sparks
    title: "Bubeck et al. — Sparks of Artificial General Intelligence: Early experiments with GPT-4 (2023)"
    resource: https://arxiv.org/abs/2303.12712
  - id: hle
    title: "Phan et al. — Humanity's Last Exam (2025)"
    resource: https://arxiv.org/abs/2501.14249
  - id: metr
    title: "Kwa et al. (METR) — Measuring AI Ability to Complete Long Software Tasks (2025)"
    resource: https://arxiv.org/abs/2503.14499
  - id: chinchilla
    title: "Hoffmann et al. — Training Compute-Optimal Large Language Models (2022)"
    resource: https://arxiv.org/abs/2203.15556
  - id: fm-survey
    title: "Hu et al. — Toward General-Purpose Robots via Foundation Models: A Survey and Meta-Analysis (2023)"
    resource: https://arxiv.org/abs/2312.08782
  - id: open-x
    title: "Open X-Embodiment Collaboration — Open X-Embodiment: Robotic Learning Datasets and RT-X Models (2023)"
    resource: https://arxiv.org/abs/2310.08864
  - id: alignment-problem
    title: "Ngo, Chan & Mindermann — The Alignment Problem from a Deep Learning Perspective (2022, revised 2025)"
    resource: https://arxiv.org/abs/2209.00626
---

**In short:** today's AI is powerful but uneven. Researchers point to a set of
open problems: generalising to genuinely new situations, reliable reasoning
and long tasks, data limits, acting in the physical world, measuring progress
honestly, and keeping systems aligned with human intent.

## Explanation

### 1. Generalisation and fluid intelligence

Chollet argues that unlimited training data lets systems "buy" skill in a way
that hides how well they actually generalise; ARC was built to test reasoning
on novel tasks with minimal prior knowledge.[^chollet] ARC-AGI-2 was designed
to remain accessible to people while being hard for current AI
systems.[^arc-agi-2]

### 2. Beyond pattern matching

Gary Marcus listed ten concerns about deep learning and argued it "must be
supplemented by other techniques if we are to reach artificial general
intelligence".[^marcus] Even the authors who saw "sparks" of AGI in GPT-4
discussed "the possible need for pursuing a new paradigm that moves beyond
next-word prediction".[^sparks]

### 3. Expert-level knowledge and reasoning

Benchmarks saturate quickly: models scored over 90% on popular tests such as
MMLU, so researchers built *Humanity's Last Exam*, 2,500 expert-level
questions on which state-of-the-art models showed low accuracy and poor
calibration when it was released.[^hle]

### 4. Long, autonomous tasks

METR measures the length of tasks (in human time) that AI can complete with 50%
success. Early-2025 frontier models managed tasks of around 50 minutes, and
this "time horizon" had been doubling roughly every seven months since
2019.[^metr]

### 5. Data

Scaling studies show models need far more training data as they grow: for
compute-optimal training, model size and training tokens should be scaled
equally.[^chinchilla] For robots, data is scarcer still; the Open
X-Embodiment project pooled data from 22 robots across 21 institutions to
help.[^open-x]

### 6. Acting in the physical world

Robots trained for specific tasks "struggle to remain robust to distribution
shifts" when the world differs from training.[^fm-survey] See
[embodied AGI](embodied-agi.md).

### 7. Alignment

Researchers warn that AGIs trained like today's models could learn goals in
conflict with human interests and "may appear aligned even when they are
not".[^alignment-problem] See [AI safety and alignment](safety-and-alignment.md).

## Key points

- True generalisation to novel tasks is still unsolved.[^chollet][^arc-agi-2]
- Some researchers think new paradigms are needed.[^marcus][^sparks]
- AI's task horizon is growing quickly but from a modest base.[^metr]
- Data, embodiment and alignment are open problems.[^chinchilla][^fm-survey][^alignment-problem]

## Related topics

- [What is AGI?](what-is-agi.md)
- [AI safety and alignment](safety-and-alignment.md)
- [Expert timelines and predictions](timelines-and-predictions.md)
- [Different viewpoints](viewpoints.md)

[^chollet]: Chollet, 2019.
[^arc-agi-2]: Chollet et al., 2025.
[^marcus]: Marcus, 2018.
[^sparks]: Bubeck et al., 2023.
[^hle]: Phan et al., 2025.
[^metr]: Kwa et al., 2025.
[^chinchilla]: Hoffmann et al., 2022.
[^fm-survey]: Hu et al., 2023.
[^open-x]: Open X-Embodiment Collaboration, 2023.
[^alignment-problem]: Ngo, Chan & Mindermann.
