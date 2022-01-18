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

The [False color](https://en.wikipedia.org/wiki/False_color) infrared composite maps near-infrared spectral band B8 with red and green bands, B4 and B3, to [sRGB](https://en.wikipedia.org/wiki/SRGB) components directly. It is most commonly used to assess plant density and healht, as plants reflect near infrared and green light, while absorbing red. Since they reflect more near infrared than green, plant-covered land appears deep red. Denser plant growth is darker red. Cities and exposed ground are gray or tan, and water appears blue or black.

For Sentinel-2: **B08, B04, B02**

For [Landsat 1-5 MSS](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/false-color-nir/): **B04, B02, B01**

For [Landsat 7 ETM+](https://custom-scripts.sentinel-hub.com/landsat-7-etm/false-color/): **B04, B03, B02**

For [Landsat 4-5 TM](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/false-color/): **B04, B03, B02**

For [Landsat 8](https://custom-scripts.sentinel-hub.com/landsat-8/false-color/): **B05, B04, B03**

For [MODIS](https://custom-scripts.sentinel-hub.com/modis/false-color/): **B02, B01, B04**

## Description of representative images

False color composite of Rome. Acquired on 8.10.2017.

![False color composite of Rome](fig/fig1.png)

## References
- [1] Wikipedia, [False color](https://en.wikipedia.org/wiki/False_color). Accessed October 10th 2017.
- [2] Wikipedia, [sRGB](https://en.wikipedia.org/wiki/SRGB). Accessed October 10th 2017.
