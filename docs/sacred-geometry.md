# Sacred geometry laboratory

Branch: sacred-geometry. Open /sacred-geometry.html from the repository root. This is opt-in; /index.html and the existing 44 lexical glyphs and 2 compositions remain unchanged.

## Mathematical grammar
- Circle: C(center, radius). Two circles with equal radius and separation equal to radius form vesica piscis; lens chord length √3r.
- Sixfold circle relation: six centers on a regular hexagon of circumradius r around one central circle, all of radius r.
- Flower lattice: finite hexagonal subset of the triangular lattice with primitive vectors (r,0), (r/2,√3r/2). No claim of a single original historical spiritual meaning.
- Connected center network: 13 centers = 1 + 6 at radius r + 6 at radius 2r, and all 78 unordered pairwise edges. It is a modern computational construction and **not** asserted to be the canonical geometry of any historic named symbol.
- Polygon: vertices R(cos(2πk/n),sin(2πk/n)); rotational symmetry C_n.
- Platonic solids: tetrahedron (4 vertices), cube (8), dodecahedron (20), icosahedron (12), octahedron (6) using golden-ratio Cartesian coordinates where appropriate; select labels 3/4/5/8/6 respectively. The 12 option falls back to octahedron and should be treated as a placeholder, not a sixth regular solid.
- Fibonacci: consecutive finite squares of integer side lengths with illustrative quarter-circle arcs. This is NOT an exact logarithmic spiral.

## Semantic separation
Geometry is part of the Trochos visual syntax; cultural interpretations are displayed in a separate historical track. No religion, region, or period is assigned as the universal origin of simple geometric shapes. The current laboratory stores modern design semantics in its recipe while cultural information remains out of the recipe.

## Color
HSL display mapping couples stroke hue to angular order, shape index, and rotation; saturation/lightness respond to resonance. This is reproducible but not calibrated perceptual uniformity and not cone-physiology simulation. The original viewer uses an independent OKLCH-inspired color process, and a future refactor can consolidate these into a shared module.

## Catalog and exports
The laboratory loads existing data/glyphs.json and overlays selected trochoid recipes without modifying the catalog. SVG exports serialize the very same DOM geometry visible in the laboratory; JSON exports include parameters and semantic relation. The pre-existing assets/glyphs/*.svg have NOT been regenerated in this change.

## Cultural-history references and cautions
- Islamic geometric design: Metropolitan Museum of Art, https://www.metmuseum.org/de/essays/geometric-patterns-in-islamic-art
- Christian mandorla and vesica: Nexus Network Journal, https://doi.org/10.1007/s00004-015-0253-9
- Yantra and Śrī Yantra traditions: Indira Gandhi National Centre for the Arts, https://ignca.gov.in/Asi_data/843.pdf
- Overlapping circles/Flower of Life mathematical motif: Wolfram MathWorld, https://mathworld.wolfram.com/FlowerofLife.html

Do not flatten different traditions into one chronology of invention; dates describe particular attested settings or scholarship rather than universal origins.

## Validation backlog
Add CI tests for closed paths, numeric tolerance, non-degenerate edges, rotational invariance, pixel snapshot regressions, data schema validation, and parity with the primary renderer before merging.

## Trochos 2.0 preview and visual regression

The branch's root index.html is now the 2.0.0-beta.1 entrypoint, with sacred-geometry.html retained as an alias. The exact 1.1 index.html from commit 19bc2e4 is archived at versions/1.1/index.html; the 1.1 catalog is frozen at versions/1.1/glyphs.json and also available through the original /data/glyphs.json. Do not silently replace this baseline when evolving 2.0.

### Graphical diff
The version-comparison section instantiates the pinned 1.1 runtime in a same-origin iframe. Its published window.Trochos.render() generates the baseline glyph for the selected recipe. The candidate is the current 2.0 SVG, including the selected Trochos glyph overlay and sacred geometry, and both use a viewBox of -180 -180 360 360.

- Side by side: baseline glyph and candidate construction at equal coordinates.
- Blend: original behind the candidate, adjustable candidate opacity.
- Heatmap: both SVGs rasterized in the browser at 720 × 720 transparent pixels then compared against the same dark reference background. Per-pixel delta is maximum absolute difference of composited R/G/B channels, with an adjustable 0-255 threshold. Highlighting and percentage are **appearance differences**, not a claim of equivalent/inequivalent symbolic meaning.
- Export both versions as a combined SVG, heatmap as PNG, and measurement JSON.

All rendering and diffing is local in the browser, without third-party diff services. The 1.1 renderer is a locked snapshot and the new v2 app must never request the live production site to obtain old-version images.

### Release semantics
2.0.0-beta.1 is a pre-release on sacred-geometry, not a production release. The 1.1 lexical catalog remains unchanged and is still accessible in the archive. Cultural variations remain separate from geometric semantics. Main/Netlify production remain unchanged until explicit merge and deploy.
