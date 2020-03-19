# City Highlights Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=-23.26295352597338&lng=-46.00567817687988&zoom=13&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2018-11-01%7C2019-05-31&atmFilter=&showDates=false&evalscript=Ly8gZGV0ZWN0aW9uIG9mIHZlZ2V0YXRpb24KTkRWSV9SZWRFZGdlID0gKEIwOCAtIEIwNSkvKEIwOCArIEIwNSkKdGhyZXNob2xkX3ZlZ2V0YXRpb24gPSAwLjQ1ClZlZ2V0YXRpb24gPSBORFZJX1JlZEVkZ2UgPiB0aHJlc2hvbGRfdmVnZXRhdGlvbgoKLy8gY2VyYW1pYyByb29mdG9wIGRldGVjdGlvbgpSQVRJT19SZWQgPSBCMDQvW0IwMStCMDIrQjAzK0IwNCtCMDUrQjA2K0IwN10KTkRCSSA9IChCMTEgLSBCMDgpLyhCMTEgKyBCMDgpCnRocmVzaG9sZF9yb29mdG9wID0gMC4xNApSb29mdG9wID0gKFJBVElPX1JlZCA%2BIHRocmVzaG9sZF9yb29mdG9wKSAmJiAoTkRCSSA%2BIHRocmVzaG9sZF9yb29mdG9wKQoKLy8gd2F0ZXIgZGV0ZWN0aW9uCk5EV0kgPSAoQjAzIC0gQjA4KS8oQjAzICsgQjA4KQp0aHJlc2hvbGRfd2F0ZXIgPSAwLjIKV2F0ZXIgPSBORFdJID4gdGhyZXNob2xkX3dhdGVyCgovLyBnYWluIHRvIG9idGFpbiBzbW9vdGggdmlzdWFsaXphdGlvbgpnYWluID0gMC43CnJldHVybiBbZ2FpbipSb29mdG9wLCBnYWluKlZlZ2V0YXRpb24sIGdhaW4qV2F0ZXJd){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-23.27588&lng=-46.02095&zoom=13&time=2019-05-27&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8gZGV0ZWN0aW9uIG9mIHZlZ2V0YXRpb24KTkRWSV9SZWRFZGdlID0gKEIwOCAtIEIwNSkvKEIwOCArIEIwNSkKdGhyZXNob2xkX3ZlZ2V0YXRpb24gPSAwLjQ1ClZlZ2V0YXRpb24gPSBORFZJX1JlZEVkZ2UgPiB0aHJlc2hvbGRfdmVnZXRhdGlvbgoKLy8gY2VyYW1pYyByb29mdG9wIGRldGVjdGlvbgpSQVRJT19SZWQgPSBCMDQvW0IwMStCMDIrQjAzK0IwNCtCMDUrQjA2K0IwN10KTkRCSSA9IChCMTEgLSBCMDgpLyhCMTEgKyBCMDgpCnRocmVzaG9sZF9yb29mdG9wID0gMC4xNApSb29mdG9wID0gKFJBVElPX1JlZCA%2BIHRocmVzaG9sZF9yb29mdG9wKSAmJiAoTkRCSSA%2BIHRocmVzaG9sZF9yb29mdG9wKQoKLy8gd2F0ZXIgZGV0ZWN0aW9uCk5EV0kgPSAoQjAzIC0gQjA4KS8oQjAzICsgQjA4KQp0aHJlc2hvbGRfd2F0ZXIgPSAwLjIKV2F0ZXIgPSBORFdJID4gdGhyZXNob2xkX3dhdGVyCgovLyBnYWluIHRvIG9idGFpbiBzbW9vdGggdmlzdWFsaXphdGlvbgpnYWluID0gMC43CnJldHVybiBbZ2FpbipSb29mdG9wLCBnYWluKlZlZ2V0YXRpb24sIGdhaW4qV2F0ZXJd){:target="_blank"} 


## General description of the script

This algorithm is a combination of 3 binary maps, based on the well known NDVI (Normalized Difference Vegetation Index), NDWI (Normalized Difference Water Index), band ratio and NDBI (Normalized Difference Built-up Index). Although we know that every location has a different behavior, we applied crisp thresholds to those indices (plus the ratio of visible bands). The thresholds were defined empirically.

The result is particularly useful for an overview of where are the cities, and their relations to water bodies and vegetation areas.

## Author of the script

Thales Sehn Koerting

## Description of representative images

Inserted are 2 examples:
- city highlights is the result of the script
- true color is showing the default true color representation of Sentinel Hub

Besides the 3 basic targets such as Rooftops, Vegetation and Water, it is possible to view the following in the results:

1. urban areas with rooftops and buildings in red
2. high probability of vegetation areas in green
3. rivers, pools and the sea in blue

Example 1
![A visualisation with the City Highlights script](fig/example1_cityhighlights.png)
![True color visualisation](fig/example1_truecolor.png)

Since the thresholds were defined empirically, the author chose the more conservative way (some areas are omitted). The algorithm can be influenced by cloud shadow and also the countries coast.

Example 2
![A visualisation with the City Highlights script](fig/example2_cityhighlights.png)
![True color visualisation](fig/example2_truecolor.png)
