---
type: Document
title: ROS — the Robot Operating System
description: The open-source software framework that most robotics research and many commercial robots are built on.
status: draft
order: 307
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: ros2-paper
    title: "Macenski et al. — Robot Operating System 2: Design, Architecture, and Uses In The Wild, Science Robotics (2022)"
    resource: https://arxiv.org/abs/2211.07752
  - id: ros-site
    title: "ROS — Robot Operating System (official site)"
    resource: https://www.ros.org/
  - id: open-robotics
    title: "Open Robotics"
    resource: https://www.openrobotics.org/
  - id: gazebo
    title: "Gazebo — robot simulator"
    resource: https://gazebosim.org/
---

**In short:** ROS (the Robot Operating System) is not an operating system in
the usual sense but a free, open-source set of software libraries and tools for
building robot applications. It provides a common way for a robot's parts —
sensors, planners, controllers — to talk to each other, so developers can
reuse components instead of starting from scratch.

## Explanation

### Why robots need a common framework

Robots in very different industries share the same needs: a modular, scalable
and reliable architecture, plus sensing, planning, mobility and
autonomy.[^ros2-paper] ROS supplies that shared vocabulary of components, and
its authors credit the original ROS with "demonstrably expediting robotics
research with freely-available components and a modular
framework".[^ros2-paper]

### How it works

A ROS system is a set of small programs (nodes). One node might read a lidar,
another run SLAM, another plan a path and another drive the motors. Nodes
exchange messages over named channels, so a component can be swapped without
rewriting the rest.

### ROS 1 to ROS 2

ROS 1 was built for research and lacked many production-grade features. ROS 2
was redesigned "from the ground up" to meet the needs of modern robots, from
research labs to commercial deployments in challenging environments.[^ros2-paper]

### The ecosystem

ROS is maintained by Open Robotics with a global community, alongside the
Gazebo simulator and the Open-RMF framework for making fleets of different
robots work together.[^open-robotics][^gazebo] The official ROS site hosts
documentation, distributions and community resources.[^ros-site]

## Key points

- ROS is open-source middleware and tooling for robot software.[^ros-site]
- It lets robot components be reused and swapped.[^ros2-paper]
- ROS 2 was redesigned for production robots.[^ros2-paper]
- It sits within a wider open ecosystem including Gazebo and
  Open-RMF.[^open-robotics]

## Related topics

- [Simulation and digital twins](simulation-and-digital-twins.md)
- [SLAM](slam.md)
- [The sense–think–act loop](../ai-and-robotics/sense-think-act.md)

[^ros2-paper]: Macenski et al., 2022.
[^ros-site]: ros.org.
[^open-robotics]: Open Robotics.
[^gazebo]: Gazebo.
