---
title: Visualising floods using Sentinel-1 overlaid on Sentinel-2 imagery
parent: Data Fusion
layout: script
permalink: /data-fusion/s1_flooding_visualisation/
nav_exclude: true
//edited by András
scripts:
  - [EO Browser, script.js]
  - [Copernicus Browser, copernicus_browser.js]
  - [Sentinel-2 mosaic, mosaic.js]
examples:
- zoom: '12'
  lat: '51.98266'
  lng: '-2.21409'
  datasetId: S1GRD
  fromTime: '2021-01-28T00:00:00.000Z'
  toTime: '2021-01-28T23:59:59.999Z'
  datasetId: S2L2A
  fromTime: '2021-02-28T00:00:00.000Z'
  toTime: '2021-02-28T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/data-fusion/s1_flooding_visualisation/eob.js

---


## Authors

**Author of the datafusion script:**
- William Ray & Maxim Lamare
  
## Evaluate and visualize  
 - [EO Browser](https://sentinelshare.page.link/i2yk)
  
## General description of the script  
  
This script can be used to visualise flood events using Sentinel-1 GRD imagery. This is especially useful for areas of interest that are affected by cloud cover (common during flood events caused by excessive rainfall). The script uses a threshold of -15 decibels to classify flooded pixels. This value can be adjusted to suit your area of interest. In addition, to help the viewer orientate themselves, a clear Sentinel-2 image is used as the basemap for this visualisation so that it can be easily interpreted where the flood extent reaches for those unfamiliar with interpreting SAR images. 

### How to use

How to use (mosaic version)

- Select your area of interest
- From Data Collections, select `Sentinel-2 Mosaic` or `Sentinel-2 L2A`. You can choose the most recent mosaic or the one from the same season as your time of interest; if you are selecting a single image, make sure it is cloud free.
- From Layers, select Custom Script. Click the Custom Script tab, and check the `Use additional datasets (advanced)` box. Under `Additional datasets`, you will see `S-1 GRD`. Click the "+" Sign to add it
- Check the `Customize timespan` box and select the timeframe you are interested in (the timeframe of your flood)
- Now paste the script in the code field. Take care to use the right one, `Copernicus Browser` if you are using a single Sentinel-2 image as a background and `Sentinel-2 Mosaic` if you want the mosaic background. Then click `Refresh Evalscript`

## Description of representative images  
  
**Flooding in the UK 28th January 2021**
![flooding](fig/fig1.jpg) 
