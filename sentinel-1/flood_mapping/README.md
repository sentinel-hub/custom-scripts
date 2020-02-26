# Flood Mapping With Sentinel-1 Script

<a href="#" id='togglescript'>Show</a> script or [download](flood_mapping.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative flood_mapping.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [Sentinel Playground Temporal](https://apps.sentinel-hub.com/sentinel-playground-temporal/?source=S1-AWS-IW-VVVH&lat=37.009357015982836&lng=54.18366523459554&zoom=11&preset=CUSTOM&layers=VV,VV,VV&maxcc=100&gain=1.0&gamma=1.0&time=2017-01-01%7C2019-03-30&atmFilter=&showDates=false&evalscript=Ly8gRGF0ZSBEZWZpbml0aW9uIAp2YXIgYmVmb3JlZmxvb2RfZGF0ZSA9ICIyMDE5LTAzLTExIjsgdmFyIGR1cmluZ2Zsb29kX2RhdGUgPSAiMjAxOS0wMy0yMyI7IC8vIEZsb29kIGluIEFnaGdoYWxhLCBJcmFuICAgICAKLy92YXIgYmVmb3JlZmxvb2RfZGF0ZSA9ICIyMDE5LTAxLTA2IjsgdmFyIGR1cmluZ2Zsb29kX2RhdGUgPSAiMjAxOS0wMS0xNCI7IC8vIEZsb29kIGluIFVydWd1YWlhbmEsIFJpbyBHcmFuZGUgZG8gU3VsLCBCcmF6aWwgICAgICAgCi8vdmFyIGJlZm9yZWZsb29kX2RhdGUgPSAiMjAyMC0wMS0wNCI7IHZhciBkdXJpbmdmbG9vZF9kYXRlID0gIjIwMjAtMDEtMTMiOyAvLyBGbG9vZCBpbiBzb3V0aGVybiBJcmFuCiAKLy8gU2VsZWN0aW9uIG9mIHBvbGFyaXphdGlvbiAKZnVuY3Rpb24gc2V0dXAgKGRzcykgewogIHNldElucHV0Q29tcG9uZW50cyhbZHNzLlZWXSk7CiAgc2V0T3V0cHV0Q29tcG9uZW50Q291bnQoMyk7ICAvLyByZXR1cm4gYXMgUkdCCn0KCmZ1bmN0aW9uIGZpbHRlclNjZW5lcyAoc2NlbmVzKSB7ICAKcmV0dXJuIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24gKHNjZW5lKSB7Ci8vIHNldCBkYXRlcyBmb3IgYmVmb3JlLWFuZC1kdXJpbmcgZmxvb2QgYW5hbHlzaXMKdmFyIGFsbG93ZWREYXRlcyA9IFtiZWZvcmVmbG9vZF9kYXRlLGR1cmluZ2Zsb29kX2RhdGVdOyAKdmFyIHNjZW5lRGF0ZVN0ciA9IGRhdGVmb3JtYXQoc2NlbmUuZGF0ZSk7CmlmIChhbGxvd2VkRGF0ZXMuaW5kZXhPZihzY2VuZURhdGVTdHIpIT0gLTEpIHJldHVybiB0cnVlOwplbHNlIHJldHVybiBmYWxzZTsKICB9KTsKfQoKLy8gRmxvb2QgbWFwcGluZwpmdW5jdGlvbiBjYWxjRk0oc2FtcGxlKSB7CiAgdmFyIG91dHZ2ID0gc2FtcGxlLlZWOwogIHJldHVybiBbMS41Km91dHZ2XTsKfQoKZnVuY3Rpb24gZGF0ZWZvcm1hdChkKXsgIAogIHZhciBkZCA9IGQuZ2V0RGF0ZSgpOwogIHZhciBtbSA9IGQuZ2V0TW9udGgoKSsxOwogIHZhciB5eXl5ID0gZC5nZXRGdWxsWWVhcigpOwogIGlmKGRkPDEwKXtkZD0nMCcrZGR9CiAgaWYobW08MTApe21tPScwJyttbX0KICB2YXIgaXNvZGF0ZSA9IHl5eXkrJy0nK21tKyctJytkZDsKICByZXR1cm4gaXNvZGF0ZTsKfQoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzLHNjZW5lcykgeyAgCiAgdmFyIG91dGJlID0gMDsKICB2YXIgb3V0ZHUgPSAwOyAgCiAgLy8gYmVmb3JlLWZsb29kIGltYWdlCiAgb3V0YmUgPSBjYWxjRk0oc2FtcGxlc1sxXSk7CiAgLy8gZHVyaW5nLWZsb29kIGltYWdlCiAgb3V0ZHUgPSBjYWxjRk0oc2FtcGxlc1swXSk7ICAKICByZXR1cm4gW291dGJlLG91dGR1LG91dGR1XQogLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqCiAvLyBtYXNrIGNyZWF0aW9uCiAvLyB2YXIgZG91dCA9IG91dGJlIC0gb3V0ZHU7ICAgIAogLy8gcmV0dXJuIFtkb3V0ID4gMC4wNSA%2FICAxIDogMF0KIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgp9Cg%3D%3D&temporal=true){:target="_blank"} 


## General description of the script

Floods are one of the most destructive natural hazard worldwide that causes severe economic, environmental, and human losses. I have developed a script to describe the capabilities of the Sentinel-1 radar images for flood mapping in three case study areas (Aghghala, Iran; Kalani, Iran; Uruguaiana, Rio Grande do Sul, Brazil). The script is adapted to Sentinel-1 IW GRD images with VV polarization and helps in visualization of flooded areas. The visualization allows to quickly determine the extent of the damaged areas regardless of weather conditions. Also it can be helpful to recognize the flood patterns. The algorithm works great for separating flooded areas from permanent water bodies and land areas. It must be used only in multi-temporal processing with two images before and during the flood.

## Details of the script

For Providing the outputs, the [?1.5◊VV?_(before_flood), ?1.5◊VV?_(during_flood), ?1.5◊VV?_(during_flood)] combination is used for [R, G, B]. This combination allows to discriminate between flooded areas and permanent water bodies, land, Ö (unflooded areas). The permanent water bodies are shown as black due to the specular reflection and so darkness of all three channels. The flooded areas are often displayed in red, due to the darkness of green and blue channels and the brightness of red channel.  However, the flooded urban areas do not appear dark. This is because, in these regions, there are multiple scatterers, such as buildings, that send parts of the signal back towards the radar. Also, the presence of water at the base of the vegetation, buildings, and Ö results in a double-bounce scattering. These can be identified through their high response at VV and different colours (e.g. cyan) in the RGB image. To separate flooded from unflooded a threshold is selected on the difference values between the before and during flood backscatters. In outputs, low values correspond to the less affected areas (black colour), and high values correspond to the more affected areas (red colour).

## Author of the script

Maryam Salehi

## Description of representative images

1) First case study: Flood mapping in Aghghala, Iran using an image during the flood on 2019/03/23 and a reference image before the flood from 2019/03/11. R=2019/03/11,B,G=2019/03/23.

![The script example 1](fig/Flood_in_Aghghala_Iran.jpg)

2) Second case study: Flood mapping in Kalani, Iran using an image during the flood on 2020/01/13 and a reference image before the flood from 2020/01/04. R=2020/01/04,B,G=2020/01/13.

![The script example 2](fig/Flood_in_Kalani_Iran.jpg)

3) Third case study: Flood mapping in Uruguaiana, Rio Grande do Sul, Brazil using an image during the flood on 2019/01/14 and a reference image before the flood from 2019/01/06. R=2019/01/06,B,G=2019/01/14.

![The script example 3](fig/Flood_in_Uruguaiana_Rio_Grande_do_Sul_Brazil.jpg)

4) The outputs of applying thresholds of 0.05 for the first case study.

![The script example 4](fig/Flood_in_Aghghala_Iran_mask_threshold_.05.jpg)

5) The outputs of applying thresholds of 0.08 for the first case study.

![The script example 5](fig/Flood_in_Aghghala_Iran_mask_threshold_.08.jpg)