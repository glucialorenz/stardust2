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

## Variant B — What if we amplified the captured photography?

Role: design-team motivator. The brand's underused capability foregrounded.
What if: "What if the captured photography breathed at editorial scale?"
Captured trait amplified: real, high-identity Swiss landscape photography,
currently cropped to uniform small cards.
Evidence: `_brand-extraction.json#motifs.photography`.
Composition: 2–3 key photographs promoted to full-bleed/editorial scale with
title overlays; remaining cards keep a smaller but photo-first (not
text-first) balance.
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

- A vs B: layout/photo-scale changes across 3+ sections — passes the ≥2-change
  bar.
- A vs C: motion layer + mark systemization — different axis from A entirely.
- B vs C: B bets on photography scale (static composition); C bets on motion +
  a graphic mark system. Different traits, different axes — passes the
  differentiation contract.

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
