---
title: Atmospherically Resistant Vegetation Index (ARVI)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/arvi/
nav_exclude: true
---


## Evaluate and visualize
 - [Copernicus Browser](https://dataspace.copernicus.eu/browser/?zoom=11&lat=42.19012&lng=11.99707&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fsh.dataspace.copernicus.eu%2Fogc%2Fwms%2F274a990e-7090-4676-8f7d-f1867e8474a7&evalscripturl=https%3A%2F%2Fcustom-scripts.sentinel-hub.com%2Fsentinel-2%2Farvi%2Fscript.js&datasetId=S2_L1C_CDAS&fromTime=2018-05-07T00%3A00%3A00.000Z&toTime=2018-11-07T23%3A59%3A59.999Z&mosaickingOrder=mostRecent&demSource3D=%22MAPZEN%22&cloudCoverage=6&dateMode=MOSAIC#custom-script){:target="_blank"} 
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.3641&lng=12.1880&zoom=10&time=2017-10-08&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8KLy8gQXRtb3NwaGVyaWNhbGx5IFJlc2lzdGFudCBWZWdldGF0aW9uIEluZGV4ICAgKGFiYnJ2LiBBUlZJKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IChOSVIgLSBSRUQgLSB5ICogKFJFRCAtIEJMVUUpKS8gKE5JUiArIFJFRCAtIHkqKFJFRC1CTFVFKSkKLy8KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD00Ci8vCgovLyBJbml0aWFsaXplIHBhcmFtZXRlcnMKbGV0IHkgPSAwLjEwNjsKbGV0IGluZGV4ID0gKEIwOSAtIEIwNCAtIHkgKiAoQjA0IC0gQjAyKSkgLyAoQjA5ICsgQjA0IC0geSAqIChCMDQgLSBCMDIpKTsKCnJldHVybltpbmRleF07){:target="_blank"}
## General description of the script

ARVI is most useful in regions of high atmospheric aerosol content. It uses blue light reflectance measurements to correct for the atmospheric scattering effects, that also influence reflectance of red light.

General formula: 

**(NIR - RED - y * (RED - BLUE))/ (NIR + RED - y*(RED-BLUE))**

Values description: The range for an ARVI is -1 to 1 where green vegetation generally falls between values of 0.20 to 0.80.

## Description of representative images

The ARVI of Rome, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![ARVI](fig/fig1.png)



