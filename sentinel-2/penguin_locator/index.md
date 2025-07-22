---
title: Penguin Locator
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/penguin_locator/
nav_exclude: true
examples:
- zoom: '10'
  lat: '66.4630'
  lng: '-38.46067'
  datasetId: S2L2A
  fromTime: '2025-07-19T00:00:00.000Z'
  toTime: '2025-07-19T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel/sentinel-2/penguin_locator/script.js
---

The layout `script` automatically adds the title defined in the front matter and adds buttons to visualize the script. For the buttons to work the evalscript has to be named `script.js` and must be in the same directory as the `README.md` file.


## General description of the script

This script aims to highlight small patterns in landscapes dominated by ice and snow. It does this by first square root transforming all bands, then adding the NIR band to the red channel (more sensitive to ice thickness and wetness than the visible bands), and calculating the differences between the red and green, and green and blue Sentinel-2 image bands respectively and assigning these to the green and blue channels of the visualized image. The result speaks for itself: subtle patterns in snow and ice cover are revealed, and objects on the surface such as penguin poop stand out, easy to notice.

## References

- See more in this legendary gallery feature: https://dataspace.copernicus.eu/gallery/2024-9-28-monitoring-penguins-space
- Big thanks to Rafał for his ongoing contributions to CDSE!
