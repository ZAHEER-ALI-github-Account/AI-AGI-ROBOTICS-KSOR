---
type: Document
title: AI and robots in healthcare
description: Medical imaging, protein structure prediction, surgical robots and the evidence and ethics behind AI in health.
status: draft
order: 502
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: masai
    title: "Lång et al. — AI-supported screen reading versus standard double reading in the MASAI trial, Lancet Oncology (2023)"
    resource: https://pubmed.ncbi.nlm.nih.gov/37541274/
  - id: ai-index-2025
    title: "Stanford HAI — The 2025 AI Index Report"
    resource: https://hai.stanford.edu/ai-index/2025-ai-index-report
  - id: fda-ai-devices
    title: "US FDA — Artificial Intelligence-Enabled Medical Devices"
    resource: https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices
  - id: alphafold
    title: "Jumper et al. — Highly accurate protein structure prediction with AlphaFold, Nature 596 (2021)"
    resource: https://www.nature.com/articles/s41586-021-03819-2
  - id: nobel-chemistry-2024
    title: "Nobel Prize in Chemistry 2024 — press release"
    resource: https://www.nobelprize.org/prizes/chemistry/2024/press-release/
  - id: srt-h
    title: "Kim et al. — SRT-H: A Hierarchical Framework for Autonomous Surgery (2025)"
    resource: https://arxiv.org/abs/2505.10251
  - id: ifr-service-2025
    title: "IFR — World Robotics 2025: Service robots see global growth boom"
    resource: https://ifr.org/ifr-press-releases/news/service-robots-see-global-growth-boom
  - id: obermeyer
    title: "Obermeyer et al. — Dissecting racial bias in an algorithm used to manage the health of populations, Science (2019)"
    resource: https://pubmed.ncbi.nlm.nih.gov/31649194/
  - id: who-ai-health
    title: "WHO — Ethics and governance of artificial intelligence for health (2021)"
    resource: https://www.who.int/publications/i/item/9789240029200
---

**In short:** AI in healthcare reads medical images, predicts protein
structures, assists surgeons and helps run hospitals. The strongest evidence
comes from large trials; the biggest risks come from biased data and poor
oversight.

## Explanation

### Imaging and diagnosis

In the Swedish MASAI trial, 80,033 women were randomised to AI-supported
mammography screening or standard double reading. The AI arm detected 6.1
cancers per 1,000 women versus 5.1 in the control arm, with a similar false
positive rate, and cut radiologists' screen-reading workload by
44.3%.[^masai] The US FDA keeps a public list of authorised AI-enabled
devices;[^fda-ai-devices] Stanford's AI Index counts 223 approved in 2023, up
from six in 2015.[^ai-index-2025]

### Biology and drug discovery

AlphaFold predicts a protein's 3D structure from its amino-acid sequence with
high accuracy.[^alphafold] The 2024 Nobel Prize in Chemistry cited this work;
the Nobel committee notes AlphaFold2 has predicted the structure of virtually
all 200 million known proteins and has been used by more than two million
people in 190 countries.[^nobel-chemistry-2024]

### Robots

Medical robot sales rose 91% to around 16,700 units in 2024, driven partly by
an ageing population.[^ifr-service-2025] Research systems such as SRT-H now
perform surgical steps autonomously on ex vivo tissue — see
[medical and surgical robots](../types-of-robots/medical-and-surgical-robots.md).[^srt-h]

### Risks and ethics

An algorithm used across US health systems was found to under-identify sick
Black patients because it predicted health costs, not health
needs.[^obermeyer] The WHO's 2021 guidance sets six consensus principles so
that AI for health works to the public benefit of all
countries.[^who-ai-health]

## Key points

- In a large trial, AI-supported screening matched or exceeded standard
  reading and cut workload by 44.3%.[^masai]
- AlphaFold transformed protein structure prediction and won a
  Nobel.[^alphafold][^nobel-chemistry-2024]
- Medical robot sales grew 91% in 2024.[^ifr-service-2025]
- Biased proxies and weak governance are the main risks.[^obermeyer][^who-ai-health]

## Related topics

- [Medical and surgical robots](../types-of-robots/medical-and-surgical-robots.md)
- [Computer vision](../core-technologies/computer-vision.md)
- [Bias](../ethics-and-risks/bias.md)
- [Privacy](../ethics-and-risks/privacy.md)

[^masai]: Lång et al., *Lancet Oncology*, 2023.
[^ai-index-2025]: Stanford HAI, AI Index 2025.
[^fda-ai-devices]: US FDA.
[^alphafold]: Jumper et al., 2021.
[^nobel-chemistry-2024]: Nobel Prize in Chemistry 2024.
[^srt-h]: Kim et al., 2025.
[^ifr-service-2025]: IFR, World Robotics 2025 — Service Robots.
[^obermeyer]: Obermeyer et al., 2019.
[^who-ai-health]: WHO, 2021.
