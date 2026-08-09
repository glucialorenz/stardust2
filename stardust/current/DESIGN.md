<!--
_provenance:
  writtenBy: stardust:uplift (degraded manual pass)
  writtenAt: 2026-08-09T00:00:00Z
  againstInput: https://schweizmobil.ch/de/sommer
  degraded: true
  readArtifacts:
    - stardust/current/_brand-extraction.json
-->

# DESIGN — SchweizMobil (current state, descriptive)

Captured design system as observed on `/de/sommer`. Full token values live in
`_brand-extraction.json`; this is the human-readable summary.

## Palette

The palette's real organizing idea is **per-activity color-coding**, not a
single brand-primary: Wanderland (hike) green `#609e26`, Veloland (cycle) blue
`#5c94cf`, Mountainbikeland gold `#deab18`, Skatingland purple `#9d7fb7`,
Kanuland teal `#409698`, plus a winter set (crosscountry, sledge, snowshoe,
winterhike). This system is real, meaningful, and already legible on the
captured page's activity-nav tiles.

Separately, a red (`#d4021c`, named `chm-red` in the token set — not `primary`)
functions as the page's actual dominant accent in practice: the login/Plus
button, every "Mehr erfahren" CTA arrow, and the Swiss-cross signature mark.
It's confined to thin accents against large white/light-gray surfaces.

## Typography

`Inter Variable` for everything — headings and body both. No separate display
family; card headings read as bold-weight Inter at a modest size step up from
body copy, not a distinct typographic voice.

## Spacing / radius

Small, subtle corner radii (`0.25–0.5rem`) — nothing pill-shaped except the
header CTA button. No evidence of a generous editorial spacing scale; sections
sit close together in a continuous light-gray content well.

## Composition patterns

- **Hero:** full-bleed photographic carousel (5 slides), activity-nav tiles
  overlaid at its bottom edge.
- **Feature-card row** (used 5× on this page, unchanged each time): photo +
  heading + 2–3 sentence body + "Mehr erfahren" link, image-left/text-right on
  desktop, stacked on mobile.
- **Promo tile grid:** 2×2 (1-col on mobile), image + colored label bar, no
  body copy.
- **Footer:** standard multi-column link list + two rows of institutional
  sponsor/partner logos.

## Signature elements

A red-square Swiss-cross-derived mark appears three times (header wordmark,
large in the "SchweizMobil Plus" card, small in the "Aktuelles" card) but is
never extended into structural chrome — it reads as illustrative, not systemic.

Real, specific, high-quality outdoor photography throughout — not stock — but
uniformly cropped to small card-scale rectangles outside the hero.
