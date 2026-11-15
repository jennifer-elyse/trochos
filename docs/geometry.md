# Trochos mathematical geometry

All angles are in radians and all curves are periodic or explicitly closed under a declared rendering convention. In the JSON catalog, scale is relative to 111 screen units, translations are normalized x/y fractions of 111, and `rotation` controls rigid orientation.

## Classical parameterizations
For $0\le t<2\pi$:

- Cycloid: $(x,y)=(a(t-\sin t),a(1-\cos t))$.
- Curtate cycloid: $(at-b\sin t,a-b\cos t)$ with $b<a$.
- Prolate cycloid: $(at-b\sin t,a-b\cos t)$ with $b>a$.
- Nephroid (scale $s$): $(s(3\cos t-\cos 3t),s(3\sin t-\sin 3t))$.
- Deltoid: $(s(2\cos t+\cos 2t),s(2\sin t-\sin 2t))$.
- Astroid: $(s\cos^3t,s\sin^3t)$.
- Reserved cardioid: $(s(2\cos t-\cos 2t),s(2\sin t-\sin 2t))$.

## Closure caveat
The three classical *linear* cycloids are not closed on a full rolling period because the rolling circle advances. The viewer uses one arch and a mirror-reflected return arch, plus normalization, to make a closed glyph. That is a visual closure convention, not a claim that the resulting entire figure is a single classical cycloid trajectory.

## Animation
A luminous stylus traces sampled parameter points until the full loop is covered; it then resolves as a closed silhouette. The phase can drift during viewing. Repeated SVG export creates deterministic static snapshots at their specified recipe phase.

## Static assets
The `assets/glyphs/*.svg` files are compact, recipe-derived standalone reference renders. They encode hue per curve; the live viewer additionally shades along curves using tangent/curvature-dependent OKLCH modulation. The inline mathematical implementation in `index.html` is authoritative for live chromatic rendering.
