---
title: Normalized difference chlorophyll index, PlanetScope
parent: PlanetScope
grand_parent: Planet
layout: script
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
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet/planetscope/ndci/eob.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.

## General description

The normalized difference chlorophyll index, abbreviated NDCI, is defined as   

$$NDCI := \mathtt{Index}(rededge,red) = \frac{rededge-red}{rededge+red}$$  

This is an example script which can be used with EO Browser and is configured to return statistics in a format which can be used with the statistical info chart.  For more information, see <a href = "https://www.sentinel-hub.com/faq/how-configure-your-layers-statistical-info-eo-browser/"> How Can I Configure My Layers For Statistical Information In EO Browser?</a>

## Representative image

NDCI over Lake Elsinore in California.

<img src="fig/fig1.png" height="300">


## References
Sachidananda Mishra, Deepak R. Mishra (2012) Normalized difference chlorophyll index: A novel model for remote estimation of chlorophyll-a concentration in turbid productive waters, Remote Sensing of Environment, 117:394-406, DOI: [10.1016/j.rse.2011.10.016](https://doi.org/10.1016/j.rse.2011.10.016)