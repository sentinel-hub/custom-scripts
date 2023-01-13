# SAR for Deforestation Detection Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://sentinelshare.page.link/4ZVS){:target="_blank"} 


## General description of the script

The script uses the VV and VH bands of the Sentinel-1 and transforms the cartesian space of VV and VH to polar coordinates computing the length and angle of the resulting vector and also the area of the square defined by VV and VH. Then it uses the length of the vector as a classifier to discriminate between water, forest and soil.

The script paints in black the water and bare soil areas, and uses both the length and the angle to draw a scale for the forest (green) and soil (red), drawing a stronger green where more forest has been classified and a stronger red or black where more soil has been found.

## Details of the script

The script only uses the VV and VH bands of the Sentinel 1, so it will identify bare soil as water (black) and is intended to be used in forest area, returning strange results when used in populated areas.

## Author of the script

Antonio Carlón Paredes

## Description of representative images

The images show several zones of Borneo, in areas affected by palm oil deforestation.

![The script example 1](fig/image1.png)

![The script example 2](fig/image2.png)

![The script example 3](fig/image3.png)
