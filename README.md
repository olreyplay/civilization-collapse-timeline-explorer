# Civilization Collapse Timeline Explorer

An interactive web app for exploring how major historical civilizations declined. Browse collapse profiles, review key events on a timeline, compare pressure factors across societies, and filter the archive by collapse type or search term.

Built with [Next.js](https://nextjs.org/) 16, React 19, TypeScript, and Tailwind CSS 4.

## Features

- **Home** — Hero landing page with a preview grid of all civilizations
- **Civilization archive** (`/civilizations`) — Search and filter by collapse type; open any profile for details
- **Collapse profiles** (`/civilizations/[slug]`) — Summary, period, region, collapse type, severity-weighted factor breakdown, and a categorized event timeline
- **Comparison** (`/compare`) — Side-by-side table of period, region, collapse type, and strongest decline factor per civilization

Timeline events are tagged by category: Economy, War, Climate, Politics, or Society.

## Included civilizations

| Civilization | Slug |
| --- | --- |
| Roman Empire | `roman-empire` |
| Maya Civilization | `maya-civilization` |
| Byzantine Empire | `byzantine-empire` |
| Akkadian Empire | `akkadian-empire` |
| Mycenaean Greece | `mycenaean-greece` |
| Khmer Empire | `khmer-empire` |
| Han Dynasty | `han-dynasty` |
| Indus Valley | `indus-valley` |
| Olmec Civilization | `olmec-civilization` |

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or newer (20+ recommended)

## Getting started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/                    # Next.js App Router pages
  page.tsx              # Home
  civilizations/        # Archive and detail routes
  compare/              # Comparison table
components/             # UI components (explorer, timeline, factors, etc.)
data/
  civilizations.ts      # Static civilization dataset
types/
  civilization.ts       # TypeScript types for civilizations and events
```

## Extending the data

Civilizations are defined in `data/civilizations.ts` and typed in `types/civilization.ts`. To add a civilization:

1. Add a new object to the `civilizations` array with `slug`, `name`, `period`, `region`, `collapseType`, `summary`, `factors`, and `timeline`.
2. Use a unique URL-friendly `slug` — it becomes the route at `/civilizations/[slug]`.
3. Set each factor’s `severity` from 0–100; the comparison page highlights the highest per civilization.

No database or API is required; the app reads from this static module at build and request time.

## Disclaimer

Collapse factors and severity scores are illustrative summaries for exploration and comparison, not scholarly consensus or quantitative historical models. Timeline copy is simplified for readability.

## License

Private project (`"private": true` in `package.json`). Add a license file if you intend to distribute or open-source this repository.
