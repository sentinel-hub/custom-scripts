# Sentinel-2 120 m Mosaic - False Color

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Collection Access

[Sentinel-2 L2A 120 m mosaic](https://collections.sentinel-hub.com/sentinel-s2-l2a-mosaic-120/) is a [public data collection](https://collections.sentinel-hub.com/), that is not part of open EO data. It is not included into EO Browser or Sentinel Playground. To access it, you need a [Sentinel Hub account](https://www.sentinel-hub.com/pricing/), and then either create a [process request](https://docs.sentinel-hub.com/api/latest/api/process/) to the collection or to [create a configuration based on the preprepared template](https://www.sentinel-hub.com/faq/#how-to-visualize-own-collection-eobrowser), which will allow you to view it in EO Browser and make [OGC requests](https://www.sentinel-hub.com/develop/api/ogc/) to it. The collection ID is `484d8dbb-9e3e-41f2-b96b-35189d3ae37f`, and the collection type is `byoc-484d8dbb-9e3e-41f2-b96b-35189d3ae37f`. 

## General description

False Color composite is a simple RGB composite with NIR band in the red channel, red band in the green channel and green band in the blue channel. The script is useful for plant density and health monitoring, as vegetation (displayed in red) heavily reflects NIR light while absorbing red. Vegetation is colored red, cities and exposed ground are grey or tan, and water appears blue or black. For Sentinel-2 L2A 120 m Mosaic, the bands (B08, B04, B03) are divided by 3000 to bring them to an expected range of 0-1. 

## Description of representative images

False Color visualization of northern Africa and Europe, 27.12.2019. 

![120 m mosaic False Color](fig/fig1.png)

False Color visualization of Japan, 27.12.2019. 

![120 m mosaic False Color](fig/fig2.png)

False Color visualization of Ganges delta in Bangladesh, 27.12.2019.

![120 m mosaic False Color](fig/fig3.png)





