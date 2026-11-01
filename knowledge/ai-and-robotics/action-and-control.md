---
type: Document
title: "Action and control: how robots move"
description: Actuators, kinematics, feedback control and learned controllers — the "act" step that makes decisions physical.
status: draft
order: 204
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: modern-robotics
    title: "Lynch & Park — Modern Robotics: Mechanics, Planning, and Control (2017)"
    resource: https://hades.mech.northwestern.edu/index.php/Modern_Robotics
  - id: springer-handbook
    title: "Siciliano & Khatib (eds.) — Springer Handbook of Robotics, 2nd edition"
    resource: https://link.springer.com/referencework/10.1007/978-3-319-32552-1
  - id: anymal
    title: "Hwangbo et al. — Learning agile and dynamic motor skills for legged robots (2019)"
    resource: https://arxiv.org/abs/1901.08652
  - id: diffusion-policy
    title: "Chi et al. — Diffusion Policy: Visuomotor Policy Learning via Action Diffusion (2023)"
    resource: https://arxiv.org/abs/2303.04137
  - id: gr00t
    title: "NVIDIA — GR00T N1: An Open Foundation Model for Generalist Humanoid Robots (2025)"
    resource: https://arxiv.org/abs/2503.14734
---

**In short:** action is where a decision becomes motion. Motors (actuators)
move the robot's joints; kinematics and dynamics describe how joint motion
becomes body motion; and feedback control keeps the motion on track. A growing
share of control is now learned rather than hand-designed.

## Explanation

### Actuators and kinematics

A robot arm is a chain of links connected by joints, each driven by an
actuator. *Forward kinematics* computes where the hand ends up for given joint
angles; *inverse kinematics* finds the joint angles that put the hand in a
desired place; *dynamics* relates forces and torques to motion.[^modern-robotics]

### Feedback control

Commands are never executed perfectly, so the robot measures what actually
happened and corrects continuously. This feedback control — including force
control for contact tasks such as grasping or polishing — is a foundation of
the field.[^springer-handbook][^modern-robotics]

### Learned controllers

Some motions are too complex to design by hand. Researchers trained a neural
network policy in simulation and transferred it to ANYmal, a dog-sized
four-legged robot, which then ran faster than with earlier methods and could
recover from falls.[^anymal] For manipulation, Diffusion Policy generates robot
actions with a denoising diffusion process and outperformed earlier robot
learning methods by an average of 46.9% across 12 tasks.[^diffusion-policy]

### Fast and slow systems

Humanoid foundation models often split control in two. NVIDIA's GR00T N1 uses a
vision-language module ("System 2") to interpret the scene and instructions,
and a diffusion transformer ("System 1") to generate fluid motor actions in
real time; the two are trained together.[^gr00t]

## Key points

- Kinematics maps joint angles to positions; dynamics maps forces to
  motion.[^modern-robotics]
- Feedback control corrects errors continuously.[^springer-handbook]
- Learned controllers trained in simulation can outperform hand-designed
  ones.[^anymal]
- Generative models now produce robot actions directly.[^diffusion-policy][^gr00t]

## Related topics

- [The sense–think–act loop](sense-think-act.md)
- [Decision-making](decision-making.md)
- [Simulation and digital twins](../core-technologies/simulation-and-digital-twins.md)
- [Humanoid robots](../types-of-robots/humanoid-robots.md)

[^modern-robotics]: Lynch & Park, 2017.
[^springer-handbook]: *Springer Handbook of Robotics*.
[^anymal]: Hwangbo et al., 2019.
[^diffusion-policy]: Chi et al., 2023.
[^gr00t]: NVIDIA, 2025.
