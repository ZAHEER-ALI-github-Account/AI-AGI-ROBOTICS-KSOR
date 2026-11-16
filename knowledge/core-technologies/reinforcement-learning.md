---
type: Document
title: Reinforcement learning
description: Learning by trial and error from rewards — how AI mastered games and how robots learn to walk and manipulate.
status: stable
order: 303
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: sutton-barto
    title: "Sutton & Barto — Reinforcement Learning: An Introduction, 2nd edition"
    resource: http://incompleteideas.net/book/the-book-2nd.html
  - id: dqn
    title: "Mnih et al. — Human-level control through deep reinforcement learning, Nature 518 (2015)"
    resource: https://www.nature.com/articles/nature14236
  - id: alphago-zero
    title: "Silver et al. — Mastering the game of Go without human knowledge, Nature 550 (2017)"
    resource: https://www.nature.com/articles/nature24270
  - id: anymal
    title: "Hwangbo et al. — Learning agile and dynamic motor skills for legged robots (2019)"
    resource: https://arxiv.org/abs/1901.08652
  - id: rubiks
    title: "OpenAI et al. — Solving Rubik's Cube with a Robot Hand (2019)"
    resource: https://arxiv.org/abs/1910.07113
  - id: rlhf
    title: "Christiano et al. — Deep reinforcement learning from human preferences (2017)"
    resource: https://arxiv.org/abs/1706.03741
  - id: deepseek-r1
    title: "DeepSeek-AI — DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning (2025)"
    resource: https://arxiv.org/abs/2501.12948
  - id: spec-gaming
    title: "Google DeepMind — Specification gaming: the flip side of AI ingenuity"
    resource: https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/
---

**In short:** in reinforcement learning (RL) an agent learns by acting,
observing the result and receiving a reward. Over many trials it learns a
policy that maximises reward. RL mastered Atari and Go, taught robots to walk
and manipulate, and now helps train language models to reason.

## Explanation

### The idea

An RL agent interacts with an environment: it observes a state, takes an
action and receives a reward and a new state. Its aim is to learn a policy that
maximises total reward over time, balancing *exploring* new actions against
*exploiting* what already works.[^sutton-barto]

### Milestones in games

DeepMind's DQN, given only screen pixels and the game score, reached a level
comparable to a professional human games tester across 49 Atari games, using
the same algorithm and settings for all of them.[^dqn] AlphaGo Zero learned Go
by reinforcement learning alone, "without human data, guidance or domain
knowledge beyond game rules", and won 100–0 against the earlier
champion-defeating AlphaGo.[^alphago-zero]

### Robots

Trial and error on real hardware is slow and risky, so robot RL is usually done
in simulation first. A policy trained in simulation let the ANYmal legged robot
run faster than before and recover from falls.[^anymal] OpenAI trained a robot
hand in simulation with *automatic domain randomization* and used it to solve a
Rubik's cube on real hardware.[^rubiks]

### Learning from human preferences

When a reward is hard to write down, people can compare pairs of behaviours
instead. Christiano et al. showed this works with feedback on less than 1% of
an agent's interactions.[^rlhf] This technique, RL from human feedback, is now
central to aligning language models. RL is also used to improve reasoning:
DeepSeek-R1 reports that pure RL can incentivise reasoning behaviours such as
self-reflection and verification.[^deepseek-r1]

### A known failure mode

An agent optimises the reward it is given, not the one intended. DeepMind calls
this *specification gaming*: in one example, an agent rewarded for the height
of a red block's bottom face simply flipped the block over instead of stacking
it.[^spec-gaming]

## Key points

- RL learns a policy that maximises reward through trial and
  error.[^sutton-barto]
- It reached professional-tester level on 49 Atari games and superhuman
  Go.[^dqn][^alphago-zero]
- Robots learn in simulation and transfer to hardware.[^anymal][^rubiks]
- Human preferences can stand in for hand-written rewards.[^rlhf]
- Badly specified rewards get "gamed".[^spec-gaming]

## Related topics

- [Machine learning](machine-learning.md)
- [Simulation and digital twins](simulation-and-digital-twins.md)
- [Decision-making](../ai-and-robotics/decision-making.md)
- [AI safety and alignment](../agi/safety-and-alignment.md)

[^sutton-barto]: Sutton & Barto, 2nd ed.
[^dqn]: Mnih et al., 2015.
[^alphago-zero]: Silver et al., 2017.
[^anymal]: Hwangbo et al., 2019.
[^rubiks]: OpenAI et al., 2019.
[^rlhf]: Christiano et al., 2017.
[^deepseek-r1]: DeepSeek-AI, 2025.
[^spec-gaming]: Google DeepMind, specification gaming.
