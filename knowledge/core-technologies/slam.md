---
type: Document
title: SLAM — simultaneous localization and mapping
description: How a robot builds a map of an unknown place while working out where it is inside that map.
status: draft
order: 306
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: slam-survey
    title: "Cadena et al. — Past, Present, and Future of Simultaneous Localization and Mapping: Towards the Robust-Perception Age (2016)"
    resource: https://arxiv.org/abs/1606.05830
  - id: orb-slam
    title: "Mur-Artal, Montiel & Tardós — ORB-SLAM: a Versatile and Accurate Monocular SLAM System (2015)"
    resource: https://arxiv.org/abs/1502.00956
  - id: nerf
    title: "Mildenhall et al. — NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis (2020)"
    resource: https://arxiv.org/abs/2003.08934
---

**In short:** SLAM is the problem of building a map of an unknown environment
while at the same time estimating the robot's position in it. It is a
chicken-and-egg problem — you need a map to locate yourself and a location to
build the map — and solving it lets robots, drones and phones move through
places they have never seen.

## Explanation

### The problem

A leading survey defines SLAM as "the concurrent construction of a model of the
environment (the map), and the estimation of the state of the robot moving
within it", and notes 30 years of progress that has carried the technique into
industry.[^slam-survey]

### How it works, simply

1. The robot moves and its odometry (wheel or inertial sensors) estimates how
   far it went — with growing error.
2. It observes landmarks with cameras or lidar.
3. It matches what it sees with what it saw before, and uses the matches to
   correct both its position and its map.
4. When it recognises a place it visited long ago — **loop closure** — it can
   correct the drift accumulated along the whole loop.

The survey presents what it calls the "de-facto standard formulation" of SLAM
as an estimation problem over the robot's poses and the map.[^slam-survey]

### Visual SLAM

ORB-SLAM (2015) runs in real time from a single camera, indoors and outdoors,
using the same image features for tracking, mapping, relocalisation and loop
closing, and keeps its map compact so it can operate for long
periods.[^orb-slam]

### Where it is going

The survey's authors ask two provocative questions — "Do robots need SLAM?" and
"Is SLAM solved?" — and argue that robustness, long-term mapping and
*semantic* maps (knowing that a region is a "kitchen" or an object is a "door")
remain open problems.[^slam-survey] Newer neural scene representations, such as
neural radiance fields, learn a 3D scene from images and can render new
views of it.[^nerf]

## Key points

- SLAM builds a map and localises the robot within it at the same
  time.[^slam-survey]
- Loop closure corrects drift when the robot revisits a place.[^slam-survey]
- Visual SLAM such as ORB-SLAM works from a single camera in real
  time.[^orb-slam]
- Robust, long-term and semantic mapping are still open.[^slam-survey]

## Related topics

- [Perception](../ai-and-robotics/perception.md)
- [Computer vision](computer-vision.md)
- [Drones](../types-of-robots/drones.md)
- [Autonomous vehicles](../types-of-robots/autonomous-vehicles.md)
- [ROS](ros.md)

[^slam-survey]: Cadena et al., 2016.
[^orb-slam]: Mur-Artal et al., 2015.
[^nerf]: Mildenhall et al., 2020.
