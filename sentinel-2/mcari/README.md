# MCARI (Modified Chlorophyll Absorption in Reflectance Index)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/mcari/script.js){:target="_blank"}    
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/mcari/script.js){:target="_blank"}   


## General description of the script

MCARI gives a measure of the depth of chlorophyll absorption and is very sensitive to variations in chlorophyll concentrations as well as variations in Leaf Area Index (LAI). MCARI values are not affected by illumination conditions, the background reflectance from soil and other non-photosynthetic materials observed.

## References
http://www.hiphen-plant.com