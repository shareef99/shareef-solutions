# Shareef Solutions

Static marketing site for Shareef Solutions, built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Outputs fully static HTML for cheap hosting on [Cloudflare Pages](https://pages.cloudflare.com).

## Project structure

```text
src/
  components/   # Reusable .astro components (Navbar, sections, LegalPage)
  layouts/      # Layout.astro — shared HTML shell + navbar + theme handling
  pages/        # File-based routes (index, privacy, terms, refund-policy, support)
  styles/       # global.css (Tailwind entry + custom variants)
public/         # Static assets served as-is (favicon.svg)
```

Every page in `src/pages/` is pre-rendered to its own `.html` file — no client-side router and almost no JavaScript (only small inline scripts for the dark-mode toggle, mobile menu, and mailto contact forms).

## Commands

| Command         | Action                                       |
| --------------- | -------------------------------------------- |
| `pnpm install`  | Install dependencies                         |
| `pnpm dev`      | Start the dev server at `localhost:4321`     |
| `pnpm build`    | Build the static site to `./dist/`           |
| `pnpm preview`  | Preview the production build locally         |

## Deploying to Cloudflare Pages

- **Build command:** `pnpm build`
- **Build output directory:** `dist`

No adapter or server runtime is needed — the site is fully static.
