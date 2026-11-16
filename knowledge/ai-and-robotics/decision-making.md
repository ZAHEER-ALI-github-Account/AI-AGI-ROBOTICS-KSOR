---
type: Document
title: "Decision-making: how robots choose what to do"
description: Planning, search, learned policies and language-model planners — the "think" step that turns perception into action.
status: stable
order: 203
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: aima
    title: "Russell & Norvig — Artificial Intelligence: A Modern Approach, 4th edition"
    resource: https://aima.cs.berkeley.edu/
  - id: shakey
    title: "Computer History Museum — Shakey"
    resource: https://www.computerhistory.org/revolution/artificial-intelligence-robotics/13/289
  - id: modern-robotics
    title: "Lynch & Park — Modern Robotics: Mechanics, Planning, and Control (2017)"
    resource: https://hades.mech.northwestern.edu/index.php/Modern_Robotics
  - id: sutton-barto
    title: "Sutton & Barto — Reinforcement Learning: An Introduction, 2nd edition"
    resource: http://incompleteideas.net/book/the-book-2nd.html
  - id: saycan
    title: "Ahn et al. — Do As I Can, Not As I Say: Grounding Language in Robotic Affordances (2022)"
    resource: https://arxiv.org/abs/2204.01691
  - id: srt-h
    title: "Kim et al. — SRT-H: A Hierarchical Framework for Autonomous Surgery via Language Conditioned Imitation Learning (2025)"
    resource: https://arxiv.org/abs/2505.10251
---

**In short:** decision-making is the "think" step: given what the robot
perceives and what it has been asked to do, choose the next action. Methods
range from classical search and planning to policies learned by trial and
error, and now to large language models that break tasks into steps.

## Explanation

### Planning and search

Classical AI treats a task as a search for a sequence of actions that reaches
a goal from the current state, using search algorithms and planners.[^aima]
Shakey's STRIPS planner is an early example: it reasoned about goals such as
pushing a particular block to a particular doorway.[^shakey]

### Motion planning

Robots also have to plan *motion*: a collision-free path for the body or arm
through space. Robotics textbooks treat motion planning — finding such paths
in the robot's configuration space — as a core topic alongside kinematics and
control.[^modern-robotics]

### Learned policies

Instead of planning from a model, a robot can *learn* a policy — a mapping from
situations to actions — by trial and error, guided by a reward signal. This is
reinforcement learning, explained in
[reinforcement learning](../core-technologies/reinforcement-learning.md).[^sutton-barto]

### Language models as planners

Large language models know a lot about everyday tasks but have no experience of
a particular robot's body. SayCan (2022) combined the two: the language model
proposes useful next steps, and learned value functions for the robot's skills
score which steps are actually feasible, letting a mobile manipulator follow
long, abstract instructions.[^saycan]

### Hierarchies

Many systems split decisions into levels. SRT-H, a 2025 surgical system, uses a
high-level policy that plans in language — issuing task or corrective
instructions — and a low-level policy that generates the robot's trajectories;
it completed a gallbladder-removal step autonomously on eight unseen ex vivo
gallbladders.[^srt-h]

## Key points

- Classical planners search for action sequences that reach a
  goal.[^aima][^shakey]
- Motion planning finds collision-free paths for the robot's
  body.[^modern-robotics]
- Reinforcement learning learns policies from reward.[^sutton-barto]
- Language models can plan when grounded in what the robot can actually
  do.[^saycan]
- Hierarchical designs separate "what to do" from "how to move".[^srt-h]

## Related topics

- [The sense–think–act loop](sense-think-act.md)
- [Action and control](action-and-control.md)
- [Reinforcement learning](../core-technologies/reinforcement-learning.md)
- [LLMs in robots](../core-technologies/llms-in-robots.md)

[^aima]: Russell & Norvig, *AIMA*.
[^shakey]: Computer History Museum, Shakey.
[^modern-robotics]: Lynch & Park, 2017.
[^sutton-barto]: Sutton & Barto, 2nd ed.
[^saycan]: Ahn et al., 2022.
[^srt-h]: Kim et al., 2025.
