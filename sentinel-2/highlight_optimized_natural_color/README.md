# Highlight Optimized Natural Color Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-51.0021&lng=-73.3260&zoom=11&time=2019-05-08&preset=CUSTOM&datasource=Sentinel-2%20L2A&layers=B01,B02,B03&evalscript=cmV0dXJuIFtNYXRoLmNicnQoMC42KkIwNCksCiAgICAgICAgTWF0aC5jYnJ0KDAuNipCMDMpLAogICAgICAgIE1hdGguY2JydCgwLjYqQjAyKV0%3D){:target="_blank"} 


## General description of the script

This script aims to display the Earth in beautiful natural color images. It uses highlight optimization to avoid burnt out pixels and to even out the exposure. The script needs only 3 code lines and was inspired by the [Tonemapped Natural Color Script](https://custom-scripts.sentinel-hub.com/sentinel-2/tonemapped_natural_color/){:target="_blank"}. 

For Sentinel-2 L2A, the script applies the cubic root of the lowered values of the true color bands: 

```javascript
return [Math.cbrt(0.6 * B04),
        Math.cbrt(0.6 * B03),
        Math.cbrt(0.6 * B02)]
```

For Sentinel-2 L1C, the contrast is additionally increased for better visualization: 

```javascript
return [Math.cbrt(0.6 * B04 - 0.035),
        Math.cbrt(0.6 * B03 - 0.035),
        Math.cbrt(0.6 * B02 - 0.035)]
```

## Author of the script

Marko Repše

## Description of representative images

Glacier Grey, Chile. Image acquired on 2019-05-08, processed by Sentinel Hub. 
![Glacier Grey](fig/fig1.jpg)

## Credits

 - [Tonemapped Natural Color Script](https://custom-scripts.sentinel-hub.com/sentinel-2/tonemapped_natural_color/){:target="_blank"} 
