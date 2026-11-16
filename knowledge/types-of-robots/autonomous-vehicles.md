---
type: Document
title: Autonomous vehicles
description: Self-driving cars and robotaxis — the levels of automation, how they perceive and decide, and what the safety data shows.
status: stable
order: 403
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: sae-levels
    title: "SAE Automotive Engineering — J3016 Automated-Driving Graphic Update (2019)"
    resource: https://www.mobilityengineeringtech.com/component/content/article/43953
  - id: stanley
    title: "Thrun et al. — Stanley: The Robot that Won the DARPA Grand Challenge (2006)"
    resource: http://robots.stanford.edu/papers/thrun.stanley05.pdf
  - id: waymo-impact
    title: "Waymo — Safety Impact data hub"
    resource: https://waymo.com/safety/impact/
  - id: ai-index-2025
    title: "Stanford HAI — The 2025 AI Index Report"
    resource: https://hai.stanford.edu/ai-index/2025-ai-index-report
  - id: ntsb-tempe
    title: "NTSB — Collision Between Vehicle Controlled by Developmental Automated Driving System and Pedestrian, Tempe, Arizona (HWY18MH010)"
    resource: https://www.ntsb.gov/investigations/Pages/HWY18MH010.aspx
---

**In short:** autonomous vehicles (AVs) are cars and trucks that drive
themselves using cameras, radar, lidar and AI. They are robots on wheels: they
sense, decide and act at high speed among people. Driverless robotaxis now
carry paying passengers in several US cities, and both the safety record and
its limits are actively studied.

## Explanation

### Levels of automation

The SAE J3016 standard, the industry's most-cited reference, describes six
levels from Level 0 (no automation) to Level 5 (full vehicle
autonomy).[^sae-levels] Most cars on sale offer driver assistance at the lower
levels, where the human is still driving; robotaxis operate without a driver in
defined areas.

### How they work

AVs follow the [sense–think–act loop](../ai-and-robotics/sense-think-act.md).
Stanford's Stanley, winner of the 2005 DARPA Grand Challenge, showed the recipe:
lasers, cameras and GPS feed probabilistic perception and machine learning,
which feed a planner and controller — all running continuously, with no human
intervention.[^stanley]

### Deployment

Stanford's 2025 AI Index reported that Waymo was providing over 150,000
autonomous rides each week in the US, and that Baidu's Apollo Go robotaxi fleet
served numerous cities in China.[^ai-index-2025]

### Safety evidence

Waymo publishes its own safety comparison. Through June 2026 it reports 271.3
million "rider-only" miles with no human driver, and, compared with a human
benchmark over the same distance and areas, 82% fewer injury-causing crashes
and 95% fewer crashes with serious injury or worse.[^waymo-impact] These are
the company's own figures and methodology.

Failures are investigated publicly. On 18 March 2018 a developmental automated
test vehicle struck and killed a pedestrian in Tempe, Arizona; the US National
Transportation Safety Board found the probable cause included the safety
operator's failure to monitor the driving environment and the automated
system.[^ntsb-tempe]

## Key points

- SAE J3016 defines Levels 0–5 of driving automation.[^sae-levels]
- The 2005 Stanley car established the modern AV software
  recipe.[^stanley]
- Robotaxis run commercially in the US and China.[^ai-index-2025]
- Waymo reports large crash reductions versus human drivers, by its own
  measure.[^waymo-impact]
- The 2018 Tempe crash shows the cost of weak human
  oversight.[^ntsb-tempe]

## Related topics

- [Perception](../ai-and-robotics/perception.md)
- [Computer vision](../core-technologies/computer-vision.md)
- [SLAM](../core-technologies/slam.md)
- [Safety](../ethics-and-risks/safety.md)
- [Logistics](../applications/logistics.md)

[^sae-levels]: SAE *Automotive Engineering*, 2019.
[^stanley]: Thrun et al., 2006.
[^waymo-impact]: Waymo Safety Impact hub.
[^ai-index-2025]: Stanford HAI, AI Index 2025.
[^ntsb-tempe]: NTSB, HWY18MH010.
