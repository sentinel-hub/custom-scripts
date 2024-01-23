---
title: NBR-RAW (Normalized Burn Ratio)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/nbr/
nav_exclude: true
examples:
- zoom: '10'
  lat: '42.76703'
  lng: '11.22847'
  datasetId: S2L2A
  fromTime: '2020-07-12T00:00:00.000Z'
  toTime: '2020-07-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/nbr/script.js
---

## General description of the script

To detect burned areas, the NBR-RAW index is the most appropriate choice. Using bands 8 and 12 it highlights burnt areas in large fire zones greater than 500 acres. To observe burn severity, you may subtract the post-fire NBR image from the pre-fire NBR image.

Values description: Darker pixels indicate burned areas.


**NBR = (B08 - B12) / (B08 + B12)**

## Description of representative images

NBR-RAW, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![NBR](fig/fig1.png)