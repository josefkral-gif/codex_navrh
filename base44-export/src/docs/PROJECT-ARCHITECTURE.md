# EKOS MimoĹ â€” Project Architecture

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3 (token-based design system)
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Data fetching**: TanStack React Query
- **Backend/DB**: Base44 platform (entities, auth, integrations)
- **Email**: Base44 Core integration (SendEmail)

---

## Project Structure

```
src/
â”śâ”€â”€ App.jsx                          # Router â€” all routes defined here
â”śâ”€â”€ index.css                        # Design tokens (CSS variables) + Tailwind base
â”śâ”€â”€ main.jsx                         # React entry point
â”‚
â”śâ”€â”€ pages/
â”‚   â”śâ”€â”€ Home.jsx                     # Landing page (assembles section components)
â”‚   â”śâ”€â”€ Sluzby.jsx                   # Services overview grid
â”‚   â”śâ”€â”€ ServiceDetail.jsx            # Individual service page (dynamic via slug)
â”‚   â”śâ”€â”€ ONas.jsx                     # About us page
â”‚   â””â”€â”€ Kontakt.jsx                  # Contact page + form
â”‚
â”śâ”€â”€ components/
â”‚   â”śâ”€â”€ layout/
â”‚   â”‚   â”śâ”€â”€ SiteLayout.jsx           # Shared layout wrapper (Navbar + Footer + Outlet)
â”‚   â”‚   â”śâ”€â”€ Navbar.jsx               # Fixed navbar with desktop dropdown + mobile menu
â”‚   â”‚   â””â”€â”€ Footer.jsx               # Site footer (3-column + legal bar)
â”‚   â”‚
â”‚   â”śâ”€â”€ home/
â”‚   â”‚   â”śâ”€â”€ HeroSection.jsx          # Full-screen hero with stats strip
â”‚   â”‚   â”śâ”€â”€ SectorSection.jsx        # 3-sector interactive grid
â”‚   â”‚   â”śâ”€â”€ ServiceGrid.jsx          # Service cards grid (reused pattern)
â”‚   â”‚   â”śâ”€â”€ ProcessSection.jsx       # 5-step process workflow
â”‚   â”‚   â”śâ”€â”€ ReferencesSection.jsx    # Project references grid
â”‚   â”‚   â”śâ”€â”€ CompanyIntro.jsx         # About company teaser
â”‚   â”‚   â””â”€â”€ CTABanner.jsx            # Call-to-action banner
â”‚   â”‚
â”‚   â”śâ”€â”€ contact/
â”‚   â”‚   â””â”€â”€ ContactForm.jsx          # Contact/inquiry form with email integration
â”‚   â”‚
â”‚   â””â”€â”€ ScrollToTop.jsx              # Utility: scroll to top on route change
â”‚
â”śâ”€â”€ lib/
â”‚   â”śâ”€â”€ servicesData.js              # â­ Central data source for all services
â”‚   â”śâ”€â”€ AuthContext.jsx              # Authentication context
â”‚   â”śâ”€â”€ query-client.js              # TanStack Query client setup
â”‚   â”śâ”€â”€ utils.js                     # Tailwind class merging utility
â”‚   â””â”€â”€ PageNotFound.jsx             # 404 page
â”‚
â”śâ”€â”€ api/
â”‚   â””â”€â”€ base44Client.js             # Base44 SDK client (pre-initialized)
â”‚
â””â”€â”€ docs/
    â”śâ”€â”€ DESIGN-SYSTEM.md             # This design system documentation
    â”śâ”€â”€ ELEMENTOR-MIGRATION.md       # Elementor Pro migration guide
    â””â”€â”€ PROJECT-ARCHITECTURE.md      # This file
```

---

## Page Hierarchy & Routes

```
/                    â†’ Home.jsx
/sluzby              â†’ Sluzby.jsx (services overview)
/sluzby/:slug        â†’ ServiceDetail.jsx (dynamic, slug from servicesData.js)
/o-nas               â†’ ONas.jsx
/kontakt             â†’ Kontakt.jsx
*                    â†’ PageNotFound.jsx
```

All routes are wrapped in `<SiteLayout>` which provides Navbar + Footer.

---

## Central Data Source: `lib/servicesData.js`

All 7 services are defined here. Each service object:
```js
{
  slug: string,          // URL path segment
  title: string,         // Display name
  spec: string,          // Technical spec (orange mono label)
  shortDesc: string,     // 1-sentence summary
  description: string[], // Array of paragraphs
  features: string[],    // Bullet list
  certifications: string[], // Badge list
  image: string,         // Image URL (Base44 CDN)
}
```

**Services:**
1. `svarovane-konstrukce` â€” SvaĹ™ovanĂ© konstrukce
2. `tlakove-nadoby` â€” TlakovĂ© nĂˇdoby
3. `vzduchotechnika` â€” Vzduchotechnika
4. `technologie-cov` â€” Technologie ÄŚOV
5. `opravy-udrzba` â€” Opravy a ĂşdrĹľba
6. `elektromontaze` â€” ElektromontĂˇĹľe
7. `zakazkova-kovovyroba` â€” ZakĂˇzkovĂˇ kovovĂ˝roba

---

## Reusable Patterns

| Pattern | Used in | Description |
|---|---|---|
| Service card grid | `ServiceGrid.jsx`, `Sluzby.jsx` | Image + title + spec + desc, gap-px border trick |
| Section header | All pages | mono tag + H1/H2 + description |
| CTA button | Navbar, CTABanner, ServiceDetail | Green mono uppercase button |
| Mono label | Throughout | Orange JetBrains Mono, uppercase, wide tracking |

---

## Navigation Structure

```
Navbar:
â”śâ”€â”€ Ăšvod â†’ /
â”śâ”€â”€ SluĹľby (dropdown) â†’ /sluzby
â”‚    â”śâ”€â”€ SvaĹ™ovanĂ© konstrukce â†’ /sluzby/svarovane-konstrukce
â”‚    â”śâ”€â”€ TlakovĂ© nĂˇdoby â†’ /sluzby/tlakove-nadoby
â”‚    â”śâ”€â”€ Vzduchotechnika â†’ /sluzby/vzduchotechnika
â”‚    â”śâ”€â”€ Technologie ÄŚOV â†’ /sluzby/technologie-cov
â”‚    â”śâ”€â”€ Opravy a ĂşdrĹľba â†’ /sluzby/opravy-udrzba
â”‚    â”śâ”€â”€ ElektromontĂˇĹľe â†’ /sluzby/elektromontaze
â”‚    â””â”€â”€ ZakĂˇzkovĂˇ kovovĂ˝roba â†’ /sluzby/zakazkova-kovovyroba
â”śâ”€â”€ O nĂˇs â†’ /o-nas
â”śâ”€â”€ Kontakt â†’ /kontakt
â””â”€â”€ [CTA Button] PoptĂˇvka â†’ /kontakt
```

---

## Dependencies (key)

| Package | Version | Purpose |
|---|---|---|
| react | ^18.2.0 | UI framework |
| react-router-dom | ^6.26.0 | Client-side routing |
| framer-motion | ^11.16.4 | Animations |
| lucide-react | ^0.475.0 | Icons |
| @tanstack/react-query | ^5.84.1 | Data fetching |
| tailwindcss | (Vite plugin) | Utility CSS |
| @base44/sdk | ^0.8.27 | Backend platform |

---

## Image Assets

All images hosted on Base44 CDN (`media.base44.com`):

| Service | URL |
|---|---|
| SvaĹ™ovanĂ© konstrukce | `/assets/97b4c3e30_generated_25afdfea.png` |
| TlakovĂ© nĂˇdoby | `/assets/9038371a5_generated_3696ff6e.png` |
| Vzduchotechnika | `/assets/0a30f5073_generated_fe3092c9.png` |
| Technologie ÄŚOV | `/assets/118271a23_generated_123c53a5.png` |
| Opravy a ĂşdrĹľba | `/assets/1ed57d3ea_generated_1a1f1306.png` |
| ElektromontĂˇĹľe | `/assets/a07e9b6fe_generated_image.png` |
| ZakĂˇzkovĂˇ kovovĂ˝roba | `/assets/a5e1ce5cb_generated_787e2582.png` |
| Logo | `/assets/8937f09fb_logo-tmave.png` |

---

## Recommendations for Migration

### To WordPress / Elementor Pro
1. Use **Theme Builder** for Navbar and Footer (sticky header)
2. Use **Loop Grid** widget for service cards (create Loop Item template)
3. Store services as **Custom Post Type** (CPT) â€” use ACF or Metabox
4. Replicate gap-px grid border trick via global CSS
5. Use **Motion Effects** in Elementor Pro for scroll animations
6. Import Google Fonts via Elementor â†’ Site Settings â†’ Custom Fonts

### To Astro (static/SSG)
1. Convert `servicesData.js` â†’ Astro content collections
2. React components â†’ Astro components (remove framer-motion or keep as React islands)
3. Tailwind config is directly reusable
4. `index.css` tokens are directly portable

### To Static Hosting
1. Run `npm run build` â†’ outputs to `/dist`
2. Deploy `/dist` to Netlify, Vercel, Cloudflare Pages, or GitHub Pages
3. No server required (fully client-side)

### Performance Optimizations
- Convert CDN images to WebP format
- Add `loading="lazy"` to all below-fold images
- Consider replacing Framer Motion with CSS animations for smaller bundle
- Add `preconnect` for Google Fonts in `index.html
