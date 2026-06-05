# Gepeng Ding Portfolio

Vite + React personal academic portfolio for GitHub Pages or any static host.

## Local Development

Prerequisite: Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

The repository includes a GitHub Pages workflow in `.github/workflows/deploy.yml`.
Pushing to `main` builds the static site and deploys `dist/` to Pages.

Core images are stored in `public/images/`, so the live site does not depend on
Google Drive thumbnails or AI Studio runtime assets.
