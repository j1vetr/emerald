# Emerald Mansion Hotel Website

## Overview
Marketing website for Emerald Mansion, a luxury boutique hotel in Sultanahmet, Istanbul (emeraldmansion.com). Bilingual (Turkish and English) with each language on its own URL tree.

## Architecture
- Vite + React 19 single page app in `client/`, wouter 3.x routing, i18next for translations, framer-motion animations, Lenis smooth scroll, Tailwind 4, shadcn/ui
- Express server in `server/` used only in production (redirects, status codes, static serving). Dev workflow runs Vite alone on port 5000
- Build-time prerendering, not runtime SSR: `script/build.ts` builds the client, builds `client/src/entry-server.tsx` as an SSR bundle, prerenders every canonical page into `dist/public/<path>/index.html` plus `404.html`, generates `dist/public/sitemap.xml`, then bundles the server to `dist/index.cjs`
- `client/src/main.tsx` hydrates when prerendered markup is present, falls back to a normal client render in dev

## SEO system (do not break these invariants)
- `client/src/lib/seo.ts` is the single source of truth for URLs, titles, meta descriptions, canonical URLs, hreflang pairs, the legacy 301 redirect map, and sitemap paths. It must stay dependency free (no vite aliases or asset imports) because the build script and server import it
- URL trees: `/en/...` and `/tr/...`, canonical format uses trailing slashes. Language is derived from the URL path, never from browser detection
- `server/static.ts` handles: www and http 301s, `/dacegug/*` 410, root `/` 302 by Accept-Language, legacy path 301s, trailing slash 301 normalization, real 404 status with `404.html`
- Adding a page: register it in `seo.ts` (both languages), add routes in `App.tsx`, it is then prerendered and included in the sitemap automatically
- Room slugs in `constants.ts` must match `ROOM_SLUGS` in `seo.ts`
- `client/index.html` contains `<!--head-tags-->` and `<!--app-html-->` placeholders required by the prerender step

## Deployment
Autoscale deployment: build `npm run build`, run `npm run start` (Express serves `dist/public` on PORT)

## User preferences
- Communicate in Turkish
- Never use em dashes or semicolons in user-facing text and plan files
