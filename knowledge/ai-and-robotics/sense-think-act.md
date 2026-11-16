---
type: Document
title: The sense–think–act loop
description: How every robot turns sensing into decisions and decisions into motion, and where AI fits in each step.
status: stable
order: 201
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
  - { by: "human:zaheerali", at: 2026-11-16T12:15:55Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T12:15:55Z }
sources:
  - id: aima
    title: "Russell & Norvig — Artificial Intelligence: A Modern Approach, 4th edition"
    resource: http://aima.cs.berkeley.edu/
  - id: springer-handbook
    title: "Siciliano & Khatib (eds.) — Springer Handbook of Robotics, 2nd edition"
    resource: https://link.springer.com/referencework/10.1007/978-3-319-32552-1
  - id: shakey
    title: "Computer History Museum — Shakey"
    resource: https://www.computerhistory.org/revolution/artificial-intelligence-robotics/13/289
  - id: brooks-1991
    title: "Brooks — Intelligence without representation, Artificial Intelligence 47 (1991)"
    resource: https://people.csail.mit.edu/brooks/papers/representation.pdf
  - id: stanley
    title: "Thrun et al. — Stanley: The Robot that Won the DARPA Grand Challenge (2006)"
    resource: http://robots.stanford.edu/papers/thrun.stanley05.pdf
  - id: rt2
    title: "Brohan et al. — RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control (2023)"
    resource: https://arxiv.org/abs/2307.15818
---

**In short:** a robot repeatedly *senses* the world, *thinks* about what to
do, and *acts*; the result of each action changes what it senses next. AI
sits mostly in the "think" step, but modern learning methods now reach into
sensing and acting too.

## Explanation

### The agent view

AI's standard textbook describes an **agent** as anything that perceives its
environment through sensors and acts on it through actuators, and builds the
whole subject around agents that choose good actions.[^aima] A robot is the
physical case of that definition: its sensors are cameras and encoders, its
actuators are motors.

### The three steps

1. **Sense** — measure the world and the robot's own state; see
   [perception](perception.md).
2. **Think** — estimate where things are, decide on a goal and plan how to
   reach it; see [decision-making](decision-making.md).
3. **Act** — send commands to motors and correct them continuously with
   feedback; see [action and control](action-and-control.md).

The robotics reference handbook is organised along the same lines, covering
sensing and estimation, motion planning and control as the foundations every
robot needs.[^springer-handbook]

### Two ways to close the loop

**Plan first.** Shakey (1966–72) built a model of its rooms, planned a
sequence of steps with its STRIPS planner, then carried them out.[^shakey]
Planning works well when the model is accurate, but it is slow when the world
changes.

**React first.** Rodney Brooks argued for layers of simple behaviours that each
connect sensing directly to action, with no central model.[^brooks-1991] This
made robots fast and robust, but harder to give long-term goals.

Most real systems mix the two. Stanley, the car that won the 2005 DARPA Grand
Challenge, combined probabilistic perception, machine learning and planning in
a pipeline that ran continuously as it drove.[^stanley]

### The loop in the foundation-model era

Recent "vision-language-action" models fold much of the loop into one learned
network: RT-2 takes camera images and a language instruction and outputs robot
actions directly, as text tokens.[^rt2] The loop remains — the robot still
senses, decides and acts many times a second — but the boundaries between the
steps are now partly learned.

## Key points

- An agent perceives through sensors and acts through actuators; a robot is a
  physical agent.[^aima]
- Planning-first (Shakey) and reaction-first (Brooks) are the two classic
  designs; most systems blend them.[^shakey][^brooks-1991]
- End-to-end models such as RT-2 learn sensing-to-action mappings
  directly.[^rt2]

## Related topics

- [Perception](perception.md)
- [Decision-making](decision-making.md)
- [Action and control](action-and-control.md)
- [LLMs in robots](../core-technologies/llms-in-robots.md)
- [Embodied AGI](../agi/embodied-agi.md)

[^aima]: Russell & Norvig, *AIMA*.
[^springer-handbook]: *Springer Handbook of Robotics*.
[^shakey]: Computer History Museum, Shakey.
[^brooks-1991]: Brooks, 1991.
[^stanley]: Thrun et al., 2006.
[^rt2]: Brohan et al., 2023.
