---
title: Braaten-Cohen-Yang cloud detector
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/cby_cloud_detection/
nav_exclude: true
---


## Evaluate and visualize
- [Copernicus Browser](https://dataspace.copernicus.eu/browser/?zoom=10&lat=46.07609&lng=14.67773&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fsh.dataspace.copernicus.eu%2Fogc%2Fwms%2F274a990e-7090-4676-8f7d-f1867e8474a7&evalscripturl=https%3A%2F%2Fraw.githubusercontent.com%2Fsentinel-hub%2FcustomScripts%2Fmaster%2Fsentinel-2%2Fcby_cloud_detection%2Fscript.js&datasetId=S2_L1C_CDAS&fromTime=2016-12-06T00%3A00%3A00.000Z&toTime=2017-06-06T23%3A59%3A59.999Z&mosaickingOrder=mostRecent&demSource3D=%22MAPZEN%22&cloudCoverage=100&dateMode=MOSAIC#custom-script){:target="_blank"}
- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=42.43765&lng=11.19284&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2F42924c6c-257a-4d04-9b8e-36387513a99c&evalscripturl=https%3A%2F%2Fcustom-scripts.sentinel-hub.com%2Fsentinel-2%2Fcby_cloud_detection%2Fscript.js&datasetId=S2L1C&fromTime=2017-10-06T00%3A00%3A00.000Z&toTime=2017-10-06T23%3A59%3A59.999Z&demSource3D=%22MAPZEN%22#custom-script){:target="_blank"}

## General description
In  [1] Braaten, Cohen, and Yang describe a very simple cloud detection algorithm. The whole cloud detection is a simple threshold-based test:   
$$(B03 > 0.175 \land \mathtt{NDGR} > 0) \lor B03 > 0.39$$   

where
$$\mathtt{NDGR} := \mathtt{Index}(B03, B04) = \frac{B03 - B04}{B03 + B04}$$   

One can think of this formula as describing a subspace (of the space of Sentinel-2 responses) that contains most of the clouds. The same thing could be written more concisely - the NDGR threshold is really just $B03>B04$.

### Assessment of quality

On the Hollstein data set this algorithm achieves 73% classification accuracy; most of the error comes from detecting snow as cloud and failing to detect thin clouds. The corresponding confusion matrix (entries along the left column are taken from Hollstein data, so 8% means that from among all pixels in the train set there are 8% that are clouds but weren't detected):

| |  cloud           |  Ncloud         |   
|:------|:-----------------|:----------------|   
|cloud  |  1142085  (20%)  |  460329 (8%)    |   
|Ncloud |  1027308 (18%)   |  3017989 (53%)  |   

However, this algorithm doesn't detect thin clouds (e.g. transparent and translucent clouds) as well as misclassifies snow for cloud. One way to alleviate this is to use SWIR bands to help differentiate snow from cloud:   
$$B11>\tau\land ((B03 > 0.175 \land \mathtt{NDGR} > 0) \lor B03 > 0.39),$$   
where we use $\tau=0.2$.

The threshold for $\tau$ was chosen arbitrarily; a more educated guess would probably give better results. Nevertheless, with such modification we achieve 88% classification accuracy on the Hollstein data set. Most of the error comes from non-detection of cirrus clouds.

## Description of representative images

Braaten-Cohen-Yang cloud detector, of Orbetello, Italy. Acquired on 6.10.2017.
![Canopy chlorophyll index](fig/fig1.png)

## References
- [1] Braaten J, Cohen WB, Yang Z. 2015. _Automated cloud and cloud shadow identification in Landsat MSS imagery for temperate ecosystems_. Remote Sensing of Environment. 169:128-138.
