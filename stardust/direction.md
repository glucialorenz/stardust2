<!--
_provenance:
  writtenBy: stardust:uplift (degraded manual pass)
  writtenAt: 2026-08-09T00:00:00Z
  againstInput: https://schweizmobil.ch/de/sommer
  degraded: true — see stardust/current/_brand-extraction.json for full rationale.
    Palette/type/spacing are genuine (fetched from live CSS). Content/IA are
    genuine (read from two real user-supplied screenshots). No automated
    validation gates (critique/audit/adapt/motion Pass 6) have run — there is
    no live-render pipeline available in this environment to run them against.
-->

# Direction — SchweizMobil /de/sommer uplift

## Variant A — Faithful + improvements

Role: risk-averse green-light. "Yes, that's us, with the obvious fixes."
Composition: same IA as captured (hero → activity-nav → feature-card rows →
promo grid → footer).
Motion: static (no cinematic layer).
Improvements applied: all 6 items in `stardust/uplift-improvements.md` —
vary the 5 repeated card rows compositionally, let 1–2 photos breathe larger,
give the activity-nav tiles their own space off the hero, weight the red
accent onto 1–2 large surfaces, resolve the Aktuelles illustration mismatch,
give the activity tiles a considered mobile treatment.

## Variant B — What if summer meant water?

Role: design-team motivator. A narrower, more opinionated editorial angle,
derived (not from the 8-candidate catalog — see uplift-questions.md § Variant
B for the derivation) rather than a straight layout amplification.
What if: "What if summer's whole editorial angle was water — heat relief,
lakes, rivers — instead of a generic activity showcase?"
Captured trait amplified: of the 5 real captured photos + hero, 3 are already
water-adjacent (river hero, lake pedal-boats, mountain-stream hike) —an
underused thematic throughline, not just an underused visual trait.
Evidence: `_brand-extraction.json#motifs.photography`; real photo set at
`stardust/current/assets/media/` (hero.jpg, badespass.jpg,
wanderungen-wasser.jpg all water scenes).
Composition: reorder and reframe around the water throughline — hero copy
and the two water-adjacent feature rows lead, non-water content (App,
SchweizMobil Plus, Aktuelles) demoted/compressed below a clear "hitze? hier
abkühlen" (heat? cool off here) editorial thesis. Photography still gets
more room than the captured baseline (a water-themed page has to actually
show the water), but the bet is the THEME, not the crop size.
Motion: static (no cinematic layer).

## Variant C — What if motion was part of the identity?

Role: visionary pitch. The brand's third dimension — kinetic.
What if: "What if the Swiss-cross-in-square mark became a structural system,
not a hero decoration?"
Cinematic register: `arrival` (auto-picked from PRODUCT.md Brand Personality:
`civic-formal` + `place-led`).
Captured trait amplified: the signature red-square cross/flourish mark,
currently confined to 3 illustrative appearances.
Evidence: `_brand-extraction.json#motifs.signatureGesture`.
Composition: identical IA to A; the bet is motion + the mark's systemic reuse,
not layout.
Motion: cinematic, register `arrival` — hero photograph parallax on scroll,
post-hero content rising over the hero ("rising plate"), per-section
fade+translateY(40px) entrances staggered across the feature-card rows, and
the signature mark recurring as a scroll-triggered divider/footer treatment
instead of a one-off illustration.

## Differentiation check

- A vs B: reordered IA around a water thesis + a demoted non-water section —
  passes the ≥2-change bar.
- A vs C: motion layer + mark systemization — different axis from A entirely.
- B vs C: B bets on editorial theme/IA reordering (static composition); C bets
  on motion + a graphic mark system. Different traits, different axes —
  passes the differentiation contract.

## What did NOT run (degraded-pass disclosure)

No live browser render was available in this environment (see
`_brand-extraction.json` for the full diagnosis). As a result, none of
`direct`'s automated validators (Mode A pinning, IA-priority preservation
audit, density-floor enforcement, anti-toolbox audit) or `prototype`'s quality
gates (critique, audit, adapt, motion validation Pass 6 for C) have run against
these variants — they don't exist as automated checks outside the live-render
pipeline. The three variants below were hand-authored against the real
captured tokens and content, then reviewed manually against the same
principles those gates would check, but that is a human/manual review, not the
tool-backed gate.
