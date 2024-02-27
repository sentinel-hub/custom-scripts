---
layout: default
title: Sentinel-2 L2A Quarterly Cloudless Mosaic
nav_order: 5
parent: Sentinel
permalink: /sentinel/sentinel2-quarterly-cloudless-mosaic/
---

# Sentinel-2 Quarterly Cloudless Mosaic

Sentinel-2 Quarterly Mosaics are mosaics generated from three months of Sentinel-2 level 2A, offering a cloudless mosaic of the whole world for 4 spectral Sentinel-2 bands (Blue, Green, Red, and NIR) and an ancillary band of observaions. The resolution of the collection is 10 meters.

The algorithm used to derive the product was run independently at pixel level. For each pixel, a 3-month stack of Sentinel-2 L2A `B02`, `B03`, `B04`, `B08`, and `SCL` observations was taken. The observations were marked `invalid` if the value of the Sentinel-2 L2A scene classification band (`SCL`) is one of the following values:
- 1 (SATURATED_DEFECTIVE)
- 3 (CLOUD_SHADOW)
- 7 (CLOUD_LOW_PROBA / UNCLASSIFIED)
- 8 (CLOUD_MEDIUM_PROBA)
- 9 (CLOUD_HIGH_PROBA)
- 10 (THIN_CIRRUS)

The invalid observations were removed from the stack. The number of valid observations was recorded for each pixel as the output of `observations` band. After the removal of invalid observations, each band was sorted separately and the value of the first quartile was taken as the output value in digital number (DN; `DN = reflectance * 10000`). If there is no valid observation, the output value will be `-32768` which represents no data. In this case, the `observations` band should has the value `0`.


Please find related resources and more information about the collection [here](https://documentation.dataspace.copernicus.eu/Data/SentinelMissions/Sentinel2.html#sentinel-2-level-3-quarterly-mosaics).

- [True Color](/sentinel2-quarterly-cloudless-mosaic/true-color)
- [False Color](/sentinel2-quarterly-cloudless-mosaic/false-color)
- [NDVI](/sentinel2-quarterly-cloudless-mosaic/ndvi)
- [NDWI](/sentinel2-quarterly-cloudless-mosaic/ndwi)
