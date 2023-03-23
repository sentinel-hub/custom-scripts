---
permalink: /sentinel-3/enhanced_true_color/
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
 - [EO Browser](https://sentinelshare.page.link/Pj6b){:target="_blank"}   

## Description
This script offers enhanced true color visualizations.

## Description of representative images

Enhanced true color visualization of Beira, Mozambique. Acquired on 25.3.2019. 

![Enhanced true color visualization of Beira, Mozambique. Acquired on 25.3.2019.](fig/fig1.png)

## Contributors:
 - Annamaria Luongo, [Twitter: @annamaria_84](http://www.linkedin.com/in/annamaria-luongo-RS){:target="_blank"}

## License

 - [CC BY 4.0 International](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
