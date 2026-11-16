---
type: Document
title: Medical and surgical robots
description: Robot-assisted surgery, rehabilitation robots and the first experiments in autonomous surgery.
status: stable
order: 405
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: da-vinci
    title: "Intuitive — da Vinci surgical systems"
    resource: https://www.intuitive.com/en-us/products-and-services/da-vinci
  - id: ifr-service-2025
    title: "IFR — World Robotics 2025: Service robots see global growth boom (7 October 2025)"
    resource: https://ifr.org/ifr-press-releases/news/service-robots-see-global-growth-boom
  - id: star
    title: "Saeidi et al. — Autonomous robotic laparoscopic surgery for intestinal anastomosis, Science Robotics (2022)"
    resource: https://pubmed.ncbi.nlm.nih.gov/35080901/
  - id: srt-h
    title: "Kim et al. — SRT-H: A Hierarchical Framework for Autonomous Surgery via Language Conditioned Imitation Learning (2025)"
    resource: https://arxiv.org/abs/2505.10251
  - id: fda-ai-devices
    title: "US FDA — Artificial Intelligence-Enabled Medical Devices"
    resource: https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices
  - id: who-ai-health
    title: "WHO — Ethics and governance of artificial intelligence for health (2021)"
    resource: https://www.who.int/publications/i/item/9789240029200
---

**In short:** medical robots help surgeons operate, help patients recover and
automate hospital and laboratory work. Today's surgical robots are mostly
*teleoperated* — the surgeon controls every movement — but research systems
have begun performing surgical steps on their own.

## Explanation

### Robot-assisted surgery

Systems such as Intuitive's da Vinci let a surgeon operate through small
incisions using robotic instruments controlled from a console.[^da-vinci] The
robot does not decide anything; it scales and steadies the surgeon's
movements.

### A fast-growing market

The International Federation of Robotics counts medical robots as their own
category. Sales rose 91% to around 16,700 units in 2024, and the IFR links
growing demand to the rising elderly population.[^ifr-service-2025]

### Steps toward autonomy

- **STAR (2022).** Researchers at Johns Hopkins described an autonomous
  strategy for laparoscopic soft-tissue surgery and used it to join sections of
  intestine (anastomosis) in pigs, with the operator choosing among
  autonomously generated surgical plans.[^star]
- **SRT-H (2025).** A hierarchical system — a language-level planner over a
  trajectory-generating controller, trained by imitation learning — performed
  the gallbladder-removal steps of a cholecystectomy with a 100% success rate
  on eight unseen ex vivo gallbladders, fully autonomously.[^srt-h] Its authors
  call this step-level autonomy, a milestone toward clinical deployment, not
  yet surgery on living patients.[^srt-h]

### Regulation and ethics

AI software in medical devices is regulated; the US FDA maintains a public list
of AI-enabled medical devices it has authorised.[^fda-ai-devices] The World
Health Organization's 2021 guidance sets out six consensus principles for
ethical AI in health.[^who-ai-health]

## Key points

- Most surgical robots are teleoperated by surgeons.[^da-vinci]
- Medical robot sales grew 91% in 2024.[^ifr-service-2025]
- Research systems now perform surgical steps autonomously on animal or ex vivo
  tissue.[^star][^srt-h]
- Regulators and the WHO set rules for AI in health.[^fda-ai-devices][^who-ai-health]

## Related topics

- [Healthcare](../applications/healthcare.md)
- [Decision-making](../ai-and-robotics/decision-making.md)
- [Safety](../ethics-and-risks/safety.md)

[^da-vinci]: Intuitive, da Vinci.
[^ifr-service-2025]: IFR, World Robotics 2025 — Service Robots.
[^star]: Saeidi et al., 2022.
[^srt-h]: Kim et al., 2025.
[^fda-ai-devices]: US FDA.
[^who-ai-health]: WHO, 2021.
