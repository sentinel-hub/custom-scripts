---
permalink: /copernicus_services/water-bodies/
nav_exclude: true
---

# Global Water Bodies visualisation script

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script  
This script visualizes surface water bodies extent derived from water Bodies detection layer (WB) contained in Water Bodies data.
 
Table 1: Color legend for the water bodies 
<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Color</th>
	    <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>70 </td>
      <td style="background-color:#0032c8"></td>
	    <td> Water </td>
    </tr>
  </tbody>
</table>  

## Description of representative images
 *October 2020 monthly composite map showing surface water bodies extent around Russia's largest freshawater Baikal lake  visualised in EO browser*

![Water bodies map Baikal lake ](fig/baikal-water.PNG)

## Resources

- [Data Source](https://land.copernicus.vgt.vito.be/PDF/portal/Application.html#Browse;Root=514888;Collection=1000152;Time=NORMAL,NORMAL,-1,,,-1,,)

- [Entry in public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/water-bodies)
