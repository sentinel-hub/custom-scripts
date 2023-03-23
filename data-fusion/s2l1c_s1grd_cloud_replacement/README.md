---
permalink: /data-fusion/s2l1c_s1grd_cloud_replacement/
nav_exclude: true
---

# Sentinel-2 with cloudy parts replaced by Sentinel-1

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
 - [EO Browser](https://sentinelshare.page.link/KkvZ)

## General description
The script uses cloud masks to identify cloudy sentinel-2 areas and replace the data with terrain visualisation based on Sentinel-1 data. 

## Description of representative images  

Sevastopol with cloudy areas in Sentinel-1, and non-cloudy areas in Sentinel-2. 

![RGB](fig/fig1.png)

## Contributors:
 - Pierre Markuse, (Twitter: @pierre_markuse)

## License

 - [CC BY 4.0 International](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
