---
title: Normalized Difference Moisture Index (NDMI)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndmi/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '12'
  lat: '42.40876'
  lng: '12.00634'
  datasetId: S2L2A
  fromTime: '2023-10-02T00:00:00.000Z'
  toTime: '2023-10-02T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKY29uc3QgbW9pc3R1cmVSYW1wcyA9IFsKICAgIFstMC44LCAweDgwMDAwMF0sCiAgICBbLTAuMjQsIDB4ZmYwMDAwXSwKICAgIFstMC4wMzIsIDB4ZmZmZjAwXSwKICAgIFswLjAzMiwgMHgwMGZmZmZdLAogICAgWzAuMjQsIDB4MDAwMGZmXSwKICAgIFswLjgsIDB4MDAwMDgwXQogIF07Cgpjb25zdCB2aXogPSBuZXcgQ29sb3JSYW1wVmlzdWFsaXplcihtb2lzdHVyZVJhbXBzKTsKCmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogWyJCOEEiLCAiQjExIiwgIlNDTCIsICJkYXRhTWFzayJdLAogICAgb3V0cHV0OiBbCiAgICAgIHsgaWQ6ICJkZWZhdWx0IiwgYmFuZHM6IDQgfSwKICAgICAgeyBpZDogImluZGV4IiwgYmFuZHM6IDEsIHNhbXBsZVR5cGU6ICJGTE9BVDMyIiB9LAogICAgICB7IGlkOiAiZW9icm93c2VyU3RhdHMiLCBiYW5kczogMiwgc2FtcGxlVHlwZTogIkZMT0FUMzIiIH0sCiAgICAgIHsgaWQ6ICJkYXRhTWFzayIsIGJhbmRzOiAxIH0sCiAgICBdLAogIH07Cn0KCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcykgewogIGxldCB2YWwgPSBpbmRleChzYW1wbGVzLkI4QSwgc2FtcGxlcy5CMTEpOwogIC8vIFRoZSBsaWJyYXJ5IGZvciB0aWZmcyB3b3JrcyB3ZWxsIG9ubHkgaWYgdGhlcmUgaXMgb25seSBvbmUgY2hhbm5lbCByZXR1cm5lZC4KICAvLyBTbyB3ZSBlbmNvZGUgdGhlICJubyBkYXRhIiBhcyBOYU4gaGVyZSBhbmQgaWdub3JlIE5hTnMgb24gZnJvbnRlbmQuCiAgY29uc3QgaW5kZXhWYWwgPSBzYW1wbGVzLmRhdGFNYXNrID09PSAxID8gdmFsIDogTmFOOwogIHJldHVybiB7CiAgICBkZWZhdWx0OiBbLi4udml6LnByb2Nlc3ModmFsKSwgc2FtcGxlcy5kYXRhTWFza10sCiAgICBpbmRleDogW2luZGV4VmFsXSwKICAgIGVvYnJvd3NlclN0YXRzOiBbdmFsLCBpc0Nsb3VkKHNhbXBsZXMuU0NMKSA/IDEgOiAwXSwKICAgIGRhdGFNYXNrOiBbc2FtcGxlcy5kYXRhTWFza10sCiAgfTsKfQoKZnVuY3Rpb24gaXNDbG91ZChzY2wpIHsKICBpZiAoc2NsID09IDMpIHsKICAgIC8vIFNDX0NMT1VEX1NIQURPVwogICAgcmV0dXJuIGZhbHNlOwogIH0gZWxzZSBpZiAoc2NsID09IDkpIHsKICAgIC8vIFNDX0NMT1VEX0hJR0hfUFJPQkEKICAgIHJldHVybiB0cnVlOwogIH0gZWxzZSBpZiAoc2NsID09IDgpIHsKICAgIC8vIFNDX0NMT1VEX01FRElVTV9QUk9CQQogICAgcmV0dXJuIHRydWU7CiAgfSBlbHNlIGlmIChzY2wgPT0gNykgewogICAgLy8gU0NfQ0xPVURfTE9XX1BST0JBCiAgICByZXR1cm4gZmFsc2U7CiAgfSBlbHNlIGlmIChzY2wgPT0gMTApIHsKICAgIC8vIFNDX1RISU5fQ0lSUlVTCiAgICByZXR1cm4gdHJ1ZTsKICB9IGVsc2UgaWYgKHNjbCA9PSAxMSkgewogICAgLy8gU0NfU05PV19JQ0UKICAgIHJldHVybiBmYWxzZTsKICB9IGVsc2UgaWYgKHNjbCA9PSAxKSB7CiAgICAvLyBTQ19TQVRVUkFURURfREVGRUNUSVZFCiAgICByZXR1cm4gZmFsc2U7CiAgfSBlbHNlIGlmIChzY2wgPT0gMikgewogICAgLy8gU0NfREFSS19GRUFUVVJFX1NIQURPVwogICAgcmV0dXJuIGZhbHNlOwogIH0KICByZXR1cm4gZmFsc2U7Cn0K
---
## General description of the script

The NDMI is a normalized difference moisture index, that uses NIR and SWIR bands to display moisture. 
The SWIR band reflects changes in both the vegetation water content and the spongy mesophyll structure in vegetation canopies, 
while the NIR reflectance is affected by leaf internal structure and leaf dry matter content but not by water content. 
The combination of the NIR with the SWIR removes variations induced by leaf internal structure and leaf dry matter content, improving the accuracy in retrieving the vegetation water content. 
The amount of water available in the internal leaf structure largely controls the spectral reflectance in the SWIR interval of the electromagnetic spectrum. 
SWIR reflectance is therefore negatively related to leaf water content. In short, NDMI is used to monitor changes in water content of leaves, and was [proposed by Gao.](https://www.sciencedirect.com/science/article/abs/pii/S0034425796000673){:target="_blank"}
NDMI is computed using the near infrared (NIR) and the short wave infrared (SWIR) reflectances:

Sentinel-2 NDMI = **(B08 - B11) / (B08 + B11)**

[Landsat 4-5 TM NDMI](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/ndmi/) = **(B04 - B05) / (B04 + B05)**

[Landsat 7 ETM+ NDMI](https://custom-scripts.sentinel-hub.com/landsat-7-etm/moisture-index/) = **(B04 - B05) / (B04 + B05)**

[Landsat 8 NDMI](https://custom-scripts.sentinel-hub.com/landsat-8/ndmi/#) = **(B05 - B06) / (B05 + B06)**

[MODIS NDMI](https://custom-scripts.sentinel-hub.com/modis/ndmi/) = **(B02 - B06) / (B02 + B06)**

{: .note}

NDWI index is often used synonymously with the NDMI index, often using NIR-SWIR combination as one of the two options. Gao, referenced above, also called the index NDWI. NDMI seems to be consistently described using NIR-SWIR combination. As the indices with these two combinations work very differently, with NIR-SWIR highlighting differences in water content of leaves, and GREEN-NIR highlighting differences in water content of water bodies, we have decided to separate the indices on our repository as NDMI using NIR-SWIR, and NDWI using GREEN-NIR.

## Description of representative images

The NDMI of Rome, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![NDWI](fig/fig1.png)

The NDMI of Betsiboka river, Madagascar. Acquired on 2020-08-01, processed by Sentinel Hub. 

![NDWI](fig/fig2.jpg)

## References

- [Normalized difference water index](https://www.usgs.gov/land-resources/nli/landsat/normalized-difference-moisture-index){:target="_blank"}
- Gao, B.-C. 1996. NDWI - A normalized difference water index for remote sensing of vegetation liquid
water from space. Remote Sensing of Environment 58: 257-266. [Link to Article](https://www.sciencedirect.com/science/article/abs/pii/S0034425796000673){:target="_blank"}

