---
title: Normalized difference vegetation index
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndvi/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '10'
  lat: '42.76703'
  lng: '11.22847'
  datasetId: S2L2A
  fromTime: '2020-07-12T00:00:00.000Z'
  toTime: '2020-07-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndvi/eob.js
---
## General description

The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.

The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation; see [1] for details.

The normalized difference vegetation index, abbreviated NDVI, is defined as   

$$NDVI := \mathtt{Index}(NIR,RED) = \frac{NIR-RED}{NIR+RED}.$$  

For Sentinel-2, the index looks like this:

$$NDVI := \mathtt{Index}(B8,B4) = \frac{B8-B4}{B8+B4}.$$   

## NDVI for other datasets: 

[Landsat 8 NDVI](https://custom-scripts.sentinel-hub.com/landsat-8/ndvi/){:target="_blank"} = **(B05 - B04) / (B05 + B04)**

Landsat 5 and 7 NDVI = **(B04 - B03) / (B04 + B03)**

[MODIS NDVI](https://custom-scripts.sentinel-hub.com/modis/ndvi/) = **(B02 - B01) / (B02 + B01)**

ENVISAT MERIS NDVI = **(B13 - B07) / (B13 + B07)**

[Landsat 1-5 MSS NDVI](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/ndvi/) = **(B04 - B02) / (B04 + B02)**

[Landsat 4-5 TM](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/ndvi/) = **(B04 - B03) / (B04 + B03)**

[Landsat 7 ETM+ NDVI](https://custom-scripts.sentinel-hub.com/landsat-7-etm/ndvi/) = **(B04 - B03) / (B04 + B03)**

## Description of representative images

NDVI of Rome. Acquired on 8.10.2017.

![NDVI of Rome](fig/fig1.png)

## Color legend
<table>
  <tr>
    <th>NDVI range</th>
    <th>HTLM color code</th>
    <th>Color</th>
  </tr>
  <tr>
    <td>NDVI &lt; -0.5</td>
    <td>#0c0c0c</td>
    <td style="background-color: #0c0c0c;"></td>
  </tr>
  <tr>
    <td>-0.5 &lt; NDVI &leq; 0</td>
    <td>#eaeaea</td>
    <td style="background-color: #eaeaea;"></td>
  </tr>
  <tr>
    <td>0 &lt; NDVI &leq; .1</td>
    <td>#ccc682</td>
    <td style="background-color: #ccc682;"></td>
  </tr>
  <tr>
    <td>.1 &lt; NDVI &leq; .2</td>
    <td>#91bf51</td>
    <td style="background-color: #91bf51;"></td>
  </tr>
  <tr>
    <td>.2 &lt; NDVI &leq; .3</td>
    <td>#70a33f</td>
    <td style="background-color: #70a33f;"></td>
  </tr>
  <tr>
    <td>.3 &lt; NDVI &leq; .4</td>
    <td>#4f892d</td>
    <td style="background-color: #4f892d;"></td>
  </tr>
  <tr>
    <td>.4 &lt; NDVI &leq; .5</td>
    <td>#306d1c</td>
    <td style="background-color: #306d1c;"></td>
  </tr>
  <tr>
    <td>.5 &lt; NDVI &leq; .6</td>
    <td>#0f540a</td>
    <td style="background-color: #0f540a;"></td>
  </tr>
  <tr>
    <td>.6 &lt; NDVI &leq; 1.0</td>
    <td>#004400</td>
    <td style="background-color: #004400;"></td>
  </tr>

</table>

## References
 [1] Wikipedia, [Normalized Difference Vegetation Index
](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index). Accessed on October 4th 2017.
