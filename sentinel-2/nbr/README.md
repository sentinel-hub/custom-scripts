# NBR-RAW (Normalized Burn Ratio)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/nbr/script.js){:target="_blank"}    
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-2/nbr/script.js){:target="_blank"}   


## General description of the script

To detect burned areas, the NBR-RAW index is the most appropriate choice. It highlights burned areas in large fire zones greater than 500 acres. Create pre- and post-fire NBR images, subtract the post-fire image from the pre-fire image to create a differenced (or delta) NBR image that indicates burn severity.

Values description: Darker pixels indicate burned areas.