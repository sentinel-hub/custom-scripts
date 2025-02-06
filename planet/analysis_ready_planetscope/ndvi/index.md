---
title: NDVI, Analysis Ready Planetscope
parent: Analysis Ready Planetscope
grand_parent: Planet
layout: script
nav_exclude: true
scripts:
  - [Visualization, script.js]
  - [EO Browser, eob.js]
  - [Raw Values, raw.js]
examples:
- zoom: '16'
  lat: '-31.95291'
  lng: '116.17321'
  datasetId: '3f605f75-86c4-411a-b4ae-01c896f0e54e'
  fromTime: '2023-04-29T00:00:00.000Z'
  toTime: '2023-04-29T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet/analysis_ready_planetscope/nvdi/eob.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.

## General description
The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths. The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1).

## Description of representative image

A visualization of NDVI for Des Moines, United States (April 2023)

![NDVI for Des Moines](fig/fig1.png)