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

## Variant C — What if the page met you before it showed you anything?

Role: visionary pitch. The brand's third dimension — kinetic AND personalized.
What if: "What if arrival itself was the personalization — the page asks who
you are before it decides what to show you?"
Cinematic register: `arrival` (auto-picked from PRODUCT.md Brand Personality:
`civic-formal` + `place-led` — still the right register; the personalization
step is a NEW first act ahead of the hero, not a register change).

**Deliberate departure from the base contract.** stardust:uplift's default
rule is "C's composition is identical to A; the bet is motion, not layout."
This variant, per explicit user direction (2026-08-09), breaks that rule on
purpose: C now leads with a short 4-question intake screen before the hero,
so its IA is NOT identical to A. Recorded here rather than silently applied,
since it's a conscious override of the skill's normal variant contract, not
an oversight.

**The intake screen** (before any hero image renders):
1. **Activity** — click one of the six real activity-tile icons, or
   "Inspire me" (no strong preference / surprise me).
2. **Location** — pick a region on a simple clickable Switzerland map.
3. **Accessibility need** — "Do you need barrier-free / step-free routes?"
   yes/no. (Softer framing than a literal disability question — same
   functional routing, to the real captured "Hindernisfreie Wege" content.)
4. **When** — a date picker, framed as "so we can point you to good weather."

**Evidence for each question** (mixed strength — disclosed per-question,
not averaged):
- Activity: strong — the six real activity-nav tiles are already captured
  IA (`_brand-extraction.json#systemComponents[activity-nav-tiles]`).
- Accessibility: strong — "Hindernisfreie Wege" is real captured content
  already on the page (one of the 4 promo tiles), not invented.
- Location: moderate — not literally on this captured page, but
  SchweizMobil's whole product is route planning (`PRODUCT.md`), so
  location-based filtering is a legitimate extension of real product
  purpose, not a fabricated feature.
- Date/weather: weakest — no captured evidence for this on the page or in
  the product description. This is the client's own creative direction for
  the visionary variant, not something derived from the capture. Flagged
  honestly rather than dressed up as evidence-backed.

**After the intake** (or on skip/timeout — falls back to A's generic,
all-activities content so nobody gets stuck on the intake screen): the hero
and content reflow around the answers — activity sets the accent color and
lead photo, location and date drive an illustrative (not live-data-backed;
no real weather feed exists in this pass) suggestion, accessibility need
promotes "Hindernisfreie Wege"-style content when set. Composition beyond
the intake: same as A. Motion: cinematic, register `arrival` — the intake's
own reveals, the personalized hero's entrance, post-hero content rising over
the hero, per-section fade+translateY(40px) entrances, and the signature
mark recurring as a divider/footer treatment.

## Differentiation check

- A vs B: reordered IA around a water thesis + a demoted non-water section —
  passes the ≥2-change bar.
- A vs C: an entirely new pre-hero intake screen + personalized, motion-driven
  entrance — different axis from A by a wide margin.
- B vs C: B bets on editorial theme/IA reordering, static, same-for-everyone.
  C bets on personalization + motion, different-per-visitor. Different
  traits, different axes, and now also a different *mechanism* (static vs.
  interactive) — passes the differentiation contract with room to spare.

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
