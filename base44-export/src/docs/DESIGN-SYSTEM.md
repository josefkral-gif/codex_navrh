# EKOS Mimoň — Design System

## Colors

| Token | HSL | HEX (approx) | Usage |
|---|---|---|---|
| `--background` | 220 15% 13% |  #1C1F26 | Page background |
| `--foreground` | 0 0% 92% |  #EBEBEB | Body text |
| `--card` | 220 12% 17% |  #252830 | Card backgrounds |
| `--primary` | 101 100% 50% |  #55FF00 | Green accent (CTA, links) |
| `--primary-foreground` | 0 0% 4% |  #0A0A0A | Text on primary |
| `--accent` | 20 100% 56% |  #FF5F1F | Orange accent (spec labels) |
| `--muted` | 220 10% 22% |  #323540 | Subtle backgrounds |
| `--muted-foreground` | 220 5% 60% |  #909299 | Secondary text |
| `--border` | 220 10% 24% |  #363A45 | Borders, dividers |
| `--secondary` | 220 12% 18% |  #272A33 | Section backgrounds |

### Gradients
- **Hero overlay**: `linear-gradient(to bottom, transparent 0%,  rgba(28,31,38,0.6) 50%,  #1C1F26 100%)`
- **Card overlay**: `linear-gradient(to top,  #1C1F26 0%,  rgba(28,31,38,0.4) 50%, transparent 100%)`
- **Text gradient orange**: `linear-gradient(135deg,  #FF5F1F,  #FF8B4F)`

---

## Typography

| Role | Family | Weight | Size | Letter-spacing |
|---|---|---|---|---|
| Heading H1 | Inter | 800 (ExtraBold) | 4xl–6xl (clamp ~2.5rem–4rem) | `tracking-tight` (-0.025em) |
| Heading H2 | Inter | 700 (Bold) | 3xl–4xl | `tracking-tight` |
| Heading H3 | Inter | 700 | xl–2xl | `tracking-tight` |
| Body | Inter | 400 | base (1rem) | normal |
| Label / Tag | JetBrains Mono | 400–600 | xs (0.75rem) | `tracking-[0.15em]` to `tracking-[0.3em]` |
| CTA Button | JetBrains Mono | 600 | xs (0.75rem) | `tracking-widest` (0.2em+) |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap
```

---

## Spacing System (Tailwind-based)

| Token | px value | Usage |
|---|---|---|
| `p-6` | 24px | Card inner padding (mobile) |
| `p-8` | 32px | Card inner padding (desktop) |
| `py-16` | 64px | Section vertical padding (mobile) |
| `py-24` | 96px | Section vertical padding (desktop) |
| `gap-px` | 1px | Grid gap (border-based separation) |
| `gap-3` | 12px | Icon/text inline gap |
| `gap-8` | 32px | Nav link gap |
| `max-w-7xl` | 1280px | Max content width |
| `px-6` | 24px | Container horizontal padding (mobile) |
| `px-8` | 32px | Container horizontal padding (desktop) |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius` | 0.25rem (4px) | Base radius — very sharp/industrial feel |
| All cards/buttons | Square / 0px–4px | Intentionally minimal rounding |

---

## Shadows & Borders

- **Card border**: `1px solid  hsl(220 10% 24%)` — subtle dark separator
- **Dropdown shadow**: `box-shadow: 0 25px 50px -12px  rgba(0,0,0,0.8)`
- **Navbar border (scrolled)**: `border-bottom: 1px solid var(--border)`
- No glow/glassmorphism effects — clean industrial aesthetic

---

## Button Variants

### Primary CTA
```css
/* ekos-cta-button */
background:  hsl(101 100% 50%);  /* --primary */
color:  hsl(0 0% 4%);             /* --primary-foreground */
font-family: 'JetBrains Mono', monospace;
font-size: 0.75rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.2em;
padding: 10px 24px;
border-radius: 0;
transition: background 0.2s ease;

&:hover { background:  hsl(101 100% 45%); }
```

### Ghost / Outline
```css
background: transparent;
border: 1px solid var(--border);
color: var(--foreground);
/* same font/size as primary */
```

---

## Card Variants

### Service Card (`ekos-service-card`)
```css
background:  hsl(220 15% 13%);  /* --background */
border: none;                   /* separation via gap-px grid trick */
overflow: hidden;
transition: background 0.3s ease;

/* Image area */
height: 224px; /* h-56 */
object-fit: cover;
transition: transform 0.7s ease;

&:hover img { transform: scale(1.05); }
```

### Stats Card
```css
background:  hsl(220 12% 17%);  /* --card */
border: 1px solid var(--border);
padding: 32px;
```

---

## Hover Effects

| Element | Effect |
|---|---|
| Service card image | `scale(1.05)` over 700ms |
| Nav links | color → `--primary` over 200ms |
| CTA button | background darkens 10% |
| Arrow icons | `translateX(4px)` over 200ms |
| Card background | background → `--secondary` |

---

## Responsive Breakpoints

| Name | Width | Tailwind prefix |
|---|---|---|
| Mobile | < 768px | (default) |
| Tablet | 768px+ | `md:` |
| Desktop | 1024px+ | `lg:` |
| Wide | 1280px+ | `xl:` (max-width container) |
