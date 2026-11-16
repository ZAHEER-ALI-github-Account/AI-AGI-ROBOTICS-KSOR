---
type: Document
title: What is robotics?
description: Robotics is the science and engineering of machines that sense, decide and act in the physical world — and where the word "robot" came from.
status: stable
order: 102
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: rur
    title: "Karel Čapek — R.U.R. (Rossum's Universal Robots), Project Gutenberg"
    resource: https://www.gutenberg.org/ebooks/59112
  - id: iso-8373
    title: "ISO 8373:2021 — Robotics — Vocabulary"
    resource: https://www.iso.org/standard/75539.html
  - id: springer-handbook
    title: "Siciliano & Khatib (eds.) — Springer Handbook of Robotics, 2nd edition"
    resource: https://link.springer.com/referencework/10.1007/978-3-319-32552-1
  - id: modern-robotics
    title: "Lynch & Park — Modern Robotics: Mechanics, Planning, and Control (Cambridge University Press, 2017)"
    resource: https://hades.mech.northwestern.edu/index.php/Modern_Robotics
  - id: ifr-industrial-2025
    title: "IFR — World Robotics 2025: Global robot demand in factories doubles over 10 years"
    resource: https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years
  - id: ifr-service-2025
    title: "IFR — World Robotics 2025: Service robots see global growth boom"
    resource: https://ifr.org/ifr-press-releases/news/service-robots-see-global-growth-boom
---

**In short:** robotics is the science and engineering of machines that can
sense their surroundings, decide what to do, and physically act. It combines
mechanical engineering, electronics, control theory and computer science —
and, increasingly, artificial intelligence.

## Explanation

### Where the word comes from

The word "robot" entered English through Karel Čapek's 1920 play *R.U.R.
(Rossum's Universal Robots)*, set in a factory that manufactures artificial
workers.[^rur] The fiction came long before the machines, but it fixed the
idea of a robot as a manufactured worker.

### What counts as a robot

Engineers use precise vocabulary. The international standard ISO 8373 defines
the terms used in robotics, and other safety standards build on it.[^iso-8373]
In practice the field separates two broad families, which the International
Federation of Robotics (IFR) counts separately:

- **Industrial robots** — programmable manipulator arms in factories. About
  542,000 were installed worldwide in 2024, and about 4.66 million were in
  operation.[^ifr-industrial-2025]
- **Service robots** — robots that do useful work outside manufacturing, such
  as moving goods in warehouses, cleaning floors or assisting in hospitals.
  Almost 200,000 professional service robots were sold in 2024, plus close to
  20 million consumer service robots such as floor cleaners.[^ifr-service-2025]

### The building blocks

Robotics textbooks describe a robot as a chain of linked bodies (links)
connected by joints and moved by actuators, whose motion is described by
kinematics and dynamics and directed by motion planning and
control.[^modern-robotics] The reference handbook of the field covers the same
foundations — mechanisms, sensing and estimation, motion planning, control,
and robot learning — before turning to specialised robots and
applications.[^springer-handbook]

Put simply, every robot has three jobs:

1. **Sense** — cameras, depth sensors, force sensors and encoders measure the
   world and the robot's own body.
2. **Think** — software turns those measurements into a decision.
3. **Act** — motors and grippers carry the decision out.

This loop is explained in [the sense–think–act loop](../ai-and-robotics/sense-think-act.md).

## Key points

- "Robot" comes from Čapek's 1920 play *R.U.R.*[^rur]
- Robotics terms are standardised in ISO 8373.[^iso-8373]
- Industrial robots (≈542,000 installed in 2024) and service robots (≈200,000
  professional units sold in 2024) are tracked as separate
  markets.[^ifr-industrial-2025][^ifr-service-2025]
- A robot is links, joints and actuators, steered by kinematics, planning and
  control.[^modern-robotics]

## Related topics

- [What is artificial intelligence?](what-is-ai.md)
- [History of robotics](history-of-robotics.md)
- [Action and control](../ai-and-robotics/action-and-control.md)
- [Industrial robots](../types-of-robots/industrial-robots.md)
- [Service and home robots](../types-of-robots/service-and-home-robots.md)

[^rur]: Čapek, *R.U.R.*, 1920 (Project Gutenberg).
[^iso-8373]: ISO 8373:2021, Robotics — Vocabulary.
[^springer-handbook]: *Springer Handbook of Robotics*, 2nd ed.
[^modern-robotics]: Lynch & Park, *Modern Robotics*, 2017.
[^ifr-industrial-2025]: IFR, World Robotics 2025 — Industrial Robots, press release of 25 September 2025.
[^ifr-service-2025]: IFR, World Robotics 2025 — Service Robots, press release of 7 October 2025.
