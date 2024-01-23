---
title: 'Max Multitemporal NDVI'
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/max_ndvi/
nav_exclude: true
examples:
- zoom: '12'
  lat: '40.4'
  lng: '-3.730000000000018'
  datasetId: S2L2A
  fromTime: '2019-05-01'
  toTime: '2019-08-01'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/max_ndvi/script.js
  additionalQueryParams:
  - - maxcc
    - '20'
---

## General description

The script evaluates the NDVI for each scene of the past month and returns the highest NDVI value for every pixel. In short, it returns the highest NDVI values of the past month for every pixel. The script runs on-the-fly, since
it doesn't require preprocessing. It can be used as a cloud free background or an input for further analysis, such as change detection and classification. [Find out more.](https://www.sentinel-hub.com/max_service){:target="_blank"}  
Note that multi-temporal processing needs to be enabled for this script to run.

## Description of representative images

The max NDVI of Madrid, Spain. Acquired on 08.11.2019, processed by Sentinel Hub. 

![max NDVI of Madrid.](fig/fig1.png)



