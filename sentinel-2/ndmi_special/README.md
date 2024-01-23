---
title: NDMI for moisture stress
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndmi_special/
nav_exclude: true
examples:
- zoom: '9'
  lat: '44.77696106840196'
  lng: '11.09619140625'
  datasetId: S2L2A
  fromTime: '2019-03-01'
  toTime: '2019-09-16'
  platform:
  - CDSE
  - EOB
  evalscript: Ly8gTm9ybWFsaXplZCBEaWZmZXJlbmNlIDgyMC8xNjAwIE5vcm1hbGl6ZWQgRGlmZmVyZW5jZSBNb2lzdHVyZSBJbmRleCAoYWJicnYuIE5ETUkpCi8vCi8vIEdlbmVyYWwgZm9ybXVsYTogKDgyMG5tIC0gMTYwMG5tKSAvICg4MjBubSArIDE2MDBubSkKLy8KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD01NgovLwp2YXIgaW5kZXggPSAoQjA4IC0gQjExKSAvIChCMDggKyBCMTEpOwppZiAoaW5kZXggPD0gMCl7CiAgcmV0dXJuIFsxLCAxLCAxXTsKfQppZiAoaW5kZXggPD0gMC4yKXsKICByZXR1cm4gWzAsIDAuOCwgMC45XTsKfSAKaWYgKGluZGV4IDw9IDAuNCl7CiAgcmV0dXJuIFswLCAwLjUsIDAuOV07Cn0gCmVsc2V7CiAgcmV0dXJuIFswLCAwLCAwLjddOwp9CiAgCg==
  additionalQueryParams:
  - - maxcc
    - '20'
---

## General description of the script

The NDMI for moisture stress can be used to detect irrigation. It is based on the NDMI and visualized to 4 classes. For all the index values above 0, knowing the land use and land cover, it is possible to determine whether irrigation has taken place. The script should be used with Sentinel-2 bands B08 and B11, resulting in 10 m resolution.
Following this logic, while understanding land use and climate conditions of the area, it is possible to differentiate between productive and non-productive areas, as well as see how the different agricultural parcels reflect the index. 
Based on our use-case, some of the parcels had high NDMI values in summer months after several weeks without rain. The only source of irrigation water was from an aquifer below. Since not all the parcels have water concessions, it was possible to identify illegal water use. Additionally, knowing the type of crop grown (e.g. citrus crops), it was possible to identify whether irrigation is being effective or not during the crucial growing summer season, as well as find out if some parts of the farm are being under or over-irrigated.

## Author of the script

Aferpo 83, Monja Šebela

## Description of representative images

The NDMI script applied to the Sentinel-2 image of northern Italy. Image acquired on 11.9.2019, processed by Sentinel Hub.

![NDMI for stress](fig/fig1.jpg) 

## Credits

<a href="https://www.agricolus.com/en/indici-vegetazione-ndvi-ndmi-istruzioni-luso/">Read about the NDMI</a>. 