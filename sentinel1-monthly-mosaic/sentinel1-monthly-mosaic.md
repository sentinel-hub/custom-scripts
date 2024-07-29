---
layout: default
title: Sentinel-1 Monthly Mosaic
nav_order: 5
parent: Sentinel
permalink: /sentinel/sentinel1-monthly-mosaic/
---

# Sentinel-1 Monthly Mosaic

Sentinel-1 Monthly mosaics are an analysis-ready product of individual Sentinel-1 acquisitions. The dataset is prepared for most populated areas of the world. Two separate data products are available: Sentinel-1 IW Monthly Mosaics for the temperate zone and the tropics with VV and VH polarization, and Sentinel-1 DH Monthly Mosaics with HH and HV polarization for the polar regions. The resolution of the collection is 20 meters.

The algorithm used to derive the product was run independently at pixel level. For each pixel and each band, a weighted average of the pixel values was calculated. The weights were calculated based on the local resolution (the inverse of the imaged area) that particular pixel. The imaged area is a function of the sensor configuration (look angle and azimuth) and the local terrain aspect and slope. If the slope is facing towards the sensor, the imaged area is small and returned intensity will be high, while if it is facing away from the sensor, the the imaged area is large and the returned intensity will be low or even zero for radar shadows.
For more details of this correction process, visit [(Small 2012)](https://ieeexplore.ieee.org/abstract/document/6350465).

Please find related resources and more information about the collection [here](https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Data/S1GRD.html#processing-chain).

- [RGB ratio](/sentinel1-monthly-mosaic/rgb_ratio)
- [False Color](/sentinel2-quarterly-cloudless-mosaic/false-color)
- [NDVI](/sentinel2-quarterly-cloudless-mosaic/ndvi)
- [NDWI](/sentinel2-quarterly-cloudless-mosaic/ndwi)
