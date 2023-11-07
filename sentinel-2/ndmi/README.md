---
title: Normalized Difference Moisture Index (NDMI)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndmi/
nav_exclude: true
scripts:
    - [Visualization, script.js]
    - [EO Browser, eob.js]
    - [Raw Values, raw.js]
---

## Evaluate and visualize
   
 - [EO Browser](https://sentinelshare.page.link/G8yN){:target="_blank"}
 - [Copernicus Browser](https://link.dataspace.copernicus.eu/ewj){:target="_blank"}

## General description of the script

The NDMI is a normalized difference moisture index, that uses NIR and SWIR bands to display moisture. 
The SWIR band reflects changes in both the vegetation water content and the spongy mesophyll structure in vegetation canopies, 
while the NIR reflectance is affected by leaf internal structure and leaf dry matter content but not by water content. 
The combination of the NIR with the SWIR removes variations induced by leaf internal structure and leaf dry matter content, improving the accuracy in retrieving the vegetation water content. 
The amount of water available in the internal leaf structure largely controls the spectral reflectance in the SWIR interval of the electromagnetic spectrum. 
SWIR reflectance is therefore negatively related to leaf water content. In short, NDMI is used to monitor changes in water content of leaves, and was [proposed by Gao.](https://www.sciencedirect.com/science/article/abs/pii/S0034425796000673){:target="_blank"}
NDMI is computed using the near infrared (NIR) and the short wave infrared (SWIR) reflectances:

Sentinel-2 NDMI = **(B08 - B11) / (B08 + B11)**

[Landsat 4-5 TM NDMI](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/ndmi/) = **(B04 - B05) / (B04 + B05)**

[Landsat 7 ETM+ NDMI](https://custom-scripts.sentinel-hub.com/landsat-7-etm/moisture-index/) = **(B04 - B05) / (B04 + B05)**

[Landsat 8 NDMI](https://custom-scripts.sentinel-hub.com/landsat-8/ndmi/#) = **(B05 - B06) / (B05 + B06)**

[MODIS NDMI](https://custom-scripts.sentinel-hub.com/modis/ndmi/) = **(B02 - B06) / (B02 + B06)**

{: .note}

NDWI index is often used synonymously with the NDMI index, often using NIR-SWIR combination as one of the two options. Gao, referenced above, also called the index NDWI. NDMI seems to be consistently described using NIR-SWIR combination. As the indices with these two combinations work very differently, with NIR-SWIR highlighting differences in water content of leaves, and GREEN-NIR highlighting differences in water content of water bodies, we have decided to separate the indices on our repository as NDMI using NIR-SWIR, and NDWI using GREEN-NIR.

## Description of representative images

The NDMI of Rome, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![NDWI](fig/fig1.png)

The NDMI of Betsiboka river, Madagascar. Acquired on 2020-08-01, processed by Sentinel Hub. 

![NDWI](fig/fig2.jpg)

## References

- [Normalized difference water index](https://www.usgs.gov/land-resources/nli/landsat/normalized-difference-moisture-index){:target="_blank"}
- Gao, B.-C. 1996. NDWI - A normalized difference water index for remote sensing of vegetation liquid
water from space. Remote Sensing of Environment 58: 257-266. [Link to Article](https://www.sciencedirect.com/science/article/abs/pii/S0034425796000673){:target="_blank"}

