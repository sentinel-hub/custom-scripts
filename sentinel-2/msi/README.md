# Moisture index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=41.9000&lng=12.5000&zoom=10&time=2017-10-08&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=bGV0IGluZGV4ID0gQjExIC8gQjA4OwpsZXQgbWluID0gMC4wNTg7CmxldCBtYXggPSAxNy4xNDU7CgpyZXR1cm4gW2luZGV4XQoKLy8gY29sb3JCbGVuZCB3aWxsIHJldHVybiBhIGNvbG9yIHdoZW4gdGhlIGluZGV4IGlzIGJldHdlZW4gbWluIGFuZCBtYXggYW5kIHdoaXRlIHdoZW4gaXQgaXMgbGVzcyB0aGFuIG1pbi4KLy8gVG8gc2VlIGJsYWNrIHdoZW4gaXQgaXMgbW9yZSB0aGFuIG1heCwgdW5jb21tZW50IHRoZSBsYXN0IGxpbmUgb2YgY29sb3JCbGVuZC4KLy8gVGhlIG1pbi9tYXggdmFsdWVzIHdlcmUgY29tcHV0ZWQgYXV0b21hdGljYWxseSBhbmQgbWF5IGJlIHBvb3JseSBzcGVjaWZpZWQsIGZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlbSB0byB0d2VhayB0aGUgZGlzcGxheWVkIHJhbmdlLgoKbGV0IHVuZGVyZmxvd19jb2xvciA9IFsxLCAxLCAxXTsKbGV0IGxvd19jb2xvciA9IFsyMDgvMjU1LCA4OC8yNTUsIDEyNi8yNTVdOwpsZXQgaGlnaF9jb2xvciA9IFsyNDEvMjU1LCAyMzQvMjU1LCAyMDAvMjU1XTsKbGV0IG92ZXJmbG93X2NvbG9yID0gWzAsIDAsIDBdOwoKcmV0dXJuIGNvbG9yQmxlbmQoaW5kZXgsIFttaW4sIG1pbiwgbWF4XSwKWwoJdW5kZXJmbG93X2NvbG9yLAoJbG93X2NvbG9yLAoJaGlnaF9jb2xvciwKCS8vb3ZlcmZsb3dfY29sb3IgLy8gdW5jb21tZW50IHRvIHNlZSBvdmVyZmxvd3MKXSk7){:target="_blank"}

## General description of the script

The MSI is a reflectance measurement, sensitive to increases in leaf water content.

With the increase of water content of leaves in vegetation canopies increases also the strength of absorption around 1599nm. Absorption at 819nm is used as a reference, since it’s nearly unaffected by changing water content. Applications of the MSI include canopy stress analysis, productivity prediction and modelling, fire hazard condition analysis, and studies of ecosystem physiology. This index is inverted relative to other water vegetation indices; higher values indicate greater water stress and less water content.

Values description: The values of this index range from 0 to more than 3. The common range for green vegetation is 0.4 to 2.

**MSI = B11 / B08**

## Description of representative images

The MSI of Rome, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![MSI](fig/fig1.png)