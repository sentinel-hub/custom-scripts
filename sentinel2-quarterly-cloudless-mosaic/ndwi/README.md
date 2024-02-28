---
title: Sentinel-2 L2A Quarterly Cloudless Mosaic - NDWI
parent: Sentinel-2 L2A Quarterly Cloudless Mosaic
grand_parent: Sentinel
layout: script
permalink: /sentinel2-quarterly-cloudless-mosaic/ndwi/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - Copernicus Browser
  - cb.js
- - Raw Values
  - raw.js
examples:
- zoom: '7'
  lat: '65.14407'
  lng: '-19.05763'
  datasetId: 5460de54-082e-473a-b6ea-d5cbe3c17cca
  fromTime: '2023-10-01T00:00:00.000Z'
  toTime: '2023-10-01T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel2-quarterly-cloudless-mosaic/ndwi/cb.js
---

## Collection Access

[Sentinel-2 L2A Quarterly Cloudless Mosaic](https://documentation.dataspace.copernicus.eu/Data/SentinelMissions/Sentinel2.html#sentinel-2-level-3-quarterly-mosaics) is one of the [Sentinel-2 products](https://documentation.dataspace.copernicus.eu/Data/SentinelMissions/Sentinel2.html), that is offered in [Copernicus Data Space Ecosystem](https://dataspace.copernicus.eu/). The data is accessible via [Copernicus Browser](https://browser.dataspace.copernicus.eu/). To access the data, you need a [Copernicus Data Space Ecosystem account](https://documentation.dataspace.copernicus.eu/Registration.html), and then either create a [Sentinel Hub Process API request](https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Process.html) to the collection or to visualise the data via [Copernicus Browser](https://link.dataspace.copernicus.eu/h9t). The collection ID is `5460de54-082e-473a-b6ea-d5cbe3c17cca`, and the collection type is `byoc-5460de54-082e-473a-b6ea-d5cbe3c17cca`.

## General description

The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies.

NDWI = (GREEN - NIR) / (GREEN + NIR)

For Sentinel-2, the index calculates as:

NDWI = (B03 - B08) / (B03 + B08)

See also [this page](https://custom-scripts.sentinel-hub.com/sentinel-2/ndwi/).

## Description of representative images

NDWI of Iceland, 01.10.2023.

![Quarterly Cloudless Mosaic NDWI](fig/fig1.png)
