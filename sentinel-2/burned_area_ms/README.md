# Burned Area Visualization 

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=-21.9374&lng=116.6572&themeId=WILDFIRES-NORMAL-MODE&datasetId=S2L2A&fromTime=2019-01-05T00%3A00%3A00.000Z&toTime=2019-01-05T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Faae18701-6b25-4001-8b2a-b98a1b3806c1&evalscript=Ly9WRVJTSU9OPTMKZnVuY3Rpb24gc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICAgIGlucHV0OiBbIkIwMiIsICJCMDMiLCAiQjA0IiwgIkIwOCIsICJCMTEiLCAiQjEyIiwgImRhdGFNYXNrIl0sCiAgICAgICAgb3V0cHV0OiB7IGJhbmRzOiA0IH0KICAgICAgfTsKfQoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzKSB7Cgl2YXIgTkRXST1pbmRleChzYW1wbGVzLkIwMywgc2FtcGxlcy5CMDgpOyAKCXZhciBORFZJPWluZGV4KHNhbXBsZXMuQjA4LCBzYW1wbGVzLkIwNCk7Cgl2YXIgSU5ERVg9ICgoc2FtcGxlcy5CMTEgLSBzYW1wbGVzLkIxMikgLyAoc2FtcGxlcy5CMTEgKyBzYW1wbGVzLkIxMikpKyhzYW1wbGVzLkIwOCk7CgogIAlpZigoSU5ERVg%2BMC4xKXx8KHNhbXBsZXMuQjAyPjAuMSl8fChzYW1wbGVzLkIxMTwwLjEpfHwoTkRWST4wLjMpfHwoTkRXSSA%2BIDAuMSkpewogIAkJcmV0dXJuWzIuNSpzYW1wbGVzLkIwNCwgMi41KnNhbXBsZXMuQjAzLCAyLjUqc2FtcGxlcy5CMDIsIHNhbXBsZXMuZGF0YU1hc2tdCgl9CgllbHNlIHsKIAlyZXR1cm4gWzEsIDAsIDAsIHNhbXBsZXMuZGF0YU1hc2tdCgl9Cn0%3D){:target="_blank"}  
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=11&lat=43.4918&lng=16.619&themeId=WILDFIRES-NORMAL-MODE&datasetId=S2L2A&fromTime=2017-07-17T00%3A00%3A00.000Z&toTime=2017-07-17T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Faae18701-6b25-4001-8b2a-b98a1b3806c1&evalscript=Ly9WRVJTSU9OPTMKZnVuY3Rpb24gc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICAgIGlucHV0OiBbIkIwMiIsICJCMDMiLCAiQjA0IiwgIkIwOCIsICJCMTEiLCAiQjEyIiwgImRhdGFNYXNrIl0sCiAgICAgICAgb3V0cHV0OiB7IGJhbmRzOiA0IH0KICAgICAgfTsKfQoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzKSB7Cgl2YXIgTkRXST1pbmRleChzYW1wbGVzLkIwMywgc2FtcGxlcy5CMDgpOyAKCXZhciBORFZJPWluZGV4KHNhbXBsZXMuQjA4LCBzYW1wbGVzLkIwNCk7Cgl2YXIgSU5ERVg9ICgoc2FtcGxlcy5CMTEgLSBzYW1wbGVzLkIxMikgLyAoc2FtcGxlcy5CMTEgKyBzYW1wbGVzLkIxMikpKyhzYW1wbGVzLkIwOCk7CgogIAlpZigoSU5ERVg%2BMC4xKXx8KHNhbXBsZXMuQjAyPjAuMSl8fChzYW1wbGVzLkIxMTwwLjEpfHwoTkRWST4wLjMpfHwoTkRXSSA%2BIDAuMSkpewogIAkJcmV0dXJuWzIuNSpzYW1wbGVzLkIwNCwgMi41KnNhbXBsZXMuQjAzLCAyLjUqc2FtcGxlcy5CMDIsIHNhbXBsZXMuZGF0YU1hc2tdCgl9CgllbHNlIHsKIAlyZXR1cm4gWzEsIDAsIDAsIHNhbXBsZXMuZGF0YU1hc2tdCgl9Cn0%3D){:target="_blank"} 

## Author of the script
Monja Šebela

## General description of the script

The script was developed to be used in the EO Browser wildfires theme. It uses the normalized difference vegetation index (NDVI), normalized difference moisture index (NDMI) and a custom index using bands 12, 11 and 8 to detect burned areas. SWIR bands 11 and 12 detect heat. They have low reflectance values where land was recently burned (and has already cooled), and high reflectance values where the heat is still high. They were used in a normalized difference SWIR index. As band 8 also has low reflectance values in recently burned areas, it is added to the index to increase its accuracy. Pixel values that have either high index values (>0.15 for S2L1C ), dense vegetation or high moisture, are not burned and are returned in natural colors. All other pixels are considered burned and are returned in red. The script does well ar detecting burned areas and covers burned land well in most cases. The script is not perfect, as it sometimes fails to completely cover the burned area or overestimates them. It is however useful for detecting burned areas nonetheless, as it consistently detects large scale recently burned areas. 

## Description of the representative images

Burned area (right) during the Australian wildfires in january 2019. Image acquired on 5.1.2019, processed by Sentinel Hub. 
![Australia wildfires](fig/fig1.jpg)

Burned area (right) during the Australian wildfires in january 2019. Image acquired on 2.1.2019, processed by Sentinel Hub. 
![Australia wildfires2](fig/fig2.jpg)








