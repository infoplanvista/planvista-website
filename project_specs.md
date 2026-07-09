# Project Specs — Planvista Website

## What it is / who uses it
A 6-page Dutch-language marketing/brochure site for Planvista, a solo interim
"structuur & regie" consultancy. Public visitors only — no login, no accounts,
no admin area. One interactive piece: a contact form that emails the founder.

## Tech stack
- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS (translating the handoff's inline `style="..."` values into Tailwind config — see Design tokens below)
- **Animation:** GSAP + ScrollTrigger
- **Form delivery:** Web3Forms (client-side POST, no backend) — same approach as the design handoff
- **Hosting:** Vercel
- **Fonts:** Google Fonts — Cormorant Garamond (serif, display) + Work Sans (sans, body), loaded via `next/font/google`

**No Supabase / database / auth.** The global CLAUDE.md template assumes a
Supabase-backed app with an admin dashboard and candidate interviews — that
doesn't apply here. This site has no data to persist and nothing to log in
to, so that part of the stack is intentionally dropped.

## Pages & routes
All routes public, all share the same header + footer.

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, 3 value cards, testimonials (placeholder — flagged), CTA band |
| `/over-planvista` | Over Planvista | Founder story, photo + copy, positioning statement, CTA band |
| `/diensten` | Diensten | Hero, 2×2 services grid (4 numbered cards), CTA band |
| `/tarieven` | Tarieven | Intro, 2-column pricing/engagement comparison cards |
| `/contact` | Contact | Intro + photo + social links, working contact form |
| `/algemene-voorwaarden` | Algemene Voorwaarden | Short legal pass-through page with an outbound link |

### Shared layout
- **Header**: sticky, translucent blur, logo (links home), nav with active-page underline, "Plan een kennismaking" pill CTA (`mailto:info@planvista.nl`)
- **Footer**: dark band, wordmark + tagline, Navigatie column, Contact column (email/Instagram/LinkedIn), bottom bar with copyright + terms link

Built as `components/Header.tsx` and `components/Footer.tsx`, used from `app/layout.tsx`.

## Data model
None. No database. Page copy is static content in the page components. The
only "state" is client-side React form state on the Contact page
(`name`, `email`, `message`, `status: idle|sending|success|error`), not persisted anywhere.

## Third-party services
- **Web3Forms** (`https://api.web3forms.com/submit`) — receives the contact form POST and emails `info@planvista.nl`. Needs a real access key.
- **Google Fonts** — Cormorant Garamond, Work Sans

## Design tokens (from the handoff, high-fidelity — recreate exactly)
- Colors: background `#F6F1EA`, cards `#FFFFFF`, muted `#EDE4D6`, text primary `#2B241D`, text secondary `#5B4E3F`, accent `#8A7259` (hover `#5B4E3F`), dark section `#2B241D` / card `#3A3025`, borders `#E4DACB`
- Type: Cormorant Garamond (400/500/600) for headings, Work Sans (300–600) for body
- Shape: 1180px max content width, 22–28px card radius, fully pill buttons (100px radius), no shadows, 1px `#E4DACB` card borders
- Images: real photos at native 2:3 portrait ratio, never cropped square/landscape

## Assets
Copy `designs/assets/*` (`logo.png`, `hero.jpg`, `about.jpg`, `diensten.jpg`, `contact.jpg`) into `/public/`.

## Animation approach (GSAP)
Tasteful, not cheesy — subtle entrance and scroll reveals, no bouncing/gimmicks:
- Hero: staggered fade + slight rise-in for eyebrow → heading → paragraph → CTAs, image fades/scales in slightly
- Section scroll-reveals: cards and content blocks fade/rise in as they enter viewport (ScrollTrigger), staggered across grid items (value cards, service cards, pricing cards, testimonials)
- Header: small underline/opacity transition on nav hover (CSS is enough here, GSAP not required)
- Respect `prefers-reduced-motion` — disable/shorten animations for users who request it
- No animation blocks initial content from being visible/readable if JS is slow — content is real DOM, not injected by GSAP

## Known content gaps (from the design handoff — flag, don't block on)
1. Home page testimonials are placeholder quotes — marked in-page as examples, need replacing with real ones before launch.
2. Web3Forms access key: real key provided by the client, stored in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (not committed to git). The form POSTs client-side to `api.web3forms.com/submit` exactly as in the original design.
3. Algemene Voorwaarden page currently links out to a `.docx` on the old Squarespace domain — I'll keep it as an external link exactly as designed; swapping it for a real hosted doc is a separate follow-up.

## What "done" looks like
- All 6 routes exist, render responsively (mobile/tablet/desktop), and match the handoff's colors/typography/spacing/copy
- Header nav shows correct active-page state per route; footer identical across all pages
- Contact form is fully wired (client state, submit, loading/success/error states) against Web3Forms, using an env var for the access key
- GSAP animations run smoothly, respect reduced-motion, and don't hide content
- `npm run build` passes with no TypeScript errors
- `npm run dev` runs with no console errors, manually spot-checked in the browser across all 6 pages
