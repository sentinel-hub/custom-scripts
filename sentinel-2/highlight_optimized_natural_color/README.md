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

This script aims to display the Earth in beautiful natural color images. It uses highlight optimization to avoid burnt out pixels and to even out the exposure. The script was inspired by the [Tonemapped Natural Color Script](https://custom-scripts.sentinel-hub.com/sentinel-2/tonemapped_natural_color/){:target="_blank"}. The script is very simple, needing only 3 code lines. 

For Sentinel-2 L2A, the script only uses bicubic root and lowers the values of the true color bands: 

```javascript
return [Math.cbrt(0.6 * B04),
        Math.cbrt(0.6 * B03),
        Math.cbrt(0.6 * B02)]
```

For Sentinel-2 L1C, the contrast was increased for better visualization: 

```javascript
return [Math.cbrt(0.6 * B04 - 0.035),
        Math.cbrt(0.6 * B03 - 0.035),
        Math.cbrt(0.6 * B02 - 0.035)]
```

## Author of the script

Marko Repše

## Description of representative images

1) Beautiful Glacier Grey
![Glacier Grey](fig/fig1.jpg)

## Credits

[1] [Tonemapped Natural Color Script](https://custom-scripts.sentinel-hub.com/sentinel-2/tonemapped_natural_color/){:target="_blank"} 
