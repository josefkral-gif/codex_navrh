# EKOS Mimoň — Elementor Pro Migration Guide

## Global Setup

### Global Colors (Elementor → Site Settings → Global Colors)
```
Name: EKOS Background     Value:  #1C1F26
Name: EKOS Foreground     Value:  #EBEBEB
Name: EKOS Card           Value:  #252830
Name: EKOS Primary Green  Value:  #55FF00
Name: EKOS Accent Orange  Value:  #FF5F1F
Name: EKOS Muted          Value:  #323540
Name: EKOS Muted Text     Value:  #909299
Name: EKOS Border         Value:  #363A45
Name: EKOS Secondary      Value:  #272A33
```

### Global Fonts (Elementor → Site Settings → Global Fonts)
```
Primary: Inter (Google Fonts) — weights: 300,400,500,600,700,800,900
Secondary (Mono): JetBrains Mono (Google Fonts) — weights: 400,500,600,700
```

### Breakpoints
```
Mobile:  < 768px
Tablet:  768px
Desktop: 1024px
Wide:    1280px (set as content max-width)
```

---

## Page: Home (`/`)

### Section 1: Hero (`ekos-hero`)
**Widget**: Section → Container (Flexbox, column)
**Height**: 100vh minimum
**Background**: Image overlay
```
Background image: https://images.unsplash.com/photo-1504307651254-35680f356dfd (or similar industrial)
Background overlay: linear-gradient(to bottom, transparent 0%,  rgba(28,31,38,0.6) 50%,  #1C1F26 100%)
```
**Content structure**:
```
Container (full-width, 100vh)
  └─ Inner Container (max-width: 1280px, centered)
       ├─ Text Widget: "EKOS MIMOŇ" — mono font, xs, tracking 0.3em, orange (#FF5F1F)
       ├─ Heading Widget: Main headline — Inter 800, uppercase, ~4rem desktop
       ├─ Text Widget: Subheading — Inter 400, ~1.125rem, muted text (#909299)
       └─ Button Group:
            ├─ Button: "Odeslat poptávku" — green bg, mono font, uppercase
            └─ Button: "Naše služby →" — ghost style, mono font
```
**Stats strip** (bottom of hero):
```
Container (full-width, border-top: 1px solid  #363A45)
  └─ 4-column grid
       Each cell: Number (Inter 800, 2xl) + Label (mono, xs,  #909299)
```

---

### Section 2: Sector Section (`ekos-sector`)
**Container**: Full-width, background:  #1C1F26
**Layout**: 3-column grid (1 col mobile, 3 col desktop)

Each sector card:
```
Widget: Image Box or custom HTML
- Image: full card background (position: absolute)
- Overlay gradient: linear-gradient(to top,  #1C1F26 0%, transparent 60%)
- Title: Inter 700, uppercase, white
- Tag list: mono font, xs,  #FF5F1F
- Hover: reveal extra text block from bottom
```

---

### Section 3: Service Grid (`ekos-service-grid`)
**Container**: max-width 1280px
**Layout**: CSS Grid 3 columns, gap: 1px, background:  #363A45 (creates border effect)

Each service card (`ekos-service-card`):
```
Container: background  #1C1F26, overflow hidden
  ├─ Image (h: 224px, object-fit: cover, hover: scale 1.05 / 700ms)
  ├─ Overlay: gradient top-to-bottom on image
  └─ Content pad 32px:
       ├─ Title: Inter 700, uppercase, hover: color  #55FF00
       ├─ Spec: JetBrains Mono, xs,  #FF5F1F, tracking 0.15em
       └─ Short desc: Inter 400, sm,  #909299
```

**Special layout rule**: First and last card span 2 columns on desktop.
```css
/* Custom CSS in Elementor */
.ekos-service-grid .e-con:first-child,
.ekos-service-grid .e-con:last-child {
  grid-column: span 2;
}
```

---

### Section 4: Process (`ekos-process`)
**Background**:  #272A33 (--secondary)
**Layout**: 5-column grid desktop, 1-column mobile

Each step:
```
Number: mono font, 3xl,  #363A45 (muted border color)
Icon: Lucide icon (use SVG embed or Image widget)
Title: Inter 700, sm, uppercase
Description: Inter 400, sm,  #909299
```

---

### Section 5: References (`ekos-references`)
**Layout**: 3-column card grid
Each reference card:
```
Background:  #252830 (--card)
Border: 1px solid  #363A45
Badge: "Realizováno" — green dot + mono text
Title: Inter 700
Client / Scope / Year: mono, xs, muted text
```

---

### Section 6: Company Intro (`ekos-company-intro`)
**Layout**: 2-column (image left, text right) on desktop, stacked mobile

Left column:
```
Image with "30+ let" badge overlay (position: absolute, bottom-left)
Badge: mono font, orange accent
```

Right column:
```
Section tag, H2 heading, body paragraphs
4-cell icon grid (icon + label pairs)
CTA link
```

---

### Section 7: CTA Banner (`ekos-cta`)
**Background**:  #1C1F26 with centered radial glow
```css
/* Custom CSS */
.ekos-cta::before {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  background: radial-gradient(circle,  rgba(255,95,31,0.15) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(60px);
}
```
Content: centered H2 + text + CTA button

---

## Page: Services (`/sluzby`)

### Header Section (`ekos-page-header`)
**Background**:  #272A33 (--secondary), border-bottom
```
Tag: "Co děláme" — mono, xs, primary green
H1: "Naše služby" — Inter 800, 4xl–6xl, uppercase
Description text: muted
```

### Services Grid
Same as homepage service grid section — see above.

---

## Page: About (`/o-nas`)

### Timeline Section (`ekos-timeline`)
**Layout**: Vertical list with year markers
```
Year: mono font, primary green
Title: Inter 700
Description: Inter 400, muted
Connector: 2px left border, primary green
```

---

## Page: Contact (`/kontakt`)

### Contact Form Section (`ekos-contact`)
**Layout**: 2-column — form left, contact info right

Form fields:
```
Input: background  #272A33, border  #363A45, text  #EBEBEB
Border-radius: 0 (square)
Focus: border-color  #55FF00
```

Contact info cards:
```
Icon + Label + Value
Background:  #252830
Border: 1px solid  #363A45
```

---

## Animations (Elementor Entrance Effects)

| Element | Effect | Duration | Delay |
|---|---|---|---|
| Section headings | Fade In Up | 600ms | 0ms |
| Service cards | Fade In Up | 500ms | index × 70ms |
| Stats numbers | Fade In | 400ms | staggered |
| Hero content | Fade In | 800ms | 0ms |

**Note**: Elementor's entrance animations approximate the Framer Motion effects. For exact `whileInView` scroll-triggered stagger, add custom JS or use the Motion Effects panel in Elementor Pro.

---

## Custom CSS — Global (Elementor → Custom CSS)

```css
/* ekos-mono-label */
.ekos-mono-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color:  #FF5F1F;
}

/* ekos-cta-button */
.ekos-cta-button {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  background:  #55FF00;
  color:  #0A0A0A;
  padding: 12px 32px;
  border-radius: 0;
  border: none;
  transition: background 0.2s ease;
}
.ekos-cta-button:hover { background:  #44CC00; }

/* ekos-service-card image hover */
.ekos-service-card img {
  transition: transform 0.7s ease;
}
.ekos-service-card:hover img {
  transform: scale(1.05);
}

/* ekos-grid-border trick */
.ekos-service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background:  #363A45;
}
.ekos-service-grid > * {
  background:  #1C1F26;
}

/* Arrow hover animation */
.ekos-arrow-icon {
  display: inline-block;
  transition: transform 0.2s ease;
}
a:hover .ekos-arrow-icon {
  transform: translateX(4px);
}
```

---

## Navbar

**Widget**: Sticky Header (Elementor Pro — Theme Builder → Header)
```
Transparent on top, background  #1C1F26/95% + blur on scroll
Logo: SVG/PNG left
Nav links: mono font, xs, uppercase, tracking 0.15em
Active state: color  #55FF00
Dropdown: Services menu — card bg  #252830, border  #363A45
Mobile: Hamburger → full-width slide-down menu
```

---

## Footer

**Widget**: Elementor Pro Theme Builder → Footer
**Layout**: 3-column grid + copyright bar
```
Col 1: Logo + tagline
Col 2: Navigation links
Col 3: Contact info (address, phone, email)
Bottom bar: border-top  #363A45, copyright + IČO/DIČ
``
