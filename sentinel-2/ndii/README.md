# NDII
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ndii/script.js){:target="_blank"}    
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/ndii/script.js){:target="_blank"}   


## General description of the script

This index uses a normalized difference formulation instead of a simple ratio. It is a reflectance measurement, sensitive to changes in water content of plant canopies. The index values increase with increasing water content. Applications include agricultural crop management, forest canopy monitoring, and stressed vegetation detection.

Values description: The values of this index range from -1 to 1. The common range for green vegetation is between values of 0.02 to 0.6.