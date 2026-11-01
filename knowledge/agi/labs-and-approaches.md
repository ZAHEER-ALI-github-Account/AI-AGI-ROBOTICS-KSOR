---
type: Document
title: Labs and companies working toward AGI
description: The major AI labs that say they are building AGI or superintelligence, what they say their mission is, and how their safety approaches differ.
status: draft
order: 703
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: openai-charter
    title: "OpenAI — OpenAI Charter"
    resource: https://openai.com/charter/
  - id: openai-planning-agi
    title: "OpenAI — Planning for AGI and beyond"
    resource: https://openai.com/index/planning-for-agi-and-beyond/
  - id: openai-preparedness
    title: "OpenAI — Our updated Preparedness Framework"
    resource: https://openai.com/index/updating-our-preparedness-framework/
  - id: deepmind-about
    title: "Google DeepMind — About"
    resource: https://deepmind.google/about/
  - id: deepmind-agi-safety
    title: "Shah et al. (Google DeepMind) — An Approach to Technical AGI Safety and Security (2025)"
    resource: https://arxiv.org/abs/2504.01849
  - id: deepmind-fsf
    title: "Google DeepMind — Introducing the Frontier Safety Framework"
    resource: https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/
  - id: anthropic-core-views
    title: "Anthropic — Core views on AI safety"
    resource: https://www.anthropic.com/news/core-views-on-ai-safety
  - id: anthropic-rsp
    title: "Anthropic — Introducing Anthropic's Responsible Scaling Policy"
    resource: https://www.anthropic.com/news/anthropics-responsible-scaling-policy
  - id: ssi
    title: "Safe Superintelligence Inc."
    resource: https://ssi.inc/
  - id: deepseek-r1
    title: "DeepSeek-AI — DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning (2025)"
    resource: https://arxiv.org/abs/2501.12948
  - id: seoul-commitments
    title: "UK Government — Frontier AI Safety Commitments, AI Seoul Summit 2024"
    resource: https://www.gov.uk/government/publications/frontier-ai-safety-commitments-ai-seoul-summit-2024
---

**In short:** a handful of labs openly aim to build AGI or "superintelligence".
They share a belief that it may arrive soon and could be transformative, but
differ in how fast they move, what they publish and how they manage risk. Most
have published frameworks for testing their models for dangerous capabilities.

## Explanation

### OpenAI

OpenAI's mission is "to ensure that artificial general intelligence … benefits
all of humanity", defining AGI as "highly autonomous systems that outperform
humans at most economically valuable work".[^openai-charter] It argues for
deploying "less powerful versions of the technology" gradually, to learn and
adapt rather than face "one shot to get it right" scenarios.[^openai-planning-agi]
Its Preparedness Framework tracks biological and chemical, cybersecurity, and
AI self-improvement capabilities, with "High" and "Critical" thresholds that
trigger safeguards.[^openai-preparedness]

### Google DeepMind

Google DeepMind's stated mission is "to build AI responsibly to benefit
humanity", and it says AI and ultimately AGI could "drive one of the greatest
transformations in history".[^deepmind-about] Its 2025 technical approach to
AGI safety names four risk areas — misuse, misalignment, mistakes and
structural risks — and focuses on preventing misuse and
misalignment.[^deepmind-agi-safety] Its Frontier Safety Framework defines
"Critical Capability Levels" in autonomy, biosecurity, cybersecurity and machine
learning R&D.[^deepmind-fsf]

### Anthropic

Anthropic says it was founded because "the impact of AI might be comparable to
that of the industrial and scientific revolutions", without confidence that "it
will go well".[^anthropic-core-views] It describes a portfolio approach to
safety research.[^anthropic-core-views] Its Responsible Scaling Policy defines
AI Safety Levels (ASL), modelled loosely on biosafety levels, that require
stronger safeguards as a model's potential for catastrophic risk
grows.[^anthropic-rsp]

### Safe Superintelligence Inc.

SSI describes itself as "the world's first straight-shot SSI lab, with one
goal and one product: a safe superintelligence", aiming to advance capabilities
quickly "while making sure our safety always remains ahead".[^ssi]

### Open and international players

Capable models are also built outside the US. China's DeepSeek published
DeepSeek-R1, reporting that pure reinforcement learning can elicit advanced
reasoning, and that the resulting reasoning patterns can be used to improve
smaller models.[^deepseek-r1]

### Shared commitments

At the AI Seoul Summit in May 2024, leading AI organisations agreed the
Frontier AI Safety Commitments; more organisations were added in February
2025.[^seoul-commitments]

## Key points

- OpenAI, Google DeepMind, Anthropic and SSI explicitly target AGI or
  superintelligence.[^openai-charter][^deepmind-about][^anthropic-core-views][^ssi]
- Each publishes a framework for dangerous-capability
  testing.[^openai-preparedness][^deepmind-fsf][^anthropic-rsp]
- Strong models are also developed in China.[^deepseek-r1]
- Labs signed voluntary Frontier AI Safety Commitments in
  2024.[^seoul-commitments]

## Related topics

- [What is AGI?](what-is-agi.md)
- [Governments and AGI](governments-and-agi.md)
- [AI safety and alignment](safety-and-alignment.md)
- [Different viewpoints](viewpoints.md)

[^openai-charter]: OpenAI Charter.
[^openai-planning-agi]: OpenAI, "Planning for AGI and beyond".
[^openai-preparedness]: OpenAI, Preparedness Framework.
[^deepmind-about]: Google DeepMind, About.
[^deepmind-agi-safety]: Shah et al., 2025.
[^deepmind-fsf]: Google DeepMind, Frontier Safety Framework.
[^anthropic-core-views]: Anthropic, Core views on AI safety.
[^anthropic-rsp]: Anthropic, Responsible Scaling Policy.
[^ssi]: Safe Superintelligence Inc.
[^deepseek-r1]: DeepSeek-AI, 2025.
[^seoul-commitments]: Frontier AI Safety Commitments, 2024.
