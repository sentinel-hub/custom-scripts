# Water In Wetlands Index (WIW) - Sentinel-2 Version

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-15.05082&lng=22.80208&zoom=14&time=2020-02-13&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8gRGV0ZWN0aW5nIHRoZSBQcmVzZW5jZSBvZiBXYXRlciBpbiBXZXRsYW5kcyB3aXRoIFNlbnRpbmVsLTIgU2F0ZWxsaXRlIChhYmJydi4gV0lXKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IElGIEI4QTwwLjE4MDQgQU5EIEIxMjwwLjExMzEgVEhFTiBXYXRlciBFTFNFIE5vV2F0ZXIKLy8KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIveHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eC8vCgpyZXR1cm4gQjhBPDAuMTgwNCYmQjEyPDAuMTEzMT9bNTEvMjU1LDY4LzI1NSwxNzAvMjU1XTpbQjA0KjUsQjAzKjUsQjAyKjVdOwoKLy8gY29sb3JCbGVuZCB3aWxsIHJldHVybiBhIGJsdWUgY29sb3Igd2hlbiBzdXJmYWNlIHdhdGVyIGlzIGRldGVjdGVkLCBhbmQgbGlnaHRlbiB0byBhIG5hdHVyYWwgY29sb3Igd2hlbiBubyB3YXRlciBpcyBkZXRlY3RlZA%3D%3D){:target="_blank"} 


## General description of the script

**Wetlands: vital and vanishing ecosystems**
Wetlands are dynamic, productive ecosystems that hold a significant part of the world's biodiversity. They also contribute to human wellbeing in multiple ways, further offering nature-based solutions to manmade problems. In addition to holding 40% of the worldís species while occupying only 3% of the Earth surface, wetlands act as Nature's kidney by provisioning and purifying water; they contribute to reducing the level of atmospheric greenhouse gases fuelling global heating; they prevent soil erosion and flood damage by dispersing and absorbing excess water; along the coast they buffer the land from waves and wind, being the first line of defence against the encroaching salt waters; they provision food stock by offering sheltered spawning, breeding and foraging areas to various shellfish, fish and game species. Yet, over 50% of wetlands have been lost over the last 50 years, mostly to agricultural and urban development, with climate change becoming an additional pressure.

**WIW: A remote-sensing tool to monitor Water In Wetlands**
Many wetlands are seasonal and their ability to provide people and planet with diverse critical services is tightly related to their inundation patterns. Against the urgent backdrop of a changing world and climate, we need to increase our capacity to routinely monitor key indicators of wetland health such as hydroperiod. A major shortcoming with current water indices is that they cannot detect water under vegetation cover and wetlands are often characterized by the presence of emergent plants of variable height and density (e.g. reed, bulrushes, cattails, Spartina, Salicornia, willow, etc.). To bridge this gap, we collected ground-truth data under various conditions of flooding and vegetation development at thousands of points in the Camargue wetland (RhÙne delta in southern France) and identified the reflectance values of the corresponding pixels from optical spectral bands of Landsat and Sentinel sensors. A data mining approach was used to identify the best match between ground-truth and optical-based data for predicting water presence/absence. The best classifier of water presence consisted of threshold values imposed to the near-infrared and shortwave infrared wavelengths, irrespective of the satellite sensor used:

Landsat 8 : WIW = NIR = 0.1735 and SWIR2 = 0.1035
Landsat 5, 7 : WIW = NIR = 0.1558 and SWIR2 = 0.0871
Sentinel 2 : WIW = NIR = 0.1804 and SWIR2 = 0.1131

Overall accuracy of the water maps built by applying the WIW ranged from 89% to 94% for both the training and validation samples. Sentinel 2 provided the highest performance with a kappa coefficient of 0.82 for both samples.

## Details of the script

**The WIW script**
The script allows one to generate water maps using the Water In Wetlands logical rule by featuring water in blue and other landscape features in natural colors.

**Applicability**
WIW is useful for mapping open-water areas and areas with water under vegetation cover.
Use of WIW with Landsat sensors can be used to collect long-term data (back to 1984) for monitoring wetland evolution. Use of WIW with Sentinel-2 sensors can help track short-term changes in water areas relative to rainfalls or floods. Considering the high temporal resolution of Sentinel 2 (every 5 days), cumulative water maps built using WIW can further be used for detecting a wide range of wetlands which are either periodically or permanently inundated.

**False detection problems and limitations**
Limitations are similar to those encountered with current indices for detecting surface waters: dark object (shadows) can be classified as water, whereas highly turbid water or those with strong waves causing foam at the surface can be misclassified as dry areas. These situations are, however, rarely encountered in seasonal shallow wetlands which are targeted by the WIW script.

## Authors of the script

WILLM Loïc, LEFEBVRE GaÎtan, DAVRANCHE AurÈlie, CAMPAGNA Julie, REDMOND Lauren, MERLE ClÈment, GUELMAMI Anis and POULIN Brigitte

## Description of representative images

1) Timelapse ChaSca

WIW time-lapse at the largest reed marsh in southern France from October 2018 through September 2019 (monthly interval). This example highlights the robustness of WIW for detecting surface water under dense vegetation cover of Phragmites australis (same color as open-water areas).
![Timelapse ChaSca](fig/timelapse_chasca_12images_sent2.gif)

2) Camargue (France): Sentinel-2 annual hydroperiod 2018

Thanks to the high temporal frequency of Sentinel 2, annual water maps can be built with a high accuracy (35 scenes were used here to illustrate inundation patterns of the Camargue wetlands over a year)
![Camargue (France): Sentinel-2 annual hydroperiod 2018](fig/camargue_france_annual_hydroperiod2018.jpg)

3) Donana (Spain)

By contrasting two ecosystems with opposed hydrological cycles, this example shows how WIW can detect equally well water under vegetation of natural marshes during the winter season and rice growing fields during the summer season.
![Donana (Spain)](fig/donana_spain.jpg)

4) Everglades (USA) : NDWI-WIW comparison

In contrast to the Normalized Difference Water Index (NDWI), WIW succeeds in detecting water under vegetation and not only in open-water areas.!
[Everglades (USA) : NDWI-WIW comparison](fig/everglades_usa_ndwi_wiw_comparison.jpg)

5) Barotse floodplain (Zambia) (time-lapse)

The Barotse floodplain is in the Zambezian flooded grasslands ecoregion. The flood provides aquatic habitats for fish such as tigerfish and bream, crocodiles, hippopotamus, waterbirds, fish-eating birds, and lechwe, the wading antelope found in wetlands of south central Africa. The peak of the flood occurs on the floodplain about 3 months after the peak of the rainy season in January-February.
![Barotse floodplain (Zambia) (time-lapse)](fig/barotse_floodplain_Zambia.gif)

## References

[1] Lefebvre G., Davranche A., Willm L., Campagna J., Redmond L., Merle C., Guelmami A., Poulin B. 2019. [Introducing WIW for Detecting the Presence of Water in Wetlands with Landsat and Sentinel Satellites. Remote Sensing 11(19):18.](https://sentinels.copernicus.eu/web/sentinel/news/-/article/copernicus-sentinel-2-helps-track-changes-in-seasonal-water-of-wetlands){:target="_blank"}
[DOI](http://dx.doi.org/10.3390/rs11192210){:target="_blank"}

## Credits

[1] Lefebvre G., Davranche A., Willm L., Campagna J., Redmond L., Merle C., Guelmami A., Poulin B. 2019. [Introducing WIW for Detecting the Presence of Water in Wetlands with Landsat and Sentinel Satellites. Remote Sensing 11(19):18.](https://sentinels.copernicus.eu/web/sentinel/news/-/article/copernicus-sentinel-2-helps-track-changes-in-seasonal-water-of-wetlands){:target="_blank"}
[DOI](http://dx.doi.org/10.3390/rs11192210){:target="_blank"}

## Acknowledgments
The WIW script was developed within the ECOPOTENTIAL project, a H2020 European project under grant agreement No 642088.