---
title: Green City Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/green_city/
nav_exclude: true
examples:
- zoom: '11'
  lat: '59.43739477678559'
  lng: '24.67975616455078'
  datasetId: S2L2A
  fromTime: '2019-04-28T00:00:00.000Z'
  toTime: '2019-04-28T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly8gTm9ybWFsaXplZCBEaWZmZXJlbmNlIFZlZ2V0YXRpb24gSW5kZXgKdmFyIG5kdmkgPSAoQjA4LUIwNCkvKEIwOCtCMDQpOwoKLy8gVGhyZXNob2xkIGZvciB2ZWdldGF0aW9uCnZhciB2ZWdfdGggPSAwLjQ7CgovLyBTaW1wbGUgUkdCCnZhciBSID0gMi41KkIwNDsKdmFyIEcgPSAyLjUqQjAzOwp2YXIgQiA9IDIuNSpCMDI7CgovLyBUcmFuc2Zvcm0gdG8gQmxhY2sgYW5kIFdoaXRlCnZhciBZID0gMC4yKlIgKyAwLjcqRyArIDAuMSpCOwp2YXIgcGl4ZWwgPSBbWSwgWSwgWV07CgovLyBDaGFuZ2UgdmVnZXRhdGlvbiBjb2xvcgppZihuZHZpID49IHZlZ190aCkKICBwaXhlbCA9IFswLjEqWSwgMS44KlksIDAuMSpZXTsKCnJldHVybiBwaXhlbDs=
---

## General description of the script

Uses NDVI [1] to color Sentinel-2 images and create awareness of green areas in cities around the World.

## Author of the script

Carlos Bentes

## Description of representative images

Visualization of Tallinn with the Green City script.
![Green City script over Tallinn](fig/greencity_tallinn.png)

Visualization of Paris with the Green City script.
![Green City script over Paris](fig/greencity_paris.png)

Visualization of Beijing with the Green City script.
![Green City script over Beijing](fig/greencity_beijing.png)

## References

[1] Normalized difference vegetation index: 
https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index

## Credits

Y. Zha, J. Gao & S. Ni (2003) Use of normalized difference built-up index in automatically mapping urban areas from TM imagery, International Journal of Remote Sensing, 24:3, 583-594, DOI: 10.1080/01431160304987
