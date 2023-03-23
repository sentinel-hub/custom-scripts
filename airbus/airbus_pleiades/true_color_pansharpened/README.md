---
permalink: /airbus_pleiades/true_color_pansharpened/
nav_exclude: true
---

# True Color Pansharpened, Pleiades

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

## General description

The true color product maps Pleiades' band values B2, B1, and B0 which roughly correspond to red, green, and blue part of the spectrum, respectively, to R, G, and B components. The RGB bands with spectral resolution of 2 meters were pansharpened using the PAN band with spectral resolution of 0.5 meters. The result is a true colorimage with the resolution of 0.5 meters. 

## Description of representative images

True color visualization of Rome.

![True color visualization of Rome, on 8.10.2017.](fig/fig1.jpg)


## References
 - Wikipedia, [False color](https://en.wikipedia.org/wiki/False_color#True_color). Accessed October 10th 2017.
