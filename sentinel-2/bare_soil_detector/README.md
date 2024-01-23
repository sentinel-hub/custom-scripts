---
title: Bare Soil Marker
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/bare_soil_detector/
nav_exclude: true
examples:
- zoom: '10'
  lat: '46.95448'
  lng: '17.67426'
  datasetId: S2L1C
  fromTime: '2020-03-14T00:00:00.000Z'
  toTime: '2020-09-14T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/bare_soil_detector/script.js
  additionalQueryParams:
  - - mosaickingOrder
    - mostRecent
  - - cloudCoverage
    - '58'
---

## General description of the script
The bare soil marker identifies all observations in which the feature of interest (FOI) is bare — with exposed bare soil as a result of ploughing or covered with non-photosynthetic vegetation as a consequence of harvest or vegetation drying up on the field.

For detailed information about the marker read the relative [blog post](https://medium.com/sentinel-hub/area-monitoring-bare-soil-marker-608bc95712ae).

Pixels identifies as bare soil are colored in blue.

## Author of the script

Domagoj Korais.

## Description of representative images

Bare soil script applied around lake Balaton, Hungary.

Image taken on 14/09/2020.

![Bare soil script applied around lake Balaton, Hungary](fig/balaton_bare_soil_2020_09_14.png)