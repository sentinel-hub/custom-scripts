# Normalized Difference Moisture Index (NDMI)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.8986&lng=11.0371&zoom=10&time=2019-12-10&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=aWYgKEI4QSA9PSAwIHx8IEIxMSA9PSAwKXsKICByZXR1cm4gWzAsMCwwXTsKfSBlbHNlIHsKICB2YXIgdmFsID0gKEI4QSAtIEIxMSkvKEI4QSArIEIxMSk7CiAgCiAgdmFyIHZtaW4gPSAtMC44OwogIHZhciB2bWF4ID0gMC44OwogIHZhciBkdiA9IHZtYXggLSB2bWluOwogIAogIHZhciByID0gMC4wOwogIHZhciBnID0gMC4wOwogIHZhciBiID0gMC4wOwoKICAKICB2YXIgdiA9IHZhbDsKCiAgaWYgKHYgPCB2bWluKXsKICAgIHYgPSB2bWluOwogIH0KICBpZiAodiA%2BIHZtYXgpewogICAgdiA9IHZtYXg7CiAgfQogIAogIHZhciBsMSA9IDAuMzU7CiAgdmFyIGwyID0gMC40ODsKICB2YXIgbDMgPSAwLjUyOwogIHZhciBsNCA9IDAuNjU7CiAgCiAgdmFyIGxldmVsMSA9ICh2bWluICsgbDEgKiBkdik7CiAgdmFyIGxldmVsMiA9ICh2bWluICsgbDIgKiBkdik7CiAgdmFyIGxldmVsMyA9ICh2bWluICsgbDMgKiBkdik7CiAgdmFyIGxldmVsNCA9ICh2bWluICsgbDQgKiBkdik7CgogIGlmICh2IDwgbGV2ZWwxKXsKICAgICByID0gMC41ICsgICh2IC0gdm1pbikgLyAobGV2ZWwxIC0gdm1pbikgLyAyOwogIH0gZWxzZSBpZiAodiA8IGxldmVsMikgewogICAgIHIgPSAxOwogICAgIGcgPSAodiAtIGxldmVsMSkgLyAobGV2ZWwyIC0gbGV2ZWwxKTsKICAgICBiID0gMDsKICB9IGVsc2UgaWYgKHYgPCBsZXZlbDMpIHsKICAgICByID0gMSArIChsZXZlbDIgLSB2KSAvIChsZXZlbDMgLSBsZXZlbDIpOwogICAgIGcgPSAxOwogICAgIGIgPSAodiAtIGxldmVsMikgLyAobGV2ZWwzIC0gbGV2ZWwyKTsKICB9IGVsc2UgaWYgKHYgPCBsZXZlbDQpIHsKICAgICByID0gMDsKICAgICBnID0gMSArIChsZXZlbDMgLSB2KSAvIChsZXZlbDQgLSBsZXZlbDMpOwogICAgIGIgPSAxOwogIH0gZWxzZSB7CiAgICAgYiA9IDEuMCArIChsZXZlbDQgLSB2KSAvICh2bWF4IC0gbGV2ZWw0KSAvIDI7CiAgfQoKICAgcmV0dXJuIFtyLCBnLCBiXTsKICAKfQo%3D){:target="_blank"}
 - [SH Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=42.95617124218181&lng=11.052932739257812&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-21&atmFilter=&showDates=false&evalscript=aWYgKEI4QSA9PSAwIHx8IEIxMSA9PSAwKXsKICByZXR1cm4gWzAsMCwwXTsKfSBlbHNlIHsKICB2YXIgdmFsID0gKEI4QSAtIEIxMSkvKEI4QSArIEIxMSk7CiAgCiAgdmFyIHZtaW4gPSAtMC44OwogIHZhciB2bWF4ID0gMC44OwogIHZhciBkdiA9IHZtYXggLSB2bWluOwogIAogIHZhciByID0gMC4wOwogIHZhciBnID0gMC4wOwogIHZhciBiID0gMC4wOwoKICAKICB2YXIgdiA9IHZhbDsKCiAgaWYgKHYgPCB2bWluKXsKICAgIHYgPSB2bWluOwogIH0KICBpZiAodiA%2BIHZtYXgpewogICAgdiA9IHZtYXg7CiAgfQogIAogIHZhciBsMSA9IDAuMzU7CiAgdmFyIGwyID0gMC40ODsKICB2YXIgbDMgPSAwLjUyOwogIHZhciBsNCA9IDAuNjU7CiAgCiAgdmFyIGxldmVsMSA9ICh2bWluICsgbDEgKiBkdik7CiAgdmFyIGxldmVsMiA9ICh2bWluICsgbDIgKiBkdik7CiAgdmFyIGxldmVsMyA9ICh2bWluICsgbDMgKiBkdik7CiAgdmFyIGxldmVsNCA9ICh2bWluICsgbDQgKiBkdik7CgogIGlmICh2IDwgbGV2ZWwxKXsKICAgICByID0gMC41ICsgICh2IC0gdm1pbikgLyAobGV2ZWwxIC0gdm1pbikgLyAyOwogIH0gZWxzZSBpZiAodiA8IGxldmVsMikgewogICAgIHIgPSAxOwogICAgIGcgPSAodiAtIGxldmVsMSkgLyAobGV2ZWwyIC0gbGV2ZWwxKTsKICAgICBiID0gMDsKICB9IGVsc2UgaWYgKHYgPCBsZXZlbDMpIHsKICAgICByID0gMSArIChsZXZlbDIgLSB2KSAvIChsZXZlbDMgLSBsZXZlbDIpOwogICAgIGcgPSAxOwogICAgIGIgPSAodiAtIGxldmVsMikgLyAobGV2ZWwzIC0gbGV2ZWwyKTsKICB9IGVsc2UgaWYgKHYgPCBsZXZlbDQpIHsKICAgICByID0gMDsKICAgICBnID0gMSArIChsZXZlbDMgLSB2KSAvIChsZXZlbDQgLSBsZXZlbDMpOwogICAgIGIgPSAxOwogIH0gZWxzZSB7CiAgICAgYiA9IDEuMCArIChsZXZlbDQgLSB2KSAvICh2bWF4IC0gbGV2ZWw0KSAvIDI7CiAgfQoKICAgcmV0dXJuIFtyLCBnLCBiXTsKICAKfQo%3D){:target="_blank"}

## General description of the script


The NDMI is a normalized difference moisture index, that uses NIR and SWIR bands to display moisture. 
The SWIR band reflects changes in both the vegetation water content and the spongy mesophyll structure in vegetation canopies, 
while the NIR reflectance is affected by leaf internal structure and leaf dry matter content but not by water content. 
The combination of the NIR with the SWIR removes variations induced by leaf internal structure and leaf dry matter content, improving the accuracy in retrieving the vegetation water content. 
The amount of water available in the internal leaf structure largely controls the spectral reflectance in the SWIR interval of the electromagnetic spectrum. 
SWIR reflectance is therefore negatively related to leaf water content. NDWI is computed using the near infrared (NIR) and the short wave infrared (SWIR) reflectance’s:

###Option 1###
Used to monitor changes in water content of leaves, [proposed by Gao](http://ceeserver.cee.cornell.edu/wdp2/cee6150/Readings/Gao_1996_RSE_58_257-266_NDWI.pdf){:target="_blank"}
**NDWI = (B08 - B11) / (B08 + B11)**

###Option 2###
Used to monitor changes related to water content in water bodies, using green and NIR wavelengths, defined by McFeeters (1996).
**NDWI = (B03 - B08) / (B03 + B08)**


## Description of representative images

The NDMI of Rome, Italy. Acquired on 08.10.2017, processed by Sentinel Hub. 

![NDWI](fig/fig1.png)

## References

[Normalize difference water index](https://en.wikipedia.org/wiki/Normalized_difference_water_index){:target="_blank"}


