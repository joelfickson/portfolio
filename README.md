# joelfickson.com

Personal website and blog for Joel Fickson Ngozo - technical founder, CEO, and full-stack engineer.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity v5 (embedded Studio at `/studio`)
- **Linting/Formatting**: Biome
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Project Structure

```
app/
  (site)/          # Public-facing pages (home, about, career, blog, etc.)
  (studio)/        # Embedded Sanity Studio at /studio
  globals.css      # Tailwind v4 theme and global styles
components/        # Shared UI components
sanity/
  schemas/         # Sanity document schemas
  lib/             # Sanity client, image builder, GROQ queries
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home - hero, venture highlights, latest posts |
| `/about` | Bio and career narrative |
| `/career` | Work experience timeline |
| `/ventures` | Sekuire, Elior Health, Vwaza |
| `/projects` | Open source and technical projects |
| `/blog` | Blog post listing |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Social links and email |
| `/studio` | Sanity Studio (content management) |

## Scripts

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Check with Biome
pnpm lint:fix   # Auto-fix lint issues
pnpm format     # Format with Biome
```
