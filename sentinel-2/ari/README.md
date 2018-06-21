# ARI - Anthocyanin Reflectance Index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ari/script.js){:target="_blank"}    
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ari/script.js){:target="_blank"}   

## General description of the script
Sentinel - ARI (Anthocyanin Reflectance Index)

The increases in this reflectance measurement, sensitive to anthocyanin in plant foliage, indicate changes in foliage via new growth and death. The reciprocal reflectance of anthocyanin is highest around 550nm; however, the reciprocal reflectance value at 550nm is also influenced by chlorophyll. The reciprocal reflectance at 700nm is used as a measure of chlorophyll content to remove the chlorophyll contribution from reflectance around 550nm.

Values description: The values of this index range from 0 to more than 0.2. The common range for green vegetation is between values of 0.001 to 0.1.
## References
 - possible references (scientific articles, wiki/web references, ...)
