---
title: NDII (Normalized difference 819/1600)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndii/
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
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndii/script.js
---

## General description of the script

This index uses a normalized difference formulation index of wavelengths 819/1600 nm, which corresponds to bands B08 and B11 for Sentinel-2. It is a reflectance measurement, sensitive to changes in water content of plant canopies. The index values increase with increasing water content. Applications of NDII include agricultural crop management, forest canopy monitoring, and stressed vegetation detection.

Values description: The values of this index range from -1 to 1. The common range for green vegetation is between the values of 0.02 to 0.6.

**NBR = (B08 - B11) / (B08 + B11)**

## Description of representative images

NDII, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![NDII](fig/fig1.png)
