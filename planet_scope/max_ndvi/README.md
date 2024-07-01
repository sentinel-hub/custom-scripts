---
title: 'Max Multitemporal NDVI'
parent: Planetscope
grand_parent: Planet
layout: script
permalink: /planet_scope/max_ndvi/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '15'
  lat: '-16.60556'
  lng: '-48.80419'
  datasetId: 'ccb1f8f0-e5bf-4c31-afe5-d8803bcbde2a'
  fromTime: '2022-11-01T00:00:00.000Z'
  toTime: '2023-11-19T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/planet_scope/max_ndvi/script.js
  additionalQueryParams:
  - - themeId
    - PLANET_SANDBOX
---

## General description

The script evaluates the NDVI for each scene of the past month and returns the highest NDVI value for every pixel. In short, it returns the highest NDVI values of the past month for every pixel. The script runs on-the-fly, since
it doesn't require preprocessing. It can be used as a cloud free background or an input for further analysis, such as change detection and classification. [Find out more.](https://www.sentinel-hub.com/max_service){:target="_blank"}  
Note that multi-temporal processing needs to be enabled for this script to run.

## Author of the script

William Ray

## Description of representative images

![figure 1](fig/fig1.png)



