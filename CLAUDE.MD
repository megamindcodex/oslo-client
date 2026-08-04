# CLAUDE.md — Ullevål Hospital Website

Project instructions for Claude when working in this repository. Follow these rules on every task unless the user explicitly overrides them in a prompt.

## 1. Project Summary

A modern, professional, responsive informational website for Ullevål Hospital, presented as its own hospital site while making clear it is part of Oslo University Hospital (OUH). No auth, no booking, no dashboards — content-only. Visual language should follow OUH's site (https://www.oslo-universitetssykehus.no/en/): clean Scandinavian healthcare design, white backgrounds, soft blue accents, generous whitespace, large readable type, minimal animation.

Full page/content spec lives in `Web_build_description`. Refer to it for section-by-section requirements before building a new page.

## 2. Tech Stack

- **Vue 3** — Composition API only, always `<script setup>`
- **Vue Router** — all page-level navigation
- **PrimeVue** — component library for interactive UI (forms, dropdowns, etc.)
- **Tailwind CSS** — utility-first styling, layout, spacing, color
- **JavaScript ES Modules only** — no CommonJS (`require`/`module.exports`) anywhere in the frontend
- Backend (when touched) follows MEVN — MongoDB, Express, Vue, Node — also ES modules (`"type": "module"` in `package.json`, `import`/`export` syntax, no `require`)

No TypeScript unless explicitly requested. No class components. No Options API.

## 3. Folder Structure

```
src/
  assets/          # images, fonts, global css
    images/
  components/
    icons/         # ALL svg icon components live here (see §5)
      index.js     # barrel file — imports + re-exports every icon
    home/          # section components used only on Home (optional grouping)
    layout/        # Header, Footer, Navbar, TopBar
    ui/            # generic reusable pieces (Card, Badge, etc.)
  views/           # one file per route/page (Home, About, Services, Facilities,
                    # Specialists, News, Events, Contact)
  router/
    index.js
  composables/     # reusable composition functions (useX.js)
  data/            # static content (services list, specialists, news, events)
  App.vue
  main.js
```

Rules:
- **Views** = pages only, mapped 1:1 to routes. A view composes section components; it should not contain large inline markup blocks itself.
- **Components** = everything reusable or sectioned out of a view (hero, service card, specialist card, news card, timeline, etc.). If a view is getting long, extract sections into `components/`.
- Every component gets its own file. No multi-component files.

## 4. Component Conventions

- Always `<script setup>`.
- **Script block first, then `<template>`**, then `<style>` only if truly necessary (prefer Tailwind utilities over custom CSS).
- Component file names: `PascalCase.vue` (e.g. `ServiceCard.vue`, `SpecialistProfile.vue`, `SiteHeader.vue`).
- Props: define with `defineProps` using the object/validator form (not just an array of strings) so types and requiredness are explicit.
- Keep components single-purpose. A "section" on Home (e.g. Hero, FeaturedServices, LatestNews) should be its own component even if only used once — views stay thin and composable.
- Use `defineEmits` explicitly for any emitted events; no implicit `$emit` calls without declaration.

Example skeleton:
```vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  href: { type: String, default: '#' }
})
</script>

<template>
  <article class="rounded-lg bg-white p-6 shadow-sm">
    <h3 class="text-lg font-semibold text-slate-900">{{ title }}</h3>
  </article>
</template>
```

## 5. Icon Convention (strict)

- All icons live in `src/components/icons/`.
- When given an SVG to turn into an icon, create it as its own `<script setup>` Vue component in that folder.
- **Naming: `Icon<Name>.vue`** — e.g. an ambulance SVG becomes `IconAmbulance.vue`, a phone SVG becomes `IconPhone.vue`, a search icon becomes `IconSearch.vue`.
- Icon components should:
  - Accept a `class` (via `$attrs` passthrough, default `inheritAttrs: true` is fine) and optionally a `size`/`color` prop if the icon needs dynamic sizing/coloring beyond Tailwind classes.
  - Contain only the raw `<svg>` markup from the provided asset — do not redraw or approximate an icon that wasn't provided; ask for the SVG if one isn't given.
  - Not import from `assets/` as `<img>` — icons are inline SVG components, not image files.
- Never place an icon file outside `components/icons/`, and never name it just by shape/purpose without the `Icon` prefix (❌ `Ambulance.vue`, ✅ `IconAmbulance.vue`).

### Icon barrel file (`components/icons/index.js`)

- `components/icons/` must contain an `index.js` barrel file that imports every icon component and re-exports it, so icons can be pulled from one place instead of deep-importing each `.vue` file individually.
- **Every time a new icon component is added, update `index.js` in the same change** — never leave an icon un-exported.
- Format:

```js
// src/components/icons/index.js
import IconAmbulance from './IconAmbulance.vue'
import IconPhone from './IconPhone.vue'
import IconSearch from './IconSearch.vue'

export {
  IconAmbulance,
  IconPhone,
  IconSearch
}
```

- Consumers import from the barrel, not the individual file:

```js
// ✅ preferred
import { IconAmbulance, IconPhone } from '@/components/icons'

// ❌ avoid
import IconAmbulance from '@/components/icons/IconAmbulance.vue'
```

## 6. Assets

- Photographic imagery (hero images, news photos, facility photos, staff photos) is hosted on **Cloudinary**, not bundled in the repo. Do not add photos to `src/assets/images/` or `import` them as local files.
- Each image is referenced by its Cloudinary public URL, pasted directly as a plain string into the relevant field in `src/data/*.js` (e.g. `heroImages.js`, `news.js`, `facilities.js`) — never as `<img src="@/assets/...">`, never base64.
- The user sources and uploads images to Cloudinary themselves, then pastes the resulting public URL into the data file. Don't fabricate, guess, or hotlink placeholder image URLs from other sites in their place.
- Until an image has been sourced and its URL added, leave the field `null` — components already fall back to a styled placeholder block (see `NewsCard.vue`, `FacilitySection.vue`) rather than a broken `<img>`. Don't stub in a local file just to fill the gap.
- `src/assets/images/` is reserved for non-photographic local assets only (e.g. favicon-adjacent files) — icons still follow §5 (inline SVG components, never `<img>`).

## 7. Routing

- Route table lives in `router/index.js`, one route per view listed in §3.
- Services dropdown items are anchor links to sections on the single Services page (e.g. `/services#trauma-care`), **not** separate routes. Do not create a route per service.
- Use `scrollBehavior` in the router config to smooth-scroll to hash anchors.

## 8. Styling / Design System

- Match OUH's visual identity: white backgrounds, soft blue accent (define once in `tailwind.config.js` as a named color, e.g. `hospital-blue`, rather than hardcoding hex values in components).
- Centralize design tokens (colors, font sizes, spacing scale) in `tailwind.config.js` — components should use semantic Tailwind classes/utilities, not repeated one-off hex/px values.
- Rounded corners: sparing, consistent radius scale (don't mix arbitrary `rounded-[7px]` values).
- Animations: minimal — subtle transitions (hover states, fade-ins) only, no flashy motion.
- Mobile-first responsive classes (`sm:`, `md:`, `lg:`) on every layout component.

## 9. Content Data

- Static/mock content (services, specialists, news, events, facilities) belongs in `src/data/*.js` as exported ES module arrays/objects, imported into views/components — not hardcoded inline in templates. This keeps the door open for swapping in a real API later without touching markup.

## 10. General JS Rules

- ES modules everywhere: `import`/`export`, never `require`.
- Prefer composables (`useSomething.js` in `src/composables/`) for any logic reused across 2+ components (e.g. `useScrollSpy`, `useContactForm`).
- No jQuery, no direct DOM manipulation outside Vue refs/directives.
- Async data fetching (once a real backend exists) should go through a small `services/api.js` module using `fetch`, ES module exports — consistent with the MEVN/Express backend when that's introduced.

## 11. Out of Scope

Do not build, scaffold, or scaffold-stub any of the following unless explicitly asked:
- Authentication/login
- Appointment booking
- Patient portal
- Admin dashboard

The contact form (§ per spec) is a static UI form for general enquiries only — no backend submission logic unless requested.