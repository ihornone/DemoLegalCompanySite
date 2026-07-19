# Contractbook — Style Reference
> cream-paper contracts under ultramarine sky

**Theme:** light

Contractbook operates on a quiet, paper-white canvas with a single saturated ultramarine (#1009f6) carrying all brand weight — used sparingly on feature cards, headlines, and the primary footer CTA. The yellow (#ffba09) is a warm functional accent for high-emphasis actions against the monochromatic field. Typography is uniformly Abcwhyte (a single sans-serif family) at all sizes, which gives the system a calm, document-like coherence rather than the typical display/body font split. Components lean soft and round: 24px cards, 40px hero panels, 999px pill buttons — nothing has sharp corners. The whole experience reads like a well-designed printed contract on heavy cream stock.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ultramarine | `#1009f6` | `--color-ultramarine` | Feature card backgrounds, brand-emphasis headlines, footer primary CTA |
| Gold | `#ffba09` | `--color-gold` | Primary action buttons, accent cards |
| Forest | `#304801` | `--color-forest` | Decorative illustration accents |
| Tangerine | `#ff3b09` | `--color-tangerine` | Decorative scribble accents |
| Royal | `#505cf9` | `--color-royal` | Soft highlight washes |
| Sky | `#add3e5` | `--color-sky` | Pastel card surfaces |
| Thistle | `#e3c7de` | `--color-thistle` | Pastel illustration fills |
| Mint | `#00e9a7` | `--color-mint` | Decorative green accent |
| Cream | `#f0f0ec` | `--color-cream` | Page background |
| Pearl | `#f7f7f3` | `--color-pearl` | Elevated card surfaces |
| White | `#ffffff` | `--color-white` | Pure white cards |
| Smoke | `#d4d4d0` | `--color-smoke` | Muted helper text |
| Concrete | `#eaeae6` | `--color-concrete` | Hairline borders |
| Washed Black | `#1a1a1a` | `--color-washed-black` | Primary text |
| Ink | `#222222` | `--color-ink` | Secondary text |
| Charcoal | `#4d4d4d` | `--color-charcoal` | Muted body text |
| Dim | `#6d6868` | `--color-dim` | Tertiary text |
| Black | `#000000` | `--color-black` | Button text on bright fills |

## Tokens — Typography

Single sans-serif family (Inter substitute) used for everything. 48px/700 hero headlines, 16px/400 body.

### Type Scale

| Role | Size | Line Height | Token |
|------|------|-------------|-------|
| caption | 11px | 1.87 | `--text-caption` |
| body-sm | 14px | 1.4 | `--text-body-sm` |
| body | 16px | 1.5 | `--text-body` |
| subheading | 25px | 1.3 | `--text-subheading` |
| heading-sm | 28px | 1.3 | `--text-heading-sm` |
| heading | 32px | 1.3 | `--text-heading` |
| heading-lg | 40px | 1.2 | `--text-heading-lg` |
| display | 48px | 1.25 | `--text-display` |

## Tokens — Spacing & Shapes

- **Density:** comfortable
- **Page max-width:** 1200px
- **Section gap:** 120px
- **Card padding:** 48px
- **Element gap:** 14px

### Border Radius

| Element | Value |
|---------|-------|
| cards | 24px |
| chips | 999px |
| images | 40px |
| inputs | 4px |
| buttons | 999px |
| hero-panels | 40px |

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cream Canvas | `#f0f0ec` | Page background |
| 1 | Pearl Card | `#f7f7f3` | Elevated card surfaces |
| 2 | White Card | `#ffffff` | Highest contrast content |
| 3 | Brand Surface | `#1009f6` | Ultramarine feature cards |
| 4 | Dark Footer | `#1a1a1a` | Footer background |

## Elevation

No shadows. Separation via color contrast and spacing only.
