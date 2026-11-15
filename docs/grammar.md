# Trochos geometry grammar

## Inventory
Seven permitted generators: cycloid (b=a), curtate cycloid (b<a), prolate cycloid (b>a), nephroid (epicycloid k=2), deltoid (hypocycloid k=3), astroid (hypocycloid k=4), and reserved cardioid (epicycloid k=1).

## Lexical form
A lexical glyph consists of 1–3 curves. Each part has a family, normalized scale, x/y offset, rotation, trace phase, and hue. Layout is a relational descriptor, not a new generator.

## Relations
- **Nested:** one contour lies substantially within another.
- **Concentric/shared center:** two contours share the same origin.
- **Radial:** component origins differ at controlled angles/distances.
- **Tangent:** contours meet without deliberate penetration.
- **Intersection:** contours cross at one or more points.
- **Phase:** independent parameter shifts distinguish related instances.

These are relational categories, not a mathematically exhaustive proof of equivalence classes. Topology and relative geometry are continuous and may include degeneracies.

## Composition
The two poetic example compositions deliberately use four curves, beyond the 3-curve lexical limit. They should be parsed as compositions, not lexical atoms.

## Completeness
An uncountable parameter space does not automatically yield a unique semantic code. A normative encoder/decoder, disambiguation thresholds, synonym rules, and compositional semantics are future work. The 44-entry catalog is illustrative and *not* a proven universal language. No alphabetic ordering is required to interpret a glyph.

## Canonicalization (proposed)
Normalize translation/scale, rotate relative to the designated reference primitive, quantize near-equal parameters where appropriate, preserve semantic hue if using hue for meaning, and treat permutation of independent parts as equivalent only if a published semantic rule permits it.
