---
title: NDMI
parent: Harmonized Landsat Sentinel
layout: script
permalink: /hls/ndmi/
nav_exclude: true
---


## Evaluate and visualize

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=41.72239&lng=13.15132&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fa10a1628-76ea-4654-8961-6494cb74576d&evalscript=Ly9WRVJTSU9OPTMKY29uc3QgbW9pc3R1cmVSYW1wcyA9IFsKICAgICAgICBbLTAuOCwgMHg4MDAwMDBdLAogICAgICAgIFstMC4yNCwgMHhmZjAwMDBdLAogICAgICAgIFstMC4wMzIsIDB4ZmZmZjAwXSwKICAgICAgICBbMC4wMzIsIDB4MDBmZmZmXSwKICAgICAgICBbMC4yNCwgMHgwMDAwZmZdLAogICAgICAgIFswLjgsIDB4MDAwMDgwXQogICAgICBdOwoKY29uc3Qgdml6ID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIobW9pc3R1cmVSYW1wcyk7CgpmdW5jdGlvbiBzZXR1cCgpIHsKICByZXR1cm4gewogICAgaW5wdXQ6IFsiTklSX05hcnJvdyIsICJTV0lSMSIsImRhdGFNYXNrIl0sCiAgICBvdXRwdXQ6IFsKICAgICAgeyBpZDogImRlZmF1bHQiLCBiYW5kczogNCB9LAogICAgICB7IGlkOiAiaW5kZXgiLCBiYW5kczogMSwgc2FtcGxlVHlwZTogIkZMT0FUMzIiIH0KICAgIF0KICB9Owp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICBsZXQgdmFsID0gaW5kZXgoc2FtcGxlcy5OSVJfTmFycm93LCBzYW1wbGVzLlNXSVIxKTsgCiAgY29uc3QgaW5kZXhWYWwgPSBzYW1wbGVzLmRhdGFNYXNrID09PSAxID8gdmFsIDogTmFOOwogIHJldHVybiB7CiAgICBkZWZhdWx0OiBbLi4udml6LnByb2Nlc3ModmFsKSxzYW1wbGVzLmRhdGFNYXNrXSwKICAgIGluZGV4OiBbaW5kZXhWYWxdIAogIH07Cn0%3D&datasetId=AWS_HLS&fromTime=2023-04-19T00%3A00%3A00.000Z&toTime=2023-04-19T23%3A59%3A59.999Z&demSource3D=%22MAPZEN%22#custom-script)

## Description

The NDMI is a normalized difference moisture index, that uses NIR and SWIR bands to display moisture. The SWIR band reflects changes in both the vegetation water content and the spongy mesophyll structure in vegetation canopies, while the NIR reflectance is affected by leaf internal structure and leaf dry matter content but not by water content. The combination of the NIR with the SWIR removes variations induced by leaf internal structure and leaf dry matter content, improving the accuracy in retrieving the vegetation water content. The amount of water available in the internal leaf structure largely controls the spectral reflectance in the SWIR interval of the electromagnetic spectrum. SWIR reflectance is therefore negatively related to leaf water content. In short, NDMI is used to monitor changes in water content of leaves, and was proposed by Gao. NDWI is computed using the near infrared (NIR) and the short wave infrared (SWIR) reflectance’s.

## Description of representative images

HLS NDMI over Rome. Acquired on 2022-04-05, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)