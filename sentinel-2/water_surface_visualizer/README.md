---
permalink: /sentinel-2/water_surface_visualizer/
nav_exclude: true
---

# Water Surface Visualizer
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

 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=35.174032839292316&lng=35.90675354003906&zoom=12&preset=CUSTOM&layers=B01,B02,B03&maxcc=87&gain=1.0&gamma=1.0&time=2021-03-01%7C2021-09-10&atmFilter=&showDates=false&evalscript=Ly9WRVJTSU9OPTMKCi8qCgpTZW50aW5lbC0yIFdhdGVyIFN1cmZhY2UgVmlzdWFsaXplcgpBdXRob3I6IEhhcmVsIERhbiAoaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hhcmVsLWRhbiwgaHR0cHM6Ly90d2l0dGVyLmNvbS9IYXJlbERhbikKClRoZSBzY3JpcHQgdXNlcyB0aGUgc21hbGwgc3BlY3RyYWwgY2hhbmdlcyBmb3VuZCBiZXR3ZWVuIGFkamFjZW50IGJhbmRzIHRvIGhpZ2hsaWdodCBhcmVhcyBvZiB2YXJpYW5jZQppbiBhbmQgb3RoZXJ3aXNlIGhvbW9nZW11b3VzIHJlZ2lvbi4gVGhpcyB0b29sIHdvcmtzIGJlc3Qgb24gZmxhdCB3YXRlciBzdXJmYWNlLCBhbmQgY2FuIGhpZ2hsaWdodCB3YXRlcgplZGRpZXMsIHRlbXBlcmF0dXJlIGluZHVjZWQgdm9ydGljZXMsIHN1c3BlbmRlZCBtYXR0ZXIgaW4gc2hhbGxvdyB3YXRlciwgb2lsIHNsaWNrcyBhbmQgc2hlZW5zLCBhbmQgbW9yZS4KCiovCgp2YXIgdjEgPSBNYXRoLmxvZygoQjAyL0IwMykpOyAKdmFyIHYyID0gTWF0aC5sb2coKEIwMy9CMDQpKTsKdmFyIHYzID0gTWF0aC5sb2coKEIwNC9CMDgpKTsKCnJldHVybiBbdjEsdjIsdjNdOwoKLy8gYWx0ZXJuYXRpdmVseSwgb25lIGNhbiBlbmhhY2UgdGhlIGdyZWVuIGJhbmQgZnJhY3Rpb24gc2xpZ2h0bHkgbW9yZSwgYnkgbXVsdGlwbHlpbmcgdjEgd2l0aCB2MiBpbiB0aGUgUiBiYW5kCi8vIHJldHVybiBbdjEqdjIsdjIsdjNdOw%3D%3D){:target="_blank"}    


## Author of the script
[@HarelDan](https://twitter.com/HarelDan){:target="_blank"}    

## General description of the script
The script uses the small spectral changes found between adjacent bands to highlight areas of variance
in and otherwise homogemuous region. This tool works best on flat water surface, and can highlight water
eddies, temperature induced vortices, suspended matter in shallow water, oil slicks and sheens, and more.

## Description of representative images

Water surface artefacs near Baniyas refinery, Syria.
There has been an ongoing man-made disaster with petroleum distilates spilling into the mediterraen and flowig as far as Cyprus/


![Oils spill outside Baniyas refinery, Syria](figs/baniyas.jpg)

## References
Based on: 
[source 1](https://twitter.com/HarelDan/status/1483415093014634499){:target="_blank"}, 




