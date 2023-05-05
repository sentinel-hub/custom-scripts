---
permalink: /hls/swir/
nav_exclude: true
---

# SWIR

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

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=41.72239&lng=13.15132&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fa10a1628-76ea-4654-8961-6494cb74576d&evalscript=Ly9WRVJTSU9OPTMKCmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogWyJTV0lSMiIsICJOSVJfTmFycm93IiwgIlJlZCIsICJkYXRhTWFzayJdLAogICAgb3V0cHV0OiB7IGJhbmRzOiA0IH0KICB9Owp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZSkgewogIHJldHVybiBbMi41ICogc2FtcGxlLlNXSVIyLCAyLjUgKiBzYW1wbGUuTklSX05hcnJvdywgMi41ICogc2FtcGxlLlJlZCwgc2FtcGxlLmRhdGFNYXNrXTsKfQoK&datasetId=AWS_HLS&fromTime=2023-04-19T00%3A00%3A00.000Z&toTime=2023-04-19T23%3A59%3A59.999Z&demSource3D=%22MAPZEN%22#custom-script)

## Description

Short wave infrared (SWIR) measurements can help scientists estimate how much water is present in plants and soil, as water absorbs SWIR wavelengths. Short wave infrared bands (a band is a region of the electromagnetic spectrum; a satellite sensor can image Earth in different bands) are also useful for distinguishing between cloud types (water clouds versus ice clouds), snow and ice, all of which appear white in visible light. In this composite vegetation appears in shades of green, soils and built-up areas are in various shades of brown, and water appears black. Newly burned land reflects strongly in SWIR bands, making them valuable for mapping fire damages. Each rock type reflects shortwave infrared light differently, making it possible to map out geology by comparing reflected SWIR light.

The composite: **SWIR2, NIR_Narrow, Red**

## Description of representative images

HLS SWIR composite of Rome. Acquired on 2022-07-24, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)