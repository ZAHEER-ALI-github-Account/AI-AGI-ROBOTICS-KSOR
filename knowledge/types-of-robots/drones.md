---
type: Document
title: Drones and aerial robots
description: Uncrewed aircraft that fly with increasing autonomy — from delivery drones to the first helicopter on Mars — and the rules that govern them.
status: draft
order: 404
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: faa-part107
    title: "US Federal Aviation Administration — Certificated Remote Pilots including Commercial Operators (Part 107)"
    resource: https://www.faa.gov/uas/commercial_operators
  - id: zipline
    title: "Zipline — Drone delivery for food, groceries, and medicine"
    resource: https://www.flyzipline.com/
  - id: ingenuity
    title: "NASA Science — Ingenuity Mars Helicopter"
    resource: https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/
  - id: slam-survey
    title: "Cadena et al. — Past, Present, and Future of Simultaneous Localization and Mapping (2016)"
    resource: https://arxiv.org/abs/1606.05830
  - id: hrw-2024
    title: "Human Rights Watch — Killer Robots: UN Vote Should Spur Treaty Negotiations (5 December 2024)"
    resource: https://www.hrw.org/news/2024/12/05/killer-robots-un-vote-should-spur-treaty-negotiations
---

**In short:** drones are uncrewed aircraft — usually small multirotors — that
fly by remote control, autonomously, or something in between. They are flying
robots: they sense, decide and act in three dimensions. They deliver goods,
inspect infrastructure, map farms and disaster zones, and have even flown on
Mars.

## Explanation

### How autonomy works in the air

A drone must keep itself stable, know where it is, and avoid obstacles. Where
satellite positioning is unavailable, it must estimate its position and map
its surroundings from its own sensors — the problem known as SLAM, which a
leading survey describes as having moved from research into real-world
applications and industry.[^slam-survey]

### Uses

- **Delivery.** Companies such as Zipline deliver food, groceries and medicine
  by drone.[^zipline]
- **Exploration.** NASA's Ingenuity helicopter made the first powered flight on
  another planet on 19 April 2021 and went on to complete 72
  flights on Mars.[^ingenuity]
- **Farming.** Drones and other field robots are part of agricultural
  automation — see [agriculture](../applications/agriculture.md).

### Rules

In the United States, commercial drone pilots operate under the FAA's Part 107
rules. Since 21 April 2021, the Operations Over People rule lets Part 107 pilots
fly at night and over people and moving vehicles without a waiver, provided
they meet the rule's requirements.[^faa-part107]

### Military drones

Drones are also central to modern warfare, which drives the debate on
[autonomous weapons](../ethics-and-risks/autonomous-weapons.md) — weapon
systems that select and apply force to targets based on sensor processing
rather than direct human input.[^hrw-2024]

## Key points

- Drones are flying robots that must localise and map as they
  fly.[^slam-survey]
- They deliver goods, inspect, map and explore.[^zipline][^ingenuity]
- Ingenuity made 72 flights on Mars from 2021.[^ingenuity]
- FAA Part 107 governs US commercial drones.[^faa-part107]

## Related topics

- [SLAM](../core-technologies/slam.md)
- [Space exploration](../applications/space-exploration.md)
- [Defense](../applications/defense.md)
- [Swarm robots](swarm-robots.md)

[^faa-part107]: FAA, Part 107.
[^zipline]: Zipline.
[^ingenuity]: NASA, Ingenuity.
[^slam-survey]: Cadena et al., 2016.
[^hrw-2024]: Human Rights Watch, 2024.
