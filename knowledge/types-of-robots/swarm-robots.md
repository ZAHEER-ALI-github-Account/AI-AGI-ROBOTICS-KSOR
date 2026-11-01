---
type: Document
title: Swarm robots
description: Large groups of simple robots that cooperate through local rules, inspired by ants and bees — including the thousand-robot Kilobot swarm.
status: draft
order: 407
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: swarm-review
    title: "Brambilla, Ferrante, Birattari & Dorigo — Swarm robotics: a review from the swarm engineering perspective, Swarm Intelligence 7 (2013)"
    resource: https://link.springer.com/article/10.1007/s11721-012-0075-2
  - id: kilobot
    title: "Rubenstein, Cornejo & Nagpal — Programmable self-assembly in a thousand-robot swarm, Science 345 (2014)"
    resource: https://doi.org/10.1126/science.1254295
---

**In short:** swarm robotics coordinates many simple robots through local
interactions, without a central leader — the way ants, bees and birds
coordinate. The goal is collective behaviour that is robust (no single point of
failure), scalable (add more robots) and flexible.

## Explanation

### The idea

A review of the field describes swarm robotics as an approach to collective
robotics "that takes inspiration from the self-organized behaviors of social
animals", aiming through simple rules and local interactions to design
"robust, scalable, and flexible collective behaviors" for large numbers of
robots.[^swarm-review]

### The Kilobot swarm

In 2014 researchers built a swarm of a thousand small "Kilobot" robots that
could assemble themselves into complex pre-programmed shapes. Each robot
communicated only with neighbours within about three times its own diameter,
and extra algorithms let the swarm correct itself when robots collided or fell
behind.[^kilobot]

### Why it matters

The three properties the field aims for are:

- **Robustness** — the swarm keeps working when individual robots fail.
- **Scalability** — the same rules coordinate small or large numbers of robots.
- **Flexibility** — the swarm adapts its behaviour to the task.[^swarm-review]

The Kilobot experiment shows the engineering challenge in practice: simple
individual rules had to be supplemented with algorithms that let the group
recover from collisions and slow robots.[^kilobot]

### Open question

Open question: which real-world deployments of robot swarms exist today is not
covered by these sources. Swarms of drones also raise the military questions
discussed under [autonomous weapons](../ethics-and-risks/autonomous-weapons.md).

## Key points

- Swarms use simple rules and local interactions, with no
  leader.[^swarm-review]
- A thousand Kilobots self-assembled into shapes using only local
  communication.[^kilobot]
- Robustness, scalability and flexibility are the goals.[^swarm-review]

## Related topics

- [Drones](drones.md)
- [Decision-making](../ai-and-robotics/decision-making.md)
- [Autonomous weapons](../ethics-and-risks/autonomous-weapons.md)

[^swarm-review]: Brambilla et al., 2013.
[^kilobot]: Rubenstein, Cornejo & Nagpal, 2014.
