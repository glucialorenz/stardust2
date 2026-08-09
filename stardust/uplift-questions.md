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

### Variant B · Water-led summer reframe
Source: derived (see § Extension rule shape below)
What if: "What if summer's whole editorial angle was water — heat relief, lakes, rivers — instead of a generic activity showcase?"
Captured trait amplified: a thematic throughline, not a single visual trait — of the hero + 5 feature-row photos, 3 are water scenes (hero: river bank; Routen mit Badespass: lake pedal-boats; Die schönsten Wanderungen am Wasser: mountain stream). The page already leans water without ever saying so.
Evidence (≥2 captured citations, per the Extension rule): (1) `_brand-extraction.json#motifs.photography` — real photo set now at `stardust/current/assets/media/` confirms hero.jpg, badespass.jpg, wanderungen-wasser.jpg are all water-adjacent; (2) `stardust/current/pages/home.json#landmarks` — the captured section order already places both water-themed rows first, before Plus/App/Aktuelles, i.e. the water lean is already latent in the existing IA, just never named.
Disqualification test (stated per the Extension rule): would be disqualified if the captured photo set had ≤1 water-adjacent image — a single water photo can't carry a whole-page thematic reframe without inventing supporting imagery.
Variant role: B's composition bet (IA reordering + editorial thesis, not motion).
Composition bet: hero copy and the two water rows lead; App SchweizMobil / SchweizMobil Plus / Aktuelles demoted and compressed below an explicit "cool off" editorial thesis statement.
Chosen over: Photography re-foregrounding (catalog, see below) — user preference, 2026-08-09.

### Variant C · Signature-gesture extension
Source: catalog
What if: "What if the Swiss-cross-in-square mark became a structural system, not a hero decoration?"
Cinematic register: `arrival` — selected from PRODUCT.md Brand Personality (`civic-formal` + `place-led`, per the motion-registers.md selection heuristic — an unambiguous match, no tie-break needed).
Evidence: `_brand-extraction.json#motifs.signatureGesture` — the mark appears 3× (header, SchweizMobil Plus card, Aktuelles card) but is never extended into structural chrome (dividers, footer, background). This is exactly the catalog's "Natural register for C" pairing for signature-gesture extension: `arrival` (composition-led).
Motion bet: the mark becomes a scroll-triggered arrival gesture — unmasking in the hero, then recurring as a section-divider motif and footer wordmark treatment, each entrance choreographed per `arrival`'s signature moves (hero parallax, per-section fade+translateY entrances).
Status: pending — user is reviewing alternatives (2026-08-09), see chat for the options under discussion.

## Disqualified

- **Display-typography amplification** — disqualified because the captured display family is generic (`Inter Variable`, vanilla, no signature axis exercised) — `_brand-extraction.json#type.families.display: null`. No trait worth amplifying.
- **Live-data promotion** — disqualified because the captured page exposes no live operational data (the App SchweizMobil card shows a static map mockup image, not embedded live/real-time content). Marketing surfaces without operational signals can't fake liveness.
- **Voice-register pivot** — disqualified because the captured voice samples are uniform (civic-informational, "du", plain — see `_brand-extraction.json#voiceTable`) with no tonal contrast between sections to lean into.
- **Motif vocabulary swap** — disqualified because the captured page has essentially one composition primitive (the feature-card row, repeated 5×, plus one 2×2 tile grid) — no minority alternate primitive (an indexed list, a side-rail panel) present to swap toward.
- **Audience-routing reframe** — disqualified because the captured page already routes its six audiences cleanly via the activity-nav tiles rather than compressing them into one undifferentiated composition; there's no audience compression to untangle. (The tiles' visual subordination to the hero carousel is a real issue — captured as `uplift-improvements.md` item #3 — but that's a hierarchy fix for Variant A, not a candidate for B/C amplification.) Reconsidered as a live option for B/C on 2026-08-09 per user request — see chat.

## Considered but not picked

- **Photography re-foregrounding** (catalog) — "What if the captured photography breathed at editorial scale?" Strong, undisqualified evidence (`_brand-extraction.json#motifs.photography`, identity: "strong") and was the original pick for B. Superseded by the water-led reframe above per user preference, 2026-08-09 — the reframe carries the same photography strength forward but as a thematic bet rather than a pure crop-size bet.
- **Color-ladder re-weighting** — strong trigger (the reserved `chm-red` accent is genuinely underused as a large surface, per `uplift-improvements.md` item #4) and would have been an equally valid composition bet for B. Not picked because it risks reading as "Variant A but redder" rather than a clearly separate axis from C's graphic-mark system.
