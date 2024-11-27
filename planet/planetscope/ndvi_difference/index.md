---
title: NDVI difference between two dates
parent: Planetscope
grand_parent: Planet
layout: script
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '14'
  lat: '52.24714'
  lng: '9.20886'
  datasetId: Planetscope
  fromTime: '2023-04-02T00:00:00.000Z'
  toTime: '2023-06-01T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/planet_scope/ndvi_difference/script.js
  additionalQueryParams:
  - - themeId
    - PLANET_SANDBOX
---

## General description
This script aims to obtain the diffence of NDVI between the latest acquisition and the acquisition 10-day prior to the latest on within a specified time period. Multi-temporal analysis is common in the Earth Observation field. Here we take NDVI as an example and demonstrate how to calculate the difference of NDVI between two acquisitions using [`mosaicking: ORBIT`](https://docs.sentinel-hub.com/api/latest/evalscript/v3/#mosaicking) and [`preProcessScenes`](https://docs.sentinel-hub.com/api/latest/evalscript/v3/#preprocessscenes-function-optional) in one single request.

To implement multi-temporal analysis in the Evalscript, we apply `ORBIT` mosaicking to query daily mosaic in the specified time period. Then, by using the optional `preProcessScenes` function, we find out the acquisition acquired on the date closest to the date 10-day prior to the latest acquisition and filter the out the other unused acquisitions to save Processing Units. Last but not least, in the `evaluatePixel` function we initialise a combined mask to ensure the difference of NDVI between two acquisitions exists only if there is data on both dates.

**Note**: The example script is used to obtain the raw value of NDVI difference. For visualisation purpose, please follow the EO Browser link in the [Evaluate and visualize](#evaluate-and-visualize) section. The visualisation script contains 4 outputs: default, index, eobrowserStats and dataMask. The default layer is a visualisation layer to visualise NDVI difference in EO Browser. The index layer is the actual value of the NDVI difference. The eobrowserStats and the dataMask layer is configured to activate statistical features on EO Browser. Please see the [FAQ](https://www.sentinel-hub.com/faq/#how-configure-your-layers-statistical-info-eo-browser) for more details.

## Author of the script

William Ray

## Description of representative images
The following image shows the NDVI difference between the latest acquisition and the acquisition 10-day prior to the latest one during the time period from 2nd of April, 2023 to 2nd June, 2023.
![NDVI difference example](fig/fig1.png)
