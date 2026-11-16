---
type: Document
title: Human–robot collaboration
description: How people and robots — and people and AI assistants — are learning to work side by side, and the safety rules that make it possible.
status: stable
order: 802
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: iso-15066
    title: "ISO/TS 15066:2016 — Robots and robotic devices — Collaborative robots"
    resource: https://www.iso.org/standard/62996.html
  - id: iso-10218
    title: "ISO 10218-1:2025 — Robotics — Safety requirements — Part 1: Industrial robots"
    resource: https://www.iso.org/standard/73933.html
  - id: amazon-million
    title: "Amazon — Amazon deploys over 1 million robots and launches new AI foundation model (July 2025)"
    resource: https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model
  - id: agility-gxo
    title: "Agility Robotics — GXO signs industry-first multi-year agreement with Agility Robotics (27 June 2024)"
    resource: https://agilityrobotics.com/content/gxo-signs-industry-first-multi-year-agreement-with-agility-robotics
  - id: brynjolfsson
    title: "Brynjolfsson, Li & Raymond — Generative AI at Work, NBER Working Paper 31161"
    resource: https://www.nber.org/papers/w31161
  - id: kestin
    title: "Kestin et al. — AI tutoring outperforms in-class active learning, Scientific Reports (2025)"
    resource: https://www.nature.com/articles/s41598-025-97652-6
  - id: levels-of-agi
    title: "Morris et al. (Google DeepMind) — Levels of AGI for Operationalizing Progress on the Path to AGI (2023)"
    resource: https://arxiv.org/abs/2311.02462
  - id: srt-h
    title: "Kim et al. — SRT-H: A Hierarchical Framework for Autonomous Surgery (2025)"
    resource: https://arxiv.org/abs/2505.10251
  - id: ifr-service-2025
    title: "IFR — World Robotics 2025: Service robots see global growth boom (7 October 2025)"
    resource: https://ifr.org/ifr-press-releases/news/service-robots-see-global-growth-boom
---

**In short:** the near future of robotics is less "robots replace people" and
more "robots and people work together". Collaborative robots share workspaces
with safety rules designed for it, warehouse robots take the heavy lifting,
and AI assistants help less-experienced workers most. How much autonomy to give
the machine is a design choice.

## Explanation

### Sharing the workspace safely

Collaborative robots (cobots) are designed to work alongside people. ISO/TS
15066 sets safety requirements for collaborative industrial robot systems and
their work environment, supplementing the industrial robot standard ISO
10218.[^iso-15066][^iso-10218]

### Robots that take the heavy lifting

Amazon says its robots "work alongside our employees, handling heavy lifting
and repetitive tasks", and that it has upskilled more than 700,000 employees
since 2019.[^amazon-million] At GXO, Agility's Digit humanoids work alongside
other automation such as collaborative robots in a warehouse.[^agility-gxo]
The IFR names staff shortages as a key driver of service-robot
adoption.[^ifr-service-2025]

### AI that makes people better

Generative AI assistance raised customer-support productivity by 14% on
average, and by 34% for novices, partly by spreading the best practices of
experienced workers.[^brynjolfsson] A well-designed AI tutor more than doubled
median learning gains in a randomised trial.[^kestin]

### Choosing the level of autonomy

Google DeepMind's Levels of AGI framework stresses "carefully selecting
Human-AI Interaction paradigms" for responsible deployment — autonomy is a
choice made separately from capability.[^levels-of-agi] In robotic surgery,
SRT-H plans in natural language — issuing task and corrective instructions —
which makes the autonomous system's decisions expressed in a form people can
read.[^srt-h]

## Key points

- Cobot safety is set by ISO/TS 15066 on top of ISO
  10218.[^iso-15066][^iso-10218]
- Robots increasingly take heavy and repetitive work alongside
  people.[^amazon-million][^agility-gxo]
- AI assistance helps less-experienced people most.[^brynjolfsson][^kestin]
- The degree of autonomy is a deliberate design choice.[^levels-of-agi]

## Related topics

- [Industrial robots](../types-of-robots/industrial-robots.md)
- [Jobs and automation](../ethics-and-risks/jobs-and-automation.md)
- [Safety](../ethics-and-risks/safety.md)
- [General-purpose robots](general-purpose-robots.md)

[^iso-15066]: ISO/TS 15066:2016.
[^iso-10218]: ISO 10218-1:2025.
[^amazon-million]: Amazon, 2025.
[^agility-gxo]: Agility Robotics, 2024.
[^brynjolfsson]: Brynjolfsson, Li & Raymond, NBER w31161.
[^kestin]: Kestin et al., 2025.
[^levels-of-agi]: Morris et al., 2023.
[^srt-h]: Kim et al., 2025.
[^ifr-service-2025]: IFR, 2025.
