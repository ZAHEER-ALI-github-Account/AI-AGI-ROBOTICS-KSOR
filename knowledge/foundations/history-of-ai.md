---
type: Document
title: History of artificial intelligence
description: From Turing's 1950 question and the 1956 Dartmouth project through neural networks, deep learning and large language models.
status: draft
order: 103
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: turing
    title: "Turing — Computing Machinery and Intelligence, Mind 59(236) (1950)"
    resource: https://doi.org/10.1093/mind/LIX.236.433
  - id: dartmouth
    title: "McCarthy, Minsky, Rochester & Shannon — Dartmouth Summer Research Project proposal (1955)"
    resource: http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf
  - id: rosenblatt
    title: "Rosenblatt — The perceptron: a probabilistic model for information storage and organization in the brain, Psychological Review (1958)"
    resource: https://doi.org/10.1037/h0042519
  - id: backprop
    title: "Rumelhart, Hinton & Williams — Learning representations by back-propagating errors, Nature 323 (1986)"
    resource: https://www.nature.com/articles/323533a0
  - id: deep-blue
    title: "IBM — Deep Blue"
    resource: https://www.ibm.com/history/deep-blue
  - id: alexnet
    title: "Krizhevsky, Sutskever & Hinton — ImageNet Classification with Deep Convolutional Neural Networks (NeurIPS 2012)"
    resource: https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
  - id: lecun-nature
    title: "LeCun, Bengio & Hinton — Deep learning, Nature 521 (2015)"
    resource: https://www.nature.com/articles/nature14539
  - id: alphago
    title: "Silver et al. — Mastering the game of Go with deep neural networks and tree search, Nature 529 (2016)"
    resource: https://www.nature.com/articles/nature16961
  - id: transformer
    title: "Vaswani et al. — Attention Is All You Need (2017)"
    resource: https://arxiv.org/abs/1706.03762
  - id: gpt3
    title: "Brown et al. — Language Models are Few-Shot Learners (2020)"
    resource: https://arxiv.org/abs/2005.14165
  - id: nobel-physics-2024
    title: "Nobel Prize in Physics 2024 — press release"
    resource: https://www.nobelprize.org/prizes/physics/2024/press-release/
  - id: nobel-chemistry-2024
    title: "Nobel Prize in Chemistry 2024 — press release"
    resource: https://www.nobelprize.org/prizes/chemistry/2024/press-release/
  - id: ai-index-2025
    title: "Stanford HAI — The 2025 AI Index Report"
    resource: https://hai.stanford.edu/ai-index/2025-ai-index-report
---

**In short:** AI began as a 1950s research programme to make machines reason
and learn. Rule-based approaches dominated for decades; since 2012, neural
networks trained on large datasets — deep learning — have driven most
progress, leading to today's large language models and Nobel Prizes for the
underlying work.

## Explanation

### The founding questions (1950–1956)

In 1950 Alan Turing asked "Can machines think?" and proposed an imitation game
as a practical test.[^turing] In 1955 McCarthy, Minsky, Rochester and Shannon
proposed a 1956 summer study at Dartmouth on "artificial intelligence",
launching the field under that name.[^dartmouth]

### Two traditions: rules and learning

Early AI largely encoded knowledge as symbols and rules. In parallel, Frank
Rosenblatt's 1958 *perceptron* modelled learning in networks of simple units
inspired by neurons.[^rosenblatt] Multi-layer networks became practical to
train after Rumelhart, Hinton and Williams showed in 1986 how
*back-propagation* could learn useful internal representations.[^backprop]

### Search and games

In May 1997 IBM's Deep Blue beat world chess champion Garry Kasparov 3.5–2.5 in
a six-game rematch, evaluating about 200 million positions per second — the
first defeat of a reigning world champion by a computer under standard
tournament time controls.[^deep-blue]

### The deep learning era (2012–)

In 2012 a deep convolutional network trained on ImageNet sharply reduced error
in large-scale image classification.[^alexnet] A 2015 review by LeCun, Bengio
and Hinton describes how such deep networks learn layered representations and
had transformed speech recognition, image recognition and other
fields.[^lecun-nature] In 2016 AlphaGo combined deep neural networks with tree
search to defeat a human professional at the full game of Go.[^alphago]

### Transformers and language models (2017–)

The 2017 Transformer architecture replaced recurrence with attention, making
training more parallel and faster.[^transformer] Scaling it up produced GPT-3
in 2020, a 175-billion-parameter model that could do many tasks from a few
examples in its prompt.[^gpt3]

### Recognition and everyday use

In 2024 the Nobel Prize in Physics went to John Hopfield and Geoffrey Hinton
"for foundational discoveries and inventions that enable machine learning with
artificial neural networks".[^nobel-physics-2024] The Chemistry prize was shared
by David Baker and by Demis Hassabis and John Jumper, the latter two "for
protein structure prediction" with AlphaFold2.[^nobel-chemistry-2024] Stanford's
2025 AI Index reports that the FDA approved 223 AI-enabled medical devices in
2023, up from six in 2015.[^ai-index-2025]

## Key points

- 1950: Turing's imitation game; 1956: the Dartmouth project names the
  field.[^turing][^dartmouth]
- Learning networks date to the 1958 perceptron and the 1986 back-propagation
  paper.[^rosenblatt][^backprop]
- 2012 onwards: deep learning drives progress in vision, speech and
  games.[^alexnet][^lecun-nature][^alphago]
- 2017 onwards: Transformers enable large language models.[^transformer][^gpt3]
- 2024: Nobel Prizes recognise neural-network and protein-structure
  work.[^nobel-physics-2024][^nobel-chemistry-2024]

## Related topics

- [Key milestones timeline](key-milestones.md)
- [History of robotics](history-of-robotics.md)
- [Deep learning](../core-technologies/deep-learning.md)
- [Natural language processing](../core-technologies/natural-language-processing.md)
- [What is AGI?](../agi/what-is-agi.md)

[^turing]: Turing, 1950.
[^dartmouth]: Dartmouth proposal, 1955.
[^rosenblatt]: Rosenblatt, 1958.
[^backprop]: Rumelhart, Hinton & Williams, 1986.
[^deep-blue]: IBM, Deep Blue.
[^alexnet]: Krizhevsky, Sutskever & Hinton, 2012.
[^lecun-nature]: LeCun, Bengio & Hinton, 2015.
[^alphago]: Silver et al., 2016.
[^transformer]: Vaswani et al., 2017.
[^gpt3]: Brown et al., 2020.
[^nobel-physics-2024]: Nobel Prize in Physics 2024.
[^nobel-chemistry-2024]: Nobel Prize in Chemistry 2024.
[^ai-index-2025]: Stanford HAI, AI Index 2025.
