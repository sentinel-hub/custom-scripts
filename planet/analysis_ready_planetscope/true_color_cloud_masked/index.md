---
title: True Color Cloud Masked, Analysis Ready Planetscope
parent: Analysis Ready Planetscope
grand_parent: Planet
layout: script
nav_exclude: true
scripts:
  - [Visualization, script.js]
examples:
- zoom: '16'
  lat: '-31.95291'
  lng: '116.17321'
  datasetId: '3f605f75-86c4-411a-b4ae-01c896f0e54e'
  fromTime: '2023-04-29T00:00:00.000Z'
  toTime: '2023-04-29T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet/analysis_ready_planetscope/true_color_cloud_masked/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.

## General description
The first QA Band, Cloud and shadow mask band gives information on whether the pixel is clear, meaning that the surface is clearly visible. If it’s not clear, that means it’s classified as either bright cloud, shadow, haze, adjacent clouds, additional cloud shadow or haze, or other. The script masks out all pixels where band QA1 does not have a value of 1 or “clear”. The resulting image has values of zero set for all four surface reflectance bands where clouds, cloud contamination, shadows, snow, etc. have been detected.

## Description of representative image

A true color visualization with clouds masked out for Des Moines, United States (April 2023)

![True Color with Clouds Masked of Des Moines](fig/fig1.png)