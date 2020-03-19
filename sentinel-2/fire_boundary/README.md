# Fire Boundary Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=-37.654266597292256&lng=146.74816131591797&zoom=13&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2018-09-01%7C2019-03-04&atmFilter=&showDates=false&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKLyoKQXV0aG9ycyBvZiB0aGUgc2NyaXB0OiBBZHphbmlsIFJhY2htYWRoaSBQdXRyYSwgRmF0d2EgUmFtZGFuaQoqLwoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICAgIkIxMSIsCiAgICAgICAgICAiQjEyIgogICAgICBdCiAgICB9XSwKICAgIG91dHB1dDogeyBiYW5kczogMSB9ICB9Cn0KCgpsZXQgdml6ID0gbmV3IEhpZ2hsaWdodENvbXByZXNzVmlzdWFsaXplclNpbmdsZSgtMS4wLCAxLjApOwoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzKSB7CiAgbGV0IHZhbCA9IDguNSAqIChzYW1wbGVzLkIxMiAtIHNhbXBsZXMuQjExKSAvIChzYW1wbGVzLkIxMiArIHNhbXBsZXMuQjExICsgMC4yNSk7IHJldHVybiB2aXoucHJvY2Vzcyh2YWwpOwp9){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-37.66174&lng=146.74456&zoom=13&time=2019-03-04&preset=CUSTOM&datasource=Sentinel-2%20L2A&layers=B01,B02,B03&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKLyoKQXV0aG9ycyBvZiB0aGUgc2NyaXB0OiBBZHphbmlsIFJhY2htYWRoaSBQdXRyYSwgRmF0d2EgUmFtZGFuaQoqLwoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICAgIkIxMSIsCiAgICAgICAgICAiQjEyIgogICAgICBdCiAgICB9XSwKICAgIG91dHB1dDogeyBiYW5kczogMSB9ICB9Cn0KCgpsZXQgdml6ID0gbmV3IEhpZ2hsaWdodENvbXByZXNzVmlzdWFsaXplclNpbmdsZSgtMS4wLCAxLjApOwoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzKSB7CiAgbGV0IHZhbCA9IDguNSAqIChzYW1wbGVzLkIxMiAtIHNhbXBsZXMuQjExKSAvIChzYW1wbGVzLkIxMiArIHNhbXBsZXMuQjExICsgMC4yNSk7IHJldHVybiB2aXoucHJvY2Vzcyh2YWwpOwp9){:target="_blank"} 


## General description of the script

The boundary of the affected wildfire area is important to understand the impact and measure the impact of the event. The existing script of wildfire boundary extraction still not be able to automatically delineate the boundary of the affected area.

This script is introduced to highlight the boundary of affected areas in more contrast and detail. Band 11 and Band 12 of Sentinel-2 is used. Using a higher coefficient number lead to more contrast visualization.

This script is benefiting not only for firefighters to manage the spread of fire but also for recovery management effort.

## Authors of the script

Adzanil Rachmadhi Putra
Fatwa Ramdani

## Description of representative images

This is the result of the script for the wildfire event of Melbourne, March 4, 2019.

![Fire boundary script example](fig/2019-03-04_Sentinel-2B_L1C_Fire_boundary.jpg)
