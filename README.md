# Trochos 2.0 (sacred-geometry branch) — Geometry, Language & Visual Diff

A browser-based, dependency-free geometric writing-system prototype with 44 lexical glyphs, two poetic compositions, and a seven-family parametric vocabulary.

## Explore

Open `index.html` to experience the original emotional Trochos language extended with subtle geometry computed from each glyph's actual parametric curves, crossings, proximity and symmetry (2.0.0-beta.3). Use `compare.html` for a visual comparison against the frozen 1.1 renderer.

## Deployment

Netlify static deployment: publish the repository root (`.`) with no build command. `netlify.toml` contains the publishing configuration. Connect the GitHub repository `jennifer-elyse/trochos` to the existing Netlify project `trochos` for production deploys from `main`.

## Geometry and interpretation

The lexical inventory limits each glyph to at most three curves. The two specified poetic compositions are explicit exceptions. Cycloidal arches require a closure convention in order to render as self-contained glyphs.

Color modulation follows geometric properties including phase, tangent orientation, and curvature, evaluated through an OKLCH-to-sRGB approximation. Observer modes are visualization projections, not physiological measurements or validated simulations. Hypothetical four-cone vision cannot be reproduced on a conventional RGB screen.

This is an exploratory symbolic visual language, not a proven lossless encoding of every natural-language utterance.

## Experimental sacred geometry

The `sacred-geometry` branch extends the emotion-first Trochos viewer. `sacred-geometry.html` now redirects to the corrected 2.0 language viewer; the superseded pattern gallery is available only in Git history. See `docs/semantic-geometry.md`.

## Version titles

`/` loads Trochos 2.0 by default, with prominent 1.1 and 2.0 title links. `/v1.html` wraps the unmodified 1.1 archive with the same navigation; `/compare.html` performs the graphical diff.

## Local run and regression checks

```bash
npm run dev     # serves http://localhost:8080 (Trochos 2.0 is the default)
npm test        # checks 1.1 construction and 46-glyph SVG equivalence
```

Navigation at the top of the viewer switches between Trochos 1.1 (archived runtime) and Trochos 2.0 (current). Use `compare.html` for graphical diff.
