---
permalink: /airbus_spot/true_color/
nav_exclude: true
---

# True color product, SPOT

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

As Airbus SPOT is commercial data, brought into Sentinel Hub as Bring Your Own Data, direct EO Browser and Sentinel Playgorund links are not possible due to the personalized data credentials.   

## General description

The true color product maps SPOT' band values B2, B1, and B0 which roughly correspond to red, green, and blue part of the spectrum, respectively, to R, G, and B components.

## Description of representative images

True color visualization of Zgornje Konjišče, Slovenia.

![True color visualization of Zgornje Konjišče, Slovenia.](fig/fig1.jpg)


## References
 - Wikipedia, [False color](https://en.wikipedia.org/wiki/False_color#True_color). Accessed October 10th 2017.
