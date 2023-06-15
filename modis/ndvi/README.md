---
title: MODIS NDVI
parent: MODIS
layout: script
permalink: /modis/ndvi/
nav_exclude: true
---


## Evaluate and visualize

- [EO Browser](https://sentinelshare.page.link/sH51){:target="_blank"}   

## Description

The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.

The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation; see [1] for details.

The normalized difference vegetation index, abbreviated NDVI, is defined as

**NDVI = (NIR - RED) / (NIR + RED)**

For MODIS, the index looks like this:

**NDVI = (B02 - B01) / (B02 + B01)**

See also [this page](https://custom-scripts.sentinel-hub.com/sentinel-2/ndvi/).

## Description of representative images

MODIS NDVI of Europe. Acquired on 5. Acquired on 2021-08-01, processed by Sentinel Hub. 

![L8 NDVI](fig/fig1.png)


 
