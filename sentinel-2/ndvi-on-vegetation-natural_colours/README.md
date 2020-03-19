# NDVI on L2A Vegetation and Natural Colours Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=49.2831&lng=2.8846&zoom=11&time=2019-07-05&preset=CUSTOM&datasource=Sentinel-2%20L2A&layers=B01,B02,B03&evalscript=dmFyIG5hdHVyYWxDb2xvdXIgPSBbMypCMDQsIDMqQjAzLCAzKkIwMl07CgpsZXQgbmR2aUNvbG9yTWFwID0gWwoJWy0xLjAsIDB4MDAwMDAwXSwKCVstMC4yLCAweEE1MDAyNl0sCglbMC4wLCAgMHhENzMwMjddLAoJWzAuMSwgIDB4RjQ2RDQzXSwKCVswLjIsICAweEZEQUU2MV0sCglbMC4zLCAgMHhGRUUwOEJdLAoJWzAuNCwgIDB4RkZGRkJGXSwKCVswLjUsICAweEQ5RUY4Ql0sCglbMC42LCAgMHhBNkQ5NkFdLAoJWzAuNywgIDB4NjZCRDYzXSwKCVswLjgsICAweDFBOTg1MF0sCiAgICBbMC45LCAgMHgwMDY4MzddCl07CgpmdW5jdGlvbiBpbmRleCh4LCB5KSB7CglyZXR1cm4gKHggLSB5KSAvICh4ICsgeSk7Cn0KCmZ1bmN0aW9uIHRvUkdCKHZhbCkgewoJcmV0dXJuIFt2YWwgPj4%2BIDE2LCB2YWwgPj4%2BIDgsIHZhbF0ubWFwKHggPT4gKHggJiAweEZGKSAvIDB4RkYpOwp9CgpmdW5jdGlvbiBmaW5kQ29sb3IoY29sVmFsUGFpcnMsIHZhbCkgewoJbGV0IG4gPSBjb2xWYWxQYWlycy5sZW5ndGg7Cglmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykgewoJCWlmICh2YWwgPD0gY29sVmFsUGFpcnNbaV1bMF0pIHsKCQkJcmV0dXJuIHRvUkdCKGNvbFZhbFBhaXJzW2ktMV1bMV0pOwoJCX0KCX0KCXJldHVybiB0b1JHQihjb2xWYWxQYWlyc1tuLTFdWzFdKTsKfQoKcmV0dXJuIChTQ0wgPT0gNCk%2FIAogIGZpbmRDb2xvcihuZHZpQ29sb3JNYXAsIGluZGV4KEI4QSwgQjA0KSk6IG5hdHVyYWxDb2xvdXI7){:target="_blank"} 


## General description of the script

This script works on Sentinel-2 L2A products, using the Vegetation class from the "Scene Classification map", to display a colour-coded normalized difference vegetation index, abbreviated NDVI, on pixels classified as vegetation and natural colours of surface reflectance (red = B04, green = B03, blue = B02) otherwise (water, clouds, snow, not-vegetated land pixels).

The normalized difference vegetation index, abbreviated NDVI, is defined as

            NDVI = (B8A - B04) / (B8A + B04).

B8A band at 20 m resolution is used for NDVI computation as B8A spectral response is narrower than band B08 and less impacted by water vapour content.

It is an indicator of live green vegetation as described in [1].

## Details of the script

Due to visualization issue with the Scene Classification Map this script performs better when displaying data close to the native pixel size with respect to screen size, therefore when the zoom level on bottom right of your EO Browser web window indicates a scale of 2 km or 3 km.

It works better in vegetated area without too many clouds however the L2A vegetation class is pretty reliable.
The natural colours visualisation is obtained with a gain of 3.0 optimized for the visualisation of surface reflectance:

            naturalColour = [3*B04, 3*B03, 3*B02]

## Author of the script

Jérôme LOUIS

## Description of representative images

1) The two images of forest of Compiègne acquired 6 months apart (early summer vs early winter) show the difference of forest NDVI depending on the season.

The early summer image

![Compiègne, France - early summer](fig/Forest-North-of-France-Sentinel-2_L2A_from_2019-07-05.jpg)

The early winter image

![Compiègne, France - early winter](fig/Forest-North-of-France-Sentinel-2_L2A_from_2020-01-06.jpg)

2) The borders of the Virunga Park lying across the boundaries of three states (DRC, Ugunda, Rwanda) are clearly visible as the NDVI values differ between the Park and the surrounded areas more influenced by human land-use.

![Virunga Park](fig/Virunga-National-Park-Sentinel-2_L2A_from_2019-08-16.jpg)

NDVI color legend

![NDVI color legend](fig/ndvi-color-legend.jpg)

## References

[1] Wikipedia, [Normalized Difference Vegetation Index.](https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index){:target="_blank"} Accessed on January 21th 2020.

## Credits

This script is inspired by Custom script repository:

- ndviColorMap values taken from [NDVI script description](https://custom-scripts.sentinel-hub.com/sentinel-2/ndvi/){:target="_blank"}
- findColor function taken from Custom Processing Scripts documentation 