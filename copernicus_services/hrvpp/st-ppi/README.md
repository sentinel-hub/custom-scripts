---
permalink: /copernicus_services/st-ppi/
nav_exclude: true
---

# Seasonal Trajectories PPI visualisation script

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
This script visualises seasonal trajectories PPI . The Seasonal Trajectories PPI is derived through fitting a smoothing and gap filling function to the yearly time-series raw PPI values. The color map is adopted from https://github.com/jacobs-tim/copernicus-land-monitoring-service-hrvpp-colourmaps 

  
## Description of representative images
*2020 late July seasonal trajectories PPI over  Brăila Romania* 

![Seasonal trajectories Brăila Romania](fig/braila-romania.PNG)  

## Resources

- [Data source](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity/seasonal-trajectories)

- [Entry in public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/seasonal-trajectories)
