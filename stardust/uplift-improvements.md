---
_provenance:
  writtenBy: stardust:uplift (degraded manual pass)
  writtenAt: 2026-08-09T00:00:00Z
  againstInput: https://schweizmobil.ch/de/sommer
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/home.json
---

# Improvements — https://schweizmobil.ch/de/sommer

1. **[dated-pattern]** Five back-to-back content rows share one identical composition — image-left/text-right, "Mehr erfahren" link, no variation — read as a repetitive corporate template rather than a curated showcase for a page whose whole job is selling the diversity of Swiss outdoor routes · observed across Routen mit Badespass, Die schönsten Wanderungen am Wasser, SchweizMobil Plus, App SchweizMobil, and Aktuelles (`_brand-extraction.json#systemComponents[feature-card-row]`) · pattern at fault: a single card template reused with zero compositional differentiation · fix: vary composition per row (alternating image position, at least one full-bleed break, differentiated card widths).

2. **[missed-opportunity]** The captured photography is genuinely excellent — real, specific alpine and river scenes, not stock — but every photo is boxed into a uniform small card rectangle outside the hero, so the page's strongest asset is systematically undersold · `_brand-extraction.json#motifs.photography` (identity: strong) · pattern at fault: card-scale cropping applied indiscriminately regardless of image quality · fix: let at least one or two photographs run at editorial/full-bleed scale with a title overlay, rather than uniform thumbnail treatment.

3. **[ia-clutter]** The six activity-nav tiles (Wanderland/Veloland/Mountainbikeland/Skatingland/Kanuland/Winter) are the page's real primary navigational decision — "which kind of mover are you" — but they're squeezed into thin tiles overlapping the bottom edge of the hero carousel, competing for attention with the carousel's own dot indicators · `_brand-extraction.json#systemComponents[activity-nav-tiles]` · pattern at fault: the most important IA decision is visually subordinated to a decorative carousel · fix: give the activity tiles their own breathing room, not an overlap with the hero photo.

4. **[contrast-or-density]** The brand's own confident red-and-white Swiss-cross identity (bold and legible in the SchweizMobil Plus and Aktuelles graphics) is reduced to a thin accent — a small login button and small CTA arrows — everywhere else on the page, against a large expanse of white/light-gray · `_brand-extraction.json#palette[brand-red-primary]` (usage: "confined to thin accents") · pattern at fault: a distinctive, ownable mark thinned to near-invisibility in the main content flow · fix: give the red one or two large surfaces (a section band, a footer pre-band) so it reads as identity, not decoration.

5. **[cliché]** The "Aktuelles" card breaks from the photographic language used everywhere else on the page with a flat red/white line-art illustration, with no other illustrated moment to pair it with — reads as an unfinished content slot rather than an intentional style choice · `_brand-extraction.json#motifs.illustrationStyle` · pattern at fault: a single one-off style deviation with no supporting system · fix: either extend the illustration style to a second moment (making it a deliberate secondary visual language) or replace it with a photograph consistent with the rest of the page.

6. **[ia-clutter]** On mobile, every section reflows to the identical single-column stack (image-top/text-bottom) with no mobile-specific treatment — competent but generic, missing an opportunity to let the activity-nav tiles or the photography breathe differently at narrow width · observed in user-supplied mobile screenshot, 2026-08-09 · pattern at fault: responsive behavior is pure reflow, not a considered mobile composition · fix: at minimum, give the activity-nav tiles a distinct (e.g. horizontally-scrollable) mobile treatment rather than a plain 2-column grid.
