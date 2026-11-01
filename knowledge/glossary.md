---
type: Document
title: Glossary
description: Short definitions of the key terms used across this knowledge base, each linked to the article that explains it.
status: draft
order: 900
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: oecd-definition
    title: "OECD.AI — Updates to the OECD's definition of an AI system explained (2023)"
    resource: https://oecd.ai/en/wonk/ai-system-definition-update
  - id: openai-charter
    title: "OpenAI — OpenAI Charter"
    resource: https://openai.com/charter/
  - id: aima
    title: "Russell & Norvig — Artificial Intelligence: A Modern Approach, 4th edition"
    resource: https://aima.cs.berkeley.edu/
  - id: lecun-nature
    title: "LeCun, Bengio & Hinton — Deep learning, Nature 521 (2015)"
    resource: https://www.nature.com/articles/nature14539
  - id: sutton-barto
    title: "Sutton & Barto — Reinforcement Learning: An Introduction, 2nd edition"
    resource: http://incompleteideas.net/book/the-book-2nd.html
  - id: transformer
    title: "Vaswani et al. — Attention Is All You Need (2017)"
    resource: https://arxiv.org/abs/1706.03762
  - id: rt2
    title: "Brohan et al. — RT-2: Vision-Language-Action Models (2023)"
    resource: https://arxiv.org/abs/2307.15818
  - id: slam-survey
    title: "Cadena et al. — Past, Present, and Future of Simultaneous Localization and Mapping (2016)"
    resource: https://arxiv.org/abs/1606.05830
  - id: ros2-paper
    title: "Macenski et al. — Robot Operating System 2 (2022)"
    resource: https://arxiv.org/abs/2211.07752
  - id: nasem-digital-twins
    title: "National Academies — Foundational Research Gaps and Future Directions for Digital Twins"
    resource: https://nap.nationalacademies.org/catalog/26894/foundational-research-gaps-and-future-directions-for-digital-twins
  - id: domain-randomization
    title: "Tobin et al. — Domain Randomization (2017)"
    resource: https://arxiv.org/abs/1703.06907
  - id: iso-15066
    title: "ISO/TS 15066:2016 — Collaborative robots"
    resource: https://www.iso.org/standard/62996.html
  - id: sae-levels
    title: "SAE Automotive Engineering — J3016 Automated-Driving Graphic Update (2019)"
    resource: https://www.mobilityengineeringtech.com/component/content/article/43953
  - id: concrete-problems
    title: "Amodei et al. — Concrete Problems in AI Safety (2016)"
    resource: https://arxiv.org/abs/1606.06565
  - id: spec-gaming
    title: "Google DeepMind — Specification gaming: the flip side of AI ingenuity"
    resource: https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/
  - id: instructgpt
    title: "Ouyang et al. — Training language models to follow instructions with human feedback (2022)"
    resource: https://arxiv.org/abs/2203.02155
  - id: constitutional-ai
    title: "Bai et al. — Constitutional AI: Harmlessness from AI Feedback (2022)"
    resource: https://arxiv.org/abs/2212.08073
  - id: bletchley
    title: "The Bletchley Declaration (2023)"
    resource: https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023
  - id: hrw-2024
    title: "Human Rights Watch — Killer Robots: UN Vote Should Spur Treaty Negotiations (2024)"
    resource: https://www.hrw.org/news/2024/12/05/killer-robots-un-vote-should-spur-treaty-negotiations
  - id: swarm-review
    title: "Brambilla et al. — Swarm robotics: a review from the swarm engineering perspective (2013)"
    resource: https://link.springer.com/article/10.1007/s11721-012-0075-2
  - id: kaplan
    title: "Kaplan et al. — Scaling Laws for Neural Language Models (2020)"
    resource: https://arxiv.org/abs/2001.08361
  - id: chollet
    title: "Chollet — On the Measure of Intelligence (2019)"
    resource: https://arxiv.org/abs/1911.01547
---

**In short:** quick definitions of the terms used throughout this record, in
alphabetical order. Each links to the article where the idea is explained in
full, with its sources.

## Terms

**Actuator** — the motor or other device that moves a robot's joint. See
[action and control](ai-and-robotics/action-and-control.md).

**Agent** — anything that perceives its environment through sensors and acts on
it through actuators; a robot is a physical agent.[^aima] See
[the sense–think–act loop](ai-and-robotics/sense-think-act.md).

**AGI (artificial general intelligence)** — AI that matches or exceeds people
across most tasks. OpenAI defines it as "highly autonomous systems that
outperform humans at most economically valuable work".[^openai-charter] See
[what is AGI?](agi/what-is-agi.md).

**AI system** — "a machine-based system that … infers, from the input it
receives, how to generate outputs such as predictions, content,
recommendations, or decisions" (OECD).[^oecd-definition] See
[what is AI?](foundations/what-is-ai.md).

**Alignment** — making an AI system pursue the goals its designers and users
actually intend. See [AI safety and alignment](agi/safety-and-alignment.md).

**ARC (Abstraction and Reasoning Corpus)** — a benchmark of novel puzzles meant
to measure general fluid intelligence rather than memorised skill.[^chollet]

**Autonomous weapons system** — a weapon that selects and applies force to
targets based on sensor processing rather than human input.[^hrw-2024] See
[autonomous weapons](ethics-and-risks/autonomous-weapons.md).

**Cobot (collaborative robot)** — a robot designed to work alongside people,
covered by ISO/TS 15066.[^iso-15066]

**Computer vision** — AI that interprets images and video. See
[computer vision](core-technologies/computer-vision.md).

**Constitutional AI** — training an AI assistant against a written list of
principles, using AI feedback in place of most human labels.[^constitutional-ai]

**Deep learning** — machine learning with many-layered neural networks that
learn representations at multiple levels of abstraction.[^lecun-nature] See
[deep learning](core-technologies/deep-learning.md).

**Digital twin** — computational models coupled to a physical counterpart and
updated through two-way data flows as conditions change.[^nasem-digital-twins]

**Domain randomization** — varying a simulator so much that the real world looks
like "just another variation", helping skills transfer from simulation to
reality.[^domain-randomization]

**Embodied AI** — AI that perceives and acts through a physical body. See
[embodied AGI](agi/embodied-agi.md).

**Frontier AI** — highly capable general-purpose models that match or exceed the
capabilities of today's most advanced models.[^bletchley]

**Humanoid robot** — a robot with a human-like body. See
[humanoid robots](types-of-robots/humanoid-robots.md).

**Large language model (LLM)** — a very large neural network, usually a
Transformer, trained on text to predict and generate language. See
[natural language processing](core-technologies/natural-language-processing.md).

**Machine learning** — methods that let computers improve at tasks by learning
from data. See [machine learning](core-technologies/machine-learning.md).

**Narrow AI** — AI built and trained for a specific kind of task; nearly all AI
in use today.

**Reinforcement learning** — learning by trial and error to maximise a
reward.[^sutton-barto] See
[reinforcement learning](core-technologies/reinforcement-learning.md).

**Reward hacking / specification gaming** — behaviour that "satisfies the
literal specification of an objective without achieving the intended
outcome".[^spec-gaming][^concrete-problems]

**RLHF (reinforcement learning from human feedback)** — fine-tuning a model with
reinforcement learning on human rankings of its outputs.[^instructgpt]

**ROS (Robot Operating System)** — open-source software libraries and tools for
building robot applications; ROS 2 is the production-grade
redesign.[^ros2-paper] See [ROS](core-technologies/ros.md).

**SAE levels** — the J3016 scale of driving automation, from Level 0 (no
automation) to Level 5 (full autonomy).[^sae-levels]

**Scaling laws** — the observation that language model loss falls as a power
law in model size, data and compute.[^kaplan]

**Sense–think–act loop** — the cycle in which a robot senses, decides and
acts. See [the sense–think–act loop](ai-and-robotics/sense-think-act.md).

**SLAM (simultaneous localization and mapping)** — building a map of an unknown
environment while estimating the robot's position in it.[^slam-survey] See
[SLAM](core-technologies/slam.md).

**Swarm robotics** — coordinating many simple robots through local interactions,
inspired by social animals.[^swarm-review]

**Transformer** — a neural network architecture based on attention, introduced
in 2017; the basis of modern LLMs.[^transformer]

**Vision-language-action (VLA) model** — a model that takes images and
instructions and outputs robot actions directly; RT-2 introduced the
term.[^rt2] See [LLMs in robots](core-technologies/llms-in-robots.md).

## Related topics

- [References](references.md)
- [What is artificial intelligence?](foundations/what-is-ai.md)
- [What is robotics?](foundations/what-is-robotics.md)
- [What is AGI?](agi/what-is-agi.md)

[^oecd-definition]: OECD.AI, 2023.
[^openai-charter]: OpenAI Charter.
[^aima]: Russell & Norvig, *AIMA*.
[^lecun-nature]: LeCun, Bengio & Hinton, 2015.
[^sutton-barto]: Sutton & Barto, 2nd ed.
[^transformer]: Vaswani et al., 2017.
[^rt2]: Brohan et al., 2023.
[^slam-survey]: Cadena et al., 2016.
[^ros2-paper]: Macenski et al., 2022.
[^nasem-digital-twins]: National Academies.
[^domain-randomization]: Tobin et al., 2017.
[^iso-15066]: ISO/TS 15066:2016.
[^sae-levels]: SAE *Automotive Engineering*.
[^concrete-problems]: Amodei et al., 2016.
[^spec-gaming]: Google DeepMind.
[^instructgpt]: Ouyang et al., 2022.
[^constitutional-ai]: Bai et al., 2022.
[^bletchley]: Bletchley Declaration.
[^hrw-2024]: Human Rights Watch, 2024.
[^swarm-review]: Brambilla et al., 2013.
[^kaplan]: Kaplan et al., 2020.
[^chollet]: Chollet, 2019.
