---
title: OTCI - OLCI Tristimulus
parent: Sentinel-3
grand_parent: Sentinel
layout: script
permalink: /sentinel-3/tristimulus/
nav_exclude: true
examples:
- zoom: '9'
  lat: '19.768'
  lng: '93.233'
  fromTime: '2020-01-27T00:00:00.000Z'
  toTime: '2020-01-27T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  datasetId: S3OLCI
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-3/tristimulus/script.js
---

## Description

The colours from natural waters differ markedly over the globe, depending on the water composition and illumination conditions. The space-borne “ocean colour” instruments are operational instruments designed to retrieve important water-quality indicators, based on the measurement of water leaving radiance in a limited number (5 to 10) of narrow (≈10 nm) bands. 

The derivation of the true colour of natural waters is based on the calculation of the Tristimulus values that are the three primaries (X, Y, Z) that specify a colour stimulus of the human eye. On how tristimulus is calculated, read [here.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4634488/){:target="_blank"}

## Description of representative images

Tristimulus water colors at west coast of Myanmat. Acquired on 27.1.2020, processed by Sentinel Hub. 

![Tristimulus of Myanmar](fig/fig1.png)



