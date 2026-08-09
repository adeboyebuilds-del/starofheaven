# Church Website — Next.js + TypeScript + Tailwind CSS

Structure and layout modeled after The Potter's House Dallas homepage, restyled
with a blue / gold / white palette and no `src` folder (app-router files live
directly at the project root: `app/`, `components/`, `lib/`).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What to customize first

1. **`lib/data.ts`** — all editable copy in one place: church name, service
   times, address, social links, nav items, event list, ministries, and the
   "next steps" cards. Nothing here is hard-coded into components.
2. **`app/layout.tsx`** — page `<title>` / meta description, and the
   `Fraunces` / `Inter` Google Fonts (swap for your pastor's preferred
   typefaces if different from what's here).
3. **Colors** — `tailwind.config.ts` defines the palette as `navy`, `royal`
   (blue), `gold`, and `cream`. Adjust the hex values there and every
   component updates automatically.
4. **Pastor's name** — currently a `[Pastor's Full Name]` placeholder inside
   `components/AboutVisit.tsx`.
5. **Images** — every photo slot currently renders `<ImagePlaceholder />`
   (see `components/ImagePlaceholder.tsx`), a bordered box with a text
   description of exactly what should be shot or sourced for that spot. Once
   you have real photography, replace each with Next.js's `<Image>`
   component, e.g.:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/hero.jpg"
     alt="Congregation worshipping"
     fill
     className="object-cover"
   />
   ```

   Drop image files into `public/images/`.

## Structure mirrored from the reference site

- Sticky header: gold utility bar (service times / watch online) + main nav
- Full-bleed hero (video placeholder) with eyebrow, title, two CTAs
- Three alternating image/text feature rows ("Anchor Your Week", "A Place for
  You", "Stream Anytime, Anywhere")
- About Us + Plan Your Visit (service times & location cards)
- "Rooted in Faith" split banner
- Engage / Next Steps 4-card grid (Salvation, Membership, Volunteer,
  Community Groups)
- Events grid with date badges
- Ministries grid
- Podcast CTA banner
- Footer: quick links, service times, location, social, copyright

## Signature design detail

A thin gold arch (`.arch-motif` in `app/globals.css`, echoed again as the
decorative shape in the footer) recurs at a couple of section transitions —
a nod to a church window/doorway silhouette — instead of a generic wave or
blob divider.
