---
title: Normalized Difference Chlorophyll Index
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndci/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '11'
  lat: '40.03498'
  lng: '-119.55734'
  datasetId: S2L1C
  fromTime: '2021-09-13T00:00:00.000Z'
  toTime: '2021-09-13T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKZnVuY3Rpb24gc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICAgIGlucHV0OiBbIkIwMyIsICJCMDQiLCAiQjA1IiwgImRhdGFNYXNrIl0sCiAgICAgICAgb3V0cHV0OiBbCiAgICAgICAgICAgIHsgaWQ6ICJkZWZhdWx0IiwgYmFuZHM6IDQgfSwKICAgICAgICAgICAgeyBpZDogImluZGV4IiwgYmFuZHM6IDEsIHNhbXBsZVR5cGU6ICJGTE9BVDMyIiB9LAogICAgICAgICAgICB7IGlkOiAiZW9icm93c2VyU3RhdHMiLCBiYW5kczogMiwgc2FtcGxlVHlwZTogJ0ZMT0FUMzInIH0sCiAgICAgICAgICAgIHsgaWQ6ICJkYXRhTWFzayIsIGJhbmRzOiAxIH0KICAgICAgICBdCiAgICB9Owp9Cgpjb25zdCByYW1wID0gWwogICAgWy0wLjIsIDB4MzEzNjk1XSwKICAgIFswLCAweGUwZjNmOF0sCiAgICBbMC4yLCAweGZkYWU2MV0sCiAgICBbMC40LCAweGE1MDAyNl0sCl07Cgpjb25zdCB2aXN1YWxpemVyID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIocmFtcCk7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICAgIGxldCB2YWwgPSBpbmRleChzYW1wbGVzLkIwNSwgc2FtcGxlcy5CMDQpOwogICAgLy8gVGhlIGxpYnJhcnkgZm9yIHRpZmZzIHdvcmtzIHdlbGwgb25seSBpZiB0aGVyZSBpcyBvbmx5IG9uZSBjaGFubmVsIHJldHVybmVkLgogICAgLy8gU28gd2UgZW5jb2RlIHRoZSAibm8gZGF0YSIgYXMgTmFOIGhlcmUgYW5kIGlnbm9yZSBOYU5zIG9uIGZyb250ZW5kLgogICAgY29uc3QgaW5kZXhWYWwgPSBzYW1wbGVzLmRhdGFNYXNrID09PSAxID8gdmFsIDogTmFOOwogICAgY29uc3QgaW1nVmFscyA9IHZpc3VhbGl6ZXIucHJvY2Vzcyh2YWwpOwoKICAgIHJldHVybiB7CiAgICAgICAgZGVmYXVsdDogaW1nVmFscy5jb25jYXQoc2FtcGxlcy5kYXRhTWFzayksCiAgICAgICAgaW5kZXg6IFtpbmRleFZhbF0sCiAgICAgICAgZW9icm93c2VyU3RhdHM6IFt2YWwsIGlzQ2xvdWQoc2FtcGxlcykgPyAxIDogMF0sCiAgICAgICAgZGF0YU1hc2s6IFtzYW1wbGVzLmRhdGFNYXNrXQogICAgfTsKfQoKZnVuY3Rpb24gaXNDbG91ZChzYW1wbGVzKSB7CiAgICBjb25zdCBOR0RSID0gaW5kZXgoc2FtcGxlcy5CMDMsIHNhbXBsZXMuQjA0KTsKICAgIGNvbnN0IGJSYXRpbyA9IChzYW1wbGVzLkIwMyAtIDAuMTc1KSAvICgwLjM5IC0gMC4xNzUpOwogICAgcmV0dXJuIGJSYXRpbyA+IDEgfHwgKGJSYXRpbyA+IDAgJiYgTkdEUiA+IDApOwp9Cg==
---

## General description of the script

For Sentinel-2, the index looks like this:

$$NDCI = \frac{B5-B4}{B5+B4}$$  

NDCI is an index that aims to predict the chlorophyll content in turbid productive waters. It is calculated using the red spectral band B04 with the red edge spectral band B05. 

## Description of representative images

Visualization of the NDCI index September 2021 over Pyramid Lake Nevada.
![NDCI](fig/fig1.png)

## References

 - [Normalized difference chlorophyll index: A novel model for remote estimation of chlorophyll-a concentration in turbid productive waters](https://www.semanticscholar.org/paper/Normalized-difference-chlorophyll-index%3A-A-novel-of-Mishra-Mishra/2fbacaa14adb43d5bc8d2dd274304f60814d933c){:target="_blank"}
 - [A spectral space partition guided ensemble method for retrieving chlorophyll-a concentration in inland waters from Sentinel-2A satellite imagery](https://www.sciencedirect.com/science/article/abs/pii/S0380133018301801){:target="_blank"}
 - [Comparison of satellite reflectance algorithms for estimating chlorophyll-a in a temperate reservoir using coincident hyperspectral aircraft imagery and dense coincident surface observations](https://www.researchgate.net/publication/297718964_Comparison_of_satellite_reflectance_algorithms_for_estimating_chlorophyll-a_in_a_temperate_reservoir_using_coincident_hyperspectral_aircraft_imagery_and_dense_coincident_surface_observations){:target="_blank"}