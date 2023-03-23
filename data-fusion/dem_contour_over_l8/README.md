---
permalink: /data-fusion/dem_contour_over_l8/
nav_exclude: true
---

# DEM Contour Lines Over Landsat 8
  
{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Authors

**Author of the datafusion script:**
- Monja B. Šebela

**Authors of the [DEM contour line script](https://custom-scripts.sentinel-hub.com/dem/contour-lines/):**
- Marko Repše
- Peter Gabrovšek
  
## Evaluate and visualize  
 - [EO Browser](https://sentinelshare.page.link/2KDE)
  
## General description of the script  
  
This script uses DEM to calculate contour lines and displays them over Landsat-8 true color image. The contour lines can be modified in color, interval and width. The contour lines script can be found [here](https://custom-scripts.sentinel-hub.com/dem/contour-lines/).

## Description of representative images  
  
**Contour lines over L8**
![contour](fig/fig1.jpg) 
