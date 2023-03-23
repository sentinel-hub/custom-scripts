---
permalink: /slstr/f1-brightness-temperature/
nav_exclude: true
---

# F1 Brightness Temperature Visualization

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

 - [EO Browser](https://sentinelshare.page.link/Gyyd){:target="_blank"}

## General description

The script for Sentinel-3 SLSTR visualized a brightness temperature band F1 in red to blue color scheme. It can be used to monitor heat and detect wildfires. 

## Description of representative images

SLSTR F1 visualization of the US. Acquired on 2021-06-13, processed by Sentinel Hub. 

![L8 NDVI](fig/fig1.png)





