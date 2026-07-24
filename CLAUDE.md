# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

joelfickson.com. Today it is a personal site for Joel Fickson Ngozo. It is
becoming the public face of **Fickson Limited**, the Malawi company that owns
Chia, Kazuni and Luwawa. Both readings have to hold at once: a founder's
portfolio and a company's shopfront.

Repo: `joelfickson/portfolio`, base branch `master`.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Sanity v5 with the
Studio embedded at `/studio`, Biome for lint and format, deployed on Vercel.

```bash
pnpm install
pnpm dev          # localhost:3000
pnpm build
pnpm lint         # biome check .
pnpm lint:fix
pnpm format
```

`.env.local` needs `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.

## Layout

```
app/(site)/       Public pages: home, about, career, ventures, projects, blog, contact
app/(studio)/     Sanity Studio at /studio
app/globals.css   Tailwind v4 theme, the whole design system
components/       Shared UI, unprefixed and flat
sanity/schemas/   Document schemas
sanity/lib/       Client, image builder, GROQ queries in queries.ts
```

## Content comes from Sanity, with fallbacks in the code

Pages fetch from Sanity and fall back to a hardcoded array when the query returns
empty, for example `fallbackVentures` in `app/(site)/ventures/page.tsx`. That
means content lives in two places and they drift. When changing what the site
says about a venture, change the Sanity document **and** the fallback, or the
site tells two different stories depending on whether the CMS answers.

## The content is out of date with the company

`ventures` currently lists Sekuire, Elior Health Labs and Vwaza Multimedia. It
does not mention Fickson Limited, Chia, Kazuni or Luwawa. Metadata and OG
descriptions repeat the old three by name, so fixing this is not a one-file
edit: page copy, `fallbackVentures`, `metadata`, the Sanity documents, and
`app/(site)/page.tsx` venture highlights all carry it.

Treat that rewrite as its own piece of work with the copy agreed first. Do not
half-migrate it, a site that lists both sets of ventures with no relationship
between them reads worse than one that is simply stale.

## Design

The site's own language: Outfit for body, Syne for display, JetBrains Mono for
labels, a stone neutral ramp with an amber accent (`--color-accent-*` in
`app/globals.css`), light and dark via a `.dark` custom variant.

Two things to know before touching the visuals:

- **This repo predates the group design rules and breaks one of them.** The
  group standard is no card framing. `venture-card.tsx`, `blog-card.tsx` and
  `project-card.tsx` are exactly that: `rounded-2xl`, bordered, shadowed
  surfaces. Do not sprinkle more of them. When the Fickson Limited redesign
  happens, this is the thing to resolve, deliberately and in one pass.
- **Mock before code.** Any new component, restyle, or change to layout, spacing
  or visual hierarchy is designed as a standalone HTML mock and approved before
  the real component is written. Pure logic changes are exempt.

No shadcn here, unlike Luwawa and Kazuni. Components are hand-written and flat
in `components/`. That is fine for a site this size; do not introduce shadcn for
one component.

## Fickson Limited group

Portfolio is one of four products in the workspace at
`/Volumes/Work/code/fickson-limited`. Read `../CLAUDE.md` for group-wide
conventions.

Portfolio consumes no SDK and publishes no contract, so it never files or reads
a triage entry. Its coupling to the other three is editorial, not technical:
when a product launches, is renamed, changes what it does, or dies, this site is
the thing that goes stale. Check `../chia/CLAUDE.md`, `../kazuni/CLAUDE.md` and
`../luwawa/README.md` for what each product actually does before writing copy
about it, rather than describing them from memory.
