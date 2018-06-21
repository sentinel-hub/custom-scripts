# MSI

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/msi/script.js){:target="_blank"}    
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/msi/script.js){:target="_blank"}   


## General description of the script

The MSI is a reflectance measurement, sensitive to increases in leaf water content.

With the increase of water content of leaves in vegetation canopies increases also the strength of absorption around 1599nm. Absorption at 819nm is used as a reference, since it’s nearly unaffected by changing water content. Applications of the MSI include canopy stress analysis, productivity prediction and modelling, fire hazard condition analysis, and studies of ecosystem physiology. This index is inverted relative to other water vegetation indices; higher values indicate greater water stress and less water content.

Values description: The values of this index range from 0 to more than 3. The common range for green vegetation is 0.4 to 2.
