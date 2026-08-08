# Project: Personal Website — Apoorva Mehta

## Purpose
A personal brand site — not a job-search tool. It establishes and carries an ongoing professional brand, showing the breadth of Apoorva's work rather than pitching for a specific job. No resume-style "Experience" list anywhere, no "why hire me" framing. Lead with an identity statement, not a job title.

Apoorva Mehta, MD, MBA is a preliminary internal medicine resident at Mount Sinai Elmhurst, matched into dermatology residency at the University of Maryland starting 2027. MD/MBA from Columbia. Co-founded ChartR (AI-enabled health-tech, no longer active). Former Rock Health Capital venture fellow and SkinCheck Chief of Staff. 40+ peer-reviewed publications in clinical AI and dermatology. Currently building Mehta Ventures LLC (advising, equity, consulting) and exploring what's next.

## Who's Building This
The owner is not a software developer and is building this hands-on for the experience, with Claude Code explaining structural and architectural decisions as they come up. Prioritize efficiency over exhaustive teaching — explain the *why* behind big decisions, not routine code line-by-line. New to GitHub, Node/npm, Astro, and Cloudflare — assume no familiarity the first time each comes up; don't re-explain once it's been covered.

## Design Direction
Minimal navigation. An identity statement instead of a job title. Curated highlights instead of a resume. One small, deliberately personal detail (see Footer, below). Simple, not heavily engineered. Reference points: seancai.com, evis.dev, ashishgogula.in.

## Domain & Hosting
- Domain: apoorvamehtamd.com, registered at Cloudflare. (Not apoorvamehta.com — that belongs to Instacart's founder. This also matches the LinkedIn handle already in use: linkedin.com/in/apoorvamehtamd.)
- Hosting: Cloudflare Pages, auto-deployed from GitHub. Domain, DNS, and hosting all live in one Cloudflare account.
- Framework: Astro.
- Version control: GitHub, public repo.
- Git commit identity: Apoorva Mehta, using the GitHub noreply email (format: id+username@users.noreply.github.com — get the exact address from GitHub → Settings → Emails).

## Identity Statement (Homepage Headline)
"MD, MBA by training. Founder & investor by instinct — always thinking about what's next."

Use as-is for the homepage hero and, where length allows, the page meta description.

## Site Structure

**Home** — identity statement + short intro.

**Now** — current only: resident physician in preliminary residency for dermatology (Mount Sinai Elmhurst, moving to University of Maryland dermatology in 2027), actively exploring what's next. ChartR does not belong in this section.

**Track Record** — past ventures, past tense:
- **ChartR** (co-founded, AI-enabled health-tech): implementing operational AI within enterprise healthcare, and designing long-horizon reinforcement learning environments for healthcare and clinical AI.
- **Rock Health Capital**: evaluated hundreds of early-stage digital health startups — commercial, technical, and clinical diligence — with end-to-end involvement on investments including Vitalize and HealthMC.
- **SkinCheck**: grew a digital dermatology platform to 100,000+ downloads and 6,500 monthly active users, shaped its health-plan partnership strategy, and helped raise its pre-seed round.

**Research** — framing line: 40+ peer-reviewed publications and presentations spanning clinical AI, dermatology, and digital health. Then these four, in this order:
1. "Deep Learning Image Processing Models in Dermatopathology" — MDPI Diagnostics, Oct 2025 (first author). DOI: 10.3390/diagnostics15192517
2. "Divergent impacts of explainable AI for dermatological diagnosis on clinicians versus lay people" — Nature Medicine, accepted June 2026.
3. "LLM-Based Explainable Medical AI is a Double-Edged Sword in Human-AI Collaborative Diagnosis of Skin Diseases" — Nature Medicine, accepted May 2026.
4. "Retrieval Augmented Generation-Enabled Large Language Model for Risk Stratification of Cutaneous Squamous Cell Carcinoma" — JAMA Dermatology, Aug 2025. DOI: 10.1001/jamadermatol.2025.1614

Then a link to a full /publications page, built directly from `PUBLICATIONS.md` in this folder.

**Mehta Ventures** — advising, equity, consulting. Scope to be finalized once the LLC is approved.

**Contact** — apoorvamehta99@gmail.com and LinkedIn (linkedin.com/in/apoorvamehtamd). Open to advising/consulting conversations, and open to connecting with other builders and investors in the space.

**Footer** — one line, sitewide: "🎾 USTA tennis since age 8 · ✈️ 27 countries and counting."

**Writing/Content** — not in v1. Add once creator content (LinkedIn, TikTok, Instagram, Facebook, Snapchat) actually launches.

## Not Yet Decided
- Visual design: colors, typography, layout.
- Final wording on the Track Record descriptions (drafted from the owner's resume — confirm before treating as permanent).
