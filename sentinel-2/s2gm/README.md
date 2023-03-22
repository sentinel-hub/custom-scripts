---
permalink: /sentinel-2/s2gm/
nav_exclude: true
---

# Sentinel-2 Global Mosaic best pixel selection script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description

Sentinel-2 Global Mosaic script is used within [S2GM project](http://www.s2gm.eu/) to select best pixel within the chosen temporal period (10-daily, monthly, quarterly, annual).

Script requires Sentinel Hub API v.2 to run as a whole due to multi-part result. Parts of it can however be used at this point already.
