---
title: Agricultural growth stage
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/agriculture_growth_stage/
nav_exclude: true
scripts:
  - [Copernicus Browser, script.js]
  - [Sentinel-2 mosaic, quarterly_mosaics.js]
examples:
- zoom: '11'
  lat: '45.6246'
  lng: '12.42073'
  datasetId: S2L1C
  fromTime: '2017-06-01T00:00:00.000Z'
  toTime: '2017-08-31T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/agriculture_growth_stage/script.js
  additionalQueryParams:
  - - mosaickingOrder
    - mostRecent
  - - cloudCoverage
    - '30'
---

## Author of the script
[@HarelDan](https://github.com/hareldunn/GIS_Repo/blob/master/Multi-Temporal%20NDVI%20for%20Sentinel%20Hub%20Custom%20Scripts){:target="_blank"}    

## General description of the script
Agricultural growth stage is a script visualizing the multi-temporal NDVI trends in Sentinel-2 imagery. It takes the current image as baseline and calculates the average NDVI for the previous 2 months.
The script requires multi-temporal processing, so the parameter TEMPORAL=true should be added to the request.

## Description of representative images

The Agricultural growth stage script applied to the agricultural fields of Italy (Veneto). 

![The Agricultural growth stage script applied to agricultural fields of Italy.](fig/fig1.jpg)

## References
Based on: 
[source 1](https://twitter.com/sentinel_hub/status/922813457145221121){:target="_blank"}, 
[source 2](https://twitter.com/sentinel_hub/status/1020755996359225344){:target="_blank"}



