---
title: Symbolic Regression Vegetation Index
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/srvi/
nav_exclude: true
examples:
  - zoom: 11
    lat: 34.7
    lng: 33.0
    datasetId: S2L2A
    fromTime: '2026-03-01'
    toTime: '2026-03-15'
    platform: CDSE
    evalscripturl: https://raw.githubusercontent.com/c-chrysostomou/custom-scripts/master/sentinel-2/srvi/script.js
---

# Symbolic Regression Vegetation Index (SRVI)

## General description of the script
The Symbolic Regression Vegetation Index (SRVI) is a 4-band index optimized for global vegetation mapping. It was discovered using a data-driven symbolic regression framework designed to improve vegetation separability across diverse biomes and preserve sensitivity in high-biomass, saturated regions.

The index formula utilizes Green (B03), Red (B04), NIR (B08), and SWIR1 (B11) bands:

$$SRVI = \frac{2.0 \cdot N - 3.0 \cdot R}{N + R + 0.5 \cdot (G + S1)}$$

## References
[1] Chrysostomou, C., Neophytides, S.P., Mavrovouniotis, M. et al. Optimized spectral indices for global vegetation and water mapping using Sentinel-2. Sci Rep 16, 4491 (2026). https://doi.org/10.1038/s41598-025-34720-x
