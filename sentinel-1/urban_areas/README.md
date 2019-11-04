# Urban Areas Script

<a href="#" id='togglescript'>Show</a> script or [download](urban_areas_script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative urban_areas_script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=44.51260&lng=11.35008&zoom=13&time=2019-05-26&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=cmV0dXJuIFs1LjUgKiBWSCA%2BIDAuNSwgVlYsIFZIICogOF07){:target="_blank"}
 Constrains: the script works only on data located on AWS.

## General description of the script

The script is useful for locating urban areas and individual buildings. It uses VH and VV polarizations to highlight different buildings and topology orientations with purple and green colors. Radar is very accurate; it detects almost every building and is not obstructed by clouds. It can be used to track urban expansion, to detect illegally built buildings, estimate building type or locate buildings in high-risk areas (such as floods).

The script does not work in high elevation areas, where snow and high elevation differences are also highlighted and it becomes difficult to separate urban areas from them.

## Author of the script

Monja Sebela

## Description of representative images

Visualization of urban areas in Bologna, Italy with the urban areas script:
![Urban Areas script example in Bologna (Italy)](fig/fig1.jpg)
