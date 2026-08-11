# SchweizMobil /de/sommer — Variant B (real build)

Standalone static build of Variant B, the water-led summer reframe
("What if summer's whole editorial angle was water?"). Real, deployable
HTML/CSS — no tab-switcher chrome, no scaled mock frame, real image
files instead of embedded base64.

## Run it locally

```
cd stardust/build/sommer-b
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Structure

```
index.html      the whole page
css/styles.css  all styles, unprefixed (single-variant build)
assets/         real photos and logos used by the page
```

No `js/` — this variant is static by design (see `stardust/direction.md`
§ Variant B: composition bet, not a motion bet), so there's no script to
ship.

## What this is (and isn't)

- Content, photography, palette, and type are the real captured tokens
  from schweizmobil.ch/de/sommer (see `stardust/current/`).
- The water/air temperature figures in the hero card are real values
  sourced at capture time (hydrodaten.admin.ch station 2030 for water;
  thunerwetter.ch for air, since MeteoSwiss's own page is JS-rendered and
  wasn't scrapable in this environment) — not a live feed, and the
  captured timestamp is shown in the card itself.
- The activity-tile wave shapes and the promo-card water overlay are a
  deliberate art-direction choice (see the water-tracker app references
  this round was designed against), not derived from the source page.
- No automated validation gates (critique/audit/adapt) have run against
  this build — no live-render pipeline was available in this environment.
  It was hand-verified in a local headless-browser check (loads clean,
  no console errors besides the expected missing-favicon, all sections
  render) before being pushed.
