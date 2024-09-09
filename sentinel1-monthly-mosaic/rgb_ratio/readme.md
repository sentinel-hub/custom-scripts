---
title: RGB Ratio Script
parent: Sentinel-1
grand_parent: Sentinel
layout: script
permalink: /sentinel1-monthly-mosaic/rgb_ratio/
nav_exclude: true
examples:
- zoom: '11'
  lat: '53.62774'
  lng: '9.61716'
  datasetId: S1_MOSAIC
  fromTime: '2023-09-01T00:00:00.000Z'
  toTime: '2023-09-01T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel1-monthly-mosaic/rgb_ratio/script.js
---

## Collection Access

[Sentinel-1 Monthly Mosaic](https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Data/S1GRD.html) is one of the [Sentinel-1 products](https://documentation.dataspace.copernicus.eu/Data/SentinelMissions/Sentinel1.html), that is offered in [Copernicus Data Space Ecosystem](https://dataspace.copernicus.eu/). The data is accessible via [Copernicus Browser](https://browser.dataspace.copernicus.eu/). To access the data, you need a [Copernicus Data Space Ecosystem account](https://documentation.dataspace.copernicus.eu/Registration.html), and then either create a [Sentinel Hub Process API request](https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Process.html) to the collection or to visualise the data via [Copernicus Browser](https://link.dataspace.copernicus.eu/h9t). The collection ID is `3c662330-108b-4378-8899-525fd5a225cb`.

[comment]: (and the collection type is `byoc-5460de54-082e-473a-b6ea-d5cbe3c17cca`.: # )

## General description of the script

This script combines the gamma0 of the VV and VH polarizations into a false color visualization. It uses the VV polarization in the red channel, the VH polarization in the green channel, and a ratio of VH/VV in the blue channel. It shows water areas in dark red (black), urban areas in yellow, vegetated areas in turquoise, and bare ground in dark purple.

For snowy and icy areas, the visualization can vary from light yellow to blue to red. In order not to confuse cryogenic features with non-cryogenic ones, some general information about the location is helpful in interpreting the image.