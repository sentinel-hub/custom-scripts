---
title: Cab (Leaf Chlorophyll Content)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/cab/
nav_exclude: true
---


## Evaluate and visualize
 - [Copernicus Browser](https://dataspace.copernicus.eu/browser/?zoom=11&lat=43.5142&lng=16.60103&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fsh.dataspace.copernicus.eu%2Fogc%2Fwms%2F274a990e-7090-4676-8f7d-f1867e8474a7&evalscripturl=https%3A%2F%2Fcustom-scripts.sentinel-hub.com%2Fsentinel-2%2Fcab%2Fscript.js&datasetId=S2_L1C_CDAS&fromTime=2023-07-12T00%3A00%3A00.000Z&toTime=2024-01-12T23%3A59%3A59.999Z&mosaickingOrder=mostRecent&demSource3D=%22MAPZEN%22&cloudCoverage=30&dateMode=MOSAIC#custom-script){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/cab/script.js){:target="_blank"}   
 When EO Browser loads, switch to **code view**, then check the **Use URL** checkbox and press **Refresh**.


## General description of the script

Cab (leaf cholrophyll content (μg / cm ^ 2)) corresponds to the content of chlorophyll a, chlorophyll b and carotenoids per unit of leaf area.
Note that the Cab script is as implemented in SNAP but without input and output validation!
Input/output values which are suspect are not reported or changed. Most values, however, do not fall under this category.
Visualized as an interval from 0-300. This can be adjusted in the evaluatePixel method.

## Description of representative images

Leaf chlorophyl index of Rome. Acquired on 8.10.2017.

![CAB of Rome](fig/fig1.png)
