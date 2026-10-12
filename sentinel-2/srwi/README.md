---
title: Symbolic Regression Water Index
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/srwi/
nav_exclude: true
examples:
  - zoom: 11
    lat: 34.7
    lng: 33.0
    datasetId: S2L2A
    fromTime: '2026-03-01'
    toTime: '2026-03-15'
    platform: CDSE
    evalscripturl: https://raw.githubusercontent.com/c-chrysostomou/custom-scripts/master/sentinel-2/srwi/script.js
---

# Symbolic Regression Water Index (SRWI)

## General description of the script
The Symbolic Regression Water Index (SRWI) is a 4-band spectral index optimized for accurate and consistent surface water mapping. Discovered via symbolic regression, it effectively addresses common classification challenges, reducing false positives caused by mountain shadows and complex urban surfaces.

The index formula utilizes Blue (B02), Green (B03), NIR (B08), and SWIR1 (B11) bands:

$$SRWI = \frac{(G + B) - (N + S1)}{(G + B) + (N + S1)}$$

## References
[1] Chrysostomou, C., Neophytides, S.P., Mavrovouniotis, M. et al. Optimized spectral indices for global vegetation and water mapping using Sentinel-2. Sci Rep 16, 4491 (2026). https://doi.org/10.1038/s41598-025-34720-x
