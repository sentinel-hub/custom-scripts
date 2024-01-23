---
title: SWIR - Short Wave Infrared RGB Composite
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/swir-rgb/
nav_exclude: true
examples:
- zoom: '10'
  lat: '41.98803'
  lng: '12.70981'
  datasetId: S2L2A
  fromTime: '2021-03-31T00:00:00.000Z'
  toTime: '2021-03-31T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: "https://custom-scripts.sentinel-hub.com/sentinel-2/swir-rgb/script.js"
---

## General description of the script

Short wave infrared (SWIR) measurements can help scientists estimate how much water is present in plants and soil, as water absorbs SWIR wavelengths. Short wave infrared bands (a band is a region of the electromagnetic spectrum; a satellite sensor can image Earth in different bands) are also useful for distinguishing between cloud types (water clouds versus ice clouds), snow and ice, all of which appear white in visible light. In this composite vegetation appears in shades of green, soils and built-up areas are in various shades of brown, and water appears black. Newly burned land reflects strongly in SWIR bands, making them valuable for mapping fire damages. Each rock type reflects shortwave infrared light differently, making it possible to map out geology by comparing reflected SWIR light.

#### The composite:

- For Sentinel-2: **B12, B8A, B04**

- For [Landsat 7 ETM+](https://custom-scripts.sentinel-hub.com/landsat-7-etm/swir/): **B07, B05, B03**
- For [Landsat 4-5 TM](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/swir/): **B07, B05, B03**
- For [Landsat 8](https://custom-scripts.sentinel-hub.com/landsat-8/swir/): **B07, B06, B04**
- For [MODIS](https://custom-scripts.sentinel-hub.com/modis/swir/): **B07, B06, B01**

## Description of representative images

SWIR composite over Rome, Italy. 

![SWIR Rome](fig/fig1.png)




