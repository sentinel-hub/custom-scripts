---
title: Landsat 7 ETM+ NDWI
parent: Landsat 7 ETM+
grand_parent: Landsat
layout: script
permalink: /landsat-7-etm/ndwi/
nav_exclude: true
---


## Evaluate and Visualize

- [EO Browser](https://sentinelshare.page.link/YDFp)
 
## General description of the script
The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies. 

**NDWI = (GREEN - NIR) / (GREEN + NIR)**

For Landsat 7 ETM+, the index calculates as: 

**NDWI = (B02 - B04) / (B02 + B04)**

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

See also [this page](https://custom-scripts.sentinel-hub.com/sentinel-2/ndwi/#).

## Description of representative images

The NDWI over northern Tunisia. Acquired on 2001-06-23.
![The script example 1](fig/fig1.png)

