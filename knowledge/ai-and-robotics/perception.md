---
type: Document
title: "Perception: how robots sense the world"
description: The sensors robots use and how AI turns raw camera, depth and position data into an understanding of the scene.
status: stable
order: 202
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: springer-handbook
    title: "Siciliano & Khatib (eds.) — Springer Handbook of Robotics, 2nd edition"
    resource: https://link.springer.com/referencework/10.1007/978-3-319-32552-1
  - id: stanley
    title: "Thrun et al. — Stanley: The Robot that Won the DARPA Grand Challenge (2006)"
    resource: http://robots.stanford.edu/papers/thrun.stanley05.pdf
  - id: yolo
    title: "Redmon et al. — You Only Look Once: Unified, Real-Time Object Detection (2015)"
    resource: https://arxiv.org/abs/1506.02640
  - id: clip
    title: "Radford et al. — Learning Transferable Visual Models From Natural Language Supervision (2021)"
    resource: https://arxiv.org/abs/2103.00020
  - id: slam-survey
    title: "Cadena et al. — Past, Present, and Future of Simultaneous Localization and Mapping (2016)"
    resource: https://arxiv.org/abs/1606.05830
  - id: gemini-robotics
    title: "Gemini Robotics Team — Gemini Robotics: Bringing AI into the Physical World (2025)"
    resource: https://arxiv.org/abs/2503.20020
---

**In short:** perception is how a robot turns raw sensor signals into useful
knowledge — where it is, what objects are around it and how they are moving.
Cameras, depth sensors and position sensors supply the data; AI, especially
deep learning, does most of the interpreting.

## Explanation

### Sensors

Robots measure two things: the outside world and their own body. The robotics
handbook groups sensing into the robot's internal state (for example joint
encoders and force/torque sensors) and its surroundings (vision, range and
tactile sensing), and treats fusing them into one estimate as a core
topic.[^springer-handbook]

### From pixels to objects

Detecting objects in camera images is the most common perception task. YOLO
(2015) showed that a single neural network could predict object boxes and
classes in one pass at 45 frames per second, fast enough for real-time
use.[^yolo] CLIP (2021) learned visual concepts from 400 million image–text
pairs, so that a robot can recognise objects described in plain language
without task-specific training.[^clip]

### Knowing where you are

A moving robot must also locate itself and map its environment at the same
time — the problem called SLAM, covered in [SLAM](../core-technologies/slam.md).
A major survey calls this the "de-facto standard formulation" for robot
mapping and describes the field's push towards robust perception.[^slam-survey]

### Handling uncertainty

Sensors are noisy, so perception estimates probabilities rather than certain
facts. Stanley, the 2005 DARPA Grand Challenge winner, used probabilistic
reasoning and machine learning to judge from laser and camera data which
terrain was safe to drive on.[^stanley]

### Spatial reasoning with foundation models

Newer models reason about 3D space directly. Google DeepMind's Gemini
Robotics-ER adds object detection, pointing, trajectory and grasp prediction,
multi-view correspondence and 3D bounding boxes to a multimodal language
model.[^gemini-robotics]

## Key points

- Robots sense both their own state and their surroundings, then fuse the
  data.[^springer-handbook]
- Deep networks such as YOLO detect objects in real time; CLIP links images to
  language.[^yolo][^clip]
- Perception is probabilistic because sensors are noisy.[^stanley]
- Foundation models now provide 3D spatial reasoning for robots.[^gemini-robotics]

## Related topics

- [The sense–think–act loop](sense-think-act.md)
- [Computer vision](../core-technologies/computer-vision.md)
- [SLAM](../core-technologies/slam.md)
- [Autonomous vehicles](../types-of-robots/autonomous-vehicles.md)

[^springer-handbook]: *Springer Handbook of Robotics*.
[^stanley]: Thrun et al., 2006.
[^yolo]: Redmon et al., 2015.
[^clip]: Radford et al., 2021.
[^slam-survey]: Cadena et al., 2016.
[^gemini-robotics]: Gemini Robotics Team, 2025.
