# Supakorn Udomsintuwat — Portfolio

[![CI](https://github.com/supakorn5039-boon/port-folio-web/actions/workflows/ci.yml/badge.svg)](https://github.com/supakorn5039-boon/port-folio-web/actions/workflows/ci.yml)

Personal portfolio for Supakorn Udomsintuwat, a Full Stack Software Engineer based in Chiang Mai, Thailand. The site highlights production-scale engineering work across React, TypeScript, Go, Laravel, PostgreSQL, TimescaleDB, and cloud infrastructure.

## Built with

- Next.js 15 and React 19
- TypeScript
- Tabler Icons
- Responsive CSS with reduced-motion and keyboard-accessibility support

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run lint
npm run build
```

## Deploy to Vercel

Import this repository in Vercel and keep the detected Next.js defaults. No environment variables are required. If you later attach a custom domain, set `NEXT_PUBLIC_SITE_URL` to that full `https://` URL for canonical social metadata.

GitHub Actions validates every push and pull request. After the repository is imported into Vercel, Vercel automatically creates preview deployments for pull requests and deploys successful changes from `main` to production.

The resume content is stored at `public/Supakorn-Udomsintuwat-Resume.pdf`, while portfolio content can be updated centrally in `data/profile.ts`.
