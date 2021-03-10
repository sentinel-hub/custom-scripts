# Bare Soil Marker

<a href="#" id='togglescript'>Show</a> script or [download](script.js) it.
<div id='script_view' style="display:none">

</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=46.95448061777255&lng=17.67425537109375&zoom=10&preset=CUSTOM&layers=B01,B02,B03&maxcc=58&gain=1.0&gamma=1.0&time=2020-03-01%7C2020-09-14&atmFilter=&showDates=false&evalscript=&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/bare_soil_detector/script.js)
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=46.81839&lng=17.48337&themeId=DEFAULT-THEME&datasetId=S2L2A&fromTime=2020-09-14T00%3A00%3A00.000Z&toTime=2020-09-14T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fbd86bcc0-f318-402b-a145-015f85b9427e&evalscripturl=https%3A%2F%2Fraw.githubusercontent.com%2Fsentinel-hub%2Fcustom-scripts%2Fmaster%2Fsentinel-2%2Fbare_soil_detector%2Fscript.js#custom-script)
## General description of the script
The bare soil marker identifies all observations in which the feature of interest (FOI) is bare — with exposed bare soil as a result of ploughing or covered with non-photosynthetic vegetation as a consequence of harvest or vegetation drying up on the field.

For detailed information about the marker read the relative [blog post](https://medium.com/sentinel-hub/area-monitoring-bare-soil-marker-608bc95712ae).

Pixels identifies as bare soil are colored in blue.

## Author of the script

Domagoj Korais.

## Description of representative images

Bare soil script applied around lake Balaton, Hungary.

Image taken on 14/09/2020.

![Bare soil script applied around lake Balaton, Hungary](fig/balaton_bare_soil_2020_09_14.png)