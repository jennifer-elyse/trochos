# Trochos chromatic model

## Semantic anchor
Each recipe component contains a base hue in degrees. Scale, geometry and trace phase modify the chromatic presentation without creating an eighth curve primitive.

## Interactive model
The viewer samples a curve by arc length and derives a small hue offset from phase and local tangent angle. Luminance and chroma are modulated by tangent orientation and discrete curvature. Color is then encoded in OKLCH and converted to displayable sRGB with gamut handling.

The simplified static SVG renders in `assets/glyphs/` use each primitive's hue as their stable stroke color; they do not bake all spatially varying chromatic segments.

## Cone-response footnotes
1. **Typical L/M/S trichromacy.** Most human observers have three overlapping cone-response channels; sRGB color values do not uniquely specify a retinal spectral response.
2. **Protan-like/deutan-like/tritan-like.** The optional viewer modes are rough display-side matrix approximations, not clinically validated observer simulations.
3. **Achromatic projection.** A luminance collapse removes chromatic differentiation and preserves only approximate brightness contrast.
4. **Hypothetical additional cone.** A four-dimensional cone-response signal cannot be faithfully displayed by an ordinary three-primary RGB monitor; the extra-axis mode is a visualization projection only.
5. **Variation.** Cone sensitivities, optical media, adaptation, brightness, calibration, viewing conditions, and device gamut change appearance. No personal cone sensitivities are measured here.
6. **AI perception.** The application is generated from numerical color models; the assistant has no biological retinal cones.

## Semantics caveat
If hue is allowed to encode emotional temperature, applications requiring monochrome or color-vision-accessible transmission should not rely on hue alone for lossless decoding.
