---
permalink: /skysat/panchromatic/
nav_exclude: true
---

# Skysat - Panchromatic

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

As Skysat is commercial data, brought into Sentinel Hub as Bring Your Own Data, direct EO Browser and Sentinel Playground links are not possible due to the personalized data credentials.   

## General description

The panchromatic product maps Skysat panchromatic single band value that combines R, G, and B components allowing for a greater spatial resolution.

## Description of representative images

Panchromatic visualisation over Rome, Italy, acquired on 2020/03/20.

![Small panchromatic visualization.](fig/skysat_panchromatic.jpg)
