# Normalized difference vegetation index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=41.9027835&lng=12.496365500000024&zoom=12&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-04&atmFilter=&showDates=false&evalscript=CmxldCBuZHZpQ29sb3JNYXAgPSBbCglbLTEuMCwgMHgwMDAwMDBdLAoJWy0wLjIsIDB4RkYwMDAwXSwKCVstMC4xLCAweDlBMDAwMF0sCglbMC4wLCAweDY2MDAwMF0sCglbMC4xLCAweEZGRkYzM10sCglbMC4yLCAweENDQ0MzM10sCglbMC4zLCAweDY2NjYwMF0sCglbMC40LCAweDMzRkZGRl0sCglbMC41LCAweDMzQ0NDQ10sCglbMC42LCAweDAwNjY2Nl0sCglbMC43LCAweDMzRkYzM10sCglbMC44LCAweDMzQ0MzM10sCglbMC45LCAweDAwNjYwMF0KXTsKCmZ1bmN0aW9uIGluZGV4KHgsIHkpIHsKCXJldHVybiAoeCAtIHkpIC8gKHggKyB5KTsKfQoKZnVuY3Rpb24gdG9SR0IodmFsKSB7CglyZXR1cm4gW3ZhbCA%2BPj4gMTYsIHZhbCA%2BPj4gOCwgdmFsXS5tYXAoeCA9PiAoeCAmIDB4RkYpIC8gMHhGRik7Cn0KCi8vIFdlIHNob3VsZCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIG5laWdoYm9yaW5nIGNvbG9ycwpmdW5jdGlvbiBmaW5kQ29sb3IoY29sVmFsUGFpcnMsIHZhbCkgewoJbGV0IG4gPSBjb2xWYWxQYWlycy5sZW5ndGg7Cglmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykgewoJCWlmICh2YWwgPD0gY29sVmFsUGFpcnNbaV1bMF0pIHsKCQkJcmV0dXJuIHRvUkdCKGNvbFZhbFBhaXJzW2ktMV1bMV0pOwoJCX0KCX0KCXJldHVybiB0b1JHQihjb2xWYWxQYWlyc1tuLTFdWzFdKTsKfQoKcmV0dXJuIGZpbmRDb2xvcihuZHZpQ29sb3JNYXAsIGluZGV4KEIwOCwgQjA0KSk7Cg%3D%3D&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/ndvi/script.js){:target="_blank"}
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscript=CmxldCBuZHZpQ29sb3JNYXAgPSBbCglbLTEuMCwgMHgwMDAwMDBdLAoJWy0wLjIsIDB4RkYwMDAwXSwKCVstMC4xLCAweDlBMDAwMF0sCglbMC4wLCAweDY2MDAwMF0sCglbMC4xLCAweEZGRkYzM10sCglbMC4yLCAweENDQ0MzM10sCglbMC4zLCAweDY2NjYwMF0sCglbMC40LCAweDMzRkZGRl0sCglbMC41LCAweDMzQ0NDQ10sCglbMC42LCAweDAwNjY2Nl0sCglbMC43LCAweDMzRkYzM10sCglbMC44LCAweDMzQ0MzM10sCglbMC45LCAweDAwNjYwMF0KXTsKCmZ1bmN0aW9uIGluZGV4KHgsIHkpIHsKCXJldHVybiAoeCAtIHkpIC8gKHggKyB5KTsKfQoKZnVuY3Rpb24gdG9SR0IodmFsKSB7CglyZXR1cm4gW3ZhbCA%2BPj4gMTYsIHZhbCA%2BPj4gOCwgdmFsXS5tYXAoeCA9PiAoeCAmIDB4RkYpIC8gMHhGRik7Cn0KCi8vIFdlIHNob3VsZCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIG5laWdoYm9yaW5nIGNvbG9ycwpmdW5jdGlvbiBmaW5kQ29sb3IoY29sVmFsUGFpcnMsIHZhbCkgewoJbGV0IG4gPSBjb2xWYWxQYWlycy5sZW5ndGg7Cglmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykgewoJCWlmICh2YWwgPD0gY29sVmFsUGFpcnNbaV1bMF0pIHsKCQkJcmV0dXJuIHRvUkdCKGNvbFZhbFBhaXJzW2ktMV1bMV0pOwoJCX0KCX0KCXJldHVybiB0b1JHQihjb2xWYWxQYWlyc1tuLTFdWzFdKTsKfQoKcmV0dXJuIGZpbmRDb2xvcihuZHZpQ29sb3JNYXAsIGluZGV4KEIwOCwgQjA0KSk7Cg%3D%3D){:target="_blank"}

## General description

The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.

The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation; see [1] for details.

The normalized difference vegetation index, abbreviated NDVI, is defined as   

$$NDVI := \mathtt{Index}(NIR,RED) = \frac{NIR-RED}{NIR+RED}.$$  

For Sentinel-2, the index looks like this:

$$NDVI := \mathtt{Index}(B8,B4) = \frac{B8-B4}{B8+B4}.$$   

## NDVI composites for other datasets: 

Landsat 8 NDVI = **(B05 - B04) / (B05 + B04)**

Landsat 5 and 7 NDVI = **(B04 - B03) / (B04 + B03)**

MODIS NDVI = **(B02 - B01) / (B02 + B01)**

ENVISAT MERIS NDVI = **(B13 - B07) / (B13 + B07)**


## Description of representative images

NDVI of Rome. Acquired on 8.10.2017.

![NDVI of Rome](fig/fig1.png)

## Color legend
<table>
  <tr>
    <th>NDVI range</th>
    <th>HTLM color code</th>
    <th>Color</th>
  </tr>
  <tr>
    <td>NDVI &lt; -0.2</td>
    <td>#000000</td>
    <td style="background-color: #000000;"></td>
  </tr>
  <tr>
    <td>-.2 &lt; NDVI &leq; 0</td>
    <td>#a50026</td>
    <td style="background-color: #a50026;"></td>
  </tr>
  <tr>
    <td>0 &lt; NDVI &leq; .1</td>
    <td>#d73027</td>
    <td style="background-color: #d73027;"></td>
  </tr>
  <tr>
    <td>.1 &lt; NDVI &leq; .2</td>
    <td>#f46d43</td>
    <td style="background-color: #f46d43;"></td>
  </tr>
  <tr>
    <td>.2 &lt; NDVI &leq; .3</td>
    <td>#fdae61</td>
    <td style="background-color: #fdae61;"></td>
  </tr>
  <tr>
    <td>.3 &lt; NDVI &leq; .4</td>
    <td>#fee08b</td>
    <td style="background-color: #fee08b;"></td>
  </tr>
  <tr>
    <td>.4 &lt; NDVI &leq; .5</td>
    <td>#ffffbf</td>
    <td style="background-color: #ffffbf;"></td>
  </tr>
  <tr>
    <td>.5 &lt; NDVI &leq; .6</td>
    <td>#d9ef8b</td>
    <td style="background-color: #d9ef8b;"></td>
  </tr>
  <tr>
    <td>.6 &lt; NDVI &leq; .7</td>
    <td>#a6d96a</td>
    <td style="background-color: #a6d96a;"></td>
  </tr>
  <tr>
    <td>.7 &lt; NDVI &leq; .8</td>
    <td>#66bd63</td>
    <td style="background-color: #66bd63;"></td>
  </tr>
  <tr>
    <td>.8 &lt; NDVI &leq; .9</td>
    <td>#1a9850</td>
    <td style="background-color: #1a9850;"></td>
  </tr>
  <tr>
    <td>.9 &lt; NDVI &leq; 1.0</td>
    <td>#006837</td>
    <td style="background-color: #006837;"></td>
  </tr>

</table>

## References
 [1] Wikipedia, [Normalized Difference Vegetation Index
](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index). Accessed on October 4th 2017.
