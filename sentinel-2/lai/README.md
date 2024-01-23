---
title: LAI (Leaf Area Index)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/lai/
nav_exclude: true
examples:
- zoom: '11'
  lat: '43.514198796857976'
  lng: '16.601028442382812'
  datasetId: S2L2A
  fromTime: '2023-07-01'
  toTime: '2023-08-01'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/lai/script.js
---

## General description of the script

LAI is a dimensionless index measuring the one-sided green leaf area over a unit of land (m^2 / m^2).

Note that the LAI script is as implemented in SNAP but without input and output validation!
Input/output values which are suspect are not reported or changed. Most values, however, do not fall under this category.
Visualized as an interval from 0-3. This can be adjusted in the evaluatePixel method.

## Description of representative images

Leaf area index, Rome. Acquired on 08.10.2017.

![snow classifier](fig/fig1.png)