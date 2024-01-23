---
title: Multitemporal burnt area analysis
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/burned_area/
nav_exclude: true
examples:
- zoom: '12'
  lat: '-33.9912'
  lng: '23.16793'
  datasetId: S2L1C
  fromTime: '2017-05-05T00:00:00.000Z'
  toTime: '2017-06-27T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/burned_area/script.js
  additionalQueryParams:
  - - mosaickingOrder
    - mostRecent
  - - cloudCoverage
    - '100'
---

## General description of the script

The script takes two pre-defined dates as an input (in preProcessScenes) and calculates changes of the [normalised burn ratio index.](https://custom-scripts.sentinel-hub.com/sentinel-2/nbr/){:target="_blank"} [See the discussion here.](https://forum.sentinel-hub.com/t/temporal-analysis-burned-area/83/6){:target="_blank"}
## Author of the script

Designed by [FC Basson](https://forum.sentinel-hub.com/u/fcbasson/summary){:target="_blank"} and improved by [@Pierre_Markuse and visually](https://twitter.com/Pierre_Markuse?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor){:target="_blank"}

## Description of representative images

Burned area analysis applied to the South African coast.

![BBurned area](fig/fig1.png)



