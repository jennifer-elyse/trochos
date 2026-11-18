# Trochos 2.0 (sacred-geometry branch) — Geometry, Language & Visual Diff

A browser-based, dependency-free geometric writing-system prototype with 44 lexical glyphs, two poetic compositions, and a seven-family parametric vocabulary.

## Explore

Open `index.html` in a modern browser for the 2.0.0-beta.1 sacred geometry experience. Compare the preserved Trochos 1.1 original graphically via side-by-side, blend, and pixel heatmap. Visit `versions/1.1/index.html` for the exact pinned prior renderer. The application contains the interactive viewer, seven mathematical curve generators, recipe inspector, phase animation, geometry-linked color, color-cone observer projections, and SVG/PNG export.

## Deployment

Netlify static deployment: publish the repository root (`.`) with no build command. `netlify.toml` contains the publishing configuration. Connect the GitHub repository `jennifer-elyse/trochos` to the existing Netlify project `trochos` for production deploys from `main`.

## Geometry and interpretation

The lexical inventory limits each glyph to at most three curves. The two specified poetic compositions are explicit exceptions. Cycloidal arches require a closure convention in order to render as self-contained glyphs.

Color modulation follows geometric properties including phase, tangent orientation, and curvature, evaluated through an OKLCH-to-sRGB approximation. Observer modes are visualization projections, not physiological measurements or validated simulations. Hypothetical four-cone vision cannot be reproduced on a conventional RGB screen.

This is an exploratory symbolic visual language, not a proven lossless encoding of every natural-language utterance.

## Experimental sacred geometry

The `sacred-geometry` branch implements the [Trochos 2.0 candidate](index.html) and [Sacred Geometry Laboratory alias](sacred-geometry.html) with exact circle constructions, polygonal symmetry, Platonic solid projections, Fibonacci-square exploration, mathematical color, optional overlays from the Trochos glyph catalog, SVG/JSON export, and a culturally differentiated chronological annotation track. See [implementation notes](docs/sacred-geometry.md). It is not part of production `main`.
