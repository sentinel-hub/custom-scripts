---
permalink: /sentinel-3/enhanced_true_color-2/
nav_exclude: true
---

# Enhanced true color visualization
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
 - [EO Browser](https://sentinelshare.page.link/XWgR){:target="_blank"}   

## Description
This script offers different true color visualizations, a NIR visualization, and the ability to easily add more visualizations. Variables allow you to influence the resulting image regarding, brightness, contrast, and saturation.  
More info [here.](https://pierre-markuse.net/2019/03/26/sentinel-3-data-visualization-in-eo-browser-using-a-custom-script/){:target="_blank"}

## Description of representative images

Mozambique floods, 25.3.2019. 
![Mozambique floods 2019](fig/fig1.png)

## Contributors:
Pierre Markuse, Twitter: [@pierre_markuse](https://pierre-markuse.net/){:target="_blank"}

## License
[CC BY 4.0 International](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
