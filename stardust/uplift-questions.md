---
_provenance:
  writtenBy: stardust:uplift (degraded manual pass)
  writtenAt: 2026-08-09T00:00:00Z
  againstInput: https://schweizmobil.ch/de/sommer
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/home.json
---

# "What if…" candidates — https://schweizmobil.ch/de/sommer

## Picked

### Variant C · Signature-gesture extension
Source: catalog
What if: "What if the Swiss-cross-in-square mark became a structural system, not a hero decoration?"
Cinematic register: `arrival` — selected from PRODUCT.md Brand Personality (`civic-formal` + `place-led`, per the motion-registers.md selection heuristic — an unambiguous match, no tie-break needed).
Evidence: `_brand-extraction.json#motifs.signatureGesture` — the mark appears 3× (header, SchweizMobil Plus card, Aktuelles card) but is never extended into structural chrome (dividers, footer, background). This is exactly the catalog's "Natural register for C" pairing for signature-gesture extension: `arrival` (composition-led).
Motion bet: the mark becomes a scroll-triggered arrival gesture — unmasking in the hero, then recurring as a section-divider motif and footer wordmark treatment, each entrance choreographed per `arrival`'s signature moves (hero parallax, per-section fade+translateY entrances).

### Variant B · Photography re-foregrounding
Source: catalog
What if: "What if the captured photography breathed at editorial scale?"
Captured trait amplified: real, specific, high-identity Swiss landscape photography (not stock), currently cropped to uniform small cards.
Evidence: `_brand-extraction.json#motifs.photography` (identity: "strong"), directly addresses `uplift-improvements.md` item #2.
Composition bet: restore 2–3 key photographs to 4:3/16:9 editorial scale with title overlays in the lower band; cards gain photo-first composition instead of thumbnail-first.

## Disqualified

- **Display-typography amplification** — disqualified because the captured display family is generic (`Inter Variable`, vanilla, no signature axis exercised) — `_brand-extraction.json#type.families.display: null`. No trait worth amplifying.
- **Live-data promotion** — disqualified because the captured page exposes no live operational data (the App SchweizMobil card shows a static map mockup image, not embedded live/real-time content). Marketing surfaces without operational signals can't fake liveness.
- **Voice-register pivot** — disqualified because the captured voice samples are uniform (civic-informational, "du", plain — see `_brand-extraction.json#voiceTable`) with no tonal contrast between sections to lean into.
- **Motif vocabulary swap** — disqualified because the captured page has essentially one composition primitive (the feature-card row, repeated 5×, plus one 2×2 tile grid) — no minority alternate primitive (an indexed list, a side-rail panel) present to swap toward.
- **Audience-routing reframe** — disqualified because the captured page already routes its six audiences cleanly via the activity-nav tiles rather than compressing them into one undifferentiated composition; there's no audience compression to untangle. (The tiles' visual subordination to the hero carousel is a real issue — captured as `uplift-improvements.md` item #3 — but that's a hierarchy fix for Variant A, not a candidate for B/C amplification.)

## Considered but not picked

- **Color-ladder re-weighting** — strong trigger (the reserved `chm-red` accent is genuinely underused as a large surface, per `uplift-improvements.md` item #4) and would have been an equally valid composition bet for B. Not picked because it risks reading as "Variant A but redder" rather than a clearly separate axis from C's graphic-mark system — photography re-foregrounding differentiates from C's motion/mark bet more cleanly.
