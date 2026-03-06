# OCTAVE — Founding Membership Site (Next.js)

## What’s included
- Next.js (App Router) + Tailwind (black/red theme)
- Founding Membership landing page (tiers + rules + FAQ + media placeholders)
- Waitlist capture:
  - Frontend posts to `/api/waitlist`
  - Server route forwards to `WAITLIST_ENDPOINT` (recommended: Formspree)

## Run locally
```bash
npm install
npm run dev
```

## Set up waitlist capture (recommended)
1. Create a Formspree form endpoint
2. In Vercel: Project → Settings → Environment Variables
3. Add:
   - `WAITLIST_ENDPOINT` = your Formspree endpoint

You can also test without it; the API will return OK and log emails.

## Add your videos
Put MP4 files here:
- `/public/videos/hero.mp4` (hero background)

## Stripe
Replace the `stripeHref: "#"` values in `app/page.tsx` with your real Stripe Checkout links.

## Deploy to Vercel
1. Push this project to GitHub
2. Import into Vercel
3. Add the env var(s)
4. Deploy
