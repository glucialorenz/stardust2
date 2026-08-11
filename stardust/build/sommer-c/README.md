# SchweizMobil /de/sommer — Variant C (real build)

Standalone static build of Variant C ("What if the page met you before it
showed you anything?") from the interactive A/B/C preview. This is real,
deployable HTML/CSS/JS — no tab-switcher chrome, no scaled mock frame,
real image files instead of embedded base64.

## Run it locally

Any static file server works, e.g.:

```
cd stardust/build/sommer-c
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Structure

```
index.html        the whole page (pre-hero intake + personalized content)
css/styles.css     all styles, unprefixed (single-variant build)
js/script.js       intake wizard, personalization, parallax, scroll-reveal
assets/            real photos, region photos, and logos used by the page
```

## What this is (and isn't)

- Content, photography, palette, and type are the real captured tokens
  from schweizmobil.ch/de/sommer (see `stardust/current/`).
- The pre-hero intake (activity / location / accessibility / date) is a
  deliberate departure from the source page — see `stardust/direction.md`
  § Variant C for the full rationale and evidence disclosure.
- The weather map's per-city sun/cloud/rain icons are illustrative
  (explicitly authorized as non-real forecast data); the temperatures
  shown for "today" were sourced from real public data at capture time
  and are not live.
- No automated validation gates (critique/audit/adapt/motion pass) have
  run against this build — this environment had no live-render pipeline
  available. It was hand-verified in a local headless-browser check
  (loads clean, intake flow completes, personalization applies, all
  sections render) before being pushed.
