---
title: Barren Soil Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/barren_soil/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - Updated version
  - updated_script.js
examples:
- zoom: '13'
  lat: '45.98008'
  lng: '14.50856'
  datasetId: S2L1C
  fromTime: '2018-10-16T00:00:00.000Z'
  toTime: '2019-04-16T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/barren_soil/script.js
  additionalQueryParams:
  - - mosaickingOrder
    - mostRecent
  - - cloudCoverage
    - '24'
---

## General description of the script

The barren soil script applies the Bare soil index (BSI) to the red channel, with NIR B08 applied to the green channel and SWIR band B11 applied to the blue channel. The index is multiplied to increase its brightness. It shows all vegetation in green and barren ground in red colors. Water appears black. As the script displays barren ground in red, the user can use this information to figure out the status of the crops (growing, not yet growing), detect recent deforestation or monitor droughts. It can also be used to detect landslides or determine the extent of erosion in non-vegetated areas. Unfortunately, it also highlights certain buildings, making bare ground areas difficult to separate from dwellings. It should be noted, that the result depends on season vegetation and farming.

The bare soil index for Sentinel-2: 

**BSI = ((B11 + B04) - (B08 + B02)) / ((B11 + B04) + (B08 + B02))**

The **Updated version** tab (`updated_script.js`) is an Evalscript V3 rewrite that keeps the same colour scheme but adds two extra outputs - `index` and `eobrowserStats` (the BSI scaled to 0-1, where 1 = definitely bare soil and 0 = not bare soil) - so EO Browser shows the value at a pixel and can build Statistical Info and temporal charts. It also masks clouds and water (and other non-soil classes) via the Scene Classification Layer, following the same palette approach as the [kNDVI script](/sentinel-2/kndvi/). Updated-version contributor: András Zlinszky.

## Author of the script

Monja Sebela

## Description of representative images

Barren Soil script applied to Sentinel-2 image south of Ljubljana, Slovenia.

![Barren Soil script applied to Sentinel-2 south of Ljubljana, Slovenia](fig/fig1.jpg)

## Credits

The BSI used is the following one:  

**BSI = ((SWIR2 + R)−(NIR + B)) / ((SWIR2 + R)+(NIR + B))**

It was found in this article, page 3: 

- _A Modified Bare Soil Index to Identify Bare Land Features during Agricultural Fallow-Period in Southeast Asia Using Landsat 8_. Can Trong Nguyen, Amnat Chidthaisong, Phan Kieu Diem, Lian-Zhi Huo. Land 2021, 10, 231. Page 3. URL: https://www.mdpi.com/2073-445X/10/3/231/pdf
