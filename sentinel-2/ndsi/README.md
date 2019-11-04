# Normalised Difference Snow Index, NDSI

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}

</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=46.3042523551135&lng=12.0794677734375&zoom=10&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-04&atmFilter=&showDates=false&evalscript=Ly8gTm9ybWFsaXNlZCBEaWZmZXJlbmNlIFNub3cgSW5kZXgKLy8gU291cmNlOiBodHRwczovL2VhcnRoLmVzYS5pbnQvd2ViL3NlbnRpbmVsL3RlY2huaWNhbC1ndWlkZXMvc2VudGluZWwtMi1tc2kvbGV2ZWwtMmEvYWxnb3JpdGhtCi8vIHZhbHVlcyBhYm92ZSAwLjQyIGFyZSB1c3VhbGx5IHNub3cKCmxldCB2aXogPSBuZXcgSWRlbnRpdHkoKTsKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcykgewogICAgbGV0IHZhbCA9IGluZGV4KHNhbXBsZXNbMF0uQjAzLCBzYW1wbGVzWzBdLkIxMSk7CiAgICByZXR1cm4gdml6LnByb2Nlc3ModmFsKTsKfQoKZnVuY3Rpb24gc2V0dXAoZHMpIHsKICAgIHNldElucHV0Q29tcG9uZW50cyhbZHMuQjAzLCBkcy5CMTFdKTsKICAgIHNldE91dHB1dENvbXBvbmVudENvdW50KDEpOwp9CgoK&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/chl_rededge/script.js){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=46.4833&lng=14.2094&zoom=10&time=2019-10-23&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8gTm9ybWFsaXNlZCBEaWZmZXJlbmNlIFNub3cgSW5kZXgKLy8gU291cmNlOiBodHRwczovL2VhcnRoLmVzYS5pbnQvd2ViL3NlbnRpbmVsL3RlY2huaWNhbC1ndWlkZXMvc2VudGluZWwtMi1tc2kvbGV2ZWwtMmEvYWxnb3JpdGhtCi8vIHZhbHVlcyBhYm92ZSAwLjQyIGFyZSB1c3VhbGx5IHNub3cKCmxldCB2aXogPSBuZXcgSWRlbnRpdHkoKTsKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcykgewogICAgbGV0IHZhbCA9IGluZGV4KHNhbXBsZXNbMF0uQjAzLCBzYW1wbGVzWzBdLkIxMSk7CiAgICByZXR1cm4gdml6LnByb2Nlc3ModmFsKTsKfQoKZnVuY3Rpb24gc2V0dXAoZHMpIHsKICAgIHNldElucHV0Q29tcG9uZW50cyhbZHMuQjAzLCBkcy5CMTFdKTsKICAgIHNldE91dHB1dENvbXBvbmVudENvdW50KDEpOwp9CgoK){:target="_blank"} 


## General description of the script

The Sentinel-2 normalised difference snow index is a ratio of two bands: one in the VIR (Band 3) and one in the SWIR (Band 11). Values above 0.42 are usually snow. More info [here.](https://earth.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm){:target="_blank"}

## Description of representative images

The NDSI script applied to Klagenfurt, Austria. 

![NDSI](fig/fig1.png) 
