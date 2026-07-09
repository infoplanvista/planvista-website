# Handoff: Planvista Website Redesign

## Overview
A full redesign/copy refresh of planvista.nl (an interim/structuur-en-regie consultancy). Warm, quiet aesthetic (cream/beige + dark taupe, serif display type) replacing the original stark black-and-white Squarespace site, with rewritten copy and a working contact form. Six pages: Home, Over Planvista, Diensten, Tarieven, Contact, Algemene Voorwaarden.

## About the Design Files
The files in `designs/` are **design references built as HTML prototypes** (Design Components — `.dc.html`), not production code to copy verbatim. They show the intended visual design, copy, layout, and interaction behavior. The task is to **recreate these designs in the target codebase's environment** (whatever the developer sets up — plain HTML/CSS, a static site generator, Next.js, etc.), following its own conventions. If no codebase exists yet, a simple static multi-page HTML/CSS site (or a lightweight framework like Astro/Next.js) is a reasonable default given this is a small marketing site.

Each `.dc.html` file has three parts worth knowing when reading it:
1. A `<template>`-like markup body inside `<x-dc>…</x-dc>` — the actual page structure, entirely inline-styled (no external CSS classes).
2. A `<script data-dc-script>` block (only on `Contact.dc.html`) — the form's state/submit logic, in a small custom class format (`class Component extends DCLogic`). Read it as pseudocode for a React `useState`/`onSubmit` handler — don't copy the class syntax itself.
3. All styling is inline `style="…"` attributes rather than stylesheets — when rebuilding, translate these into whatever styling approach the target codebase uses (CSS modules, Tailwind, styled-components, plain CSS), preserving the exact values.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate pixel-perfectly using the exact values below.

## Global Design System

### Colors
- Background (page): `#F6F1EA` (warm cream)
- Background (cards/form): `#FFFFFF`
- Background (subtle/muted cards, e.g. image placeholders): `#EDE4D6`
- Text (primary/headings): `#2B241D` (near-black warm brown)
- Text (body/secondary): `#5B4E3F`
- Accent (labels, links, numerals, borders): `#8A7259`
- Accent hover: `#5B4E3F`
- Dark section background (footer, testimonials): `#2B241D`
- Dark section card background: `#3A3025`
- Dark section body text: `#F0E9DD`
- Dark section muted text: `#B8A98F` / `#8A7259`
- Borders (light sections): `#E4DACB`
- Form field background: `#FBF8F3`
- Success message: text `#4C6B4F` on background `#EAF0E9`
- Error message: text `#7A3B2E` on background `#F5E6E1`

### Typography
- Display/headings: **Cormorant Garamond** (serif), weights 400/500/600. Loaded via Google Fonts.
- Body/UI: **Work Sans** (sans-serif), weights 300/400/500/600. Loaded via Google Fonts.
- H1 size: `clamp(34px–40px, ~5vw, 48–64px)` depending on page, line-height ~1.1
- H2 size: ~28–42px, line-height ~1.1–1.15
- H3 (card titles): 23–24px, weight 600
- Body copy: 15.5–17px, line-height 1.6–1.7
- Eyebrow/label text: 13–14px, uppercase, letter-spacing 0.10–0.14em, weight 600, color accent

### Spacing & Shape
- Page max-width: `1180px`, centered, `32px` horizontal padding
- Section vertical padding: 40–90px depending on section weight
- Card border-radius: 22–28px (large, soft)
- Button border-radius: fully pill (`100px`)
- Buttons: primary = dark fill (`#2B241D`) + cream text, pill, ~15px/28-30px padding; secondary = outline (1px `#2B241D` border, transparent/cream fill)
- Cards: 1px border `#E4DACB` on white background, no drop shadows
- Images: real photos, rendered at their native **2:3 portrait** aspect ratio (do not force into square/landscape crops — see note below), `border-radius` matching card radius, `object-fit: cover`, `object-position: center top`

### Navigation (shared header, all pages)
Sticky header, translucent cream background with blur, bottom border `#E4DACB`. Left: logo (image, ~50px tall, links to Home). Center/right: nav links (Home, Over Planvista, Diensten, Tarieven, Contact) at 15px — active page is bold with a 1.5px accent-colored underline. Far right: pill CTA button "Plan een kennismaking" linking to `mailto:info@planvista.nl`.

### Footer (shared, all pages)
Dark background (`#2B241D`). Left: logo wordmark in a bordered box + one-line tagline. Right: two columns — "Navigatie" (page links) and "Contact" (email, Instagram, LinkedIn). Bottom bar: copyright + "Algemene voorwaarden" link, separated by a top border `#4A3E2F`.

## Screens / Pages

### 1. Home
- **Purpose**: Landing page — value proposition, 3 core offerings, social proof, CTA.
- **Hero**: split layout — left: eyebrow "Interim structuur & regie", H1 "Overzicht terug in organisaties die te snel gaan.", supporting paragraph, two CTAs (primary "Plan een kennismaking" mailto, text link "Bekijk diensten →" to Diensten). Right: portrait photo (`assets/hero.jpg`) in rounded card, 2:3 aspect ratio.
- **Three-up value cards**: grid of 3 white cards, each with a large serif numeral (01/02/03), heading, short description. Topics: Structuur in complexiteit / Regie over voortgang / Bijeenkomsten & events.
- **Testimonials section**: dark (`#2B241D`) full-bleed band, centered H2 "Wat opdrachtgevers zeggen", 3-up grid of quote cards (`#3A3025` background, italic quote + attribution). **Important**: a small caption below states these are placeholder quotes ("Voorbeeldreacties — te vervangen door reacties van echte opdrachtgevers.") — the client wants these replaced with real client testimonials before launch; flag this to the developer/client as an outstanding content task.
- **CTA band**: centered, H2 "Structuur begint met een gesprek.", supporting line, primary button.
- Footer as described above.

### 2. Over Planvista
- **Purpose**: Founder/company story.
- Eyebrow + H1 centered at top ("Rust en structuur in werkomgevingen waar veel tegelijk speelt.")
- Split section: photo (`assets/about.jpg`, 2:3) + 3 paragraphs of body copy on the founder's approach/positioning.
- Full-width white band with centered pull-quote-style paragraph on Planvista's positioning statement.
- CTA band (same pattern as Home).
- Footer.

### 3. Diensten (Services)
- **Purpose**: List of service offerings.
- **Hero**: split layout (recently changed from a centered/stacked layout) — left: eyebrow "Diensten", H1, supporting paragraph; right: portrait photo (`assets/diensten.jpg`, 2:3), matching the Home/Over Planvista hero pattern. This keeps the photo visually anchored next to intro copy rather than floating alone lower on the page.
- **Services grid**: 2×2 grid of white cards, same numbered-card style as Home's 3-up (01–04): Strategische ondersteuning / Project- en procescoördinatie / Bijeenkomsten & events / Structuur en opvolging.
- CTA band + footer.

### 4. Tarieven (Pricing)
- **Purpose**: Pricing/engagement model, no fixed numbers (bespoke pricing).
- Centered header: eyebrow "Tarieven", H1, intro paragraph.
- Two-column card comparison: "Retainer samenwerking" (preferred, labeled "Voorkeur") vs. "Uurbasis" (exception case, labeled "Uitzondering"). Each card: label, heading, description, bullet list (using "—" dash markers, not bullets/icons), fine-print note, CTA button (primary for retainer, outline for uurbasis).
- Footer (no separate CTA band on this page — cards end the content).

### 5. Contact
- **Purpose**: Lead capture via a working form.
- Split layout: left — eyebrow, H1 "Laten we kennismaken.", intro paragraph, portrait photo (`assets/contact.jpg`, 2:3, max-width 320px), row of contact links (email, Instagram, LinkedIn). Right — contact form card (white, rounded, bordered): Naam (text), E-mailadres (email), Bericht (textarea, 5 rows), submit button ("Verstuur bericht", shows "Versturen…" while submitting, disabled during submit). Inline success/error message appears below the button after submit.
- **Form behavior (see Interactions below)**.
- Footer.

### 6. Algemene Voorwaarden
- **Purpose**: Legal terms — simple pass-through page.
- Centered eyebrow "Juridisch", H1 "Algemene voorwaarden", short paragraph, single button linking out to the terms document (currently points at the original Squarespace-hosted file — needs a real/updated link or embedded content, see Assets note below).
- Footer.

## Interactions & Behavior

### Contact form submission
- Client-side state: `name`, `email`, `message`, `status` (`idle | sending | success | error`).
- On submit: prevents default, sets `sending`, POSTs JSON to `https://api.web3forms.com/submit` with `access_key`, `subject`, `from_name`, `email`, `message`.
- **Web3Forms** (web3forms.com) is a free service that forwards form submissions to an email address — no backend required. The design currently has a placeholder access key (`REPLACE_WITH_WEB3FORMS_ACCESS_KEY` in `Contact.dc.html`). **The client needs to generate her own free access key at web3forms.com and it must be added before launch**, so submissions land in her inbox (`info@planvista.nl`).
- On success: shows a green success message, clears the form fields.
- On failure (network error or `success: false` in response): shows a red error message with a `mailto:info@planvista.nl` fallback link.
- Button is disabled and reads "Versturen…" while the request is in flight.
- No client-side validation beyond native HTML `required` attributes on all three fields.

### Navigation
- Standard multi-page links (no client-side routing/SPA behavior) — each nav item is a plain page-to-page link.
- Active nav item is visually distinguished with bold weight + underline.

### Hover states
- Links: accent color (`#8A7259`) → darker accent (`#5B4E3F`) on hover.
- Buttons have no explicit hover treatment defined beyond default browser behavior — consider adding a subtle hover state (e.g. slight opacity/darken) when implementing.

## Design Tokens
See "Global Design System" above for the full color, typography, spacing, and shape scale — this is the canonical token list, kept intentionally small (2 font families, ~15 colors, one radius scale, one button shape).

## Assets
- `assets/logo.png` — Planvista wordmark logo (transparent PNG), used in header (50px tall) and referenced conceptually in the footer (footer currently uses a text-based bordered wordmark treatment, not the image — worth reconciling to one consistent logo treatment during implementation).
- `assets/hero.jpg`, `assets/about.jpg`, `assets/diensten.jpg`, `assets/contact.jpg` — real photography of the founder at work, sourced from the client's existing Squarespace site (photographer: Studio Annemarije). All are portrait orientation, native ~2:3 (2500×3748px) — always displayed at that aspect ratio, never cropped into square/landscape shapes.
- All assets are bundled in `designs/assets/` in this handoff package.
- **Outstanding content items** (flag to client before launch):
  1. Testimonials on the Home page are placeholder/illustrative quotes, not real client feedback — need replacing with real testimonials (the client mentioned wanting "beoordelingsbubbels" of satisfied clients; these are a first pass and explicitly marked as examples in the design itself).
  2. Web3Forms access key needs to be generated and inserted for the contact form to actually deliver email.
  3. The Algemene Voorwaarden page links to a `.docx` file hosted on the old Squarespace domain — needs a permanent home (PDF/hosted doc or converted to on-page content).

## Files
All six pages are in `designs/`:
- `Home.dc.html`
- `Over Planvista.dc.html`
- `Diensten.dc.html`
- `Tarieven.dc.html`
- `Contact.dc.html`
- `Algemene Voorwaarden.dc.html`
- `assets/` — all images/logo referenced above

Open any `.dc.html` file directly in a browser to view it (each is self-contained aside from the shared `assets/` folder and Google Fonts CDN links). Note: these files include a small runtime templating layer (`{{ }}` bindings, `<x-dc>`/`sc-if` tags, `support.js`) used only by the design tool that produced them — that layer is NOT meant to be part of the final implementation; treat the rendered visual output and the described behavior as the spec, not the markup mechanics.
