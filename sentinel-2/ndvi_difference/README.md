---
title: NDVI difference between two dates
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndvi_difference/
nav_exclude: true
scripts:
    - [Visualization, script.js]
    - [EO Browser, eob.js]
    - [Raw Values, raw.js]
---


## Evaluate and visualize
- [EO Browser](https://sentinelshare.page.link/xc8s)

**Note**: The default output in the script is the visualisation layer for the EO Browser generated via the [ColorRampVisualizer](https://docs.sentinel-hub.com/api/latest/evalscript/functions/#colorrampvisualizer) which interpolates the range of NDVI difference from -2 to 2 with the color ramps defined below. The actual value of the NDVI difference can be obtained from the output `index`.

<table>
  <tr>
    <th>NDVI difference</th>
    <th>HTLM color code</th>
    <th>Color</th>
  </tr>
  <tr>
    <td>-2</td>
    <td>#8e0152</td>
    <td style="background-color: #8e0152;"></td>
  </tr>
  <tr>
    <td>-1</td>
    <td>#c51b7d</td>
    <td style="background-color: #c51b7d;"></td>
  </tr>
  <tr>
    <td>0</td>
    <td>#f7f7f7</td>
    <td style="background-color: #f7f7f7;"></td>
  </tr>
  <tr>
    <td>1</td>
    <td>#4d9221</td>
    <td style="background-color: #4d9221;"></td>
  </tr>
  <tr>
    <td>2</td>
    <td>#276419</td>
    <td style="background-color: #276419;"></td>
  </tr>
</table>


## General description
This script aims to obtain the diffence of NDVI between the latest acquisition and the acquisition 10-day prior to the latest on within a specified time period. Multi-temporal analysis is common in the Earth Observation field. Here we take NDVI as an example and demonstrate how to calculate the difference of NDVI between two acquisitions using [`mosaicking: ORBIT`](https://docs.sentinel-hub.com/api/latest/evalscript/v3/#mosaicking) and [`preProcessScenes`](https://docs.sentinel-hub.com/api/latest/evalscript/v3/#preprocessscenes-function-optional) in one single request.

To implement multi-temporal analysis in the Evalscript, we apply `ORBIT` mosaicking to query daily mosaic in the specified time period. Then, by using the optional `preProcessScenes` function, we find out the acquisition acquired on the date closest to the date 10-day prior to the latest acquisition and filter the out the other unused acquisitions to save Processing Units. Last but not least, in the `evaluatePixel` function we initialise a combined mask to ensure the difference of NDVI between two acquisitions exists only if there is data on both dates.

**Note**: The example script is used to obtain the raw value of NDVI difference. For visualisation purpose, please follow the EO Browser link in the [Evaluate and visualize](#evaluate-and-visualize) section. The visualisation script contains 4 outputs: default, index, eobrowserStats and dataMask. The default layer is a visualisation layer to visualise NDVI difference in EO Browser. The index layer is the actual value of the NDVI difference. The eobrowserStats and the dataMask layer is configured to activate statistical features on EO Browser. Please see the [FAQ](https://www.sentinel-hub.com/faq/#how-configure-your-layers-statistical-info-eo-browser) for more details.

## Author of the script

Chung-Xiang Hong

## Description of representative images
The following image shows the NDVI difference between the latest acquisition and the acquisition 10-day prior to the latest one during the time period from 29th of June, 2023 to 29th July, 2023.
![NDVI difference example](fig/ndvi_difference_pink_green.png)
