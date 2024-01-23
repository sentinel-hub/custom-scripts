---
title: Atmospherically Resistant Vegetation Index (ARVI)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/arvi/
nav_exclude: true
examples:
- zoom: '11'
  lat: '42.19012'
  lng: '11.99707'
  datasetId: S2L1C
  fromTime: '2018-05-07T00:00:00.000Z'
  toTime: '2018-11-07T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/arvi/script.js
  additionalQueryParams:
  - - mosaickingOrder
    - mostRecent
  - - cloudCoverage
    - '6'
---

## General description of the script

ARVI is most useful in regions of high atmospheric aerosol content. It uses blue light reflectance measurements to correct for the atmospheric scattering effects, that also influence reflectance of red light.

General formula: 

**(NIR - RED - y * (RED - BLUE))/ (NIR + RED - y*(RED-BLUE))**

Values description: The range for an ARVI is -1 to 1 where green vegetation generally falls between values of 0.20 to 0.80.

## Description of representative images

The ARVI of Rome, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![ARVI](fig/fig1.png)



