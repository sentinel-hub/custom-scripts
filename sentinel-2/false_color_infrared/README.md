# False color infrared product

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=41.77643254375405&lng=12.69744873046875&zoom=10&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/false_color_infrared/script.js){:target="_blank"}
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscript=bGV0IGdhaW4gPSAyLjU7CnJldHVybiBbQjA4LCBCMDQsIEIwM10ubWFwKGEgPT4gZ2FpbiAqIGEpOwo%3D){:target="_blank"}

## General description

The [False color](https://en.wikipedia.org/wiki/False_color) infrared product maps near-infrared spectral band B8 with red and green bands, B4 and B3, to [sRGB](https://en.wikipedia.org/wiki/SRGB) components directly. This product yields the image in which vegetation is shown in the red component.

## Description of representative images

False color composite of Rome. Acquired on 8.10.2017.

![False color composite of Rome](fig/fig1.png)

## References
- [1] Wikipedia, [False color](https://en.wikipedia.org/wiki/False_color). Accessed October 10th 2017.
- [2] Wikipedia, [sRGB](https://en.wikipedia.org/wiki/SRGB). Accessed October 10th 2017.
