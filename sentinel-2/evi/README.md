---
title: EVI (Enhanced Vegetation Index)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/evi/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '12'
  lat: '42.40876'
  lng: '12.00634'
  datasetId: S2L2A
  fromTime: '2023-10-02T00:00:00.000Z'
  toTime: '2023-10-02T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/sentinel-2/evi/eob.js
---
## General description of the script

For Sentinel-2, the index looks like this:

$$EVI = 2.5 \cdot (\frac{B8-B4}{B8+6 \cdot B4-7.5 \cdot B2 +1})$$ 

In areas of dense canopy cover, where leaf area index (LAI) is high, the blue wavelengths can be used to improve the accuracy of NDVI, as it corrects for soil background signals and atmospheric influences.

Values description: The range of values for EVI is -1 to 1, with healthy vegetation generally around 0.20 to 0.80.


## Description of representative images

EVI, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![EVI](fig/fig1.png)
