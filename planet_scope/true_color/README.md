---
title: True color product, PlanetScope
parent: PlanetScope
grand_parent: Planet
layout: script
permalink: /planet_scope/true_color/
nav_exclude: true
examples:
- zoom: '16'
  lat: '-32.10671'
  lng: '116.00704'
  datasetId: 'ccb1f8f0-e5bf-4c31-afe5-d8803bcbde2a'
  fromTime: '2023-04-19T00:00:00.000Z'
  toTime: '2023-04-19T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet_scope/true_color/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.

## General description

The true color product maps PlanetScope band values `red`, `green`, and `blue` which roughly correspond to red, green, and blue part of the spectrum, respectively, to R, G, and B components.

## Description of representative images

True color visualization of Rome.

![True color visualization of Rome, on 8.10.2017.](fig/fig1.jpg)


## References
 - Wikipedia, [False color](https://en.wikipedia.org/wiki/False_color#True_color). Accessed October 10th 2017.
