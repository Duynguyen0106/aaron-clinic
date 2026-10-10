# Aaron Horn — Osteopathy & Sound

Marketing website for Aaron Horn’s mobile London practice — osteopathy blended with therapeutic sound. Structure adapted from [Nguyensosteopathy](https://github.com/Duynguyen0106/Nguyensosteopathy) (Next.js App Router + `site.ts` content model), with WhatsApp booking instead of an embed calendar.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Content from `src/lib/site.ts`
- Booking CTAs → WhatsApp (`+44 7818 065834`)

## Getting started

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

| Route | Purpose |
|-------|---------|
| `/` | Hero, visit steps, approach, services, pricing, FAQ, book CTA |
| `/about` | Aaron’s story |
| `/services` | Service index |
| `/services/[slug]` | Service detail |
| `/book` | WhatsApp booking explainer |
| `/privacy` | Privacy policy |

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
