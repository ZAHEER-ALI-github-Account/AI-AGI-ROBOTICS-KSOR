---
type: Document
title: Privacy and AI
description: How AI systems and robots collect and can leak personal data, and how laws such as the GDPR and the EU AI Act respond.
status: stable
order: 604
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
verified:
  - { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
  approval: { by: "human:zaheerali", at: 2026-11-16T08:08:00Z }
sources:
  - id: carlini
    title: "Carlini et al. — Extracting Training Data from Large Language Models (2020)"
    resource: https://arxiv.org/abs/2012.07805
  - id: gdpr
    title: "Regulation (EU) 2016/679 — General Data Protection Regulation (EUR-Lex)"
    resource: https://eur-lex.europa.eu/eli/reg/2016/679/oj
  - id: eu-ai-act-overview
    title: "European Commission — AI Act (Shaping Europe's digital future)"
    resource: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
  - id: unesco-genai-education
    title: "UNESCO — Guidance for generative AI in education and research"
    resource: https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research
  - id: neo
    title: "1X — NEO Home Robot"
    resource: https://www.1x.tech/neo
---

**In short:** AI is built from data, and much of that data is about people.
Models can memorise and leak personal information; surveillance tools such as
facial recognition can track people; and robots bring cameras and microphones
into homes and workplaces. Data-protection and AI laws now set limits.

## Explanation

### Models can leak training data

Carlini et al. showed that an attacker can extract individual training examples
from a large language model by querying it. From GPT-2 they recovered hundreds
of verbatim sequences, including names, phone numbers and email addresses —
even when each sequence appeared in only one document in the training data —
and found that larger models were more vulnerable.[^carlini]

### Surveillance and biometrics

The EU AI Act bans several uses of AI as an unacceptable risk, including
untargeted scraping of the internet or CCTV footage to build facial recognition
databases, emotion recognition in workplaces and education institutions,
biometric categorisation to deduce certain protected characteristics, and —
with exceptions — real-time remote biometric identification for law
enforcement in publicly accessible spaces. These prohibitions took effect in
February 2025.[^eu-ai-act-overview]

### Data-protection law

The EU's General Data Protection Regulation (GDPR) is the general law
governing the processing of personal data in the European Union, and applies
to AI systems that process such data.[^gdpr]

### Robots in private spaces

Home robots move through the most private spaces with sensors. Some home
humanoids, such as 1X's NEO, offer modes in which remote experts can help the
robot with chores, which raises the question of who can see inside the
home.[^neo]

### Children

UNESCO's guidance on generative AI in education calls for protecting data
privacy and setting an age limit for independent conversations with GenAI
platforms.[^unesco-genai-education]

## Key points

- Language models can memorise and reveal personal data.[^carlini]
- The EU AI Act bans untargeted facial-image scraping and some biometric
  uses.[^eu-ai-act-overview]
- The GDPR governs personal data in AI systems in the EU.[^gdpr]
- Home robots and children's use of AI need special care.[^neo][^unesco-genai-education]

## Related topics

- [Bias](bias.md)
- [Regulation](regulation.md)
- [Homes](../applications/homes.md)
- [Natural language processing](../core-technologies/natural-language-processing.md)

[^carlini]: Carlini et al., 2020.
[^gdpr]: GDPR, Regulation (EU) 2016/679.
[^eu-ai-act-overview]: European Commission, AI Act overview.
[^unesco-genai-education]: UNESCO.
[^neo]: 1X, NEO.
