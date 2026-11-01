---
type: Document
title: What is artificial intelligence?
description: How artificial intelligence is defined today, from the 1956 Dartmouth proposal to the OECD and EU definitions used in law.
status: draft
order: 101
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: dartmouth
    title: "McCarthy, Minsky, Rochester & Shannon — A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence (1955)"
    resource: http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf
  - id: oecd-definition
    title: "OECD.AI — Updates to the OECD's definition of an AI system explained (2023)"
    resource: https://oecd.ai/en/wonk/ai-system-definition-update
  - id: eu-ai-act
    title: "Regulation (EU) 2024/1689 — the Artificial Intelligence Act (EUR-Lex)"
    resource: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
  - id: aima
    title: "Russell & Norvig — Artificial Intelligence: A Modern Approach, 4th edition"
    resource: https://aima.cs.berkeley.edu/
  - id: lecun-nature
    title: "LeCun, Bengio & Hinton — Deep learning, Nature 521 (2015)"
    resource: https://www.nature.com/articles/nature14539
  - id: turing
    title: "Turing — Computing Machinery and Intelligence, Mind 59(236) (1950)"
    resource: https://doi.org/10.1093/mind/LIX.236.433
---

**In short:** artificial intelligence (AI) is the field that builds machines
able to do things we would call intelligent if a person did them — learning,
reasoning, understanding language, perceiving. Today the word usually means
*machine-based systems that infer from their inputs how to produce outputs*
such as predictions, content, recommendations or decisions.

## Explanation

### Where the name comes from

The term was coined in a 1955 proposal by John McCarthy, Marvin Minsky,
Nathaniel Rochester and Claude Shannon for a two-month, ten-person summer study
at Dartmouth College in 1956.[^dartmouth] The proposal rested on a bold
conjecture: that "every aspect of learning or any other feature of
intelligence can in principle be so precisely described that a machine can be
made to simulate it." Its goals were to make machines use language, form
abstractions and concepts, solve problems "now reserved for humans", and
improve themselves.[^dartmouth]

Five years earlier, Alan Turing had asked whether machines can think, and
proposed replacing that hard-to-define question with a practical test of
behaviour — the "imitation game".[^turing]

### How AI is defined today

Modern definitions focus on what a system *does*, not on whether it "really"
thinks. The OECD's updated definition, now widely reused by governments, says
an AI system is "a machine-based system that … infers, from the input it
receives, how to generate outputs such as predictions, content,
recommendations, or decisions that can influence physical or virtual
environments", and adds that AI systems differ in how autonomous and adaptive
they are after deployment.[^oecd-definition] The European Union's AI Act, the
first comprehensive AI law, builds on the same idea of a machine-based system
that infers how to generate outputs from its input.[^eu-ai-act]

The standard university textbook frames AI as the study of **agents** that
perceive their environment and act on it, and organises the whole field around
building agents that act well.[^aima] That agent view is what links AI to
[robotics](what-is-robotics.md): a robot is an agent with a physical body.

### Narrow AI and general AI

Almost every AI system in use today is *narrow*: it is built and trained for a
specific kind of task. Since the early 2010s, most progress has come from
[deep learning](../core-technologies/deep-learning.md), in which networks with
many layers learn their own representations from raw data, rather than from
rules written by hand.[^lecun-nature] A system that could match people across
most tasks — [artificial general intelligence](../agi/what-is-agi.md) — remains
a research goal and is covered in its own section.

## Key points

- "Artificial intelligence" was named in the 1955 Dartmouth proposal, on the
  conjecture that every feature of intelligence can be described precisely
  enough for a machine to simulate it.[^dartmouth]
- Current official definitions describe AI by behaviour: a machine-based system
  that infers how to generate outputs that influence physical or virtual
  environments.[^oecd-definition]
- The textbook view treats AI as building agents that perceive and act — the
  bridge to robotics.[^aima]
- Today's systems are narrow; general intelligence is still a goal, not a
  product.

## Related topics

- [What is robotics?](what-is-robotics.md)
- [History of artificial intelligence](history-of-ai.md)
- [Machine learning](../core-technologies/machine-learning.md)
- [What is AGI?](../agi/what-is-agi.md)
- [The sense–think–act loop](../ai-and-robotics/sense-think-act.md)

[^dartmouth]: McCarthy et al., Dartmouth proposal, 31 August 1955.
[^turing]: Turing, "Computing Machinery and Intelligence", 1950.
[^oecd-definition]: OECD.AI, definition of an AI system, 2023 update.
[^eu-ai-act]: EU Artificial Intelligence Act, Regulation (EU) 2024/1689.
[^aima]: Russell & Norvig, *Artificial Intelligence: A Modern Approach*.
[^lecun-nature]: LeCun, Bengio & Hinton, "Deep learning", *Nature*, 2015.
