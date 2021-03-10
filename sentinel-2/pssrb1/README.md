# PSSRb1 (Pigment specific simple ration for Chlorophyll B)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-06-01%7C2019-12-23&atmFilter=&showDates=false&evalscript=ICAgLy8gU2ltcGxlIFJhdGlvIDgwMC82NTAgUGlnbWVudCBzcGVjaWZpYyBzaW1wbGUgcmF0aW8gQjEgKGFiYnJ2LiBQU1NSYjEpCi8vIEdlbmVyYWwgZm9ybXVsYTogODAwbm0vNjUwbm0KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD0yODMKCmxldCBpbmRleCA9IEIwOCAvIEIwNDsKcmV0dXJuW2luZGV4XQ%3D%3D&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ndwi/script.js){:target="_blank"}
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.8594&lng=11.0550&zoom=10&time=2019-12-10&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8gU2ltcGxlIFJhdGlvIDgwMC82NTAgUGlnbWVudCBzcGVjaWZpYyBzaW1wbGUgcmF0aW8gQjEgKGFiYnJ2LiBQU1NSYjEpCi8vIEdlbmVyYWwgZm9ybXVsYTogODAwbm0vNjUwbm0KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD0yODMKCmxldCBpbmRleCA9IEIwOCAvIEIwNDsKcmV0dXJuW2luZGV4XQ%3D%3D){:target="_blank"}
 
 ## General description of the script

Pigment specific simple ratio for chlorophyll b is calculated as: 

**  PSSRb=800nm / 650nm**
**  PSSRb = B08 / B04**

## Description of representative images

PSSRb, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![PSSRb](fig/fig1.png)