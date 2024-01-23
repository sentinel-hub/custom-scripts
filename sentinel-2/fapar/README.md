---
title: FAPAR (The Fraction of Absorbed Photosynthetically Active Radiation)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/fapar/
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
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/fapar/script.js
---

## General description of the script

FAPAR is the fraction of incoming solar radiation absorbed for photosynthesis by a photosynthetic organism (live leaves).

Note that the FAPAR script is as implemented in SNAP but without input and output validation!
Input/output values which are suspect are not reported or changed. Most values, however, do not fall under this category.
Visualized as an interval from 0-1. This can be adjusted in the evaluatePixel method.

## Description of representative images

FAPAR visualization of Rome. Acquired on 8.10.2017.

![FAPAR of Rome](fig/fig1.png)
