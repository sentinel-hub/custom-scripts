---
title: Cloud Mask Classification, Analysis Ready Planetscope
parent: Analysis Ready Planetscope
grand_parent: Planet
layout: script
nav_exclude: true
scripts:
  - [Visualization, script.js]
  - [Raw Value, raw.js]
examples:
- zoom: '16'
  lat: '-31.95291'
  lng: '116.17321'
  datasetId: '3f605f75-86c4-411a-b4ae-01c896f0e54e'
  fromTime: '2023-04-29T00:00:00.000Z'
  toTime: '2023-04-29T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet/analysis_ready_planetscope/cloud_mask_classification/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.

## General description
Analysis-Ready PlanetScope has several classifications within QA Band 1, “Cloud and shadow mask”. A value of 1 is clear, meaning that the surface is clearly visible. If it’s not clear, that means it’s classified as having some other type of contamination. In the script, each of the non-clear pixels in QA Band 1 are classified with a unique color, and the pixels that are clear are returned transparent.

## Description of representative image

A visualization of different classes of clouds for Bordeaux, France (April 2023)

![Cloud Mask Classification of Bordeaux](fig/fig1.png)