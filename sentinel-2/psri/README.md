# Plant Senescence Reflectance Index (PSRI)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=41.9027835&lng=12.496365500000024&zoom=12&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2018-08-01%7C2019-02-20&atmFilter=&showDates=false&evalscript=bGV0IG1pblZhbCA9IC0wLjI7CmxldCBtYXhWYWwgPSAwLjQ7CgpsZXQgdml6ID0gbmV3IEhpZ2hsaWdodENvbXByZXNzVmlzdWFsaXplclNpbmdsZShtaW5WYWwsIG1heFZhbCk7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICAgIGxldCB2YWwgPSAoc2FtcGxlc1swXS5CMDYgPiAwKSA%2FIChzYW1wbGVzWzBdLkIwNCAtIHNhbXBsZXNbMF0uQjAyKSAvIHNhbXBsZXNbMF0uQjA2IDogSkFWQV9ET1VCTEVfTUFYX1ZBTDsKICAgIHJldHVybiB2aXoucHJvY2Vzcyh2YWwpOwp9CgpmdW5jdGlvbiBzZXR1cChkcykgewogICAgc2V0SW5wdXRDb21wb25lbnRzKFtkcy5CMDIsIGRzLkIwNCwgZHMuQjA2XSk7CiAgICBzZXRPdXRwdXRDb21wb25lbnRDb3VudCgxKTsKfQ%3D%3D){:target="_blank"}
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=41.9000&lng=12.5000&zoom=10&time=2017-10-08&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=bGV0IG1pblZhbCA9IC0wLjI7CmxldCBtYXhWYWwgPSAwLjQ7CgpsZXQgdml6ID0gbmV3IEhpZ2hsaWdodENvbXByZXNzVmlzdWFsaXplclNpbmdsZShtaW5WYWwsIG1heFZhbCk7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICAgIGxldCB2YWwgPSAoc2FtcGxlc1swXS5CMDYgPiAwKSA%2FIChzYW1wbGVzWzBdLkIwNCAtIHNhbXBsZXNbMF0uQjAyKSAvIHNhbXBsZXNbMF0uQjA2IDogSkFWQV9ET1VCTEVfTUFYX1ZBTDsKICAgIHJldHVybiB2aXoucHJvY2Vzcyh2YWwpOwp9CgpmdW5jdGlvbiBzZXR1cChkcykgewogICAgc2V0SW5wdXRDb21wb25lbnRzKFtkcy5CMDIsIGRzLkIwNCwgZHMuQjA2XSk7CiAgICBzZXRPdXRwdXRDb21wb25lbnRDb3VudCgxKTsKfQ%3D%3D){:target="_blank"}

## General description

The plant senescence reflectance index, abbreviated PSRI, is defined as   
$$PSRI = \frac{B04-B02}{B06}.$$   

It is used for studying vegetation; see [1] for details.

## Description of representative images

PSRI of Rome. Acquired on 8.10.2017.

![PSRI of Rome](fig/fig1.png)


## References
 [1] Index DataBase, [index.de: PSRI](https://www.indexdatabase.de/db/i-single.php?id=69). Accessed on February 20th 2019.
