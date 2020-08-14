# NDWI Normalized Difference Water Index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=44.95167902304322&lng=12.337989807128906&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-21&atmFilter=&showDates=false&evalscript=Ly9uZHdpCnZhciBjb2xvclJhbXAxID0gWwogIAlbMCwgMHhGRkZGRkZdLAogIAlbMSwgMHgwMDgwMDBdCiAgXTsKdmFyIGNvbG9yUmFtcDIgPSBbCiAgCVswLCAweEZGRkZGRl0sCiAgCVsxLCAweDAwMDBDQ10KICBdOwoKbGV0IHZpejEgPSBuZXcgQ29sb3JSYW1wVmlzdWFsaXplcihjb2xvclJhbXAxKTsKbGV0IHZpejIgPSBuZXcgQ29sb3JSYW1wVmlzdWFsaXplcihjb2xvclJhbXAyKTsKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcykgewogIHZhciB2YWwgPSBpbmRleChzYW1wbGVzWzBdLkIwMywgc2FtcGxlc1swXS5CMDgpOwoKICBpZiAodmFsIDwgLTApIHsKICAgIHJldHVybiB2aXoxLnByb2Nlc3MoLXZhbCk7CiAgfSBlbHNlIHsKICAgIHJldHVybiB2aXoyLnByb2Nlc3MoTWF0aC5zcXJ0KE1hdGguc3FydCh2YWwpKSk7CiAgfQp9CgpmdW5jdGlvbiBzZXR1cChkcykgewogIHNldElucHV0Q29tcG9uZW50cyhbZHMuQjAzLCBkcy5CMDhdKTsKICBzZXRPdXRwdXRDb21wb25lbnRDb3VudCgzKTsKfQ%3D%3D){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=11&lat=44.94637&lng=12.10183&themeId=DEFAULT-THEME&datasetId=S2L2A&fromTime=2020-08-01T00%3A00%3A00.000Z&toTime=2020-08-01T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fbd86bcc0-f318-402b-a145-015f85b9427e&evalscript=Ly9uZHdpCnZhciBjb2xvclJhbXAxID0gWwogIAlbMCwgMHhGRkZGRkZdLAogIAlbMSwgMHgwMDgwMDBdCiAgXTsKdmFyIGNvbG9yUmFtcDIgPSBbCiAgCVswLCAweEZGRkZGRl0sCiAgCVsxLCAweDAwMDBDQ10KICBdOwoKbGV0IHZpejEgPSBuZXcgQ29sb3JSYW1wVmlzdWFsaXplcihjb2xvclJhbXAxKTsKbGV0IHZpejIgPSBuZXcgQ29sb3JSYW1wVmlzdWFsaXplcihjb2xvclJhbXAyKTsKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcykgewogIHZhciB2YWwgPSBpbmRleChzYW1wbGVzWzBdLkIwMywgc2FtcGxlc1swXS5CMDgpOwoKICBpZiAodmFsIDwgLTApIHsKICAgIHJldHVybiB2aXoxLnByb2Nlc3MoLXZhbCk7CiAgfSBlbHNlIHsKICAgIHJldHVybiB2aXoyLnByb2Nlc3MoTWF0aC5zcXJ0KE1hdGguc3FydCh2YWwpKSk7CiAgfQp9CgpmdW5jdGlvbiBzZXR1cChkcykgewogIHNldElucHV0Q29tcG9uZW50cyhbZHMuQjAzLCBkcy5CMDhdKTsKICBzZXRPdXRwdXRDb21wb25lbnRDb3VudCgzKTsKfQ%3D%3D){:target="_blank"}

## General description of the script

The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum,  NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies. The index was proposed by McFeeters, 1996.

**NDWI = (B03 - B08) / (B03 + B08)**

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

_Note: NDWI index is often used synonymously with the NDMI index, often using NIR-SWIR combination as one of the two options. NDMI seems to be consistently described using NIR-SWIR combination. As the indices with these two combinations work very differently, with NIR-SWIR highlighting differences in water content of leaves, and GREEN-NIR highlighting differences in water content of water bodies, we have decided to separate the indices on our repository as NDMI using NIR-SWIR, and NDWI using GREEN-NIR._

## Description of representative images

NDWI of Italy. Acquired on 2020-08-01.

![NDWI of Italy](fig/fig1.jpg)

NDWI of Canadian lakes. Acquired on 2020-08-05.

![NDWI of Canada](fig/fig2.jpg)

## References
Source: https://en.wikipedia.org/wiki/Normalized_difference_water_index
