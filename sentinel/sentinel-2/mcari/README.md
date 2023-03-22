---
permalink: /sentinel-2/mcari/
nav_exclude: true
---

# MCARI (Modified Chlorophyll Absorption in Reflectance Index)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=42.04546841166382&lng=12.10968017578125&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-21&atmFilter=&showDates=false&evalscript=Ci8vIE1vZGlmaWVkIENobG9yb3BoeWxsIEFic29ycHRpb24gaW4gUmVmbGVjdGFuY2UgSW5kZXggICAoYWJicnYuIE1DQVJJKQovLyBHZW5lcmFsIGZvcm11bGE6ICgoNzAwbm0gLSA2NzBubSkgLSAwLjIgKiAoNzAwbm0gLSA1NTBubSkpICogKDcwMG5tIC82NzBubSkKLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD00MQoKbGV0IGluZGV4ID0gKChCMDUgLSBCMDQpIC0gMC4yICogKEIwNSAtIEIwMykpICogKEIwNSAvIEIwNCk7CnJldHVybltpbmRleF0%3D){:target="_blank"}
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.5463&lng=11.5961&zoom=11&time=2019-12-10&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=ICAgICAgLy8KLy8gTW9kaWZpZWQgQ2hsb3JvcGh5bGwgQWJzb3JwdGlvbiBpbiBSZWZsZWN0YW5jZSBJbmRleCAgIChhYmJydi4gTUNBUkkpCi8vCi8vIEdlbmVyYWwgZm9ybXVsYTogKCg3MDBubSAtIDY3MG5tKSAtIDAuMiAqICg3MDBubSAtIDU1MG5tKSkgKiAoNzAwbm0gLzY3MG5tKQovLwovLyBVUkwgaHR0cHM6Ly93d3cuaW5kZXhkYXRhYmFzZS5kZS9kYi9zaS1zaW5nbGUucGhwP3NlbnNvcl9pZD05NiZyc2luZGV4X2lkPTQxCi8vCgpsZXQgaW5kZXggPSAoKEIwNSAtIEIwNCkgLSAwLjIgKiAoQjA1IC0gQjAzKSkgKiAoQjA1IC8gQjA0KTsKcmV0dXJuW2luZGV4XQ%3D%3D){:target="_blank"}

## General description of the script

MCARI gives a measure of the depth of chlorophyll absorption and is very sensitive to variations in chlorophyll concentrations as well as variations in Leaf Area Index (LAI). MCARI values are not affected by illumination conditions, the background reflectance from soil and other non-photosynthetic materials observed.

## Description of representative images

MCARI, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![MCARI](fig/fig1.png)


## References
http://www.hiphen-plant.com