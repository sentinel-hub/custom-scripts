---
title: Normalized difference vegetation index with uncertainty
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndvi_uncertainty/
nav_exclude: true
examples:
- zoom: '11'
  lat: '40.39519549132737'
  lng: '-3.739471435546875'
  datasetId: S2L2A
  fromTime: '2023-07-01'
  toTime: '2023-08-01'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/ndvi_uncertainty/script.js
---

## Basic information
 - Bands used to calculate NDVI index: B4, B8
 - Bands used by the script: B2, B3, B4, B8

## General description

This script allows you to visually interpret how the normalized density vegetation index (NDVI) [[1]](#ref1) is affected by the uncertainties in detector reflectances of the L1C products.

Since NDVI is defined as a ratio of difference over sum of bands 8 and 4 (near infrared and red):   
$$NDVI := \mathtt{Index}(B8,B4) = \frac{B8-B4}{B8+B4}.$$

the uncertainty propagation [[3]](#ref3) gives us the uncertainty of the index itself as

$$\Delta_{NDVI} := \frac{\sqrt{B8^2 \Delta_{B4}^2 + B4^2 \Delta_{B8}^2 - 2B4 B8 \Delta_{B4B8}}}{(B8+B4)^2}$$.

where $\Delta_{B4}$ and $\Delta_{B8}$ are uncertainties of red and near infrared bands respectively (reported by ESA to be 0.02 and 0.03). We left out the mixed part $\Delta_{B4B8}$ as if the two uncertainties were not correlated.

The script encodes the uncertainty with darkness, as can be seen in following figure [[2]](#ref2)  
![Color map of the NDVI uncertainty script from [2][1]](fig/cmap.jpg)

## Description of representative images

NDVI with uncertainty of Madrid. Acquired on 10.26.2019.

![NDVI of Rome](fig/fig1.png)

## References
<a name="ref1"></a>[1] Wikipedia, [Normalized Difference Vegetation Index
](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index). Accessed on October 4th 2017.   
<a name="ref2"></a>[2] Sentinel-Hub, [Ad hoc testing of algorithms globally](https://medium.com/sentinel-hub/ad-hoc-testing-of-algorithms-globally-8fb1f564f0f5). Accessed October 10th 2017.   
<a name="ref3"></a>[3] Wikipedia, [Propagation of uncertainty](https://en.wikipedia.org/wiki/Propagation_of_uncertainty). Accessed October 10th 2017.
