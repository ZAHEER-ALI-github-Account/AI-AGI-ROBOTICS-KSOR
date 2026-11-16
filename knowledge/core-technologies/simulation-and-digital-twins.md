---
type: Document
title: Simulation and digital twins
description: Why robots learn in virtual worlds first, how simulation-trained skills transfer to reality, and what a digital twin is.
status: stable
order: 309
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: domain-randomization
    title: "Tobin et al. — Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World (2017)"
    resource: https://arxiv.org/abs/1703.06907
  - id: rubiks
    title: "OpenAI et al. — Solving Rubik's Cube with a Robot Hand (2019)"
    resource: https://arxiv.org/abs/1910.07113
  - id: anymal
    title: "Hwangbo et al. — Learning agile and dynamic motor skills for legged robots (2019)"
    resource: https://arxiv.org/abs/1901.08652
  - id: mujoco
    title: "MuJoCo — Advanced Physics Simulation"
    resource: https://mujoco.org/
  - id: isaac-sim
    title: "NVIDIA Developer — Isaac Sim"
    resource: https://developer.nvidia.com/isaac/sim
  - id: gazebo
    title: "Gazebo — robot simulator"
    resource: https://gazebosim.org/
  - id: cosmos
    title: "NVIDIA — Cosmos World Foundation Model Platform for Physical AI (2025)"
    resource: https://arxiv.org/abs/2501.03575
  - id: nasem-digital-twins
    title: "National Academies — Foundational Research Gaps and Future Directions for Digital Twins"
    resource: https://nap.nationalacademies.org/catalog/26894/foundational-research-gaps-and-future-directions-for-digital-twins
---

**In short:** training a robot in the real world is slow, expensive and
sometimes dangerous, so robots increasingly learn in physics simulators first.
The hard part is the **sim-to-real gap** — the difference between the virtual
and the real world. A **digital twin** goes further: a virtual model kept in
sync with a specific real system so it can be monitored, predicted and
improved.

## Explanation

### Simulators

Widely used robot simulators include MuJoCo, a physics engine for research,
NVIDIA's Isaac Sim, which also generates synthetic training data, and the
open-source Gazebo.[^mujoco][^isaac-sim][^gazebo]

### Crossing the sim-to-real gap

*Domain randomization* deliberately varies the simulator — colours, textures,
lighting — so much that the real world looks like "just another variation".
Tobin et al. trained an object detector purely on simulated images that was
accurate to 1.5 cm in the real world.[^domain-randomization] OpenAI extended
this to *automatic* domain randomization, steadily increasing the difficulty,
and used it to let a robot hand solve a Rubik's cube.[^rubiks] Legged robots
benefit too: ANYmal's locomotion policy was trained in simulation, which made
data generation fast, automated and cheap.[^anymal]

### World models

NVIDIA argues that "physical AI needs to be trained digitally first" — it needs
a digital twin of itself (the policy) and of the world (a world model). Its
Cosmos platform provides open pre-trained world foundation models that can be
fine-tuned for specific robots.[^cosmos]

### Digital twins

A National Academies report explains that "a digital twin couples
computational models with a physical counterpart to create a system that is
dynamically updated through bidirectional data flows as conditions change",
and sets out the research gaps that remain before such twins can be relied
on.[^nasem-digital-twins]

## Key points

- Simulation makes robot training faster, cheaper and safer.[^anymal]
- Domain randomization helps skills transfer to
  reality.[^domain-randomization][^rubiks]
- World foundation models aim to simulate the world for physical
  AI.[^cosmos]
- Digital twins stay connected to a real system and inform decisions about
  it.[^nasem-digital-twins]

## Related topics

- [Reinforcement learning](reinforcement-learning.md)
- [ROS](ros.md)
- [Action and control](../ai-and-robotics/action-and-control.md)
- [Manufacturing](../applications/manufacturing.md)

[^domain-randomization]: Tobin et al., 2017.
[^rubiks]: OpenAI et al., 2019.
[^anymal]: Hwangbo et al., 2019.
[^mujoco]: MuJoCo.
[^isaac-sim]: NVIDIA Isaac Sim.
[^gazebo]: Gazebo.
[^cosmos]: NVIDIA, 2025.
[^nasem-digital-twins]: National Academies, digital twins report.
