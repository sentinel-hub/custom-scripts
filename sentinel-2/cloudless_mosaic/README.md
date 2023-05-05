---
permalink: /sentinel-2/cloudless_mosaic/
nav_exclude: true
---

# Cloudless mosaic

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](L2A-first_quartille.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative L2A-first_quartille.js %}
{% endhighlight %}
</div>

## General description of the script

The Cloudless mosaic script works on Sentinel-2 L2A data and requires scene classification (SCL) band. 
It takes one year of data, which is quite compute and time intensive, which is why it is recommended to run it on small area (e.g. 256x256 px).
An example of the results is New Zealand's cloudless mosaic, available here: https://data.linz.govt.nz/layer/93652-nz-10m-satellite-imagery-2017/

For the output value for each pixel it uses the first quartile value of valid values, each band separately. If there are none it uses invalid values instead. 
When using SCL its very important to use nearest neighbor resampling with a resolution of about 20m/px or more. 
