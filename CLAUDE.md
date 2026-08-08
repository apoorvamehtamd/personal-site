# Project: Personal Website — Apoorva Mehta

## Purpose
This is a personal brand site, not a job-search tool. The goal is to establish and carry an ongoing professional brand — showing people the breadth of what Apoorva has built and touched, not to pitch for a specific job. Apoorva is not a typical candidate: preliminary internal medicine resident (Mount Sinai Elmhurst) matched into dermatology residency (University of Maryland, starting 2027), MD/MBA from Columbia, co-founder of ChartR (AI-enabled health-tech, no longer active), former Rock Health Capital venture fellow, 40+ peer-reviewed publications in clinical AI/dermatology, and building Mehta Ventures LLC.

The site should NOT read as a resume or a "why hire me" pitch — no bullet-point "Experience" list, no job-application framing. Lead with an identity statement, not a job title. It doubles as:
1. **The home base linked from LinkedIn, TikTok, Instagram, Facebook, and Snapchat bios.**
2. **Mehta Ventures LLC** — advising, equity, and consulting. Lives as a section on this site rather than a separate site for now.

## Who's building this
The owner is not a software developer. They want hands-on experience ("reps") actually building this themselves, with Claude Code explaining key structural and architectural decisions along the way. Priority is efficiency over teaching every detail — explain the "why" behind big decisions (framework choice, folder structure, deploy setup, naming) rather than narrating routine code line-by-line. New to GitHub, Vercel, Netlify, and Astro — assume no prior familiarity the first time each comes up, but don't re-explain a concept once it's been covered.

## Design direction
Inspired by seancai.com, evis.dev, and ashishgogula.in: minimal nav, a short identity statement instead of a title, curated highlights instead of a resume, and at least one deliberately personal (non-professional) detail so it reads as a person's site rather than a template. Keep it simple — explicitly not meant to be complex or heavily engineered.

## Domain
**apoorvamehtamd.com** — confirmed available and purchased, registered through Cloudflare. (Note: Apoorva shares a name with a much more famous entrepreneur, Instacart's founder, who holds the plain apoorvamehta.com — the "md" differentiates and matches the LinkedIn handle already in use: linkedin.com/in/apoorvamehtamd.)

## Tech stack
- Astro (static site — no backend, no database). Chosen over plain HTML/CSS specifically to hedge against a real on-site blog being added later — the owner is "possibly" interested in one but not committed. Astro's content collections make that addition cheap later; plain HTML would mean a real migration if the blog materializes. Cost is zero either way (Cloudflare Pages free tier covers both fully); the trade is a bit more setup complexity now (Node.js, npm, a build step) against avoiding a future migration.
- The owner is not a developer and has never used Node/npm/Astro. Explain the toolchain the first time each piece comes up (what `npm install` does, what the build step is doing), but don't over-explain once covered.
- Version control on GitHub
- Hosting on Cloudflare Pages, auto-deployed from the GitHub repo. Domain, DNS, and hosting all sit in one Cloudflare account.
- Domain: apoorvamehtamd.com, already registered at Cloudflare

## Draft site structure
- Home — identity statement + short intro
- Now / Currently — residency track + ChartR + research, framed as current focus, not job history
- Building — ChartR
- Research — selected publications/clinical AI work (not an exhaustive CV dump)
- Mehta Ventures — advising, equity, consulting (scope still TBD)
- Writing / Content — links out to the creator platforms above
- Contact

## Open questions to resolve with the owner before/while building
- Final identity statement / headline copy (candidates drafted, not yet chosen — see below)
- Whether Mehta Ventures gets its own full page or just a section
- Visual direction — sleek/professional vs. more personal and creator-forward
- Which publications/projects to feature vs. omit (avoid overwhelming with the full academic CV)

## Identity statement candidates (pick one, or use as a starting point to edit)
1. "Physician. Researcher. Figuring out what's next in health AI."
2. "Practicing medicine. Advising through Mehta Ventures. Building what's next."
3. "MD/MBA at the intersection of medicine and AI — exploring the next build."

