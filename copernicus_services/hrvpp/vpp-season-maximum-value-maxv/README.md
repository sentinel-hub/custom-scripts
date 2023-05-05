---
permalink: /copernicus_services/vpp-season-maximum-value-maxv/
nav_exclude: true
---

# VPP MAXV visualisation script

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script  
This script visualises season maximum value (MAXV) parameter of the VPP product. The color map is adopted from https://github.com/jacobs-tim/copernicus-land-monitoring-service-hrvpp-colourmaps 

  
## Description of representative images
*2019 season 1 season maximum value over Pina de Ebro Zaragoza Spain* 

![MAXV Pina de Ebro Zaragoza Spain](fig/pina-de-ebro-spain.PNG)   

## Resources

- [Data source](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity)

- [Entry in public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/vegetation-phenology-and-productivity-parameters-season-1)
