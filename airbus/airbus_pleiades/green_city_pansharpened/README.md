---
permalink: /airbus_pleiades/green_city_pansharpened/
nav_exclude: true
---

# Green City - Pleiades Pansharpened Script, Pleiades

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

As Airbus Pleiades is commercial data, brought into Sentinel Hub as Bring Your Own Data, direct EO Browser and Sentinel Playgorund links are not possible due to the personalized data credentials. 

## General description of the script

Uses NDVI [1] to color Pleiades images and create awareness of green areas in cities around the World. The script was modified to fit PlanetScope spectral bands. 
See also <a href="https://custom-scripts.sentinel-hub.com/sentinel-2/green_city/#">Green City for Pleiades.</a> 

## Author of the script

Carlos Bentes

## Description of representative images

Visualization of the port of Hamburg with the Green City script. Acquisition date 2019-04-30, processed by Sentinel Hub. 
![Green City script over Tallinn](fig/fig1.jpg)

## References

[1] Normalized difference vegetation index: 
https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index

## Credits

Y. Zha, J. Gao & S. Ni (2003) Use of normalized difference built-up index in automatically mapping urban areas from TM imagery, International Journal of Remote Sensing, 24:3, 583-594, DOI: 10.1080/01431160304987
