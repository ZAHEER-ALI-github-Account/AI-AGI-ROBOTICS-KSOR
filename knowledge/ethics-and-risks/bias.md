---
type: Document
title: Bias in AI systems
description: How AI systems can treat groups of people unequally, the landmark studies that showed it, and how NIST frames the problem.
status: draft
order: 603
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: gender-shades
    title: "Buolamwini & Gebru — Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification (2018)"
    resource: https://proceedings.mlr.press/v81/buolamwini18a.html
  - id: obermeyer
    title: "Obermeyer et al. — Dissecting racial bias in an algorithm used to manage the health of populations, Science (2019)"
    resource: https://pubmed.ncbi.nlm.nih.gov/31649194/
  - id: nist-frvt-demographics
    title: "NIST IR 8280 — Face Recognition Vendor Test Part 3: Demographic Effects (2019)"
    resource: https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.8280.pdf
  - id: nist-sp-1270
    title: "NIST SP 1270 — Towards a Standard for Identifying and Managing Bias in Artificial Intelligence (2022)"
    resource: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf
  - id: stochastic-parrots
    title: "Bender, Gebru, McMillan-Major & Shmitchell — On the Dangers of Stochastic Parrots (FAccT 2021)"
    resource: https://doi.org/10.1145/3442188.3445922
---

**In short:** an AI system is biased when it works worse for, or makes unfair
decisions about, some groups of people. Bias usually comes from data, from the
choice of what the system is told to predict, or from how it is used — not
from any intent. Studies of face analysis and health algorithms made the
problem impossible to ignore.

## Explanation

### Landmark evidence

- **Face analysis.** *Gender Shades* audited three commercial gender
  classifiers. Benchmark datasets were 79.6% and 86.2% lighter-skinned;
  darker-skinned women were misclassified at error rates up to 34.7%, against
  a maximum of 0.8% for lighter-skinned men.[^gender-shades]
- **Face recognition.** NIST's 2019 test of face recognition algorithms found
  false positive rates highest in West and East African and East Asian people
  and lowest in Eastern European individuals — although for some algorithms
  developed in China the effect was reversed, with low false positive rates on
  East Asian faces.[^nist-frvt-demographics]
- **Health care.** A widely used US algorithm predicted health costs as a proxy
  for health needs. Because less was spent on Black patients, it judged them
  healthier than equally sick White patients; fixing this would raise the share
  of Black patients receiving extra help from 17.7% to 46.5%.[^obermeyer]
- **Language models.** Critics warn that web-scale training data can
  over-represent dominant viewpoints and encode biases.[^stochastic-parrots]

### Where bias comes from

NIST identifies three categories of AI bias — **systemic**, **statistical and
computational**, and **human** — and describes how they occur across the
design, development and deployment of AI systems and contribute to
harm.[^nist-sp-1270] The health-algorithm study shows a key lesson: choosing a
"convenient, seemingly effective" proxy for the true goal can be an important
source of bias.[^obermeyer]

## Key points

- Face analysis and recognition accuracy has differed across demographic
  groups.[^gender-shades][^nist-frvt-demographics]
- A bad proxy target produced racial bias in health care.[^obermeyer]
- NIST groups bias into systemic, statistical/computational and human
  categories.[^nist-sp-1270]

## Related topics

- [Machine learning](../core-technologies/machine-learning.md)
- [Computer vision](../core-technologies/computer-vision.md)
- [Privacy](privacy.md)
- [Regulation](regulation.md)

[^gender-shades]: Buolamwini & Gebru, 2018.
[^obermeyer]: Obermeyer et al., 2019.
[^nist-frvt-demographics]: NIST IR 8280, 2019.
[^nist-sp-1270]: NIST SP 1270.
[^stochastic-parrots]: Bender et al., 2021.
