# Agricultural Crop Monitoring from Space Script

<a href="#" id='togglescript'>Show</a> script or [download](crop_monitoring.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative crop_monitoring.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/sentinel-playground-temporal/?source=S1-AWS-IW-VVVH&lat=44.683972246144066&lng=12.169933319091797&zoom=13&preset=CUSTOM&layers=VV,VV,VV&maxcc=100&gain=1.0&gamma=1.0&time=2017-01-01%7C2018-08-28&atmFilter=&showDates=true&evalscript=dmFyIG1hc3Rlcl9kYXRlID0gIjIwMTgtMDQtMjAiOyB2YXIgc2xhdmVfZGF0ZSA9ICIyMDE4LTA4LTIyIjsgLy8gQ29tYWNjaGlvLCBGZXJyYXJhLCBJdGFseSAgIAoKLy8gU2VsZWN0aW9uIG9mIHBvbGFyaXphdGlvbnMgCmZ1bmN0aW9uIHNldHVwIChkc3MpIHsKICBzZXRJbnB1dENvbXBvbmVudHMoW2Rzcy5WVixkc3MuVkhdKTsKICBzZXRPdXRwdXRDb21wb25lbnRDb3VudCgzKTsgIC8vIHJldHVybiBhcyBSR0IKfQoKZnVuY3Rpb24gZmlsdGVyU2NlbmVzIChzY2VuZXMpIHsgIApyZXR1cm4gc2NlbmVzLmZpbHRlcihmdW5jdGlvbiAoc2NlbmUpIHsKLy8gc2V0IGRhdGVzIGZvciBtYXN0ZXIgYW5kIHNsYXZlIGltYWdlcwp2YXIgYWxsb3dlZERhdGVzID0gW21hc3Rlcl9kYXRlLHNsYXZlX2RhdGVdOyAKdmFyIHNjZW5lRGF0ZVN0ciA9IGRhdGVmb3JtYXQoc2NlbmUuZGF0ZSk7CmlmIChhbGxvd2VkRGF0ZXMuaW5kZXhPZihzY2VuZURhdGVTdHIpIT0gLTEpIHJldHVybiB0cnVlOwplbHNlIHJldHVybiBmYWxzZTsKICB9KTsKfQoKLy8gQ3JvcCBNb25pdG9yaW5nCmZ1bmN0aW9uIGNhbGNCKHNhbXBsZSkgewogIHZhciBvdXRCID0gKC41KihzYW1wbGUuVlYpKTsKICByZXR1cm4gW291dEJdOwp9CmZ1bmN0aW9uIGNhbGNHKHNhbXBsZSkgewogIHZhciBvdXRHID0gKDgqKHNhbXBsZS5WSCkpOwogIHJldHVybiBbb3V0R107Cn0KZnVuY3Rpb24gY2FsY1Ioc2FtcGxlKSB7CiAgdmFyIG91dFIgPSAoMS41KihzYW1wbGUuVlYpKTsKICByZXR1cm4gW291dFJdOwp9CgpmdW5jdGlvbiBkYXRlZm9ybWF0KGQpeyAgCiAgdmFyIGRkID0gZC5nZXREYXRlKCk7CiAgdmFyIG1tID0gZC5nZXRNb250aCgpKzE7CiAgdmFyIHl5eXkgPSBkLmdldEZ1bGxZZWFyKCk7CiAgaWYoZGQ8MTApe2RkPScwJytkZH0KICBpZihtbTwxMCl7bW09JzAnK21tfQogIHZhciBpc29kYXRlID0geXl5eSsnLScrbW0rJy0nK2RkOwogIHJldHVybiBpc29kYXRlOwp9CmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcyxzY2VuZXMpIHsgIAogIHZhciBSbWFzdGVyID0gMDt2YXIgUnNsYXZlID0gMDsKICB2YXIgR21hc3RlciA9IDA7dmFyIEdzbGF2ZSA9IDA7CiAgdmFyIEJtYXN0ZXIgPSAwO3ZhciBCc2xhdmUgPSAwOwogIFJtYXN0ZXIgPSBjYWxjUihzYW1wbGVzWzFdKTsKICBSc2xhdmUgPSBjYWxjUihzYW1wbGVzWzBdKTsgIAogIEdtYXN0ZXIgPSBjYWxjRyhzYW1wbGVzWzFdKTsKICBHc2xhdmUgPSBjYWxjRyhzYW1wbGVzWzBdKTsgIAogIEJtYXN0ZXIgPSBjYWxjQihzYW1wbGVzWzFdKTsKICBCc2xhdmUgPSBjYWxjQihzYW1wbGVzWzBdKTsKICBSZGlmPVJzbGF2ZS1SbWFzdGVyOwogIEdkaWY9R3NsYXZlLUdtYXN0ZXI7CiAgQmRpZj1Cc2xhdmUtQm1hc3RlcjsKICByZXR1cm4gW1JzbGF2ZSxHZGlmLEJzbGF2ZV0KfQ%3D%3D&temporal=true){:target="_blank"} 


## General description of the script

In agriculture, remote sensing images provide information of damaged crop, crop extent, crop productivity. These images can be also used to distinguish crops from other land classes, evaluate the effects of rainfall, irrigation systems, droughts, floods, fertilizer, pesticide, and Ö . The provided information would be useful to farmers, governments, and agricultural insurance companies.

In order to provide the state of agricultural fields, we need to multi-temporal remote sensing images. The script is based on the time series of Sentinel-1 radar data. Using multi-temporal information from radar images makes it possible to improve the outputs of optical images. In the script, a time series of nine Sentinel-1 IW GRD images with VV and VH polarizations in a selected timeline is used as an input. 

## Details of the script

The images were acquired during the period from 2018/04/20 to 2018/08/22, in the region of Ferrara, Italy. The image of 2018/04/20 was used as the master image.

The output of the script gives a good view of where crops are growing well, or where crops are not growing, and identifies the surrounding water bodies and urban areas. The different colours in the crop fields display the growth stage variations between the crops. The results of the script are consistent with the Normalized Difference Vegetation Index (NDVI).

See more details about the script in [the supplementary material](supplementary_material.pdf){:target="_blank"} .

## Author of the script

Maryam Salehi

## Description of representative images

The acquired images during the period from 2018/04/20 to 2018/08/22, in the region of Ferrara, Italy. The image of 2018/04/20 was used as the master image.

            R=?1.5◊VV?_slave, G=?8◊(VH?_slave-?VH?_master), B=?0.5◊VV?_slave.

1) Ferrara, Italy on April 24th, 2018

![The script example 1](fig/2018-04-24.jpg)

2) Ferrara, Italy on May 5th, 2018

![The script example 2](fig/2018-05-18.jpg)

3) Ferrara, Italy on June 17th, 2018

![The script example 3](fig/2018-06-17.jpg)

4) Ferrara, Italy on July 7th, 2018

![The script example 3](fig/2018-07-17.jpg)

5) Ferrara, Italy on August 22nd, 2018

![The script example 3](fig/2018-08-22.jpg)