# DEM Contour Lines
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

## Description

This script uses DEM to calculate and display contour lines. They are calculated using  `c = 20 * Math.floor(d / 20)`. The visualization can be manipulated in a number of ways. The number `35` in the first conditional statement below sets the increments between the contour lines; in this case, the contour lines will be 35 meter apart. The number `5` in the script below sets the contour line thickness to be pretty low. The first return statement `return [0,0,0]` sets the color of the contour lines to black, and the colorBlend maps the areas in between in terrain colors, based on the terrain elevation model borders. 

```javascript
var d = DEM;
if (d % 35 < 5) {
  return [0,0,0]
}
var c = 20 * Math.floor(d / 20);
return colorBlend(c, [-12000,-9000,-6000,-1000,-500,-200,-50,-20,-10,0,10,30,50,200,300,400,500,1000,3000,5000,7000,9000],
[[0.000, 0.000, 0.157],
[0.118, 0.000, 0.353],
[0.118, 0.118, 0.471],
[0.157, 0.196, 0.706],
[0.235, 0.235, 0.902],
[0.235, 0.314, 0.961],
[0.353, 0.333, 0.980],
[0.471, 0.471, 0.922],
[0.627, 0.627, 1.000],
[0.784, 0.784, 0.784],
[0.392, 0.220, 0.235],
[0.471, 0.180, 0.157],
[0.549, 0.298, 0.157],
[0.667, 0.376, 0.000],
[0.471, 0.220, 0.353],
[0.824, 0.573, 0.706],
[0.549, 0.431, 0.000],
[0.471, 0.549, 0.706],
[0.627, 0.667, 0.941],
[0.745, 0.784, 0.980],
[0.863, 0.941, 1.000],
[1.000, 1.000, 1.000]])
```

The script above will produce the following result:

- [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=DEM&lat=41.645342272880455&lng=-7.038757314439863&zoom=13&preset=CUSTOM&layers=DEM,DEM,DEM&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-21&atmFilter=&showDates=false&evalscript=dmFyIGQgPSBERU07CmlmIChkICUgMzUgPCA1KSB7CiAgcmV0dXJuIFswLDAsMF0KfQp2YXIgYyA9IDIwICogTWF0aC5mbG9vcihkIC8gMjApOwpyZXR1cm4gY29sb3JCbGVuZChjLCBbLTEyMDAwLC05MDAwLC02MDAwLC0xMDAwLC01MDAsLTIwMCwtNTAsLTIwLC0xMCwwLDEwLDMwLDUwLDIwMCwzMDAsNDAwLDUwMCwxMDAwLDMwMDAsNTAwMCw3MDAwLDkwMDBdLApbWzAuMDAwLCAwLjAwMCwgMC4xNTddLApbMC4xMTgsIDAuMDAwLCAwLjM1M10sClswLjExOCwgMC4xMTgsIDAuNDcxXSwKWzAuMTU3LCAwLjE5NiwgMC43MDZdLApbMC4yMzUsIDAuMjM1LCAwLjkwMl0sClswLjIzNSwgMC4zMTQsIDAuOTYxXSwKWzAuMzUzLCAwLjMzMywgMC45ODBdLApbMC40NzEsIDAuNDcxLCAwLjkyMl0sClswLjYyNywgMC42MjcsIDEuMDAwXSwKWzAuNzg0LCAwLjc4NCwgMC43ODRdLApbMC4zOTIsIDAuMjIwLCAwLjIzNV0sClswLjQ3MSwgMC4xODAsIDAuMTU3XSwKWzAuNTQ5LCAwLjI5OCwgMC4xNTddLApbMC42NjcsIDAuMzc2LCAwLjAwMF0sClswLjQ3MSwgMC4yMjAsIDAuMzUzXSwKWzAuODI0LCAwLjU3MywgMC43MDZdLApbMC41NDksIDAuNDMxLCAwLjAwMF0sClswLjQ3MSwgMC41NDksIDAuNzA2XSwKWzAuNjI3LCAwLjY2NywgMC45NDFdLApbMC43NDUsIDAuNzg0LCAwLjk4MF0sClswLjg2MywgMC45NDEsIDEuMDAwXSwKWzEuMDAwLCAxLjAwMCwgMS4wMDBdXSk%3D)
![dem contour lines](fig/fig1.jpg)

Making contour lines very thick and white will give the impression of colored contour lines on a black background. 

- [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=DEM&lat=40.44593462678334&lng=-8.156147003173828&zoom=14&preset=CUSTOM&layers=DEM,DEM,DEM&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-21&atmFilter=&showDates=false&evalscript=dmFyIGQgPSBERU07CmlmIChkICUgMjAgPCAxOCkgewogIHJldHVybiBbMSwxLDFdCn0KdmFyIGMgPSAyMCAqIE1hdGguZmxvb3IoZCAvIDIwKTsKcmV0dXJuIGNvbG9yQmxlbmQoYywgWy0xMjAwMCwtOTAwMCwtNjAwMCwtMTAwMCwtNTAwLC0yMDAsLTUwLC0yMCwtMTAsMCwxMCwzMCw1MCwyMDAsMzAwLDQwMCw1MDAsMTAwMCwzMDAwLDUwMDAsNzAwMCw5MDAwXSwKW1swLjAwMCwgMC4wMDAsIDAuMTU3XSwKWzAuMTE4LCAwLjAwMCwgMC4zNTNdLApbMC4xMTgsIDAuMTE4LCAwLjQ3MV0sClswLjE1NywgMC4xOTYsIDAuNzA2XSwKWzAuMjM1LCAwLjIzNSwgMC45MDJdLApbMC4yMzUsIDAuMzE0LCAwLjk2MV0sClswLjM1MywgMC4zMzMsIDAuOTgwXSwKWzAuNDcxLCAwLjQ3MSwgMC45MjJdLApbMC42MjcsIDAuNjI3LCAxLjAwMF0sClswLjc4NCwgMC43ODQsIDAuNzg0XSwKWzAuMzkyLCAwLjIyMCwgMC4yMzVdLApbMC40NzEsIDAuMTgwLCAwLjE1N10sClswLjU0OSwgMC4yOTgsIDAuMTU3XSwKWzAuNjY3LCAwLjM3NiwgMC4wMDBdLApbMC40NzEsIDAuMjIwLCAwLjM1M10sClswLjgyNCwgMC41NzMsIDAuNzA2XSwKWzAuNTQ5LCAwLjQzMSwgMC4wMDBdLApbMC40NzEsIDAuNTQ5LCAwLjcwNl0sClswLjYyNywgMC42NjcsIDAuOTQxXSwKWzAuNzQ1LCAwLjc4NCwgMC45ODBdLApbMC44NjMsIDAuOTQxLCAxLjAwMF0sClsxLjAwMCwgMS4wMDAsIDEuMDAwXV0p)
![dem contour lines](fig/fig2.jpg)

It is also possible to return contour lines of any color on top of a true color visualization of anoter satellite. However, for this, data fusion is needed. In the example below, Landsat 8 true color visualization was used under white contour lines. 

- [DEM contour lines over Landsat 8 data fusion script](https://custom-scripts.sentinel-hub.com/data-fusion/dem_contour_over_l8/)
![dem contour lines fusion](fig/fig3.jpg)

## Authors of the scripts

- Peter Gabrovšek
- Marko Repše


 