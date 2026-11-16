---
type: Document
title: Industrial robots
description: The programmable arms that build cars and electronics — how many there are, where they work, and the safety standards that govern them.
status: stable
order: 401
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: ifr-industrial-2025
    title: "IFR — World Robotics 2025: Global robot demand in factories doubles over 10 years (25 September 2025)"
    resource: https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years
  - id: unimate-ieee
    title: "IEEE Spectrum — In 1961, the First Robot Arm Punched In"
    resource: https://spectrum.ieee.org/unimation-robot
  - id: iso-10218
    title: "ISO 10218-1:2025 — Robotics — Safety requirements — Part 1: Industrial robots"
    resource: https://www.iso.org/standard/73933.html
  - id: iso-15066
    title: "ISO/TS 15066:2016 — Robots and robotic devices — Collaborative robots"
    resource: https://www.iso.org/standard/62996.html
  - id: modern-robotics
    title: "Lynch & Park — Modern Robotics: Mechanics, Planning, and Control (2017)"
    resource: https://hades.mech.northwestern.edu/index.php/Modern_Robotics
---

**In short:** industrial robots are programmable manipulator arms used in
manufacturing for welding, painting, assembly and handling materials. They are
the oldest and largest robot market: 542,000 were installed in 2024, and China
alone installed more than half of them.

## Explanation

### What they are

An industrial robot arm is a chain of rigid links and powered joints, usually
six, ending in a tool such as a gripper or welding torch. Its motion is
computed from kinematics and dynamics and executed by feedback
control.[^modern-robotics] The first, Unimate, began work at a General Motors
plant in 1961.[^unimate-ieee]

### The numbers

The International Federation of Robotics (IFR) reports for 2024:[^ifr-industrial-2025]

| Measure | Value |
| ------- | ----- |
| New installations worldwide | 542,000 (more than double ten years earlier) |
| Robots in operation | 4,664,000 (+9%) |
| China | 295,000 installed — 54% of the world total |
| Japan | 44,500 |
| United States | 34,200 |
| Republic of Korea | 30,600 |
| Germany | 26,982 |

The IFR expects installations to grow 6% to 575,000 in 2025 and to pass
700,000 a year by 2028.[^ifr-industrial-2025] Chinese suppliers held 57% of
their home market in 2024.[^ifr-industrial-2025]

### Safety: fences and cobots

Traditional industrial robots are fast and strong, so they work behind guards.
ISO 10218-1, revised in 2025, sets the safety requirements for industrial
robots.[^iso-10218] *Collaborative* robots (cobots) are designed to share space
with people; ISO/TS 15066 adds requirements for collaborative operation on top
of ISO 10218.[^iso-15066]

### Where AI comes in

Classic industrial robots repeat programmed motions precisely. AI adds vision
to find parts that are not in exactly the same place, and learning to handle
varied objects — see [manufacturing](../applications/manufacturing.md).

## Key points

- 542,000 industrial robots were installed in 2024; 4.66 million were
  operating.[^ifr-industrial-2025]
- China accounts for 54% of new installations.[^ifr-industrial-2025]
- ISO 10218 and ISO/TS 15066 govern robot and cobot safety.[^iso-10218][^iso-15066]

## Related topics

- [History of robotics](../foundations/history-of-robotics.md)
- [Manufacturing](../applications/manufacturing.md)
- [Human–robot collaboration](../future/human-robot-collaboration.md)
- [Jobs and automation](../ethics-and-risks/jobs-and-automation.md)

[^ifr-industrial-2025]: IFR, World Robotics 2025 — Industrial Robots.
[^unimate-ieee]: IEEE Spectrum.
[^iso-10218]: ISO 10218-1:2025.
[^iso-15066]: ISO/TS 15066:2016.
[^modern-robotics]: Lynch & Park, 2017.
