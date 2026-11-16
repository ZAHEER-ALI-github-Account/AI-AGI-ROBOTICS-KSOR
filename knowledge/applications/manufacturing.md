---
type: Document
title: AI and robots in manufacturing
description: How factories use industrial robots, cobots, machine vision, digital twins and now humanoids — and who is automating fastest.
status: stable
order: 501
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
  - id: iso-15066
    title: "ISO/TS 15066:2016 — Robots and robotic devices — Collaborative robots"
    resource: https://www.iso.org/standard/62996.html
  - id: nasem-digital-twins
    title: "National Academies — Foundational Research Gaps and Future Directions for Digital Twins"
    resource: https://nap.nationalacademies.org/catalog/26894/foundational-research-gaps-and-future-directions-for-digital-twins
  - id: isaac-sim
    title: "NVIDIA Developer — Isaac Sim"
    resource: https://developer.nvidia.com/isaac/sim
  - id: hyundai-ces-2026
    title: "Hyundai Motor Group — Hyundai Motor Group marks CES 2026 with major AI robotics announcements and accolades"
    resource: https://www.hyundai.com/worldwide/en/newsroom/detail/0000001109
  - id: acemoglu-restrepo
    title: "Acemoglu & Restrepo — Robots and Jobs: Evidence from US Labor Markets, NBER Working Paper 23285"
    resource: https://www.nber.org/papers/w23285
---

**In short:** manufacturing is where robots began and where most of them still
work. Robot arms weld, paint and assemble; AI adds vision, flexibility and
planning; digital twins let factories be simulated before they are changed.
China now installs more than half of the world's new factory robots.

## Explanation

### Scale and geography

Factories installed 542,000 industrial robots in 2024, more than double the
number ten years earlier, bringing the total in operation to about 4.66
million.[^ifr-industrial-2025] China installed 295,000 — 54% of the world
total — followed by Japan, the United States, Korea and
Germany.[^ifr-industrial-2025]

### What AI adds

- **Collaborative robots** work beside people rather than behind fences; their
  safety requirements are set out in ISO/TS 15066.[^iso-15066]
- **Simulation and synthetic data.** Tools such as NVIDIA's Isaac Sim simulate
  robots and generate synthetic data to train their perception.[^isaac-sim]
- **Digital twins** couple computational models with a physical system,
  updated through two-way data flows, to support decisions about
  it.[^nasem-digital-twins]

### Humanoids in the factory

Hyundai Motor Group plans to deploy Boston Dynamics' Atlas humanoid in phases,
beginning with parts-sequencing tasks at its Metaplant America plant in
Savannah, Georgia, using a dedicated Robot Metaplant Application Center to
train and validate robots on real manufacturing data before large-scale
deployment from 2028.[^hyundai-ces-2026]

### The effect on workers

Economists Acemoglu and Restrepo studied US labour markets from 1990 to 2007
and estimated that one more robot per thousand workers reduced the
employment-to-population ratio by about 0.18–0.34 percentage points and wages by
0.25–0.5%.[^acemoglu-restrepo] See [jobs and automation](../ethics-and-risks/jobs-and-automation.md).

## Key points

- 542,000 factory robots were installed in 2024; China installed 54% of
  them.[^ifr-industrial-2025]
- Cobots, simulation and digital twins make automation more
  flexible.[^iso-15066][^isaac-sim][^nasem-digital-twins]
- Humanoids are being validated for car factories.[^hyundai-ces-2026]
- Robots have measurably affected local jobs and wages in the
  US.[^acemoglu-restrepo]

## Related topics

- [Industrial robots](../types-of-robots/industrial-robots.md)
- [Simulation and digital twins](../core-technologies/simulation-and-digital-twins.md)
- [Humanoid robots](../types-of-robots/humanoid-robots.md)
- [Jobs and automation](../ethics-and-risks/jobs-and-automation.md)

[^ifr-industrial-2025]: IFR, World Robotics 2025 — Industrial Robots.
[^iso-15066]: ISO/TS 15066:2016.
[^nasem-digital-twins]: National Academies, digital twins report.
[^isaac-sim]: NVIDIA Isaac Sim.
[^hyundai-ces-2026]: Hyundai Motor Group, CES 2026.
[^acemoglu-restrepo]: Acemoglu & Restrepo, NBER w23285.
