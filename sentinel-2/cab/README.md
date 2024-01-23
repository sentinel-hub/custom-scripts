---
title: Cab (Leaf Chlorophyll Content)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/cab/
nav_exclude: true
examples:
- zoom: '11'
  lat: '43.5142'
  lng: '16.60103'
  datasetId: S2L1C
  fromTime: '2023-07-12T00:00:00.000Z'
  toTime: '2024-01-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/cab/script.js
  additionalQueryParams:
  - - mosaickingOrder
    - mostRecent
  - - cloudCoverage
    - '30'
---

## General description of the script

Cab (leaf cholrophyll content (μg / cm ^ 2)) corresponds to the content of chlorophyll a, chlorophyll b and carotenoids per unit of leaf area.
Note that the Cab script is as implemented in SNAP but without input and output validation!
Input/output values which are suspect are not reported or changed. Most values, however, do not fall under this category.
Visualized as an interval from 0-300. This can be adjusted in the evaluatePixel method.

## Description of representative images

Leaf chlorophyl index of Rome. Acquired on 8.10.2017.

![CAB of Rome](fig/fig1.png)
