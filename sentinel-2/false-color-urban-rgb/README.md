---
title: False Color Urban RGB Composite
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/false-color-urban-rgb/
nav_exclude: true
examples:
- zoom: '10'
  lat: '42.1093'
  lng: '12.78259'
  datasetId: S2L2A
  fromTime: '2021-03-31T00:00:00.000Z'
  toTime: '2021-03-31T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKbGV0IG1pblZhbCA9IDAuMDsKbGV0IG1heFZhbCA9IDAuNDsKCmxldCB2aXogPSBuZXcgSGlnaGxpZ2h0Q29tcHJlc3NWaXN1YWxpemVyKG1pblZhbCwgbWF4VmFsKTsKCmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogWyJCMTIiLCAiQjExIiwgIkIwNCIsImRhdGFNYXNrIl0sCiAgICBvdXRwdXQ6IHsgYmFuZHM6IDQgfQogIH07Cn0KCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcykgewogIGxldCB2YWwgPSBbc2FtcGxlcy5CMTIsIHNhbXBsZXMuQjExLCBzYW1wbGVzLkIwNCxzYW1wbGVzLmRhdGFNYXNrXTsKICByZXR1cm4gdml6LnByb2Nlc3NMaXN0KHZhbCk7Cn0=
---

## General description of the script

This composite is used to visualize urbanized areas more clearly. Vegetation is visible in shades of green, while urbanized areas are represented by white, grey, or purple. Soils, sand, and minerals are shown in a variety of colors. Snow and ice appear as dark blue, and water as black or blue. Flooded areas are very dark blue and almost black. The composite is useful for detecting wildfires and calderas of volcanoes, as they are displayed in shades of red and yellow.

#### The composite:

**return [2.5 * B12, 2.5 * B11, 2.5 * B04]**

## Description of representative images

False Color Urban composite  of Rome, Italy. 

![False Color Urban Rome](fig/fig1.png)

## References

- EOS False Color Analysis: https://eos.com/make-an-analysis/false-color/




