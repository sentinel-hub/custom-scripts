---
title: 'Normalized Difference Water Index, NDWI  '
parent: Sentinel-3
grand_parent: Sentinel
layout: script
permalink: /sentinel-3/ndwi/
nav_exclude: true
examples:
- zoom: '8'
  lat: '43.86351'
  lng: '10.54141'
  datasetId: S3OLCI
  fromTime: '2022-07-20T00:00:00.000Z'
  toTime: '2022-07-20T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: ICAgICAgLy9WRVJTSU9OPTMKCi8vIE5vcm1hbGl6ZWQgRGlmZmVyZW5jZSBXYXRlciBJbmRleCwgTkRXSQovLyBJbmRleCB2YWx1ZXMgZ3JlYXRlciB0aGFuIDAuNSB1c3VhbGx5IGNvcnJlc3BvbmQgdG8gd2F0ZXIgYm9kaWVzLiAKLy8gVmVnZXRhdGlvbiB1c3VhbGx5IGNvcnJlc3BvbmRzIHRvIG11Y2ggc21hbGxlciB2YWx1ZXMgYW5kIGJ1aWx0LXVwIGFyZWFzIHRvIHZhbHVlcyBiZXR3ZWVuIHplcm8gYW5kIDAuMi4KCnZhciBjb2xvclJhbXAxID0gWwogIFswLCAweEZGRkZGRl0sCiAgWzEsIDB4MDA4MDAwXQpdOwp2YXIgY29sb3JSYW1wMiA9IFsKICBbMCwgMHhGRkZGRkZdLAogIFsxLCAweDAwMDBDQ10KXTsKCmxldCB2aXoxID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIoY29sb3JSYW1wMSk7CmxldCB2aXoyID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIoY29sb3JSYW1wMik7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKdmFyIHZhbCA9IGluZGV4KHNhbXBsZXMuQjA2LCBzYW1wbGVzLkIxNyk7CgppZiAodmFsIDwgLTApIHsKICByZXR1cm4gdml6MS5wcm9jZXNzKC12YWwpOwp9IGVsc2UgewogIHJldHVybiB2aXoyLnByb2Nlc3MoTWF0aC5zcXJ0KE1hdGguc3FydCh2YWwpKSk7Cn0KfQoKZnVuY3Rpb24gc2V0dXAoKSB7CnJldHVybiB7CiAgaW5wdXQ6IFt7CiAgICBiYW5kczogWwogICAgICAiQjA2IiwKICAgICAgIkIxNyIKICAgIF0KICB9XSwKICBvdXRwdXQ6IHsKICAgIGJhbmRzOiAzCiAgfQp9Cn0=
  additionalQueryParams:
  - - handlePositions
    - 0,1
  - - gradient
    - 0xffffff,0x005824
---

## General description of the script  

The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies. The index was proposed by McFeeters, 1996.

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

Note: NDWI index is often used synonymously with the NDMI index, often using NIR-SWIR combination as one of the two options. NDMI seems to be consistently described using NIR-SWIR combination. As the indices with these two combinations work very differently, with NIR-SWIR highlighting differences in water content of leaves, and GREEN-NIR highlighting differences in water content of water bodies, we have decided to separate the indices on our repository as NDMI using NIR-SWIR, and NDWI using GREEN-NIR. 

**NDWI = (GREEN - NIR) / (GREEN + NIR)**

For Sentinel-3 OLCI, the NDWI is calculated using NIR band 17 and Red band 8: 

**NDWI = (B06 - B17) / (B06 + B17)**


## Description of representative images  

NDWI of central Italy, acquired on 20 July 2022.  
![NDWI](fig/figure1.png)   
 
## References
Source: https://en.wikipedia.org/wiki/Normalized_difference_water_index

## Contributors:  
William Ray
