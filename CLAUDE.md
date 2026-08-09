# Project: Personal Website — Apoorva Mehta

## Purpose
A personal brand site — not a job-search tool. It establishes and carries an ongoing professional brand, showing the breadth of Apoorva's work rather than pitching for a specific job. No resume-style "Experience" list anywhere, no "why hire me" framing. Lead with an identity statement, not a job title.

Apoorva Mehta, MD, MBA is a preliminary internal medicine resident at Mount Sinai Elmhurst, matched into dermatology residency at the University of Maryland starting 2027. MD/MBA from Columbia. Co-founded ChartR (no longer active) — a company building long-horizon reinforcement learning environments for clinical AI, alongside automating front- and back-office workflows in enterprise healthcare; do not describe it as a generic "health-tech company," that undersells it. Former Rock Health Capital venture fellow (evaluated thousands of early-stage startups, not hundreds) and SkinCheck Chief of Staff. 40+ peer-reviewed publications in clinical AI and dermatology. Mehta Ventures LLC exists as a business vehicle for occasional advising/equity/consulting work — it's not a public-facing initiative and should not be surfaced on the site (see Site Structure). Always exploring what's next.

## Who's Building This
The owner is not a software developer and is building this hands-on for the experience, with Claude Code explaining structural and architectural decisions as they come up. Prioritize efficiency over exhaustive teaching — explain the *why* behind big decisions, not routine code line-by-line. New to GitHub, Node/npm, Astro, and Cloudflare — assume no familiarity the first time each comes up; don't re-explain once it's been covered.

## Design Direction
Minimal navigation. An identity statement instead of a job title. Curated highlights instead of a resume. One small, deliberately personal detail (see Contact, below). Simple, not heavily engineered. Reference points: seancai.com, evis.dev, ashishgogula.in.

Nav links (Track Record, Research, Now, Contact) live in the top header only — do not repeat them in a links row at the bottom of a page, it's redundant. Header brand name (top-left) should read visibly larger than the LinkedIn/X icons next to it, not the same size.

Say "publications," not "papers," when referring to the 40+ peer-reviewed output — matches the Research page's wording.

Lean into the builder/founder identity, not the physician identity — medicine is the differentiator, not the lead. Watch for content drifting back to physician-first framing (it has happened twice) and correct it.

## Domain & Hosting
- Domain: apoorvamehtamd.com, registered at Cloudflare. (Not apoorvamehta.com — that belongs to Instacart's founder. This also matches the LinkedIn handle already in use: linkedin.com/in/apoorvamehtamd.)
- Hosting: Cloudflare Pages, auto-deployed from GitHub. Domain, DNS, and hosting all live in one Cloudflare account.
- Framework: Astro.
- Version control: GitHub, public repo.
- Git commit identity: Apoorva Mehta, using the GitHub noreply email (format: id+username@users.noreply.github.com — get the exact address from GitHub → Settings → Emails).

## Identity Statement (Homepage Headline)
"Trained to be a physician. Spend my time building & investing in AI, healthcare, & life sciences."

Use as-is for the homepage hero and, where length allows, the page meta description. Owner's own wording (dictated directly, not drafted by Claude) — treat as final, don't rephrase. Uses "&" deliberately; keep it. Tone intent: accomplished but not pitchy — state what's been done, stay open/curious about what's next, avoid "selling" or founder-bravado framing. Avoid comparative/rarity claims ("one of the few...") — they read as a boast; state actions and facts plainly instead. Also avoid flat "X, Y, and Z" role-list framing — it reads as generic.

## Site Structure

**Home** — identity statement + short intro. Closes with: "Always thinking about what's next & learning from people smarter than me." — owner's own humble/curious closing-line style; match this register if it needs to change, not a hard sales CTA.

**Now** — current only: resident physician in preliminary residency for dermatology (Mount Sinai Elmhurst, moving to University of Maryland dermatology in 2027), actively exploring what's next. ChartR does not belong in this section.

**Track Record** — past ventures, past tense:
- **ChartR** (co-founded): a company building long-horizon reinforcement learning environments for clinical AI, alongside automating front- and back-office workflows in enterprise healthcare. The RL environment work is the more distinctive half — lead with it, not with "health-tech company" framing, which undersells it.
- **Rock Health Capital**: evaluated thousands of early-stage digital health startups (not hundreds — corrected by owner), involved end-to-end from sourcing to diligence and memo writing.
- **SkinCheck**: grew a digital dermatology platform to 100,000+ downloads and 6,500 monthly active users, shaped its health-plan partnership strategy, and helped raise its pre-seed round.

**Research** — framing line: 40+ peer-reviewed publications and presentations spanning clinical AI, dermatology, and digital health. Then these four, in this order:
1. "Deep Learning Image Processing Models in Dermatopathology" — MDPI Diagnostics, Oct 2025 (first author). DOI: 10.3390/diagnostics15192517
2. "Divergent impacts of explainable AI for dermatological diagnosis on clinicians versus lay people" — Nature Medicine, Aug 2026. DOI: 10.1038/s41591-026-04553-w
3. "LLM-Based Explainable Medical AI is a Double-Edged Sword in Human-AI Collaborative Diagnosis of Skin Diseases" — Nature Medicine, accepted May 2026.
4. "Retrieval Augmented Generation-Enabled Large Language Model for Risk Stratification of Cutaneous Squamous Cell Carcinoma" — JAMA Dermatology, Aug 2025. DOI: 10.1001/jamadermatol.2025.1614

Then a link to a full /publications page, built directly from `PUBLICATIONS.md` in this folder.

**Mehta Ventures** — not a site section. It's a business vehicle for occasional advising/equity/consulting, not a public initiative; no dedicated page, no nav item, no mention anywhere on the site.

**Contact** — no public email (owner doesn't want it exposed). Links to LinkedIn (linkedin.com/in/apoorvamehtamd) and X (x.com/apoorvamehtamd) as the ways to reach out; add Instagram/Substack/Facebook links here too once that content actually launches (see Writing/Content, below). Intro line: "I'm always excited to connect & learn from other builders & investors." Closes with "A little bit about me." followed by personal-detail bullets (currently football fandom, tennis, and travel) — owner open to adding more (moved here from a sitewide footer — it read as easy to miss at the bottom of every page).

**Writing/Content** — not in v1. Add once creator content (LinkedIn, TikTok, Instagram, Facebook, Snapchat) actually launches.

## Not Yet Decided
- Visual design: colors, typography, layout.
- Final wording on the Track Record descriptions (drafted from the owner's resume — confirm before treating as permanent).
