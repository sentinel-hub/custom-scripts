---
title: BAIS2 (Burned Area Index for Sentinel 2)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/bais2/
nav_exclude: true
examples:
- zoom: '12'
  lat: '28.03426'
  lng: '-15.69672'
  datasetId: S2L1C
  fromTime: '2019-02-19T00:00:00.000Z'
  toTime: '2019-08-19T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/bais2/script.js
  additionalQueryParams:
  - - mosaickingOrder
    - mostRecent
  - - cloudCoverage
    - '61'
---

## General description of the script

BAIS2 adapts the traditional BAI for Sentinel-2 bands, taking advantage of the wider spectrum of Visible, Red-Edge, NIR and SWIR bands.

Values description: The range of values for the BAIS2 is -1 to 1 for burn scars, and 1 - 6 for active fires. Different fire intensities
may result in different thresholds, the current values were calibrates, as per original author, on mostly Mediterranen regions.

## Description of representative images

Burned area index, Las Palmas de Grand Canaria. Acquired on 19.08.2019.

![snow classifier](fig/fig1.png)
