# NDWI Normalized Difference Water Index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.514198796857976&lng=16.601028442382812&zoom=11&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/ndwi/script.js){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=41.9000&lng=12.5000&zoom=10&time=2017-10-08&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=aWYgKEIwOCA9PSAwIHx8IEIxMSA9PSAwKXsKICByZXR1cm4gWzAsMCwwXTsKfSBlbHNlIHsKICB2YXIgdmFsID0gKEIwOCAtIEIxMSkvKEIwOCArIEIxMSk7CiAgCiAgdmFyIHZtaW4gPSAtMC44OwogIHZhciB2bWF4ID0gMC44OwogIHZhciBkdiA9IHZtYXggLSB2bWluOwogIAogIHZhciByID0gMC4wOwogIHZhciBnID0gMC4wOwogIHZhciBiID0gMC4wOwoKICAKICB2YXIgdiA9IHZhbDsKCiAgaWYgKHYgPCB2bWluKXsKICAgIHYgPSB2bWluOwogIH0KICBpZiAodiA%2BIHZtYXgpewogICAgdiA9IHZtYXg7CiAgfQogIAogIHZhciBsMSA9IDAuMzU7CiAgdmFyIGwyID0gMC40ODsKICB2YXIgbDMgPSAwLjUyOwogIHZhciBsNCA9IDAuNjU7CiAgCiAgdmFyIGxldmVsMSA9ICh2bWluICsgbDEgKiBkdik7CiAgdmFyIGxldmVsMiA9ICh2bWluICsgbDIgKiBkdik7CiAgdmFyIGxldmVsMyA9ICh2bWluICsgbDMgKiBkdik7CiAgdmFyIGxldmVsNCA9ICh2bWluICsgbDQgKiBkdik7CgogIGlmICh2IDwgbGV2ZWwxKXsKICAgICByID0gMC41ICsgICh2IC0gdm1pbikgLyAobGV2ZWwxIC0gdm1pbikgLyAyOwogIH0gZWxzZSBpZiAodiA8IGxldmVsMikgewogICAgIHIgPSAxOwogICAgIGcgPSAodiAtIGxldmVsMSkgLyAobGV2ZWwyIC0gbGV2ZWwxKTsKICAgICBiID0gMDsKICB9IGVsc2UgaWYgKHYgPCBsZXZlbDMpIHsKICAgICByID0gMSArIChsZXZlbDIgLSB2KSAvIChsZXZlbDMgLSBsZXZlbDIpOwogICAgIGcgPSAxOwogICAgIGIgPSAodiAtIGxldmVsMikgLyAobGV2ZWwzIC0gbGV2ZWwyKTsKICB9IGVsc2UgaWYgKHYgPCBsZXZlbDQpIHsKICAgICByID0gMDsKICAgICBnID0gMSArIChsZXZlbDMgLSB2KSAvIChsZXZlbDQgLSBsZXZlbDMpOwogICAgIGIgPSAxOwogIH0gZWxzZSB7CiAgICAgYiA9IDEuMCArIChsZXZlbDQgLSB2KSAvICh2bWF4IC0gbGV2ZWw0KSAvIDI7CiAgfQoKICAgcmV0dXJuIFtyLCBnLCBiXTsKICAKfQ%3D%3D){:target="_blank"}

## General description of the script

The NDWI is useful for water body mapping, as water bodies strongly absorb light in visible to infrared electromagnetic spectrum. NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies.

Normalized Difference Water Index (NDWI) may refer to one of at least two remote sensing-derived indexes related to liquid water:

One is used to monitor changes in water content of leaves, using near-infrared (NIR) and short-wave infrared (SWIR) wavelengths, proposed by Gao in 1996.

**NDWI = (B08 - B11) / (B08 + B11)**

Another is used to monitor changes related to water content in water bodies, using green and NIR wavelengths, defined by McFeeters (1996).

**NDWI = (B03 - B08) / (B03 + B08)**

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

## Description of representative images

NDWI (for water content in leaves) of Rome. Acquired on 8.10.2017.

![NDWI of Rome](fig/fig1.png)

NDWI (for water content in water bodies) of Rome. Acquired on 8.10.2017.

![NDWI of Rome](fig/fig2.png)

## References
Source: https://en.wikipedia.org/wiki/Normalized_difference_water_index
