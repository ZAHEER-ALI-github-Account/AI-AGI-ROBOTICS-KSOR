---
type: Document
title: Natural language processing and large language models
description: How computers learned to work with human language — from word vectors to Transformers, GPT-style models and instruction tuning.
status: draft
order: 305
generated: { by: "claude-code/opus-5-5", at: 2026-11-01T12:00:00Z }
ksor:
  audience: [public]
  owner: human:zaheerali
sources:
  - id: word2vec
    title: "Mikolov et al. — Efficient Estimation of Word Representations in Vector Space (2013)"
    resource: https://arxiv.org/abs/1301.3781
  - id: transformer
    title: "Vaswani et al. — Attention Is All You Need (2017)"
    resource: https://arxiv.org/abs/1706.03762
  - id: bert
    title: "Devlin et al. — BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (2018)"
    resource: https://arxiv.org/abs/1810.04805
  - id: gpt3
    title: "Brown et al. — Language Models are Few-Shot Learners (2020)"
    resource: https://arxiv.org/abs/2005.14165
  - id: instructgpt
    title: "Ouyang et al. — Training language models to follow instructions with human feedback (2022)"
    resource: https://arxiv.org/abs/2203.02155
  - id: chinchilla
    title: "Hoffmann et al. — Training Compute-Optimal Large Language Models (2022)"
    resource: https://arxiv.org/abs/2203.15556
  - id: stochastic-parrots
    title: "Bender, Gebru, McMillan-Major & Shmitchell — On the Dangers of Stochastic Parrots (FAccT 2021)"
    resource: https://doi.org/10.1145/3442188.3445922
  - id: hle
    title: "Phan et al. — Humanity's Last Exam (2025)"
    resource: https://arxiv.org/abs/2501.14249
---

**In short:** natural language processing (NLP) is the part of AI that reads,
writes and translates human language. Since 2017 it has been dominated by
Transformer-based large language models (LLMs), which learn from huge amounts
of text and can then answer questions, write and follow instructions.

## Explanation

### From words to vectors

A key early step was to represent words as vectors of numbers that capture
meaning. Word2vec (2013) learned high-quality word vectors from a 1.6-billion
word dataset in under a day.[^word2vec]

### The Transformer

The 2017 Transformer used *attention* — letting every word look at every other
word — instead of processing text one step at a time. It set new translation
records while training in a fraction of the time of earlier
models.[^transformer] Two families followed:

- **BERT**-style models read text in both directions and are fine-tuned for
  understanding tasks; BERT set new results on eleven NLP tasks.[^bert]
- **GPT**-style models predict the next word. GPT-3, with 175 billion
  parameters, could perform tasks from a few examples in the prompt, without
  retraining.[^gpt3]

### Making models useful

Bigger models are not automatically helpful. InstructGPT fine-tuned GPT-3 with
human demonstrations and reinforcement learning from human feedback; people
preferred the 1.3-billion-parameter InstructGPT's answers to those of the
175-billion-parameter GPT-3.[^instructgpt] Research on training budgets found
that model size and training data should be scaled together: Chinchilla, with
70 billion parameters and four times more data, outperformed much larger
models.[^chinchilla]

### Limits and critiques

In the "stochastic parrots" paper, Bender, Gebru and colleagues argued that an
LLM stitches together linguistic forms from its training data "without any
reference to meaning", that web-scale data can encode biases, and that the
environmental and financial costs of ever-larger models deserve weight before
building them.[^stochastic-parrots] New
benchmarks keep exposing gaps: on *Humanity's Last Exam*, 2,500 expert-level
questions, state-of-the-art models showed low accuracy when it was
released.[^hle]

## Key points

- Word vectors, then Transformers, transformed NLP.[^word2vec][^transformer]
- LLMs learn from text and can do new tasks from a few examples.[^gpt3]
- Human feedback makes them follow instructions better.[^instructgpt]
- Bias, grounding and reliability remain open
  concerns.[^stochastic-parrots][^hle]

## Related topics

- [Deep learning](deep-learning.md)
- [LLMs in robots](llms-in-robots.md)
- [History of artificial intelligence](../foundations/history-of-ai.md)
- [What is AGI?](../agi/what-is-agi.md)

[^word2vec]: Mikolov et al., 2013.
[^transformer]: Vaswani et al., 2017.
[^bert]: Devlin et al., 2018.
[^gpt3]: Brown et al., 2020.
[^instructgpt]: Ouyang et al., 2022.
[^chinchilla]: Hoffmann et al., 2022.
[^stochastic-parrots]: Bender et al., 2021.
[^hle]: Phan et al., 2025.
