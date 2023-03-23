---
permalink: /landsat-7-etm/false-color/
nav_exclude: true
---

# Landsat 7 ETM+ False Color Near Infrared Composite

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and Visualize

- [EO Browser](https://sentinelshare.page.link/zLJL)

## General description of the script

This is a simple RGB composite with NIR band B04 in the red channel, red band B03 in the green channel and green band B02 in the blue channel. The script is useful for plant density and health monitoring, as vegetation (displayed in red) heavily reflects NIR light while absorbing red. The band 4 also penetrates atmospheric haze, and distinguishes between land and water. Cities and exposed ground are grey or tan, and water appears blue or black. 

## Description of representative images

The False Color Composite in northern Tunisia. Acquired on 2001-06-23.
![The script example 1](fig/fig1.png)
