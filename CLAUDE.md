# tabnews-ai

Development of the platform Tab News using agentic development. Right now the site is a single placeholder page; the news platform itself hasn't been started.

## Stack

- Next.js 16.2.12 (App Router), React 19.3.1, plain JavaScript (no TypeScript)
- Kept deliberately minimal: the least code possible, following modern Next.js conventions

## Structure

- `app/page.js` — home page ("Welcome to my site", shown uppercase via CSS)
- `app/layout.js` — root layout (required by the App Router), imports `globals.css`
- `app/globals.css` — global styles (title is large and centered on screen)

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — serve the production build

## Deployment

- GitHub: https://github.com/mikemorcerf/tabnews-ai
- Vercel deploys every push to `main` automatically: https://tabnews-ai.vercel.app
