---
type: Document
title: AI and robots in the home
description: Robot vacuums, the first home humanoids, the research behind household robots, and the safety and privacy questions they raise.
status: draft
order: 508
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: ifr-service-2025
    title: "IFR — World Robotics 2025: Service robots see global growth boom (7 October 2025)"
    resource: https://ifr.org/ifr-press-releases/news/service-robots-see-global-growth-boom
  - id: neo
    title: "1X — NEO Home Robot"
    resource: https://www.1x.tech/neo
  - id: figure-03
    title: "Figure AI — Introducing Figure 03"
    resource: https://www.figure.ai/news/introducing-figure-03
  - id: mobile-aloha
    title: "Fu, Zhao & Finn — Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation (2024)"
    resource: https://arxiv.org/abs/2401.02117
  - id: pi0
    title: "Black et al. — π0: A Vision-Language-Action Flow Model for General Robot Control (2024)"
    resource: https://arxiv.org/abs/2410.24164
  - id: iso-13482
    title: "ISO 13482:2014 — Robots and robotic devices — Safety requirements for personal care robots"
    resource: https://www.iso.org/standard/53820.html
---

**In short:** the robots most people own today clean floors and mow lawns —
close to 20 million consumer service robots were sold in 2024. Companies are
now offering humanoids for household chores, and research robots can learn
tasks like cooking and laundry, but general home robots are still at an early
stage.

## Explanation

### Robots already at home

Consumer service robots grew 11% to close to 20 million units in 2024; robots
for domestic tasks such as floor cleaning and lawn mowing were by far the
largest group.[^ifr-service-2025]

### Humanoids for the home

- **1X NEO** is marketed as a home robot and sold with a deposit; its listing
  includes a scheduled "Expert Mode" for chores such as laundry.[^neo]
- **Figure 03** was designed partly for the home, with soft coverings,
  wireless charging, an improved audio system for voice interaction and battery
  safety advances.[^figure-03]

### What research robots can do

Mobile ALOHA learned household tasks — sautéing and serving shrimp, storing
heavy pots in a two-door cabinet, calling and entering an elevator, rinsing a
pan — from 50 demonstrations per task.[^mobile-aloha] Physical Intelligence's
π0 model, trained across many robot types, performed tasks such as laundry
folding and table cleaning.[^pi0]

### Safety and privacy

ISO 13482 sets safety requirements for personal care robots that work close to
people.[^iso-13482] A robot that moves through a home with cameras and
microphones also collects intimate data — see [privacy](../ethics-and-risks/privacy.md).

## Key points

- ~20 million consumer robots were sold in 2024, mostly
  cleaners.[^ifr-service-2025]
- Home humanoids are on sale or announced.[^neo][^figure-03]
- Research robots learn varied chores from small numbers of
  demonstrations.[^mobile-aloha][^pi0]
- Personal-robot safety is standardised in ISO 13482.[^iso-13482]

## Related topics

- [Service and home robots](../types-of-robots/service-and-home-robots.md)
- [Humanoid robots](../types-of-robots/humanoid-robots.md)
- [General-purpose robots](../future/general-purpose-robots.md)
- [Privacy](../ethics-and-risks/privacy.md)

[^ifr-service-2025]: IFR, World Robotics 2025 — Service Robots.
[^neo]: 1X, NEO.
[^figure-03]: Figure AI.
[^mobile-aloha]: Fu, Zhao & Finn, 2024.
[^pi0]: Black et al., 2024.
[^iso-13482]: ISO 13482:2014.
