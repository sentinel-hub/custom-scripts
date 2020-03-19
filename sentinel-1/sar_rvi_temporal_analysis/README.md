# Tracking Radar Vegetation Index (Agriculture Development) Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [Sentinel Playground Temporal](https://apps.sentinel-hub.com/sentinel-playground-temporal/?source=S1-AWS-IW-VVVH&lat=46.548944380517646&lng=38.01544189453125&zoom=11&preset=CUSTOM&layers=VV,VV,VV&maxcc=20&gain=1.0&gamma=1.0&time=2017-01-01%7C2019-07-30&atmFilter=ATMCOR&showDates=false&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICAgICAgICAgICAiVlYiLAogICAgICAgICAgIlZIIgogICAgICBdCiAgICB9XSwKICAgIG91dHB1dDogeyBiYW5kczogMyB9LAogICAgbW9zYWlja2luZzogIk9SQklUIgogIH0KfQoKCmZ1bmN0aW9uIGNhbGNSVkkoc2FtcGxlKSB7CiAgdmFyIGRlbm9tID0gc2FtcGxlLlZIKjIrc2FtcGxlLlZWKjI7CiAgcmV0dXJuICgoZGVub20hPTApID8gKHNhbXBsZS5WSCo4KSAvIGRlbm9tIDogMC4wKTsKfQpmdW5jdGlvbiAgc3RyZXRjaCh2YWwsIG1pbiwgbWF4KSAgewogcmV0dXJuICh2YWwtbWluKS8obWF4LW1pbik7Cn0KCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcyxzY2VuZXMpIHsgIAogIHZhciBhdmcxID0gMC4yOwogIHZhciBjb3VudDEgPSAwOwogIHZhciBhdmcyID0gMC4yOwogIHZhciBjb3VudDIgPSAwOwogIHZhciBhdmczID0gMC4yOwogIHZhciBjb3VudDMgPSAwOwogIHZhciBlbmRNb250aCA9IHNjZW5lc1swXS5kYXRlLmdldE1vbnRoKCk7CiAgCiAgZm9yICh2YXIgaT0wO2k8c2FtcGxlcy5sZW5ndGg7aSsrKSB7CiAgICAgIHZhciBydmkgID0gY2FsY1JWSShzYW1wbGVzW2ldKTsKICAgICAgaWYgKHNjZW5lc1tpXS5kYXRlLmdldE1vbnRoKCk9PWVuZE1vbnRoKQogICAgICB7CgkJYXZnMyA9IGF2ZzMgKyBydmk7CiAgICAgICAgY291bnQzKys7CiAgICAgIH0KICAgICAgZWxzZSBpZiAoc2NlbmVzW2ldLmRhdGUuZ2V0TW9udGgoKT09KGVuZE1vbnRoLTEpKQogICAgICB7CgkJYXZnMiA9IGF2ZzIgKyBydmk7CiAgICAgICAgY291bnQyKys7CiAgICAgIH0KICAgICAgZWxzZQogICAgICB7ICAgICAgCgkJYXZnMT0gYXZnMSArIHJ2aTsKICAgICAgICBjb3VudDErKzsKICAgICAgfQogICAgICAKICB9CiAgYXZnMSA9IGF2ZzEvY291bnQxOwogIGF2ZzIgPSBhdmcyL2NvdW50MjsKICBhdmczID0gYXZnMy9jb3VudDM7CiAgYXZnMSA9IHN0cmV0Y2goYXZnMSwgMC4yNSwgMC43NSk7CiAgYXZnMiA9IHN0cmV0Y2goYXZnMiwgMC4yNSwgMC43NSk7CiAgYXZnMyA9IHN0cmV0Y2goYXZnMywgMC4yNSwgMC43NSk7CiAgCiAgcmV0dXJuIFthdmcxLGF2ZzIsYXZnM107CgoKfQpmdW5jdGlvbiBmaWx0ZXJTY2VuZXMgKHNjZW5lcywgaW5wdXRNZXRhZGF0YSkgewogICAgcmV0dXJuIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24gKHNjZW5lKSB7CgkgIHJldHVybiBzY2VuZS5kYXRlLmdldFRpbWUoKT49KGlucHV0TWV0YWRhdGEudG8uZ2V0VGltZSgpLTMqMzEqMjQqMzYwMCoxMDAwKSA7CiAgICB9KTsKfQoK&temporal=true){:target="_blank"} 


## General description of the script

The script analyses and compares the RVI values using all available radar images. The script calculates the average RVI for the current and previous 2 months and takes the current image as the reference.

## Details of the script

The script works best in lowland areas during active vegetation periods. In addition to terrain mismatches in highlands, other image distortions are possible, that are probably related to satellite orbit and image acquisition mode changes (also regarding Linear to Db problems?).

Images can be over-saturated during prolonged periods of drought/floods and no vegetation change (mostly winter). Usually best idea is to select the reference date in the end of the month and sometimes the date should be changed to better fit the available images (due to change of orbits and acquisition schemes).

Crop properties and VV/VH radar signal limitations have impact on RVI sensitivity (author's understanding is that soybeans are best targets).

It is definitely beneficial to tinker with the pixel evaluation, and value stretch settings, as well as the time-frame of analysis. 

[Some output images.](https://twitter.com/Valtzen/status/1221548334520905729){:target="_blank"}

## Author of the script

Valters Zeizis

## Description of representative images

In the image you can see agriculture fields around Yeya river, Krasnodar region, Russia.

Under the current settings the images would be colored based on the Change of RV (increase, stable, decrease), so:

* black/dark and white/grey areas are where the index is stable, like water (low RVI) or forests (high RVI)
* blue/light blue areas indicate increasing crop growth
* green/yellow areas indicate ripening or ripe crops
* orange/red areas indicate areas of harvested areas

![The script example](fig/Sentinel-1_(IW-VVVH)_2018-07-31.jpg)

## Credits and references

[1] The script is made using [Sentinel-2 Agricultural growth stage script](https://github.com/hareldunn){:target="_blank"} by Harel Dan and posted on [Twitter](https://twitter.com/sentinel_hub/status/922813457145221121){:target="_blank"}.

[2] Some ideas were also gathered in [SNAP/STEP forums](https://forum.step.esa.int/t/creating-radar-vegetation-index/12444/2){:target="_blank"}.

[3] ResearchGate, [Radar Vegetation Index as an Alternative to NDVI for Monitoring of Soyabean and Cotton](https://www.researchgate.net/publication/267020154_Radar_Vegetation_Index_as_an_Alternative_to_NDVI_for_Monitoring_of_Soyabean_and_Cotton){:target="_blank"}.

[4] MDPI, [Sensitivity of Sentinel-1 Backscatter to Vegetation Dynamics: An Austrian Case Study](https://www.mdpi.com/2072-4292/10/9/1396){:target="_blank"}.
