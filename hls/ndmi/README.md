---
title: NDMI
parent: Harmonized Landsat Sentinel
layout: script
permalink: /hls/ndmi/
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
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/hls/ndmi/script.js
---

## Description

The NDMI is a normalized difference moisture index, that uses NIR and SWIR bands to display moisture. The SWIR band reflects changes in both the vegetation water content and the spongy mesophyll structure in vegetation canopies, while the NIR reflectance is affected by leaf internal structure and leaf dry matter content but not by water content. The combination of the NIR with the SWIR removes variations induced by leaf internal structure and leaf dry matter content, improving the accuracy in retrieving the vegetation water content. The amount of water available in the internal leaf structure largely controls the spectral reflectance in the SWIR interval of the electromagnetic spectrum. SWIR reflectance is therefore negatively related to leaf water content. In short, NDMI is used to monitor changes in water content of leaves, and was proposed by Gao. NDWI is computed using the near infrared (NIR) and the short wave infrared (SWIR) reflectance’s.

## Description of representative images

HLS NDMI over Rome. Acquired on 2022-04-05, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)