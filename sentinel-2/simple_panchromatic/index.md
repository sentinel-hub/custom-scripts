---
title: Sentinel-2 Simple Panchromatic
parent: sentinel-2
layout: script
nav_exclude: true
scripts:
- - Sentinel-2
  - script.js
- - Sentinel-2 Quarterly Cloudless Mosaics
  - script_mosaics.js
examples:
- zoom: '14'
  lat: '-1.29954'
  lng: '36.85158'
  datasetId: S2L2A
  fromTime: '2025-03-03T00:00:00.000Z'
  toTime: '2025-03-03T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2\simple_panchromatic\script.js
---

## General description of the script

This script is for creating a simple panchromatic greyscale visualization from Sentinel-2. It simulates the way a panchromatic band works by taking the average of bands 2 (Red), 3 (Green), 4 (Blue), and 8 (wide-band near infrared). The suggested use is for backgrounds in a scene compare, or as an input for pansharpening of lower resolution bands. The script also works for quarterly cloudless mosaics. Using the "opacity" function in compare mode and a panchromatic Sentinel-2 cloudless mosaic as a background, you can make the interpretation of low-resolution datasets such as Sentinel-3 or Sentinel-5P imagery a lot easier.

## Description of representative images

This scene is a Sentinel-2 image of Nairobi, Kenya

!['Sentinel-2 simple panchromatic image of Nairobi, Kenya on 3 March 2025'](.\img\nairobi.jpg)
