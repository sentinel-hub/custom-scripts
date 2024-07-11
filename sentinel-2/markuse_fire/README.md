---
title: Wildfire visualization
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/markuse_fire/
nav_exclude: true
scripts:
- - EO Browser
  - script.js
- - Copernicus Browser
  - cdse.js
examples:
- zoom: '11'
  lat: '55.99961'
  lng: '-122.43681'
  datasetId: S2L1C
  fromTime: '2022-09-10T00:00:00.000Z'
  toTime: '2022-09-10T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: "https://custom-scripts.sentinel-hub.com/sentinel-2/markuse_fire/script.js"
- zoom: '11'
  lat: '55.99961'
  lng: '-122.43681'
  datasetId: S2L1C
  fromTime: '2022-09-10T00:00:00.000Z'
  toTime: '2022-09-10T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: "https://custom-scripts.sentinel-hub.com/sentinel-2/markuse_fire/cdse.js"
---

## General description
The script visualizes wildfires from Sentinel-2 data. It was published by Pierre Markuse on his blog [1] in September 2022.

## Description of representative images

Wildfire east of Split, Croatia. Acquired on 17.7.2017.

![Battleship Fire, Canada.](fig/2022-09-10-Battleship_Mountan_Fire.png)  
![Fires in Sibiria, Russia.](fig/2020-06-28-Sibiria_fires.jpg)

## References

