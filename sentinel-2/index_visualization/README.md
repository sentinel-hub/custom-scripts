---
title: Index Visualization Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/index_visualization/
nav_exclude: true
examples:
- zoom: '11'
  lat: '49.0874'
  lng: '19.4832'
  datasetId: S2L1C
  fromTime: '2019-07-04T00:00:00.000Z'
  toTime: '2019-07-04T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: ZnVuY3Rpb24gdmlzdWFsaXplX2lkeChiYW5kMSwgYmFuZDIsIGdhaW4pIHsKICBsZXQgaWR4ID0gaW5kZXgoYmFuZDEsIGJhbmQyKTsKICByZXR1cm4gW2lkeCwgYmFuZDEqIGdhaW4sIGJhbmQyICogZ2Fpbl07Cn0KLy9sZXQgbmRzaV92aXogPSB2aXN1YWxpemVfaWR4KEIwMywgQjEyLCAxKTsKLy9sZXQgbmR3aV92aXogPSB2aXN1YWxpemVfaWR4KEIwOCwgQjEyLCAxLjUpOwpsZXQgbmR2aV92aXogPSB2aXN1YWxpemVfaWR4KEIwOCwgQjA0LCAyKTsKLy9sZXQgZ25kdmlfdml6ID0gdmlzdWFsaXplX2lkeChCMDgsIEIwMywgMSk7Ci8vbGV0IGJuZHZpX3ZpeiA9IHZpc3VhbGl6ZV9pZHgoQjA4LCBCMDIsIDEuNSk7Ci8vbGV0IGdibmR2aV92aXogPSB2aXN1YWxpemVfaWR4KEIwOCwgQjA0K0IwMywgMSk7CnJldHVybiBuZHZpX3ZpejsK
---

## General description of the script

Universal script for visualization of indices. It's creating a color composite of the index value and bands used for calculating the index.

## Details of the script

It works for indices calculated as dividing an addition of two bands from the difference of two bands.

## Author of the script

Martin Javorka

## Description of representative images

1) The NDVI visualization of Liptov, Slovakia.

![The script example 1](fig/2019-07-04_Sentinel-2A_L1C_NDVI_viz.jpg)

2) The NDSI visualization of the Danube Delta in summer, which nicely differentiates water (shown as red) from the land.

![The script example 2](fig/2019-08-31_Sentinel-2A_L1C_NDSI_viz.jpg)