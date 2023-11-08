---
title: EVI (Enhanced Vegetation Index)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/evi/
nav_exclude: true
scripts:
    - [Visualization, script.js]
    - [EO Browser, eob.js]
    - [Raw Values, raw.js]
---

## Evaluate and visualize

 - [EO Browser](https://sentinelshare.page.link/NnPE){:target="_blank"}
 - [Copernicus Browser](https://link.dataspace.copernicus.eu/kkf){:target="_blank"}

## General description of the script

For Sentinel-2, the index looks like this:

$$EVI = \frac{B8-B4}{B8+6*B6-7.5*B2} + 1$$ 

In areas of dense canopy cover, where leaf area index (LAI) is high, the blue wavelengths can be used to improve the accuracy of NDVI, as it corrects for soil background signals and atmospheric influences.

Values description: The range of values for EVI is -1 to 1, with healthy vegetation generally around 0.20 to 0.80.


## Description of representative images

EVI, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![EVI](fig/fig1.png)
