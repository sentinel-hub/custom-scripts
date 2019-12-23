# NBR-RAW (Normalized Burn Ratio)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-06-01%7C2019-12-23&atmFilter=&showDates=false&evalscript=Ly8gTm9ybWFsaXplZCBEaWZmZXJlbmNlIE5JUi9TV0lSIE5vcm1hbGl6ZWQgQnVybiBSYXRpbyAoYWJicnYuIE5CUikKLy8gR2VuZXJhbCBmb3JtdWxhOiAoTklSIC0gU1dJUikgLyAoTklSICsgU1dJUikKLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD01MwoKbGV0IGluZGV4ID0gKEIwOCAtIEIxMikgLyAoQjA4ICsgQjEyKTsKcmV0dXJuW2luZGV4XQ%3D%3D&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ndwi/script.js){:target="_blank"}
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.5463&lng=11.5961&zoom=11&time=2019-12-10&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=KwovLyBOb3JtYWxpemVkIERpZmZlcmVuY2UgTklSL1NXSVIgTm9ybWFsaXplZCBCdXJuIFJhdGlvIChhYmJydi4gTkJSKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IChOSVIgLSBTV0lSKSAvIChOSVIgKyBTV0lSKQovLwovLyBVUkwgaHR0cHM6Ly93d3cuaW5kZXhkYXRhYmFzZS5kZS9kYi9zaS1zaW5nbGUucGhwP3NlbnNvcl9pZD05NiZyc2luZGV4X2lkPTUzCi8vCgpsZXQgaW5kZXggPSAoQjA4IC0gQjEyKSAvIChCMDggKyBCMTIpOwpyZXR1cm5baW5kZXhd){:target="_blank"}

## General description of the script

To detect burned areas, the NBR-RAW index is the most appropriate choice. It highlights burned areas in large fire zones greater than 500 acres. Create pre- and post-fire NBR images, subtract the post-fire image from the pre-fire image to create a differenced (or delta) NBR image that indicates burn severity.

Values description: Darker pixels indicate burned areas.

**NBR = (B08 - B12) / (B08 + B12)**

## Description of representative images

NBR-RAW, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![NBR](fig/fig1.png)