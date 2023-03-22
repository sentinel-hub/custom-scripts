---
permalink: /sentinel-2/built_up_classifier_mask/
nav_exclude: true
---

# Built-up binary classifier mask

<a href="#" id='togglescript'>Show</a> script or [download](script.js) it.
<div id='script_view' style="display:none">

</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=46.95448061777255&lng=17.67425537109375&zoom=10&preset=CUSTOM&layers=B01,B02,B03&maxcc=58&gain=1.0&gamma=1.0&time=2020-03-01%7C2020-09-14&atmFilter=&showDates=false&evalscript=&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/bare_soil_detector/script.js)
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=46.81839&lng=17.48337&themeId=DEFAULT-THEME&datasetId=S2L2A&fromTime=2020-09-14T00%3A00%3A00.000Z&toTime=2020-09-14T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fbd86bcc0-f318-402b-a145-015f85b9427e&evalscripturl=https%3A%2F%2Fraw.githubusercontent.com%2Fsentinel-hub%2Fcustom-scripts%2Fmaster%2Fsentinel-2%2Fbare_soil_detector%2Fscript.js#custom-script)
## General description of the script

The linked evalscript runs a prediction by a LightGBM classifier on the area-of-interest on L2A data. The pixel-wise probabilities are compared against a 0.8 threshold. Pixels with probabilities above this threshold are considered built-up (assigned a value of one), while others are non-built-up (assigned a zero). The mask is then expressed as a blue-tinted mask on Sentinel-2 True Color.

For detailed information about the model read the [blog post](https://medium.com/p/7f2d7114ed1c/).


## Author of the script

Matic Pečovnik, Sinergise

## Description of representative images

Built-up classifier mask script applied on Spodnja Savinjska Region, Slovenia.

Image taken on 29/06/2021.

![Built-up classifier mask script applied on Spodnja Savinjska Region, Slovenia](fig/example.png)