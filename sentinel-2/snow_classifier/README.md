# Snow classifier
---


<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=41.9027835&lng=12.496365500000024&zoom=12&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/snow_classifier/script.js){:target="_blank"}    
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/snow_classifier/script.js){:target="_blank"}   

## General description of the script

In [1] Hagolle et al. classify pixels as covered by snow based on the Normalized Difference Snow Index (NDSI), which is defined as 

$$NDSI = \frac{B03 - B11}{B03 + B11}$$

Bright pixels are marked as snow if  their NDSI value is greater than 0.6. The document does not specify what
 makes a pixel bright, so a threshold on the green band was picked to determine the brightness.
 
In [2] the authors also decribe a snow sensing method that uses NDSI, but say that a pixel with NDSI > 0.42 should be marked as snowy.
In addition to that, they mention that NDSI values even lower than that could imply snow, given that the pixel's Normalized 
Difference Vegetation Index (NDVI) value is close enough to 0.1.

This algorithm classifies pixels based on all three values. Different brightness and NDSI thresholds were tested and 0.3 and 0.4, respectively, proved to give the best results.

## References
[1] Olivier Hagolle, Mireille Huc, Camille Desjardins, Stefan Auer, & Rudolf Richter. (2017, December 7). MAJA Algorithm Theoretical Basis Document (Version 1.0). Zenodo. http://doi.org/10.5281/zenodo.1209633

[2] Andreas Juergen Dietz, Claudia Kuenzer, Ursula Gessner & Stefan Dech (2012):
Remote sensing of snow – a review of available methods, International Journal of Remote Sensing,
33:13, 4094-4134. http://dx.doi.org/10.1080/01431161.2011.640964
