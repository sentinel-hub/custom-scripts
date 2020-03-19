# ForestHurricane Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=53.7405&lng=17.7210&zoom=12&time=2017-08-16&preset=CUSTOM&datasource=Sentinel-1%20GRD%20IW&layers=VH,VH,VH&evalscript=cmV0dXJuIFtWViozLFZIKjgsVkgqM10%3D){:target="_blank"} 

## General description of the script

The script helps in visualization of forest damage after a hurricane.

The script is based on Sentinel-1 radar data. With the help of the script, you can specify the area of damage a few days after the disaster (regardless of weather conditions, cloudiness).

Visualization allows you to quickly determine the extent of damage and can be useful for emergency services to plan the right amount of equipment and people to help.

## Author of the script

Kamil Onoszko

## Description of representative images

Visualization before the Hurricane in Chojnice, Poland in August 2017:
![ForestHurricane script example before the Hurricane](fig/2017-08-10_Sentinel-1B_GRD_IW_forest_hurricane.jpg)

Visualization after the Hurricane:
![ForestHurricane script example after the Hurricane](fig/2017-08-16_Sentinel-1A_GRD_IW_forest_hurricane.jpg)
