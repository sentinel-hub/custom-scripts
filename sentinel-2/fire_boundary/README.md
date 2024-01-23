---
title: Fire Boundary Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/fire_boundary/
nav_exclude: true
examples:
- zoom: '13'
  lat: '-37.654266597292256'
  lng: '146.74816131591797'
  datasetId: S2L1C
  fromTime: '2019-03-04T00:00:00.000Z'
  toTime: '2019-03-04T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKLyoKQXV0aG9ycyBvZiB0aGUgc2NyaXB0OiBBZHphbmlsIFJhY2htYWRoaSBQdXRyYSwgRmF0d2EgUmFtZGFuaQoqLwoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICAgIkIxMSIsCiAgICAgICAgICAiQjEyIgogICAgICBdCiAgICB9XSwKICAgIG91dHB1dDogeyBiYW5kczogMSB9ICB9Cn0KCgpsZXQgdml6ID0gbmV3IEhpZ2hsaWdodENvbXByZXNzVmlzdWFsaXplclNpbmdsZSgtMS4wLCAxLjApOwoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzKSB7CiAgbGV0IHZhbCA9IDguNSAqIChzYW1wbGVzLkIxMiAtIHNhbXBsZXMuQjExKSAvIChzYW1wbGVzLkIxMiArIHNhbXBsZXMuQjExICsgMC4yNSk7IHJldHVybiB2aXoucHJvY2Vzcyh2YWwpOwp9
  additionalQueryParams:
  - - maxcc
    - '20'
---

## General description of the script

The boundary of the affected wildfire area is important to understand the impact and measure the impact of the event. The existing script of wildfire boundary extraction still not be able to automatically delineate the boundary of the affected area.

This script is introduced to highlight the boundary of affected areas in more contrast and detail. Band 11 and Band 12 of Sentinel-2 is used. Using a higher coefficient number lead to more contrast visualization.

This script is benefiting not only for firefighters to manage the spread of fire but also for recovery management effort.

## Authors of the script

Adzanil Rachmadhi Putra
Fatwa Ramdani

## Description of representative images

This is the result of the script for the wildfire event of Melbourne, March 4, 2019.

![Fire boundary script example](fig/2019-03-04_Sentinel-2B_L1C_Fire_boundary.jpg)
