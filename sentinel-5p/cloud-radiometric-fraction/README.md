---
title: Sentinel-5P Effective Radiometric Cloud Fraction
parent: Sentinel-5P
grand_parent: Sentinel
layout: script
permalink: /sentinel-5p/cloud-radiometric-fraction/
nav_exclude: true
examples:
- zoom: '6'
  lat: '-17.8742'
  lng: '101.82129'
  datasetId: S5_CLOUD
  fromTime: '2020-01-15T00:00:00.000Z'
  toTime: '2020-01-15T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: "https://custom-scripts.sentinel-hub.com/sentinel-5p/cloud-radiometric-fraction/script.js"
---

## Description
This script visualizes Sentinel 5P effective radiometric cloud fraction product, which represents the portion of the Earth's surface covered by clouds, divided by the total surface. Clouds have shielding, albedo, and in-cloud absorption effects on trace gas retrieval. The effective radiometric cloud fraction is an important parameter to correct these effects.

## Description of representative images

Effective radiometric cloud fraction of the Pacific Ocean hurricane, 2020-01-15.
![NO2 tropospheric column](fig/fig1.png)


