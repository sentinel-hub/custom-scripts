# Ship detection with Sentinel-1 and Sentinel-2
  
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.  
<div id='script_view' style="display:none">  
{% highlight javascript %}  
{% include_relative script.js %}  
{% endhighlight %}  
  
</div>  

# Author: 
Monja B. Šebela
  
## Evaluate and visualize  
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=32.24286&lng=119.57676&themeId=DEFAULT-THEME&datasetId=S2L1C&fromTime=2020-05-23T00%3A00%3A00.000Z&toTime=2020-05-23T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2F42924c6c-257a-4d04-9b8e-36387513a99c&evalscript=Ly9WRVJTSU9OPTMKdmFyIHNldHVwID0gKCkgPT4gKHsKICBpbnB1dDogWwogICAge2RhdGFzb3VyY2U6ICJzMmwxYyIsIGJhbmRzOlsiQjAyIiwgIkIwMyIsICJCMDQiLCAiQjA4Il0sIHVuaXRzOiAiUkVGTEVDVEFOQ0UiLCBtb3NhaWNraW5nOiAiT1JCSVQifSwKICAgIHtkYXRhc291cmNlOiAiczFncmQiLCBiYW5kczpbIlZWIiwgIlZIIl0sIHVuaXRzOiAiUkVGTEVDVEFOQ0UiLCBtb3NhaWNraW5nOiAiT1JCSVQifQogIF0sCiAgb3V0cHV0OiBbCiAgICB7IGlkOiAiZGVmYXVsdCIsIGJhbmRzOiAzLCBzYW1wbGVUeXBlOiBTYW1wbGVUeXBlLkFVVE8gfQogIF0sCn0pCgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMsIGlucHV0RGF0YSwgaW5wdXRNZXRhZGF0YSwgY3VzdG9tRGF0YSwgb3V0cHV0TWV0YWRhdGEpIHsKIHZhciBTMkwxQyA9IHNhbXBsZXMuczJsMWNbMF0KIHZhciBTMSA9IHNhbXBsZXMuczFncmRbMF0KIGxldCBuZHdpID0gKFMyTDFDLkIwMyAtIFMyTDFDLkIwOCkgLyAoUzJMMUMuQjAzICsgUzJMMUMuQjA4KQogCiBpZiAoKG5kd2kgPiAwLjEpJiYoKFMxLlZWID4gMC4zKXx8KFMxLlZIPjAuMykpKSB7CiAgICByZXR1cm4gewogICAgICBkZWZhdWx0OiBbMSwxLDFdCiAgICB9CiB9CiBlbHNlIGlmIChuZHdpID4gMC4xKXsKICAgIHJldHVybiB7CiAgICAgIGRlZmF1bHQ6IFsoNCpTMkwxQy5CMDQpLTAuMiwgKDQqUzJMMUMuQjAzKS0wLjIsICg1KlMyTDFDLkIwMiktMC4yXQogICAgfQogfQogIAogIGxldCB2YWwgPSBbKDQqUzJMMUMuQjA0KS0wLjIsICg0KlMyTDFDLkIwMyktMC4yLCAoNCpTMkwxQy5CMDIpLTAuMl07CiAgcmV0dXJuIHsKICAgIGRlZmF1bHQ6IHZhbAogIH0KfQ%3D%3D){:target="_blank"}
 When EO Browser loads, switch to **code view**, check the **Use additional datasets (advanced)** and **S-1 GRD** box. Finnally press **Refresh**.
  
## General description of the script  
  
This script masks water areas using Sentinel-2 NDWI, and returns those high NDWI pixels, which also highly reflec VV and VH polarizatin, in white, displaying ships. The script tends to overestimate in narrow water corridors, over bridges, and it has cross-like artefacts where pixels are extremely reflective. It often underestimates ships of red color. It can be useful to generally estimate ship traffic density. 

## Description of representative images  
  
**Ship traffic of Yangtze river, at Zhenjiang and Yangzhong, China**
![ships](fig/fig1.jpg) 



