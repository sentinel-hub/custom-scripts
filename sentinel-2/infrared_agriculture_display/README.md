---
title: Infrared Agriculture Display Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/infrared_agriculture_display/
nav_exclude: true
examples:
- zoom: '14'
  lat: '-29.428459541897272'
  lng: '-61.45829200744629'
  datasetId: S2L2A
  fromTime: '2019-03-18T00:00:00.000Z'
  toTime: '2019-03-18T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: LyoKQXV0aG9yIG9mIHRoZSBzY3JpcHQ6IFJvYmVydG8gR2FnbGlhcmRpCiovCgpyZXR1cm4gW0IwNCoyLjUsQjA4KjIuNSxCMDIqMi41XTs=
---


## General description of the script

Combining band 4 (red), band 8 (nir) and band 2 (blue) on RGB display, vegetation is highlighted so it's easier to detect crops anomalies, and healthy vegetation can be seen in bright green.

## Author of the script

Roberto Gagliardi

## Description of representative images

In the image of the 9 de Julio departament, Santa Fe Province, Argentina, it can be clearly seen the areas with good vegetation in green tonalities, and the darker areas correspond to flooded areas that are now begining to get vegetation.

![Infrared Agriculture Display script example](fig/infrared_agriculture.png)
Image: Sentinel 2- L1C, 20 JPN, acquired on 2019-03-18
