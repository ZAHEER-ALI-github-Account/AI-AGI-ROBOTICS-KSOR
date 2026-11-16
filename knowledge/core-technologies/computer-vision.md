---
type: Document
title: Computer vision
description: How machines learn to recognise, locate and segment objects in images and video — the eyes of most robots.
status: stable
order: 304
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: alexnet
    title: "Krizhevsky, Sutskever & Hinton — ImageNet Classification with Deep Convolutional Neural Networks (2012)"
    resource: https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
  - id: resnet
    title: "He et al. — Deep Residual Learning for Image Recognition (2015)"
    resource: https://arxiv.org/abs/1512.03385
  - id: yolo
    title: "Redmon et al. — You Only Look Once: Unified, Real-Time Object Detection (2015)"
    resource: https://arxiv.org/abs/1506.02640
  - id: clip
    title: "Radford et al. — Learning Transferable Visual Models From Natural Language Supervision (2021)"
    resource: https://arxiv.org/abs/2103.00020
  - id: sam
    title: "Kirillov et al. — Segment Anything (2023)"
    resource: https://arxiv.org/abs/2304.02643
  - id: gender-shades
    title: "Buolamwini & Gebru — Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification (2018)"
    resource: https://proceedings.mlr.press/v81/buolamwini18a.html
  - id: masai
    title: "Lång et al. — AI-supported screen reading versus standard double reading in the MASAI trial, Lancet Oncology (2023)"
    resource: https://pubmed.ncbi.nlm.nih.gov/37541274/
---

**In short:** computer vision gives machines the ability to interpret images
and video: what is in the scene, where it is and what shape it has. Deep
neural networks now do most of this work, and vision is the main sense for
self-driving cars, factory robots and medical imaging tools.

## Explanation

### The main tasks

- **Classification** — what is in this image? In 2012 a deep convolutional
  network classified ImageNet's 1.3 million training images into 1,000 classes
  far better than previous methods.[^alexnet] ResNets (2015) pushed error on
  ImageNet down to 3.57% with networks up to 152 layers deep.[^resnet]
- **Detection** — where are the objects? YOLO predicts boxes and classes in a
  single pass at 45 frames per second.[^yolo]
- **Segmentation** — which pixels belong to which object? Segment Anything
  (2023) trained a promptable model on over 1 billion masks from 11 million
  images and released it openly.[^sam]

### Vision meets language

CLIP learned from 400 million image–caption pairs to connect pictures and
words, so it can recognise categories it was never explicitly trained on —
"zero-shot" — and matched an ImageNet-trained ResNet-50 without using its
training labels.[^clip] This is the basis of robots that follow instructions
like "pick up the red mug".

### Vision in the real world

In the MASAI trial of 80,033 women in Sweden, AI-supported mammography
screening found a similar rate of cancers to standard double reading while
cutting radiologists' screen-reading workload by 44.3%.[^masai] Vision systems
can also be uneven: a 2018 audit of three commercial gender classifiers found
error rates up to 34.7% for darker-skinned women, against at most 0.8% for
lighter-skinned men.[^gender-shades]

## Key points

- Vision tasks include classification, detection and
  segmentation.[^resnet][^yolo][^sam]
- Language-supervised models such as CLIP recognise objects described in
  words.[^clip]
- Medical imaging trials show real workload gains.[^masai]
- Accuracy can differ sharply across groups of people.[^gender-shades]

## Related topics

- [Deep learning](deep-learning.md)
- [Perception](../ai-and-robotics/perception.md)
- [Autonomous vehicles](../types-of-robots/autonomous-vehicles.md)
- [Healthcare](../applications/healthcare.md)
- [Bias](../ethics-and-risks/bias.md)

[^alexnet]: Krizhevsky et al., 2012.
[^resnet]: He et al., 2015.
[^yolo]: Redmon et al., 2015.
[^clip]: Radford et al., 2021.
[^sam]: Kirillov et al., 2023.
[^gender-shades]: Buolamwini & Gebru, 2018.
[^masai]: Lång et al., *Lancet Oncology*, 2023.
