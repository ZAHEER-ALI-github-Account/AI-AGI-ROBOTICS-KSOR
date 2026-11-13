# KSOR Build Plan — AI, AGI & Robotics

This file is the master plan for building my KSOR (Knowledge Source of Record) from this repository.

## How to work

- Work **one phase at a time**. Only do the phase I ask for.
- At the end of each phase:
  1. Run the build and make sure it passes.
  2. Make a git commit with a clear message (e.g. `Phase 2: AI & Robotics content`).
  3. Give me a short summary of what you did and what I should check in the browser.
  4. **Stop and wait** for me to say "next phase".
- Keep the repo's original build/setup commands working. Do not break the KSOR generation process.
- If something is unclear or risky, ask me before doing it.
- Never push to GitHub unless I ask.

## Project goal

A modern, highly animated KSOR on **AI, AGI and Robotics**: how they connect, the technologies behind them, how the world is working on them, and their future. It should have a futuristic 3D interface (moving 3D objects, scroll animations) while article pages stay clean and easy to read. Every article must have real, verified references from across the internet.

## Design system (use everywhere)

- Background: near-black (`#05060A` or similar)
- Accent colors: cyan `#00E5FF`, violet `#8B5CF6`
- AGI color: gold `#FFC857`
- Cards: glassmorphism (blurred translucent panels, soft neon borders)
- Fonts: Space Grotesk for headings, Inter for body text
- Feel: futuristic, clean, premium. Smooth, not chaotic.

## Tech for UI (install compatibly with this repo's framework)

- React Three Fiber + @react-three/drei — 3D scenes
- GSAP + ScrollTrigger — scroll animations
- Framer Motion — UI animations and page transitions
- Lenis — smooth scrolling

If the repo's framework can't support React directly, tell me and suggest the closest working approach before changing anything.

---

## Phase 1 — Understand and build the original

1. Read the README, package files and all setup/build scripts.
2. Run the install and build commands exactly as documented. Fix any errors.
3. Start the dev server and give me the local URL.
4. Explain to me in simple words:
   - what framework/tool this repo uses
   - where the content files live and their format
   - where the UI/styling code lives
   - the exact build and run commands

Do not change content or UI in this phase.

---

## Phase 2 — Content: AI, AGI & Robotics

Remove the existing topic content and replace it with a complete knowledge base, using the same file format and structure the repo expects.

### Sections

1. **Foundations** — what AI is, what robotics is, history of both, key milestones
2. **How AI and Robotics Connect** — perception (vision, sensors), decision-making (ML, planning), action (control, actuators), the sense–think–act loop
3. **Core Technologies** — machine learning, deep learning, reinforcement learning, computer vision, NLP, SLAM, ROS, LLMs in robots, simulation and digital twins
4. **Types of Robots** — industrial, humanoid, autonomous vehicles, drones, medical/surgical, service and home, swarm robots
5. **Applications** — manufacturing, healthcare, agriculture, logistics, space exploration, defense, education, homes
6. **Ethics and Risks** — jobs and automation, safety, bias, privacy, autonomous weapons, regulation
7. **Artificial General Intelligence (AGI)**
   - what AGI is and how it differs from today's narrow AI
   - embodied AGI and its connection to robotics
   - major AI labs and companies working toward AGI, and their approaches
   - how governments and international bodies are handling it (policies, safety institutes, regulation)
   - key research challenges
   - AI safety and alignment
   - expert timelines and predictions
   - possible impact on jobs, economy, science and society
   - different viewpoints: optimists, skeptics, safety researchers
8. **The Future** — humanoid robots, human–robot collaboration, general-purpose robots, predictions up to 2050
9. **Glossary** — key terms with short definitions
10. **References** — master list of all sources

### Every article must have

- Title
- Short summary (2–3 lines)
- Detailed explanation
- Key points
- Related topics (links to other articles — used later for the 3D graph)
- Sources list at the end

### References rules (important)

- Use web search to find **real, current** sources for every article: research papers (arXiv, Nature, IEEE, etc.), official AI lab and robotics company sites, government and policy reports, university pages, and reputable news outlets.
- Only include sources you actually found and verified exist, with working URLs.
- **Never invent a citation.**
- Write all content in your own words. Do not copy text from sources.
- Build a master **References** page grouped by section.

---

## Phase 3 — Design system setup

1. Install the UI libraries listed above, compatibly with this framework.
2. Apply the design system site-wide: colors, fonts, glassmorphism cards, base layout.
3. Build a futuristic navbar (logo, section links, search bar) and footer.
4. Confirm all existing pages still build and render.

---

## Phase 4 — Homepage hero: Neural Core

- A 3D glowing neural brain made of particles and connecting lines.
- It rotates slowly and reacts to mouse movement.
- On scroll (GSAP ScrollTrigger), the particles morph into the shape of a robot head — showing AI becoming embodied.
- Title: **"AI, AGI & Robotics — Knowledge Source of Record"** with an animated text reveal.
- Below the hero: animated section cards for each of the 10 sections, revealed on scroll.

---

## Phase 5 — 3D Knowledge Graph

- A dedicated page where every article is a glowing node in 3D space.
- Nodes colored by section (cyan for AI, violet for Robotics, gold for AGI, other sections in matching tones).
- **AGI is a gold central hub** connected to both the AI and Robotics clusters.
- Lines between nodes come from each article's related topics.
- Interactions: drag to rotate, scroll to zoom, hover to show title, click to fly the camera to the node and open the article.
- Link it from the navbar and homepage.

---

## Phase 6 — Article pages

- Clean, readable glassmorphism content card.
- Sticky table of contents.
- Reading progress bar at the top.
- Fade-in animations on scroll (Framer Motion).
- Related-topic cards at the bottom.
- Sources shown clearly at the end.
- Only a subtle animated particle background — no heavy 3D here.

---

## Phase 7 — Polish and performance

- Lenis smooth scrolling.
- Custom glowing cursor (desktop only).
- Smooth page transitions.
- Working search across all articles.
- Lazy-load 3D scenes; fewer particles on mobile.
- Fallback for devices without WebGL.
- Respect `prefers-reduced-motion`.
- Fully responsive on mobile, tablet and desktop.
- Fix all console errors and warnings.

---

## Phase 8 — Final check

1. Check every reference URL and remove or replace broken ones.
2. Run the production build using the repo's official commands and confirm it passes.
3. Start the dev server and give me the local URL for a final review.
4. Tell me the correct build command and output folder for deploying on Vercel.
