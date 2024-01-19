---
title: ARI - Anthocyanin Reflectance Index
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ari/
nav_exclude: true
---


## Evaluate and visualize
 - [Copernicus Browser](https://dataspace.copernicus.eu/browser/?zoom=11&lat=41.95617&lng=12.29095&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fsh.dataspace.copernicus.eu%2Fogc%2Fwms%2F274a990e-7090-4676-8f7d-f1867e8474a7&evalscripturl=https%3A%2F%2Fcustom-scripts.sentinel-hub.com%2Fsentinel-2%2Fari%2Fscript.js&datasetId=S2_L1C_CDAS&fromTime=2018-05-14T00%3A00%3A00.000Z&toTime=2018-11-14T23%3A59%3A59.999Z&mosaickingOrder=mostRecent&demSource3D=%22MAPZEN%22&cloudCoverage=5&dateMode=MOSAIC#custom-script){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.4979&lng=11.6345&zoom=10&time=2019-12-10&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8KLy8gQW50aG9jeWFuaW4gcmVmbGVjdGFuY2UgaW5kZXggIChhYmJydi4gQVJJKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IDEvNTUwbm0tMS83MDBubQovLwovLyBVUkwgaHR0cHM6Ly93d3cuaW5kZXhkYXRhYmFzZS5kZS9kYi9zaS1zaW5nbGUucGhwP3NlbnNvcl9pZD05NiZyc2luZGV4X2lkPTIxNAoKbGV0IGluZGV4ID0gMS4wIC8gQjAzIC0gMS4wIC8gQjA1OwpyZXR1cm4gW2luZGV4XQ%3D%3D){:target="_blank"}

## General description of the script

Anthocyanins are pigments common in higher plants, causing their red, blue and purple coloration. They provide valuable information about the physiological status of plants, as they are considered indicators of various types of plant stresses.

The reflectance of anthocyanin is highest around 550nm. However, the same wavelengths are reflected by chlorophyll as well. To isolate the anthocyanins, the 700nm spectral band, that reflects only chlorophyll and not anthocyanins, is subtracted. 

ARI looks like this:

**ARI1 = (1 / 550nm) - (1 / 700nm)** 

For Sentinel-2, the index would be calculated using the green spectral band (B03) and a red edge spectral band (B05) as follows: 

**ARI1 = (1 / B03) - (1 / B05)**

ARI values for the examined trees in this original article ranged in values from 0 to 0.2. 

## Description of representative images

ARI applied to Rome. Acquired on 10.12.2019, processed by Sentinel Hub. 

![ARI, Rome](fig/fig1.jpg)

## References
- [Non-Destructive Estimation of Anthocyanins and Chlorophylls in Anthocyanic Leaves (Gitelson, Chivkunova, Merzlyak)](https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1227&context=natrespapers){:target="_blank"}
- [Vegetation Analysis: Using Vegetation Indices in ENVI](https://www.harrisgeospatial.com/Support/Self-Help-Tools/Help-Articles/Help-Articles-Detail/ArtMID/10220/ArticleID/16162/Vegetation-Analysis-Using-Vegetation-Indices-in-ENVI){:target="_blank"}
