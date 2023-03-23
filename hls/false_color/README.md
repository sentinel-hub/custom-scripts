---
permalink: /hls/false_color/
nav_exclude: true
---

# False Color

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

- [EO Browser - To add](){:target="_blank"}

## Description

This is a simple RGB composite with NIR band in the red channel, red band in the green channel and green band in the blue channel. The script is useful for plant density and health monitoring, as vegetation (displayed in red) heavily reflects NIR light while absorbing red. Vegetation is colored red, cities and exposed ground are grey or tan, and water appears blue or black.

## Description of representative images

HLS false color composite of Rome. Acquired on 2022-07-24, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)