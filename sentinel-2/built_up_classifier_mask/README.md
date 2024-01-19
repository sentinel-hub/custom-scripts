---
title: Built-up binary classifier mask
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/built_up_classifier_mask/
nav_exclude: true
---


## Evaluate and visualize
 - [Copernicus Browser](https://dataspace.copernicus.eu/browser/?zoom=13&lat=46.06168&lng=14.51225&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fsh.dataspace.copernicus.eu%2Fogc%2Fwms%2F274a990e-7090-4676-8f7d-f1867e8474a7&evalscripturl=https%3A%2F%2Fcustom-scripts.sentinel-hub.com%2Fsentinel-2%2Fbuilt_up_classifier_mask%2Fscript.js&datasetId=S2_L1C_CDAS&fromTime=2020-03-14T00%3A00%3A00.000Z&toTime=2020-09-14T23%3A59%3A59.999Z&mosaickingOrder=mostRecent&demSource3D=%22MAPZEN%22&cloudCoverage=58&dateMode=MOSAIC#custom-script)

## General description of the script

The linked evalscript runs a prediction by a LightGBM classifier on the area-of-interest on L2A data. The pixel-wise probabilities are compared against a 0.8 threshold. Pixels with probabilities above this threshold are considered built-up (assigned a value of one), while others are non-built-up (assigned a zero). The mask is then expressed as a blue-tinted mask on Sentinel-2 True Color.

For detailed information about the model read the [blog post](https://medium.com/p/7f2d7114ed1c/).


## Author of the script

Matic Pečovnik, Sinergise

## Description of representative images

Built-up classifier mask script applied on Spodnja Savinjska Region, Slovenia.

Image taken on 29/06/2021.

![Built-up classifier mask script applied on Spodnja Savinjska Region, Slovenia](fig/example.png)