# SchweizMobil /de/sommer — Variant A (real build)

Standalone static build of Variant A, the risk-averse green-light
("Yes, that's us, with the obvious fixes."). Real, deployable HTML/CSS —
no tab-switcher chrome, no scaled mock frame, real image files instead
of embedded base64.

## Run it locally

```
cd stardust/build/sommer-a
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Structure

```
index.html      the whole page
css/styles.css  all styles, unprefixed (single-variant build)
assets/         real photos and logos used by the page
```

No `js/` — this variant is static (same captured IA as the source page,
composition-only improvements, no cinematic layer), so there's no script
to ship.

## What this is (and isn't)

- Same information architecture as the captured page (hero → activity
  nav → feature-card rows → promo grid → SchweizMobil Plus band →
  feature-card rows → footer), with the six named fixes from
  `stardust/uplift-improvements.md` applied: varied row rhythm, breathing
  room for the activity tiles, the red identity weighted onto the
  SchweizMobil Plus band as a real surface, and the rest of that list.
- Content, photography, palette, and type are the real captured tokens
  from schweizmobil.ch/de/sommer (see `stardust/current/`).
- No automated validation gates (Mode A pinning, IA-priority audit,
  density-floor enforcement, anti-toolbox audit) have run against this
  build — no live-render pipeline was available in this environment. It
  was hand-verified in a local headless-browser check (loads clean, no
  console errors besides the expected missing-favicon, all sections
  render) before being pushed.
