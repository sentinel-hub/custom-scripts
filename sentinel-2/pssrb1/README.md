---
title: PSSRb1 (Pigment specific simple ration for Chlorophyll B)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/pssrb1/
nav_exclude: true
examples:
- zoom: '10'
  lat: '42.76703'
  lng: '11.22847'
  datasetId: S2L2A
  fromTime: '2020-07-12T00:00:00.000Z'
  toTime: '2020-07-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/pssrb1/script.js
---

## General description of the script

Pigment specific simple ratio for chlorophyll b is calculated as: 

**PSSRb = 800nm / 650nm**  
**PSSRb = B08 / B04**

## Description of representative images

PSSRb, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![PSSRb](fig/fig1.png)