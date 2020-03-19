# Selective Enhancement based on Indices

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-19.5349&lng=-64.8363&zoom=12&time=2019-11-02&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B03,B02,B03&evalscript=LyoKIlNlbGVjdGl2ZSBFbmhhbmNlbWVudCBiYXNlZCBvbiBJbmRpY2VzIgpJbnRlcmFjdGl2ZSBlbmhhbmNlbWVudCBtYXNrcyBmb3IgYWxlcm5hdGUgc2VsZWN0aW9uIG9mIExhbmQgeCBXYXRlci9Tbm93L1ZlZ2V0YXRpb24sIGJhc2VkIG9uIE5EV0ksIE5EU0kgYW5kIE5EVkkgSW5kaWNlcywgZm9yIFNlbnRpbmVsLTIgCihzZWUgSW5kaWNlcyBhdCAgaHR0cHM6Ly9jdXN0b20tc2NyaXB0cy5zZW50aW5lbC1odWIuY29tLyNzZW50aW5lbC0yKQpCeSBT6XJnaW8gQS4gSi4gVm9sa21lciAoaHR0cHM6Ly90d2l0dGVyLmNvbS9zZXJnaW9hanYxKSAqIENDIEJZIDQuMCBJbnRlcm5hdGlvbmFsIC0gaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC8KUmVmZXJlbmNlczogClNlbGVjdGl2ZSB0cmVhdG1lbnQgbG9naWNzIGJhc2VkIG9uIFNpbW9uIEdhc2NvaW4ncyAiQmV0dGVyIHNub3cgdmlzdWFsaXNhdGlvbiB1c2luZyBORFNJIiAtIGh0dHBzOi8vd3d3LnNlbnRpbmVsLWh1Yi5jb20vY29udGVzdApFbmhhbmNlbWVudCBmdW5jdGlvbnMgYmFzZWQgb24gUGllcnJlIE1hcmt1c2UncyAiV2lsZGZpcmUgdmlzdWFsaXphdGlvbiIgLSBodHRwczovL2N1c3RvbS1zY3JpcHRzLnNlbnRpbmVsLWh1Yi5jb20vc2VudGluZWwtMi9tYXJrdXNlX2ZpcmUvCk5PVEVTIGZvciBiZWdnaW5lcnMgKGF1dGhvciB0b28pOiBUcnkgdG8gY2hhbmdlIHZhbHVlcyBhIGJpdCB0byBmaXQgYmV0dGVyIGZvciBkaWZmZXJlbnQgc2l0dWF0aW9uczsgc2VlIGNvbW1lbnRzIGFmdGVyICIvLyIgaWYgaXQgaGVscHMuIAoqLwovLyBFTkhBTkNFTUVOVCBGVU5DVElPTlM6CmZ1bmN0aW9uIGEoYSwgYikge3JldHVybiBhICsgYn07Ci8vIEZVTkNUSU9OIEZPUiBDT05UUkFTVDoKZnVuY3Rpb24gc3RyZXRjaCh2YWwsIG1pbiwgbWF4KSB7cmV0dXJuICh2YWwgLSBtaW4pIC8gKG1heCAtIG1pbik7fSAKLy8gRlVOQ1RJT04gRk9SIFNBVFVSQVRJT04gKGZvciBWZXJzZSBhbmQgSW52ZXJzZSwgc2VwYXJhdGVseSk6CmZ1bmN0aW9uIHNhdEVuaF9WKHJnYkFycikgewogICAgdmFyIGF2ZyA9IHJnYkFyci5yZWR1Y2UoKGEsIGIpID0%2BIGEgKyBiLCAwKSAvIHJnYkFyci5sZW5ndGg7CiAgICByZXR1cm4gcmdiQXJyLm1hcChhID0%2BIGF2ZyAqICgxIC0gU0FUVV9WKSArIGEgKiBTQVRVX1YpOyB9CQpmdW5jdGlvbiBzYXRFbmhfSShyZ2JBcnIpIHsKICAgIHZhciBhdmcgPSByZ2JBcnIucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyByZ2JBcnIubGVuZ3RoOwogICAgcmV0dXJuIHJnYkFyci5tYXAoYSA9PiBhdmcgKiAoMSAtIFNBVFVfSSkgKyBhICogU0FUVV9JKTsgfSAKLy8gRlVOQ1RJT04gQ09OVFJBU1QgKyBTQVRVUkFUSU9OIChmb3IgVmVyc2UgYW5kIEludmVyc2UsIHNlcGFyYXRlbHkpOgpmdW5jdGlvbiBhcHBseUVuaF9WKGJBcnIpIHsKCXJldHVybiBzYXRFbmhfVihbc3RyZXRjaChiQXJyWzBdLCBTbWluViwgU21heFYpLCBzdHJldGNoKGJBcnJbMV0sIFNtaW5WLCBTbWF4ViksIHN0cmV0Y2goYkFyclsyXSwgU21pblYsIFNtYXhWKV0pOyB9CmZ1bmN0aW9uIGFwcGx5RW5oX0koYkFycikgewoJcmV0dXJuIHNhdEVuaF9JKFtzdHJldGNoKGJBcnJbMF0sIFNtaW5JLCBTbWF4SSksIHN0cmV0Y2goYkFyclsxXSwgU21pbkksIFNtYXhJKSwgc3RyZXRjaChiQXJyWzJdLCBTbWluSSwgU21heEkpXSk7IH0KLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gKlNFVFRJTkdTIEhFUkUqOiBTZWxlY3QgYWRqdXN0bWVudHMgKGZvciBWZXJzZSBhbmQgSW52ZXJzZSwgc2VwYXJhdGVseSk6Ci8vIFNUUkVUQ0ggQ09OVFJBU1QgKG1pbi9tYXg6IFNoYWRvdy9MaWdodDsgZGVmYXVsdD0wLjAwLzEuMDA7IGJsYWNrb3V0LW1hc2sgPSAxLDEpOiAvLyBUSVA6IGF2b2lkIHRvbyBkaWZmZXJlbnQgY29udHJhc3QgZm9yIG1hc2tzCnZhciBTbWluViA9IDAuMDUgOyAvLyBTaGFkb3dzOiBEYXJrZW4gOiA%2BMCA7IExpZ2h0ZW4gPDAKdmFyIFNtYXhWID0gMS4wNSA7IC8vIExpZ2h0czogIERhcmtlbiA6ID4xIDsgTGlnaHRlbiA8MQp2YXIgU21pbkkgPSAwLjA1IDsgLy8gU2hhZG93czogRGFya2VuIDogPjAgOyBMaWdodGVuIDwwCnZhciBTbWF4SSA9IDEuMDUgOyAvLyBMaWdodHM6ICBEYXJrZW4gOiA%2BMSA7IExpZ2h0ZW4gPDEKLy8gU0FUVVJBVElPTjoKdmFyIFNBVFVfViA9IDEuMTAgOyAvLyBzdGFuZGFyZD0xLjAwOyBtb25vY2hyb21hdGljPTA7IDJ4PTIuMDAKdmFyIFNBVFVfSSA9IDEuMTAgOyAvLyBzdGFuZGFyZD0xLjAwOyBtb25vY2hyb21hdGljPTA7IDJ4PTIuMDAKLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KLy8gSU5ERVg6IGNob29zZSAib25seSBvbmUiIGFzIFNFTEVDVElPTiBNQVNLIChhY3RpdmF0ZSBpdCByZW1vdmluZyBmaXJzdCBjb21tZW50IG91dCAiLy8iOyBkZWZhdWx0PU5EV0kyKToKLy92YXIgTkRTSSA9IChCMDMtQjExKS8oQjAzK0IxMSk7ICAvLyBEaXNjcmltaW5hdGVzIFdBVEVSJlNOT1cgeCBOT04tV0FURVI6IHN0YW5kYXJkIFNOT1cgfiA%2BIDAuNDIKLy92YXIgTkRWSSA9IChCMDgtQjA0KS8oQjA4K0IwNCk7ICAvLyBEaXNjcmltaW5hdGVzIFZFR0VUQVRJT04geCBOT04tVkVHOiB%2BIFdhdGVyPDAgU29pbCxTYW5kLFNub3csQ2xvdWRzPS0uMSwrLjEgTG93VmVnPS4yLC40IERlbnNlVmVnPi40CnZhciBORFdJMiA9IChCMDMtQjA4KS8oQjAzK0IwOCk7IC8vIERpc2NyaW1pbmF0ZXMgV0FURVIgeCBOT04tV0FURVI6IHN0YW5kYXJkIFdBVEVSIGxpbWl0IH4gPiAwLjMKLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KLy8gQkFORCBDT01QT1NUSU9OUzogW1JFRCwgR1JFRU4sIEJMVUVdOyAobW9yZSBjdXN0b21pc2VkIGNvbXBvc3Rpb25zIGNhbiBiZSBhZGRlZCB0byBsaXN0IGJlbG93KSAvLyBFbmhhbmNlbWVudCBkZXNjcmlwdGlvbjoKLy8gUHJvcG9zZWQgZm9yIFZFUlNFIE1BU0sgKFdhdGVyL05EV0ksIFZlZ2V0YXRpb24vTkRWSSwgU25vdy9ORFNJKToKdmFyIE5BVFVSQUxfUkVER0UgPSBbKEIwNCo0LjApLCAoQjAzKjIuOCtCMDYqMS41KSwgKEIwMiozLjUpXTsgLy8gTmVhciBOYXR1cmFsOyB0dXJiaWRpdHkgYW5kIGFsZ2FlIFJlZEVkZ2UKdmFyIEZBTFNFQ09MT1JfTklSID0gWyhCMDgqMi4zKSwgKEIwMyoxLjArQjA1KjIuMCksIChCMDIqMy41KV07IC8vIEJsdWlzaCB3YXRlciBOSVI7IGFsZ2FlIFJlZEVkZ2UKLy8gUHJvcG9zZWQgZm9yIElOVkVSU0UgTUFTSyAoTEFORCk6CnZhciBOQVRVUkFMX05JUiA9IFsoQjA0KjMuMCtCMDUqMS4wKSwgKEIwMyozLjArQjA4KjEuMCksIChCMDIqMy41KV0gOyAvLyBOZWFyIE5hdHVyYWw7IFZlZ2V0YXRpb24gTklSIAp2YXIgTkFUVVJBTF9TV0lSID0gWyhCMDQqMi42K0IxMiowLjgpLCAoQjAzKjMuMCtCMDgqMC41KSwgKEIwMiozLjApXSA7IC8vIEJhcmUgc29pbCBTV0lSOyBWZWdldGF0aW9uIE5JUgp2YXIgR0VPTE9HWV9TV0lSID0gWyhCMTIqMi4yKSwgKEIwNCoxLjQrQjA4KjEuMCksIChCMDIqMi41KV0gOyAvLyBHZW9sb2d5IFNXSVI7IFZlZ2V0YXRpb24gTklSCi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIFNFVCBCQU5EIENPTVBPU1RJT05TIChmb3IgZWFjaCBtYXNrOyBtYXkgdXNlIHNhbWUgQ09NUE8gZm9yIGJvdGgsIG9yIHN3aXRjaCBlYWNoIG90aGVyLCBhY2NvcmRpbmcgdG8gbmVjZXNzaXR5KTogCnZhciBNYXNrVkVSU0UgICA9IEZBTFNFQ09MT1JfTklSIDsgLy8gQ29weSBjb21wb3NpdGlvbiBoZXJlCnZhciBNYXNrSU5WRVJTRSA9IEdFT0xPR1lfU1dJUiA7ICAvLyBDb3B5IGNvbXBvc2l0aW9uIGhlcmUKLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KdmFyIEVuaFZFUlNFICAgPSBhcHBseUVuaF9WKE1hc2tWRVJTRSkgIDsgLy8gRG9uJ3QgY2hhbmdlIHRoaXMKdmFyIEVuaElOVkVSU0UgPSBhcHBseUVuaF9JKE1hc2tJTlZFUlNFKTsgLy8gRG9uJ3QgY2hhbmdlIHRoaXMKLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KLy8gUkVUVVJOcyBvbiBzY3JlZW4gc2VsZWN0ZWQgRU5IQU5DRU1FTlQsIGFjY29yZGluZyB0byBJTkRFWEVTIGZyb20gYWJvdmUgYW5kIGl0cyBsaW1pdCB2YWx1ZXMgYmVsb3cgKHVzZSAib25seSBvbmUiIGJlbG93OyBkZWZhdWx0IE5EV0kyKToKLy9yZXR1cm4gKCBORFNJID4gMC40MiApID8gRW5oVkVSU0UgOiBFbmhJTlZFUlNFIDsgLy8gRm9yIFNOT1dZIGFyZWFzIG9ubHkKLy9yZXR1cm4gKCBORFZJID4gMC40ICkgPyBFbmhWRVJTRSA6IEVuaElOVkVSU0UgOyAvLyBGb3IgVkVHRVRBVElPTiBhcmVhcyBvbmx5CnJldHVybiAoIE5EV0kyID4gLTAuMSApID8gRW5oVkVSU0UgOiBFbmhJTlZFUlNFIDsgLy8gTEFORCB4IFdBVEVSOiBsaW1pdCBsb3dlcmVkIHRvIHRha2UgY2xvdWRzIHcvIHdhdGVyCi8v){:target="_blank"} 


## General description of the script

Interactive enhancement dual mask to alternate selective treatment of features, like Land x Water or Snow or Vegetation, based respectively on NDWI, NDSI and NDVI indices, for Sentinel-2 images.

## Details of the script

**Scripts applicability**
The objective of this script is to help on selectively enhancing of different classes of indexed features in images.
In most occasions a single composition of band, or luminosity adjustments, does not fit to all features of an image. Actually, when enhancing some features, others often fall negatively influenced. For example, this may happen when enhancing bare soil, geology and vegetation differentiations using SWIR B12, B11, as RED, causing water to loose differentiation of turbidity that B04 Natural Red can detect very well. This SWIR effect was the case that can be seen in the example of Picture 1 below. Also when dealing with very different exigencies for luminosity adjustment, like between soil and snow.
So strategically treating both separately may help to preserve such kind of particular details of each group of features.
This script also aims to be didactically clear, simple and easy to manipulate, to be understood by beginners, since it's recommended user actions on adjusting parameters (even though parameters have default presets).

**False detection problems**
It was found that clouds over water may be not well selected when using NDWI, some falling apart from water, others keeping on water's group of selection. It can't be provided just one single stablished enhancement adjust to fitting all places, all situations. Limit values of Indices, as well compositions of bands, may be adjusted to avoid affect undesirable features.

**How the script works**
This script discriminates images in two opposite group of features, according to the limit value of selected remote sensing indices (NDWI,NDVI,NDSI; eventually others may be added to the list).
This limit separates images in two classes of features, each group being treated separately, like a selection mask, i.e., verse and inverse selection areas of the same limit value, both summed fitting the whole image area.
Then, for each selection group, it applies contrast stretch and saturation separately.
Each selected area can be individually blacked out, for exclusive visualization of the opposite selection.
Also each one can be fully desaturated to monochromatic. This can be useful as another selective enhancement resource.

Parameters for contrast, saturation, index limit and band compositions may be manually adjusted.

## Author of the script

Sérgio Augusto Jardim Volkmer

## Description of representative images

1) Visualization of BRAZIL, Lagoa dos Patos, RS dry season 2020-01-10

LEFT: Using separated enhancement for land and water:
- Land, using "NATURAL_SWIR" [(B04*2.6+B12*0.8), (B03*3.0+B08*0.5), (B02*3.0)], enhances both vegetation, farmlands, bare soil;
- Water, using "NATURAL_REDGE" [(B04*4.0), (B03*2.8+B06*1.5), (B02*3.5)], enhances turbidity moistures and algae in it.

RIGHT: Using only NATURAL_SWIR for both land and water: enhances land, but loses differentiation of water, turbidity moistures, algae.
![The script example 1](fig/1-brazil.png)

2) Visualization of BOLIVIA, Pucara de Oroncota 2019-11-02

LEFT: Script highly enhances geology differentiation, while selectively enhancing waterways.

RIGHT: True Color shows not much differentiation in geology itself, and with waterways, all in similar colors.
![The script example 2](fig/2-bolivia.png)

3) Visualization of NAMIBIA, Aussenkehr Farm 2020-01-09

LEFT: Enhanced geology differentiation, magmatic dikes (bluish-grey) cutting through different rock layers, while selectively enhancing farmlands.

RIGHT: True Color, indiferentiated geology, magmatic dikes not visible.
![The script example 3](fig/3-namibia.png)

4) Visualization of RUSSIA, Severny Island on summer 2019-08-20

LEFT: Different treatement of brightness and contrast for snow and glaciers versus land , vegetation and rocks.

RIGHT: True Color highly oversaturated whitness of snow an glaciers and no differentiation of vegetation and soil.
![The script example 4](fig/4-russia.png)

5) Visualization of ITALY, Golfo di Venezia 2019-11-10

LEFT: Using selection as an artistic blackout mask to enhance water turbidity alone.

RIGHT: True Color with much less differentiation of clear water and turbidity.
![The script example 5](fig/5-venezia.png)

## References

For limit values of Indices:
[1] [NDSI: (B03-B11)/(B03+B11) > 0.42 for snow areas and glaciers](https://custom-scripts.sentinel-hub.com/sentinel-2/ndsi/){:target="_blank"} 

[2] [NDVI: (B08-B04)/(B08+B04) > 0.2 for grass, shrub; > 0.4 dense forest](https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index){:target="_blank"} 

[3] [NDWI2: (B03-B08)/(B03+B08) > 0.3 for water bodies](https://en.wikipedia.org/wiki/Normalized_difference_water_index){:target="_blank"}   

## Credits

[1] Selective treatment logics based on Simon Gascoin's [Better snow visualisation using NDSI](https://www.sentinel-hub.com/contest){:target="_blank"}  

[2] Enhancement functions based on Pierre Markuse's [Wildfire visualization](https://custom-scripts.sentinel-hub.com/sentinel-2/markuse_fire/){:target="_blank"}