---
title: NDWI
parent: Harmonized Landsat Sentinel
layout: script
permalink: /hls/ndwi/
nav_exclude: true
examples:
- zoom: '12'
  lat: '46.6200'
  lng: '7.86'
  datasetId: AWS_HLS
  fromTime: '2023-09-16T00:00:00.000Z'
  toTime: '2023-09-16T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/hls/ndwi/script.js
---

## Description

The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies. 

**NDWI = (GREEN - NIR) / (GREEN + NIR)**

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

## Description of representative images

HLS NDWI over Rome. Acquired on 2022-07-24, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)