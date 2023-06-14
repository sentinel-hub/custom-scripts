---
title: False Color
parent: Harmonized Landsat Sentinel
layout: script
permalink: /hls/false_color/
nav_exclude: true
---


## Evaluate and visualize

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=41.72239&lng=13.15132&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fa10a1628-76ea-4654-8961-6494cb74576d&evalscript=Ly9WRVJTSU9OPTMKCmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogWyJOSVJfTmFycm93IiwgIlJlZCIsICJHcmVlbiIsICJkYXRhTWFzayJdLAogICAgb3V0cHV0OiB7IGJhbmRzOiAzIH0KICB9Owp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZSkgewogIHJldHVybiBbMi41ICogc2FtcGxlLk5JUl9OYXJyb3csIDIuNSAqIHNhbXBsZS5SZWQsIDIuNSAqIHNhbXBsZS5HcmVlbiwgc2FtcGxlLmRhdGFNYXNrXTsKfQ%3D%3D&datasetId=AWS_HLS&fromTime=2023-04-19T00%3A00%3A00.000Z&toTime=2023-04-19T23%3A59%3A59.999Z&demSource3D=%22MAPZEN%22#custom-script)

## Description

This is a simple RGB composite with NIR band in the red channel, red band in the green channel and green band in the blue channel. The script is useful for plant density and health monitoring, as vegetation (displayed in red) heavily reflects NIR light while absorbing red. Vegetation is colored red, cities and exposed ground are grey or tan, and water appears blue or black.

## Description of representative images

HLS false color composite of Rome. Acquired on 2022-07-24, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)