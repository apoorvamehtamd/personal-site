# apoorvamehtamd.com

Personal site for Apoorva Mehta, built with [Astro](https://astro.build) and deployed on Cloudflare Pages.

## Structure

```text
/
├── public/            static assets (favicon, robots.txt, og.png)
├── src/
│   ├── layouts/        shared page shell (Layout.astro)
│   ├── pages/           one file per route (index, track-record, research, now, contact, publications)
│   ├── lib/                helpers (publications data loader)
│   └── styles/           global.css
├── PUBLICATIONS.md    source of truth for the /publications page
└── astro.config.mjs
```

## Commands

| Command           | Action                                       |
| ------------------ | --------------------------------------------- |
| `npm install`      | Install dependencies                          |
| `npm run dev`      | Start local dev server at `localhost:4321`   |
| `npm run build`    | Build production site to `./dist/`           |
| `npm run preview`  | Preview the production build locally          |

Pushing to `main` triggers an automatic deploy on Cloudflare Pages.
