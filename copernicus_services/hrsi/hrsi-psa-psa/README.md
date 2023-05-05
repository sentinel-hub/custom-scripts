---
permalink: /copernicus_services/hrsi-psa-psa/
nav_exclude: true
---

# CLMS HR-S&I: Persistent Snow Area visualisation script

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
This script visualises Persistent Snow Area. 

Possible values
are as follows:
- 0: no persistent snow
- 1: persistent snow
- 255: no data

  
## Description of representative images
*PSA over the Mont Blanc Region, FR* 

![PSA](fig/figure.png)  

## Resources

- [Data source](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products)
