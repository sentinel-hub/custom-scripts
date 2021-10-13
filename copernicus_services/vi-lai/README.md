# VI LAI visualisation script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script  
This script visualises raw LAI of the VI product. LAI is defined as one half of the total  area of photosynthetically active elements of the canopy per unit horizontal ground area. The LAI provided by HRVPP corresponds to actual LAI of all the canopy layers, including all green contributors. Practically, the LAI quantifies the thickness of the vegetation cover.
Physical values range from 0 to 8.The color map is adopted from https://github.com/jacobs-tim/copernicus-land-monitoring-service-hrvpp-colourmaps 

  
## Description of representative images
*August, 2020 LAI over Emmeloord, Flevoland Netherlands* 

![LAI over Emmeloord, Flevoland Netherlands ](fig/emmeloord-netherlands.png)  

## Resources

- [Data source](https://land.copernicus.eu/user-corner/technical-library/product-user-manual-of-vegetation-indices/)

- [Entry in public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/vegetation-indices)
