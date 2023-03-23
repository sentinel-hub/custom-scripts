---
permalink: /landsat-7-etm/true-color/
nav_exclude: true
---

# Landsat 7 ETM+ True Color Composite

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

- [EO Browser](https://sentinelshare.page.link/6cyy)

## General description

The true color product maps Landsat 1-5 MSS band values B03, B02, and B01 which roughly correspond to red, green, and blue part of the spectrum, respectively, to R, G, and B components. The result is a true color product, that is a good representation of the Earth as humans would see it naturally.

## Description of representative images

True color over northern Tunisia. Acquired on 2001-06-23.
![The script example 1](fig/fig1.png)

## References
 - Wikipedia, [True color](https://en.wikipedia.org/wiki/False_color#True_color). Accessed October 10th 2017.



