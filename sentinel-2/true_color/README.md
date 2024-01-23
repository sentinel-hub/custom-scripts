---
title: True color product
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/true_color/
nav_exclude: true
examples:
- zoom: '10'
  lat: '42.01869'
  lng: '12.58484'
  datasetId: S2L2A
  fromTime: '2023-10-12T00:00:00.000Z'
  toTime: '2023-10-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/true_color/script.js
  additionalQueryParams:
  - - cloudCoverage
    - '30'
---

## General description

The true color product maps Sentinel-2 band values B04, B03, and B02 which roughly correspond to red, green, and blue part of the spectrum, respectively, to R, G, and B components.

For Sentinel-2: **BO4, B03, B02**

For [Landsat 4-5 TM](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/true-color/): **B03, B02, B01**

For [Landsat 7 ETM](https://custom-scripts.sentinel-hub.com/landsat-7-etm/true-color/): **B03, B02, B01**

For [Landsat 8](https://custom-scripts.sentinel-hub.com/landsat-8/true-color/): **B04, B03, B02**

For [MODIS](https://custom-scripts.sentinel-hub.com/modis/true-color/): **B01, B04, B03**

## Description of representative images

True color visualization of Rome, on 8.10.2017.

![True color visualization of Rome, on 8.10.2017.](fig/fig1.png)


## References
 - Wikipedia, [True color](https://en.wikipedia.org/wiki/False_color#True_color). Accessed October 10th 2017.
