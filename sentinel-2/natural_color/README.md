---
title: Natural color product
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/natural_color/
nav_exclude: true
examples:
- zoom: '10'
  lat: '41.9027835'
  lng: '12.496365500000024'
  datasetId: S2L2A
  fromTime: '2023-07-01'
  toTime: '2023-08-01'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/natural_color/script.js
---

## General description
The natural color product tries to represent spectral responses of the satellite bands so as to match the color perceived by the human eye (see [1, 2] for details).

## Description of representative images

Natural color visualization of Rome, on 8.10.2017.

![Natural color visualization of Rome, on 8.10.2017.](fig/fig1.png)

## References
 - [1] B. Sovdat, M. Kadunc, M. Batic, G. Milcinski, [Natural color representation of Sentinel-2 data](https://www.researchgate.net/publication/320042440_Natural_color_representation_of_Sentinel-2_data). Submitted.
 - [2] The accompanying [GitHub repository](https://github.com/sentinel-hub/natural_color).
