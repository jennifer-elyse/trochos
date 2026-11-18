# Trochos 2.0 — Mathematically derived sacred geometry

Version: 2.0.0-beta.3 on sacred-geometry. This document supersedes the emotional-pattern lookup that was previously part of the beta. In particular, **there is no dictionary mapping Love, Grief, Hope, or other words to sacred symbols**.

## The authoritative foundation

The **exact** `constructionSvg` function from Trochos 1.1 at commit `19bc2e4` is restored without modification. The seven trochoid generator equations, the `points()` sampling and mirrored-arch closure convention, the 44 lexical recipes and two compositions, color pipeline, observer approximations, and animation are unchanged.

## Additive, subordinate geometry

`geomRelation(recipe)` computes the following from the original 1.1 `points()` trajectories, without mutating any recipe.

- Part centroids and radial extents from the sampled curve.
- Curve-family rotational orders that follow established symmetries (astroid 4, deltoid 3, nephroid 2; others 1).
- Intersections of sampled polyline segments via cross products and segment parameters. Near-duplicate crossings are clustered at a 3-unit tolerance. These are numerical approximations to underlying continuous-curve crossings, not claims of exact symbolic intersection counts.
- Nearest sampled endpoint approach where curves do not cross. The distance is a sample-based estimate, not a certified continuous-curve minimum.
- Rotation difference, relative scales, and the golden reciprocal `2/(1+sqrt(5))`, a harmonic geometric subdivision selected as a modern design convention rather than a universal sacred constant.

`sacredGeometrySvg()` adds faint harmonic arcs determined by actual part centroids, radii, and symmetry and places tiny markers at measured crossings or faint connectors at nearby curve points. It is rendered beneath the original colored trochoid strokes and starts at 22% intensity. Turning the new slider to 0 returns the original 1.1 construction and 1.1 curve rendering (for the same recipe, geometry controls, observer controls, animation phase, and trace progress).

The semantic identity is still sourced from the original glyph recipe and its relations, not from a fixed motif or an emotion classifier. Geometry relationships exist because the curves place them there. The modulation of color stays based on local tangent, curvature, phase and recipe hue rather than arbitrarily chosen spiritual colors.

## Version navigation and visual comparison

`index.html` is the default 2.0 entrypoint; its top navigation offers **Trochos 1.1** and **Trochos 2.0** titles. `v1.html` wraps the *unchanged* preserved renderer in `versions/1.1/index.html`, so the original mathematics is not rewritten for navigation. `compare.html` loads both runtimes by iframe and renders their real SVG outputs with matching catalog entries, side-by-side, blended, or as a pixel difference heatmap.

## Cultural separation

The historical contexts remain in their own expandable line and do not influence the mathematical glyph recipes. The geometric operations do not claim historical or religious provenance based on visual resemblance.

## Validation and precision

The original construction function, `ppoint()`, `points()`, and `segmentColor()` can be directly compared against their 1.1 source. Tests must check finite coordinates, intersection parity, construction equivalence with the sacred accent disabled, color pipeline preservation, and that the original archived source stays immutable. Pixel diff percentages are appearance metrics, not a measure of meaning.
