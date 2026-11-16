---
type: Document
title: Deep learning
description: Many-layered neural networks that learn their own representations from raw data — the technology behind modern vision, speech and language AI.
status: stable
order: 302
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: lecun-nature
    title: "LeCun, Bengio & Hinton — Deep learning, Nature 521 (2015)"
    resource: https://www.nature.com/articles/nature14539
  - id: goodfellow
    title: "Goodfellow, Bengio & Courville — Deep Learning (MIT Press, 2016)"
    resource: https://www.deeplearningbook.org/
  - id: backprop
    title: "Rumelhart, Hinton & Williams — Learning representations by back-propagating errors, Nature 323 (1986)"
    resource: https://www.nature.com/articles/323533a0
  - id: alexnet
    title: "Krizhevsky, Sutskever & Hinton — ImageNet Classification with Deep Convolutional Neural Networks (2012)"
    resource: https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
  - id: resnet
    title: "He et al. — Deep Residual Learning for Image Recognition (2015)"
    resource: https://arxiv.org/abs/1512.03385
  - id: transformer
    title: "Vaswani et al. — Attention Is All You Need (2017)"
    resource: https://arxiv.org/abs/1706.03762
  - id: kaplan
    title: "Kaplan et al. — Scaling Laws for Neural Language Models (2020)"
    resource: https://arxiv.org/abs/2001.08361
  - id: nobel-physics-2024
    title: "Nobel Prize in Physics 2024 — press release"
    resource: https://www.nobelprize.org/prizes/physics/2024/press-release/
---

**In short:** deep learning uses neural networks with many layers. Each layer
transforms its input into a slightly more abstract representation, so the
network learns useful features by itself instead of having them designed by
hand. It powers modern image recognition, speech recognition and language
models.

## Explanation

### Layers of representation

In a 2015 review, LeCun, Bengio and Hinton describe deep learning as letting
models "composed of multiple processing layers" learn representations of data
with multiple levels of abstraction.[^lecun-nature] An image network, for
example, learns edges in early layers and object parts and whole objects in
later ones.[^goodfellow]

### How networks learn

Training uses *back-propagation*, which computes how each weight should change
to reduce the error; Rumelhart, Hinton and Williams showed in 1986 that this
lets hidden units learn useful internal features.[^backprop] In 2024 John
Hopfield and Geoffrey Hinton received the Nobel Prize in Physics for
foundational work enabling machine learning with artificial neural
networks.[^nobel-physics-2024]

### Key architectures

- **Convolutional networks** for images. In 2012 a deep convolutional network
  with 60 million parameters classified ImageNet's 1,000 categories with error
  rates "considerably better than the previous state-of-the-art".[^alexnet] Residual networks (ResNets) in 2015 made networks of up to
  152 layers trainable and won the ILSVRC 2015 classification task.[^resnet]
- **Transformers** for sequences. Built on attention alone, they train faster
  and in parallel, and underlie today's language models.[^transformer]

### Scale

Performance of language models improves predictably as models, data and
compute grow: Kaplan et al. found the loss falls as a power law in each, over
trends spanning more than seven orders of magnitude.[^kaplan]

## Key points

- Deep networks learn layered representations from raw data.[^lecun-nature]
- Back-propagation is how they learn.[^backprop]
- Convolutional networks transformed vision; Transformers transformed
  language.[^alexnet][^transformer]
- Performance scales predictably with model size, data and compute.[^kaplan]

## Related topics

- [Machine learning](machine-learning.md)
- [Computer vision](computer-vision.md)
- [Natural language processing](natural-language-processing.md)
- [History of artificial intelligence](../foundations/history-of-ai.md)

[^lecun-nature]: LeCun, Bengio & Hinton, 2015.
[^goodfellow]: Goodfellow et al., *Deep Learning*.
[^backprop]: Rumelhart et al., 1986.
[^alexnet]: Krizhevsky et al., 2012.
[^resnet]: He et al., 2015.
[^transformer]: Vaswani et al., 2017.
[^kaplan]: Kaplan et al., 2020.
[^nobel-physics-2024]: Nobel Prize in Physics 2024.
