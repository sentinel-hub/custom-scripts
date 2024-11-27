---
title: False Color, Analysis Ready Planetscope
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
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet/analysis_ready_planetscope/false_color/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.

## General description
The False color infrared composite maps near-infrared spectral band nir with red and green bands to sRGB components directly. It is most commonly used to assess plant density and health, as plants reflect near infrared and green light, while absorbing red. Since they reflect more near infrared than green, plant-covered land appears deep red. Denser plant growth is darker red. Cities and exposed ground are gray or tan, and water appears blue or black.

## Description of representative image

A visualization of Des Moines, United States in false color (April 2023)

![False Color of Des Moines](fig/fig1.png)