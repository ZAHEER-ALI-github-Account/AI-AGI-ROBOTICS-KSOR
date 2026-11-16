---
type: Document
title: Machine learning
description: How computers learn patterns from data instead of following hand-written rules — supervised, unsupervised and reinforcement learning.
status: stable
order: 301
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
  - { by: "human:zaheerali", at: 2026-11-16T12:15:55Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T12:15:55Z }
sources:
  - id: aima
    title: "Russell & Norvig — Artificial Intelligence: A Modern Approach, 4th edition"
    resource: http://aima.cs.berkeley.edu/
  - id: goodfellow
    title: "Goodfellow, Bengio & Courville — Deep Learning (MIT Press, 2016)"
    resource: https://www.deeplearningbook.org/
  - id: sutton-barto
    title: "Sutton & Barto — Reinforcement Learning: An Introduction, 2nd edition"
    resource: http://incompleteideas.net/book/the-book-2nd.html
  - id: lecun-nature
    title: "LeCun, Bengio & Hinton — Deep learning, Nature 521 (2015)"
    resource: https://www.nature.com/articles/nature14539
  - id: obermeyer
    title: "Obermeyer et al. — Dissecting racial bias in an algorithm used to manage the health of populations, Science (2019)"
    resource: https://pubmed.ncbi.nlm.nih.gov/31649194/
---

**In short:** machine learning (ML) lets a computer improve at a task by
learning from examples rather than by following rules a programmer wrote. It
is the engine behind nearly all modern AI, from spam filters to robot
controllers.

## Explanation

### Learning from data

A machine-learning system has a model with adjustable parameters. Training
shows it data and adjusts the parameters so its outputs become more useful —
for example, more accurate predictions. AI's main textbook presents learning
from examples as one of the central ways an agent improves its
performance.[^aima]

### Three main kinds

- **Supervised learning** — learn from labelled examples (an image and its
  correct label) to predict labels for new inputs.[^goodfellow]
- **Unsupervised learning** — find structure in unlabelled data, such as
  clusters or compact representations.[^goodfellow]
- **Reinforcement learning** — learn which actions to take by trying them and
  receiving rewards; this is especially important for robots.[^sutton-barto]

### Deep learning

Deep learning is machine learning with many-layered neural networks that learn
their own features from raw data. It has driven most progress since the early
2010s.[^lecun-nature] See [deep learning](deep-learning.md).

### Why the data matters

A model learns whatever pattern its data and objective reward, not necessarily
the one people intended. A widely used US health algorithm predicted health
*costs* as a proxy for health *needs*; because less money was spent on Black
patients, it underestimated how sick they were — correcting it would have
raised the share of Black patients flagged for extra help from 17.7% to
46.5%.[^obermeyer] Choosing the right target and data is part of the
engineering, not an afterthought.

## Key points

- ML learns parameters from data instead of following hand-written
  rules.[^aima]
- Supervised, unsupervised and reinforcement learning are the three main
  families.[^goodfellow][^sutton-barto]
- Deep learning is the dominant modern form.[^lecun-nature]
- A poorly chosen training target can build bias into a system.[^obermeyer]

## Related topics

- [Deep learning](deep-learning.md)
- [Reinforcement learning](reinforcement-learning.md)
- [What is artificial intelligence?](../foundations/what-is-ai.md)
- [Bias](../ethics-and-risks/bias.md)

[^aima]: Russell & Norvig, *AIMA*.
[^goodfellow]: Goodfellow, Bengio & Courville, *Deep Learning*.
[^sutton-barto]: Sutton & Barto, 2nd ed.
[^lecun-nature]: LeCun, Bengio & Hinton, 2015.
[^obermeyer]: Obermeyer et al., *Science*, 2019.
