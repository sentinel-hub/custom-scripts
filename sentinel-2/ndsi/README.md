---
title: Normalised Difference Snow Index, NDSI
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndsi/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '10'
  lat: '-45.33572'
  lng: '168.43826'
  datasetId: S2L2A
  fromTime: '2019-09-19T00:00:00.000Z'
  toTime: '2019-09-19T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKLy9SZWZlcmVuY2U6IGh0dHBzOi8vZWFydGguZXNhLmludC93ZWIvc2VudGluZWwvdGVjaG5pY2FsLWd1aWRlcy9zZW50aW5lbC0yLW1zaS9sZXZlbC0yYS9hbGdvcml0aG0KCmxldCB2aXogPSBuZXcgSWRlbnRpdHkoKTsKCmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogWyJCMDMiLCAiQjExIiwiQjA0IiwiQjAyIiwiZGF0YU1hc2siXSwKICAgICBvdXRwdXQ6IFsKICAgICAgIHsgaWQ6ICJkZWZhdWx0IiwgYmFuZHM6IDQgfSwKICAgICAgIHsgaWQ6ICJpbmRleCIsIGJhbmRzOiAxLCBzYW1wbGVUeXBlOiAiRkxPQVQzMiIgfQogICAgIF0KICB9Owp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICAgIGxldCB2YWwgPSBpbmRleChzYW1wbGVzLkIwMywgc2FtcGxlcy5CMTEpOwogIAlsZXQgaW1nVmFscyA9IG51bGw7CiAgICAvLyBUaGUgbGlicmFyeSBmb3IgdGlmZnMgd29ya3Mgd2VsbCBvbmx5IGlmIHRoZXJlIGlzIG9ubHkgb25lIGNoYW5uZWwgcmV0dXJuZWQuCiAgICAvLyBTbyB3ZSBlbmNvZGUgdGhlICJubyBkYXRhIiBhcyBOYU4gaGVyZSBhbmQgaWdub3JlIE5hTnMgb24gZnJvbnRlbmQuCiAgICBjb25zdCBpbmRleFZhbCA9IHNhbXBsZXMuZGF0YU1hc2sgPT09IDEgPyB2YWwgOiBOYU47CiAgCiAgICBpZiAodmFsPjAuNDIpIAogICAgICBpbWdWYWxzID0gWzAsMC44LDEsc2FtcGxlcy5kYXRhTWFza107CiAgICBlbHNlIAogICAgICBpbWdWYWxzID0gWzIuNSpzYW1wbGVzLkIwNCwgMi41KnNhbXBsZXMuQjAzLDIuNSpzYW1wbGVzLkIwMixzYW1wbGVzLmRhdGFNYXNrXTsKCQogIAlyZXR1cm4gewogICAgICBkZWZhdWx0OiBpbWdWYWxzLAogICAgICBpbmRleDogW2luZGV4VmFsXSAKICAgIH07Cn0=
  additionalQueryParams:
  - - gain
    - '1.4'
---
## General description of the script

For Sentinel-2, the index looks like this:

$$NDSI = \frac{B3-B11}{B3+B11}$$   

The Sentinel-2 normalized difference snow index is a ratio of two bands: one in the VIR (Band 3) and one in the SWIR (Band 11). Values above 0.42 are usually snow. More info [here.](https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm-overview){:target="_blank"}

The Sentinel-2 normalised difference snow index can be used to differentiate between cloud and snow cover as snow absorbs in the short-wave infrared light, but reflects the visible light, whereas cloud is generally reflective in both wavelengths. In the visualization script snow cover is represented in bright vivid blue.

## Description of representative images

Visualized NDSI over New Zealand, acquired on 2019-09-19. 

![NDSI Visualized](fig/vis.png) 

The NDSI script applied to Klagenfurt, Austria returning raw values. 

![NDSI Raw](fig/raw.png) 
