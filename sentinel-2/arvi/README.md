---
permalink: /sentinel-2/arvi/
nav_exclude: true
---

# Atmospherically Resistant Vegetation Index (ARVI)

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=42.190118425644556&lng=11.9970703125&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=6&gain=1.0&gamma=1.0&time=2018-05-01%7C2018-11-07&atmFilter=&showDates=false&evalscript=Ly8KLy8gQXRtb3NwaGVyaWNhbGx5IFJlc2lzdGFudCBWZWdldGF0aW9uIEluZGV4ICAgKGFiYnJ2LiBBUlZJKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IChOSVIgLSBSRUQgLSB5ICogKFJFRCAtIEJMVUUpKS8gKE5JUiArIFJFRCAtIHkqKFJFRC1CTFVFKSkKLy8KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD00Ci8vCgovLyBJbml0aWFsaXplIHBhcmFtZXRlcnMKbGV0IHkgPSAwLjEwNjsKbGV0IGluZGV4ID0gKEIwOSAtIEIwNCAtIHkgKiAoQjA0IC0gQjAyKSkgLyAoQjA5ICsgQjA0IC0geSAqIChCMDQgLSBCMDIpKTsKCnJldHVybltpbmRleF07){:target="_blank"} 
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.3641&lng=12.1880&zoom=10&time=2017-10-08&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8KLy8gQXRtb3NwaGVyaWNhbGx5IFJlc2lzdGFudCBWZWdldGF0aW9uIEluZGV4ICAgKGFiYnJ2LiBBUlZJKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IChOSVIgLSBSRUQgLSB5ICogKFJFRCAtIEJMVUUpKS8gKE5JUiArIFJFRCAtIHkqKFJFRC1CTFVFKSkKLy8KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIvc2ktc2luZ2xlLnBocD9zZW5zb3JfaWQ9OTYmcnNpbmRleF9pZD00Ci8vCgovLyBJbml0aWFsaXplIHBhcmFtZXRlcnMKbGV0IHkgPSAwLjEwNjsKbGV0IGluZGV4ID0gKEIwOSAtIEIwNCAtIHkgKiAoQjA0IC0gQjAyKSkgLyAoQjA5ICsgQjA0IC0geSAqIChCMDQgLSBCMDIpKTsKCnJldHVybltpbmRleF07){:target="_blank"}
## General description of the script

ARVI is most useful in regions of high atmospheric aerosol content. It uses blue light reflectance measurements to correct for the atmospheric scattering effects, that also influence reflectance of red light.

General formula: 

**(NIR - RED - y * (RED - BLUE))/ (NIR + RED - y*(RED-BLUE))**

Values description: The range for an ARVI is -1 to 1 where green vegetation generally falls between values of 0.20 to 0.80.

## Description of representative images

The ARVI of Rome, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![ARVI](fig/fig1.png)



