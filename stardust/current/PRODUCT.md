<!--
_provenance:
  writtenBy: stardust:uplift (degraded manual pass)
  writtenAt: 2026-08-09T00:00:00Z
  againstInput: https://schweizmobil.ch/de/sommer
  degraded: true
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - user-supplied screenshots (desktop + mobile), 2026-08-09
-->

# PRODUCT — SchweizMobil (current state)

**What it is.** SchweizMobil is Switzerland's official national platform and app for
non-motorized-traffic route planning: hiking, cycling, mountain biking, skating,
canoeing, and winter sports (sledging, snowshoeing, winter hiking, cross-country
skiing). It is publicly backed — the footer credits the Confederation ("Bund"),
the Cantons, the Principality of Liechtenstein, and Schweiz Tourismus as sponsors.

**Captured page.** `/de/sommer` — the summer-season landing page. Leads with a
seasonal hero, routes visitors into one of six activity categories, then surfaces
a set of editorial-style feature promos (water-adjacent hikes, the SchweizMobil
Plus product tier, the mobile app, a news/updates hub) before an institutional
footer.

**Primary audience routing.** Six parallel audiences, cleanly separated by the
activity-nav tiles: hikers, cyclists, mountain bikers, skaters, canoeists, and
(cross-linked) winter-sports visitors. Each activity carries its own brand color,
consistently reused elsewhere in the site's palette (route coding, presumably
also on maps).

## Brand Personality

- **civic-formal** — publicly funded, government/canton-sponsored, institutional
  footer (Impressum, Copyright und Datenschutz, Gewährleistungs- und
  Haftungsausschluss).
- **place-led** — the entire value proposition is Swiss landscape and terrain;
  the hero is a full-bleed photograph of a real Swiss river/meadow scene, not a
  product screenshot or abstract brand graphic.
- **active/outdoor** — every activity category maps to a physical, outdoor
  pursuit; the tone assumes an already-engaged, outdoors-minded visitor rather
  than one who needs persuading to go outside.
- **plain, second-person voice** — "du" throughout, informational and warm but
  not playful or salesy. No tonal contrast between sections (see
  `_brand-extraction.json#voice.register`).

These traits map cleanly to the `arrival` motion register (civic-formal +
place-led) per `prototype/reference/motion-registers.md` § Selection heuristic —
no ambiguity, no tie-break needed.

## What's NOT captured (degraded-pass limitations)

This page is a client-rendered SPA; the raw HTML is a near-empty shell and the
real content loads via JS at runtime, which this pass could not execute (browser
network egress is blocked in this environment — see
`_brand-extraction.json#_provenance.degradedReason`). Everything above was
reconstructed from the site's real compiled CSS (fetched directly, palette +
type + spacing tokens are genuine) plus two user-supplied screenshots (desktop
+ mobile, analyzed visually for content/IA). Not captured: exact live map data,
any content beyond the first scroll-length of the page, and anything that would
only be visible via interaction (hover states, the search/filter icon's
behavior, the "★ Plus / Anmelden" flow).
