# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio / case-study site for a Product Designer (Antonio Martínez), built with Astro 7 + React islands + Tailwind CSS v4. Content (site copy, case studies) is in Spanish. Deployed on Vercel.

## Commands

```
npm run dev       # start dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build locally
npm run astro ...  # run Astro CLI commands, e.g. `npm run astro check`
```

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

There is no test suite or linter configured in this repo.

## Architecture

**Content collection (`src/content/projects/`)** — Each case study is an `.mdx` file validated against the Zod schema in `src/content.config.ts`. `_TEMPLATE.mdx` is the canonical reference for the frontmatter fields and section structure (reto de negocio, objetivos, contribución, decisiones, solución, impacto, aprendizajes) — copy it when adding a new project. Key schema behaviors:
- `draft: true` excludes a project from static generation (filtered in `getStaticPaths`).
- `externalUrl` makes the project card link straight out (e.g. to Behance) instead of generating an internal case-study page.
- `order` + `year` control sort order across the grid and the prev/next case-study navigation.
- Cover/OG images use Astro's `image()` schema helper, so they must be local files under `src/assets/projects/<slug>/` and get optimized automatically.

**Routing** — File-based under `src/pages/`. `proyectos/[slug].astro` generates one page per non-draft, non-external project via `getStaticPaths`, passing `prev`/`next` siblings for in-context navigation. `proyectos/index.astro` renders the project grid.

**Layout chain** — `BaseLayout.astro` (HTML shell, fonts, SEO meta tags, dark-mode FOUC-prevention inline script, GA loader) → `PageLayout.astro` (adds `Header`/`Footer` chrome) → `CaseStudyLayout.astro` (case-study-specific hero, meta, MDX prose container, prev/next nav). Regular pages use `PageLayout` directly; project pages use `CaseStudyLayout`.

**SEO** — Centralized in `src/lib/seo.ts` (`buildSeo`), consumed by `BaseLayout`. Site-wide constants (name, tagline, socials, contact) live in `src/content-data/site.ts`; nav links in `src/content-data/nav.ts`; about/experience copy in `src/content-data/about.ts` / `experience.ts`. Prefer editing these data files over hardcoding copy in components.

**MDX components** (`src/components/mdx/`) — `Callout`, `Figure`, `BeforeAfter`, `ImpactStats`, `ImagePlaceholder`, `ProductDivider` are available for use inside case-study `.mdx` bodies.

**Theming** — CSS custom properties defined once in `src/styles/tokens.css` (`:root` for light, `.dark` for dark) and mapped into Tailwind's `@theme` (colors like `text-ink`, `bg-paper`, `text-accent`, etc.). Don't hardcode colors in components — use the token-backed Tailwind classes. Theme is toggled by `ThemeToggle.tsx` (the one React island), which sets `localStorage.theme` and toggles the `.dark` class read by the inline script in `BaseLayout.astro`.

**i18n** — Site content is in Spanish (`<html lang="es">`); keep new copy and MDX content consistent with that.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
