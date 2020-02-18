# Landsat 8 NDVI
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=41.9000&lng=12.5000&zoom=10&time=2020-02-05&preset=4-NDVI&datasource=Landsat%208%20USGS){:target="_blank"}   

## Description

The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.

The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation; see [1] for details.

The normalized difference vegetation index, abbreviated NDVI, is calculated using near infrared and red wavelengths. 

** NDVI = (NIR - RED) / (NIR + RED)**

For Landsat 8, the NDVI is calculated using NIR band 5 and red band 4: 

** NDVI = (B05 - B04) / (B05 + B04)**

## Description of representative images

Landsat 8 NDVI of Rome. Acquired on 5. february of 2020, processed by Sentinel Hub. 

![L8 NDVI](fig/fig1.png)


 