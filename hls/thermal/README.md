---
title: Thermal Visualization
parent: Harmonized Landsat Sentinel
layout: script
permalink: /hls/thermal/
nav_exclude: true
examples:
- zoom: '12'
  lat: '46.6200'
  lng: '7.86'
  datasetId: AWS_HLS
  fromTime: '2023-09-16T00:00:00.000Z'
  toTime: '2023-09-16T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/hls/thermal/script.js
---

## Description

This thermal visualization is based on band ThermalInfrared1. At the central wavelength of 10895 nm it measures in the thermal infrared, or TIR. Instead of measuring the temperature of the air, like weather stations do, band ThermalInfrared1 reports on the ground itself, which is often much hotter.

## Description of representative images

HLS thermal visualization of Rome. Acquired on 2020-07-30, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)


 