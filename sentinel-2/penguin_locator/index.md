---
title: Penguin Locator
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/penguin_locator/
nav_exclude: true
examples:
- zoom: '13'
  lat: '-73.33561'
  lng: '169.67045'
  datasetId: S2L2A
  fromTime: '2024-09-28T00:00:00.000Z'
  toTime: '2024-09-28T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/penguin_locator/script.js
---

## General description of the script

This script aims to highlight small patterns in landscapes dominated by ice and snow. It does this by first square root transforming all bands, then adding the NIR band to the red channel (more sensitive to ice thickness and wetness than the visible bands), and calculating the differences between the red and green, and green and blue Sentinel-2 image bands respectively and assigning these to the green and blue channels of the visualized image. The result speaks for itself: subtle patterns in snow and ice cover are revealed, and objects on the surface such as penguin poop stand out, easy to notice.

## References

- See more in this legendary gallery feature: https://dataspace.copernicus.eu/gallery/2024-9-28-monitoring-penguins-space
- Big thanks to Rafał for his ongoing contributions to CDSE!
