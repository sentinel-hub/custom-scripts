---
permalink: /hls/ndwi/
nav_exclude: true
---

# NDWI

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

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=41.72239&lng=13.15132&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fa10a1628-76ea-4654-8961-6494cb74576d&evalscript=CgogICAgICAvL1ZFUlNJT049MwovL25kd2kKY29uc3QgY29sb3JSYW1wMSA9IFsKICAJWzAsIDB4RkZGRkZGXSwKICAJWzEsIDB4MDA4MDAwXQogIF07CmNvbnN0IGNvbG9yUmFtcDIgPSBbCiAgCVswLCAweEZGRkZGRl0sCiAgCVsxLCAweDAwMDBDQ10KICBdOwoKbGV0IHZpejEgPSBuZXcgQ29sb3JSYW1wVmlzdWFsaXplcihjb2xvclJhbXAxKTsKbGV0IHZpejIgPSBuZXcgQ29sb3JSYW1wVmlzdWFsaXplcihjb2xvclJhbXAyKTsKCmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogWyJHcmVlbiIsICJOSVJfTmFycm93IiwgImRhdGFNYXNrIl0sCiAgICBvdXRwdXQ6IFsKCQl7IGlkOiJkZWZhdWx0IiwgYmFuZHM6IDQgfSwKICAgICAgICB7IGlkOiAiaW5kZXgiLCBiYW5kczogMSwgc2FtcGxlVHlwZTogIkZMT0FUMzIiIH0KCV0KICB9Owp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICBsZXQgdmFsID0gaW5kZXgoc2FtcGxlcy5HcmVlbiwgc2FtcGxlcy5OSVJfTmFycm93KTsKICBsZXQgaW1nVmFscyA9IG51bGw7CiAgY29uc3QgaW5kZXhWYWwgPSBzYW1wbGVzLmRhdGFNYXNrID09PSAxID8gdmFsIDogTmFOOwogIAogIGlmICh2YWwgPCAtMCkgewogICAgaW1nVmFscyA9IFsuLi52aXoxLnByb2Nlc3MoLXZhbCksIHNhbXBsZXMuZGF0YU1hc2tdOwogIH0gZWxzZSB7CiAgICBpbWdWYWxzID0gWy4uLnZpejIucHJvY2VzcyhNYXRoLnNxcnQoTWF0aC5zcXJ0KHZhbCkpKSwgc2FtcGxlcy5kYXRhTWFza107CiAgfQogIHJldHVybiB7CiAgICBkZWZhdWx0OiBpbWdWYWxzLAogICAgaW5kZXg6IFtpbmRleFZhbF0KICB9Owp9&datasetId=AWS_HLS&fromTime=2023-04-19T00%3A00%3A00.000Z&toTime=2023-04-19T23%3A59%3A59.999Z&demSource3D=%22MAPZEN%22#custom-script)

## Description

The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies. 

**NDWI = (GREEN - NIR) / (GREEN + NIR)**

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

## Description of representative images

HLS NDWI over Rome. Acquired on 2022-07-24, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)