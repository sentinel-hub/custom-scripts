# mARI - Modified Anthocyanin Reflectance Index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=41.956171100940026&lng=12.29095458984375&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=5&gain=1.0&gamma=1.0&time=2018-05-01%7C2018-11-14&atmFilter=&showDates=false&evalscript=Ly8KLy8gQW50aG9jeWFuaW4gcmVmbGVjdGFuY2UgaW5kZXggIChhYmJydi4gQVJJKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IDEvNTUwbm0tMS83MDBubQovLwovLyBVUkwgaHR0cHM6Ly93d3cuaW5kZXhkYXRhYmFzZS5kZS9kYi9zaS1zaW5nbGUucGhwP3NlbnNvcl9pZD05NiZyc2luZGV4X2lkPTIxNAoKbGV0IGluZGV4ID0gMS4wIC8gQjAzIC0gMS4wIC8gQjA1OwpyZXR1cm4gW2luZGV4XQ%3D%3D){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.4979&lng=11.6345&zoom=10&time=2019-12-10&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8KLy8gQW50aG9jeWFuaW4gcmVmbGVjdGFuY2UgaW5kZXggIChhYmJydi4gQVJJKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IDEvNTUwbm0tMS83MDBubQovLwovLyBVUkwgaHR0cHM6Ly93d3cuaW5kZXhkYXRhYmFzZS5kZS9kYi9zaS1zaW5nbGUucGhwP3NlbnNvcl9pZD05NiZyc2luZGV4X2lkPTIxNAoKbGV0IGluZGV4ID0gMS4wIC8gQjAzIC0gMS4wIC8gQjA1OwpyZXR1cm4gW2luZGV4XQ%3D%3D){:target="_blank"}

## General description of the script

To correct for leaf density and thickness, the near infrared spectral band (in the recommended wavelengths of 760-800nm), which is related to leaf scattering, is added to the basic ARI index. The new index is called modified ARI or mARI (also ARI2). 

**mARI(ARI2) = ((1 / 550nm) - (1 / 700nm)) * NIR**

**mARI(ARI2) = ((1 / B03) - (1 / B05)) * B07**  for Sentinel-2.

mARI values for the examined trees in [this original article](http://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1227&context=natrespapers){:target="_blank"} ranged in values from 0 to 8.

mARI(ARI2) = ((1 / 550nm) - (1 / 700nm)) * NIR


## Description of representative images

mARI applied to Rome. Acquired on 10.12.2019, processed by Sentinel Hub. 

![mARI, Rome](fig/fig1.png)

## References
- [Non-Destructive Estimation of Anthocyanins and Chlorophylls in Anthocyanic Leaves (Gitelson, Chivkunova, Merzlyak)](http://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1227&context=natrespapers){:target="_blank"}
