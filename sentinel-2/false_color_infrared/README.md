---
title: False color infrared product
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/false_color_infrared/
nav_exclude: true
examples:
- zoom: '10'
  lat: '41.77643254375405'
  lng: '12.69744873046875'
  datasetId: S2L2A
  fromTime: '2023-07-01'
  toTime: '2023-08-01'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/false_color_infrared/script.js
---

## General description

The [False color](https://en.wikipedia.org/wiki/False_color) infrared composite maps near-infrared spectral band B8 with red and green bands, B4 and B3, to [sRGB](https://en.wikipedia.org/wiki/SRGB) components directly. It is most commonly used to assess plant density and healht, as plants reflect near infrared and green light, while absorbing red. Since they reflect more near infrared than green, plant-covered land appears deep red. Denser plant growth is darker red. Cities and exposed ground are gray or tan, and water appears blue or black.

For Sentinel-2: **B08, B04, B02**

For [Landsat 1-5 MSS](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/false-color-nir/): **B04, B02, B01**

For [Landsat 7 ETM+](https://custom-scripts.sentinel-hub.com/landsat-7-etm/false-color/): **B04, B03, B02**

For [Landsat 4-5 TM](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/false-color/): **B04, B03, B02**

For [Landsat 8](https://custom-scripts.sentinel-hub.com/landsat-8/false-color/): **B05, B04, B03**

For [MODIS](https://custom-scripts.sentinel-hub.com/modis/false-color/): **B02, B01, B04**

## Description of representative images

False color composite of Rome. Acquired on 8.10.2017.

![False color composite of Rome](fig/fig1.png)

## References
- [1] Wikipedia, [False color](https://en.wikipedia.org/wiki/False_color). Accessed October 10th 2017.
- [2] Wikipedia, [sRGB](https://en.wikipedia.org/wiki/SRGB). Accessed October 10th 2017.
