---
title: EVI2 (Enhanced Vegetation Index 2)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/evi2/
nav_exclude: true
examples:
- zoom: '11'
  lat: '42.10051506871418'
  lng: '12.23602294921875'
  datasetId: S2L2A
  fromTime: '2019-09-13T00:00:00.000Z'
  toTime: '2019-09-13T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/evi2/script.js
---

## General description of the script

In areas of dense canopy where the leaf area index (LAI) is high, the NDVI values can be improved by leveraging information in the blue wavelength. Information in this portion of the spectrum can help correct for soil background signals and atmospheric influences.

## Description of representative images

EVI2, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![EVI2](fig/fig1.png)

