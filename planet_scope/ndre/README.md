---
title: Normalized difference red edge index, PlanetScope
parent: PlanetScope
grand_parent: Planet
layout: script
permalink: /planet_scope/ndre/
nav_exclude: true
scripts:
    - [Visualization, script.js]
    - [EO Browser, eob.js]
examples:
- zoom: '16'
  lat: '-32.10671'
  lng: '116.00704'
  datasetId: 'ccb1f8f0-e5bf-4c31-afe5-d8803bcbde2a'
  fromTime: '2023-04-19T00:00:00.000Z'
  toTime: '2023-04-19T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet_scope/ndre/eob.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.

## General description

The normalized difference red edge index, abbreviated NDRE, is defined as   

$$NDRE := \mathtt{Index}(nir,rededge) = \frac{nir-rededge}{nir+rededge}$$  

This is an example script which can be used with EO Browser and is configured to return statistics in a format which can be used with the statistical info chart.  For more information, see <a href = "https://www.sentinel-hub.com/faq/how-configure-your-layers-statistical-info-eo-browser/"> How Can I Configure My Layers For Statistical Information In EO Browser?</a>

## Description of representative images

NDRE of agriculture fields in California. 

<img src="fig/fig1.png" height="300">

## References
 [1] Wikipedia, [Normalized Difference Vegetation Index](https://en.wikipedia.org/wiki/Normalized_Difference_Red_Edge_Index).
