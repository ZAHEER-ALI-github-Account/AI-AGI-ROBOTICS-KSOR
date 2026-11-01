---
format: 2
name: ksor-ai-robotics
title: "AI, AGI & Robotics"
description: A cited knowledge base on artificial intelligence, robotics and artificial general intelligence — how they connect, the technologies behind them, who is building them, and where they may lead.
toolchain:
  requires: ">=0.0.61"
  scaffolded: "0.0.61"
# `database.dsn_env` names the environment variable holding your Postgres DSN —
# never the DSN itself, which belongs in .env. It is filled in because naming a
# variable costs nothing and needs no database: `pnpm dev` and `pnpm build` do
# not read it, and the value only has to exist when you climb to the served
# rung. To climb: copy .env.example to .env and set KSOR_DB_URL, then
# `pnpm provision` once (schema + grant), then `pnpm refresh` to PUBLISH the
# record, then `pnpm serve`. Serving does not publish — that is deliberate, and
# skipping refresh serves nothing.
# Nothing else here is required:
# `embedding:` already defaults to Gemini at 1536 dimensions, and leaving
# `retrieval:` out starts you with the abstention gate off and honest about it
# (turn it on afterwards with `ksor calibrate`, once the record is serving).
database:
  dsn_env: KSOR_DB_URL
# Where agents reach this record's MCP surface, and the semver it publishes as.
# Both go into /.well-known/mcp/server.json, the document an agent reads to
# DISCOVER this record instead of being told the URL. Leave mcp_url out until
# the server is actually published: an invented URL is worse than none.
# mcp_url: https://records.example.com/mcp
# version: 0.1.0
---

This record covers artificial intelligence (AI), robotics and artificial
general intelligence (AGI): their foundations and history, how AI and robots
connect through the sense–think–act loop, the core technologies, the main
types of robots and where they are used, the ethical risks and regulation, the
labs and governments working on AGI, and expert views of the future. Every
claim is cited to a public source listed on the document that makes it.

It does not give investment, legal, medical or safety-engineering advice, and
it does not forecast on its own account: predictions here are reported as the
named source's prediction, never as the record's. Where sources disagree, the
record states each view with its own citation rather than choosing between
them. When a question falls outside these documents, say so rather than
answering from general knowledge.
