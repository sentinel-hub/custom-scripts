---
title: DEM Grayscale Visualization
parent: DEM
layout: script
permalink: /dem/dem-grayscale/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
examples:
- zoom: '10'
  lat: '42.40876'
  lng: '12.00634'
  datasetId: DEM_MAPZEN
  fromTime: '2023-10-02T00:00:00.000Z'
  toTime: '2023-10-02T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/dem/dem-grayscale/eob.js
---

## Description

This script returns a grayscale visualization of a digital elevation model, assigning continuous colors to the elevation borders. 

It is possible to set custom min and max values in the evalscript by setting `defaultVis` to `false` and setting the min and max variables to the desired values.

![dem color](fig/fig1.png)


 