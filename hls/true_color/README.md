---
title: True Color
parent: Harmonized Landsat Sentinel
layout: script
permalink: /hls/true_color/
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
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/hls/true_color/script.js
---

## Description

HLS true color composite uses visible light bands red, green and blue in the corresponding red, green and blue color channels, resulting in a natural colored product, that is a good representation of the Earth as humans would see it naturally. 

## Description of representative images

HLS true color composite of Rome. Acquired on 2022-07-24, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)