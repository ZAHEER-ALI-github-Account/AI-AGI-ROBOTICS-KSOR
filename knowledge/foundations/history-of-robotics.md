---
type: Document
title: History of robotics
description: From Čapek's 1920 play to the first factory arm, Shakey, Mars rovers, driverless cars and today's humanoids.
status: stable
order: 104
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: rur
    title: "Karel Čapek — R.U.R. (Rossum's Universal Robots), Project Gutenberg"
    resource: https://www.gutenberg.org/ebooks/59112
  - id: unimate-ieee
    title: "IEEE Spectrum — In 1961, the First Robot Arm Punched In"
    resource: https://spectrum.ieee.org/unimation-robot
  - id: unimate-a3
    title: "Association for Advancing Automation — Joseph Engelberger and Unimate"
    resource: https://www.automate.org/a3-content/joseph-engelberger-unimate
  - id: shakey
    title: "Computer History Museum — Shakey"
    resource: https://www.computerhistory.org/revolution/artificial-intelligence-robotics/13/289
  - id: brooks-1991
    title: "Brooks — Intelligence without representation, Artificial Intelligence 47 (1991)"
    resource: https://people.csail.mit.edu/brooks/papers/representation.pdf
  - id: pathfinder
    title: "NASA Science — Mars Pathfinder"
    resource: https://science.nasa.gov/mission/mars-pathfinder/
  - id: stanley
    title: "Thrun et al. — Stanley: The Robot that Won the DARPA Grand Challenge, Journal of Field Robotics (2006)"
    resource: http://robots.stanford.edu/papers/thrun.stanley05.pdf
  - id: ingenuity
    title: "NASA Science — Ingenuity Mars Helicopter"
    resource: https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/
  - id: ifr-industrial-2025
    title: "IFR — World Robotics 2025: Global robot demand in factories doubles over 10 years"
    resource: https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years
  - id: atlas-2026
    title: "Boston Dynamics — Boston Dynamics unveils new Atlas robot to revolutionize industry"
    resource: https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/
---

**In short:** the idea of the robot came from fiction in 1920; the first
industrial robot arm went to work in 1961. Research robots learned to plan
(Shakey), to react (behaviour-based robots), to explore other planets and to
drive themselves. Today factory robots number in the millions and humanoids are
entering production.

## Explanation

### From fiction to the factory floor

Karel Čapek's 1920 play *R.U.R.* gave the world the word "robot".[^rur] The
first real industrial robot grew out of a meeting in 1956 between inventor
George Devol, who two years earlier had filed a patent for a general-purpose
manipulator for repetitive tasks, and engineer Joseph Engelberger.[^unimate-ieee]
Their Unimate arm went to work at a General Motors plant in 1961, beginning the
era of industrial robots.[^unimate-ieee][^unimate-a3]

### Robots that reason

Shakey, built at the Stanford Research Institute between 1966 and 1972, was the
first mobile robot to reason about its actions. Its STRIPS planner worked out
goals such as "go to room D and push block 9 over to where doorway 4 is", and
the project led to advances in visual analysis, route finding and object
manipulation.[^shakey]

### Robots that react

Rodney Brooks argued for building robots from layers of simple
"activity-producing subsystems" that each link sensing to action, with no
central representation or central controller — the behaviour-based approach to
mobile robots.[^brooks-1991]

### Robots that explore

In 1997 NASA's Mars Pathfinder delivered Sojourner, the first robotic rover on
Mars.[^pathfinder] In 2021 NASA's Ingenuity helicopter made the first powered
flights on another planet; it completed 72 flights in total.[^ingenuity]

### Robots that drive

In the 2005 DARPA Grand Challenge, Stanford's autonomous car Stanley won a
desert race with no human intervention, combining probabilistic perception and
machine learning.[^stanley] That work fed directly into today's
[autonomous vehicles](../types-of-robots/autonomous-vehicles.md).

### Robots at scale

By 2024 annual industrial robot installations had more than doubled in ten
years, to 542,000 units, with 4.66 million robots operating
worldwide.[^ifr-industrial-2025] In January 2026 Boston Dynamics unveiled a
product version of its electric Atlas humanoid and said it was beginning to
manufacture it.[^atlas-2026]

## Key points

- 1920: "robot" coined in *R.U.R.*; 1961: Unimate starts work at
  GM.[^rur][^unimate-ieee]
- 1966–1972: Shakey, the first mobile robot to reason about its
  actions.[^shakey]
- 1997: Sojourner on Mars; 2021: Ingenuity's first flight.[^pathfinder][^ingenuity]
- 2005: Stanley wins the DARPA Grand Challenge.[^stanley]
- 2024: 4.66 million industrial robots in operation.[^ifr-industrial-2025]

## Related topics

- [History of artificial intelligence](history-of-ai.md)
- [Key milestones timeline](key-milestones.md)
- [Industrial robots](../types-of-robots/industrial-robots.md)
- [Humanoid robots](../types-of-robots/humanoid-robots.md)
- [Space exploration](../applications/space-exploration.md)

[^rur]: Čapek, *R.U.R.*, 1920.
[^unimate-ieee]: IEEE Spectrum, "In 1961, the First Robot Arm Punched In".
[^unimate-a3]: A3, "Joseph Engelberger and Unimate".
[^shakey]: Computer History Museum, Shakey.
[^brooks-1991]: Brooks, "Intelligence without representation", 1991.
[^pathfinder]: NASA, Mars Pathfinder.
[^stanley]: Thrun et al., 2006.
[^ingenuity]: NASA, Ingenuity Mars Helicopter.
[^ifr-industrial-2025]: IFR, World Robotics 2025.
[^atlas-2026]: Boston Dynamics, Atlas announcement.
