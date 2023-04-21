---
permalink: /sentinel-5p/methane/
nav_exclude: true
---

# Sentinel-5P Methane - CH4
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
 - [EO Browser](https://sentinelshare.page.link/1dB5){:target="_blank"}   

## Description
Methane is, after carbon dioxide, the most important contributor to the anthropogenically (caused by human activity) enhanced greenhouse effect. Measurements are provided in parts per billion (ppb) with a spatial resolution of 7 km x 3.5 km.
Find more information [here](http://www.tropomi.eu/data-products/methane).

## Description of representative images

High methane concentrations over Burkina Faso, 2019-03-14.
![NO2 tropospheric column](fig/fig1.png)


