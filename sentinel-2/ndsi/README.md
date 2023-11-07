---
title: Normalised Difference Snow Index, NDSI
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndsi/
nav_exclude: true
scripts:
    - [Visualization, script.js]
    - [EO Browser, eob.js]
    - [Raw Values, raw.js]
---

## Evaluate and visualize
 - [EO Browser](https://sentinelshare.page.link/twxy){:target="_blank"} 
 - [Copernicus Browser](link.dataspace.copernicus.eu/wkj){:target="_blank"}


## General description of the script

The Sentinel-2 normalized difference snow index is a ratio of two bands: one in the VIR (Band 3) and one in the SWIR (Band 11). Values above 0.42 are usually snow. More info [here.](https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm-overview){:target="_blank"}

The Sentinel-2 normalised difference snow index can be used to differentiate between cloud and snow cover as snow absorbs in the short-wave infrared light, but reflects the visible light, whereas cloud is generally reflective in both wavelengths. In the visualization script snow cover is represented in bright vivid blue.

## Description of representative images

Visualized NDSI over New Zealand, acquired on 2019-09-19. 

![NDSI Visualized](fig/vis.png) 

The NDSI script applied to Klagenfurt, Austria returning raw values. 

![NDSI Raw](fig/raw.png) 
