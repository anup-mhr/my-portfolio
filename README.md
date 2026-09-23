# Anup Maharjan — Portfolio

Single-page portfolio built with **React 19**, **TypeScript**, **Vite** and **Tailwind CSS v4**.
Live at <https://anup-maharjan.com.np>.

## Requirements

Node.js 22.12+ (see `.nvmrc`). With nvm: `nvm use`.

## Scripts

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # type-check and build to dist/
npm run preview    # serve the production build locally
npm run lint       # eslint
```

## Where things live

- `index.html` — page title, SEO and Open Graph / Twitter meta tags
- `src/data/constants.ts` — all content: bio, skills, experience, education, projects
- `src/components/` — one component per section
- `src/index.css` — Tailwind import and theme colors
- `public/assets/` — images and resume PDF

Deployed on Netlify (`netlify.toml`): builds with `npm run build`, publishes `dist/`.
