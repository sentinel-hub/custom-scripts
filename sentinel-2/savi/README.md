# SAVI (Soil Adjusted Vegetation Index)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-06-01%7C2019-12-23&atmFilter=&showDates=false&evalscript=Ly8gU29pbCBBZGp1c3RlZCBWZWdldGF0aW9uIEluZGV4ICAoYWJicnYuIFNBVkkpCi8vIEdlbmVyYWwgZm9ybXVsYTogKDgwMG5tIC0gNjcwbm0pIC8gKDgwMG5tICsgNjcwbm0gKyBMKSAqICgxICsgTCkKLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD04NwovLyBJbml0aWFsaXplIHBhcmFtZXRlcnMKCmxldCBMID0gMC40Mjg7CmxldCBpbmRleCA9IChCMDggLSBCMDQpIC8gKEIwOCArIEIwNCArIEwpICogKDEuMCArIEwpOwpyZXR1cm5baW5kZXhd&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ndwi/script.js){:target="_blank"}
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=41.9000&lng=12.5000&zoom=10&time=2017-10-08&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8gU29pbCBBZGp1c3RlZCBWZWdldGF0aW9uIEluZGV4ICAoYWJicnYuIFNBVkkpCi8vIEdlbmVyYWwgZm9ybXVsYTogKDgwMG5tIC0gNjcwbm0pIC8gKDgwMG5tICsgNjcwbm0gKyBMKSAqICgxICsgTCkKLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD04NwovLyBJbml0aWFsaXplIHBhcmFtZXRlcnMKCmxldCBMID0gMC40Mjg7CmxldCBpbmRleCA9IChCMDggLSBCMDQpIC8gKEIwOCArIEIwNCArIEwpICogKDEuMCArIEwpOwpyZXR1cm5baW5kZXhd){:target="_blank"}

## General description of the script

Empirically derived NDVI products have been shown to be unstable, varying with soil colour, soil moisture, and saturation effects from high density vegetation. In an attempt to improve NDVI, Huete [1] developed a vegetation index that accounted for the differential red and near-infrared extinction through the vegetation canopy. The index is a transformation technique that minimizes soil brightness influences from spectral vegetation indices involving red and near-infrared (NIR) wavelengths.

## References
Source: https://en.wikipedia.org/wiki/Soil-adjusted_vegetation_index

## Description of representative images

SAVI, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![SAVI](fig/fig1.png)