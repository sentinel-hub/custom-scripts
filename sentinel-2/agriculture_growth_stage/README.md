# Agricultural growth stage

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground-temporal/?baseWmsUrl=services.sentinel-hub.com&instanceID=7bd7e1c0-4574-45b3-9d73-4f320e1c2e4f&source=S2&lat=45.62484313095204&lng=12.420730590820312&zoom=11&preset=CUSTOM&layers=B04,B03,B02&maxcc=30&gain=1&temporal=true&gamma=1&time=2015-01-01%7C2017-08-31&atmFilter=ATMCOR&showDates=false&evalscript=ZnVuY3Rpb24gICAgc2V0dXAgKGRzcykgewogIHNldElucHV0Q29tcG9uZW50cyhbZHNzLkIwNCxkc3MuQjA4XSk7CiAgc2V0T3V0cHV0Q29tcG9uZW50Q291bnQoMyk7Cn0KCmZ1bmN0aW9uIGNhbGNORFZJKHNhbXBsZSkgewogIHZhciBkZW5vbSA9IHNhbXBsZS5CMDQrc2FtcGxlLkIwODsKICByZXR1cm4gKChkZW5vbSE9MCkgPyAoc2FtcGxlLkIwOC1zYW1wbGUuQjA0KSAvIGRlbm9tIDogMC4wKTsKfQpmdW5jdGlvbiAgc3RyZXRjaCh2YWwsIG1pbiwgbWF4KSAgewogcmV0dXJuICh2YWwtbWluKS8obWF4LW1pbik7Cn0KCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcyxzY2VuZXMpIHsgIAogIHZhciBhdmcxID0gMDsKICB2YXIgY291bnQxID0gMDsKICB2YXIgYXZnMiA9IDA7CiAgdmFyIGNvdW50MiA9IDA7CiAgdmFyIGF2ZzMgPSAwOwogIHZhciBjb3VudDMgPSAwOwogIHZhciBlbmRNb250aCA9IHNjZW5lc1swXS5kYXRlLmdldE1vbnRoKCk7CiAgCiAgZm9yICh2YXIgaT0wO2k8c2FtcGxlcy5sZW5ndGg7aSsrKSB7CiAgICAgIHZhciBuZHZpID0gY2FsY05EVkkoc2FtcGxlc1tpXSk7CiAgICAgIGlmIChzY2VuZXNbaV0uZGF0ZS5nZXRNb250aCgpPT1lbmRNb250aCkKICAgICAgewoJCWF2ZzMgPSBhdmczICsgbmR2aTsKICAgICAgICBjb3VudDMrKzsKICAgICAgfQogICAgICBlbHNlIGlmIChzY2VuZXNbaV0uZGF0ZS5nZXRNb250aCgpPT0oZW5kTW9udGgtMSkpCiAgICAgIHsKCQlhdmcyID0gYXZnMiArIG5kdmk7CiAgICAgICAgY291bnQyKys7CiAgICAgIH0KICAgICAgZWxzZQogICAgICB7ICAgICAgCgkJYXZnMT0gYXZnMSArIG5kdmk7CiAgICAgICAgY291bnQxKys7CiAgICAgIH0KICAgICAgCiAgfQogIGF2ZzEgPSBhdmcxL2NvdW50MTsKICBhdmcyID0gYXZnMi9jb3VudDI7CiAgYXZnMyA9IGF2ZzMvY291bnQzOwogIGF2ZzEgPSBzdHJldGNoKGF2ZzEsIDAuMSwgMC43KTsKICBhdmcyID0gc3RyZXRjaChhdmcyLCAwLjEsIDAuNyk7CiAgYXZnMyA9IHN0cmV0Y2goYXZnMywgMC4xLCAwLjcpOwogIAogIHJldHVybiBbYXZnMSxhdmcyLGF2ZzNdOwoKCn0KZnVuY3Rpb24gZmlsdGVyU2NlbmVzIChzY2VuZXMsIGlucHV0TWV0YWRhdGEpIHsKICAgIHJldHVybiBzY2VuZXMuZmlsdGVyKGZ1bmN0aW9uIChzY2VuZSkgewoJICByZXR1cm4gc2NlbmUuZGF0ZS5nZXRUaW1lKCk%2BPShpbnB1dE1ldGFkYXRhLnRvLmdldFRpbWUoKS0zKjMxKjI0KjM2MDAqMTAwMCkgOwogICAgfSk7Cn0%3D){:target="_blank"}    


## Author of the script
Source: @HarelDan - https://github.com/hareldunn/GIS_Repo/blob/master/Multi-Temporal%20NDVI%20for%20Sentinel%20Hub%20Custom%20Scripts

## General description of the script
Agricultural growth stage is a script visualizing NDVI multi-temporal trends in Sentinel-2 imagery. It takes the current image as baseline and calculates the average NDVI for the previous 2 months.
The script requires multi-temporal processing, so the parameter TEMPORAL=true should be added to the request.

## Description of representative images

The Agricultural growth stage script applied to agricultural fields of Italy. 

![The Agricultural growth stage script applied to agricultural fields of Italy.](fig/fig1.jpg)

## References
Based on:
https://twitter.com/sentinel_hub/status/922813457145221121
https://twitter.com/sentinel_hub/status/1020755996359225344

