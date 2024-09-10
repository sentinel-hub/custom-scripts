---
title: False Color
parent: Harmonized Landsat Sentinel
layout: script
permalink: /hls/false_color/
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
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/hls/false_color/script.js
---

## Description

This is a simple RGB composite with NIR band in the red channel, red band in the green channel and green band in the blue channel. The script is useful for plant density and health monitoring, as vegetation (displayed in red) heavily reflects NIR light while absorbing red. Vegetation is colored red, cities and exposed ground are grey or tan, and water appears blue or black.

## Description of representative images

HLS false color composite of Rome. Acquired on 2022-07-24, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)