---
title: CCC (Canopy Chlorophyll Content)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ccc/
nav_exclude: true
examples:
- zoom: '11'
  lat: '41.82046'
  lng: '12.51823'
  datasetId: S2L2A
  fromTime: '2023-12-21T00:00:00.000Z'
  toTime: '2023-12-21T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ccc/script.js
---

## General description of the script

CCC (Canopy Chlorophyll Content (μg / cm ^ 2)) is calculated here as the product of the leaf area index (LAI) with the leaf cholrophyll content (Cab).
Note that the LAI and Cab scripts are as implemented in SNAP but without input and output validation!
Input/output values which are suspect are not reported or changed. Most values, however, do not fall under this category.
Visualized as an interval from 0-900. This can be adjusted in the evaluatePixel method.

## Description of representative images

Canopy chlorophyll index, Rome. Acquired on 8.10.2017.
![Canopy chlorophyll index](fig/fig1.png)

