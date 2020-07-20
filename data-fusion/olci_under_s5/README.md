# Sentinel-3 OLCI true color under Sentinel-5 products
  
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.  
<div id='script_view' style="display:none">  
{% highlight javascript %}  
{% include_relative script.js %}  
{% endhighlight %}  
  
</div>  

## Authors

**Author of the datafusion script:**
- Monja B. Šebela
  
## Evaluate and visualize  
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=6&lat=-17.10826&lng=-21.63491&themeId=ATMOSPHERE-NORMAL-MODE&datasetId=S5_CLOUD&fromTime=2020-01-15T00%3A00%3A00.000Z&toTime=2020-01-15T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fcreodias.sentinel-hub.com%2Fogc%2Fwms%2F2c5dc5f7-4c83-40dd-a520-da2c7221568d&evalscript=Ly9WRVJTSU9OPTMKdmFyIHNldHVwID0gKCkgPT4gKHsKICBpbnB1dDogWwogICAge2RhdGFzb3VyY2U6ICJzM29sY2kiLCBiYW5kczpbIkIwNCIsICJCMDYiLCAiQjA4Il19LAogICAge2RhdGFzb3VyY2U6ICJzNXBsMiIsIGJhbmRzOlsiQ0xPVURfVE9QX1BSRVNTVVJFIl19XSwKICBvdXRwdXQ6IFsKICAgIHtpZDogImRlZmF1bHQiLCBiYW5kczogM30KICBdLAp9KTsKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzLCBpbnB1dERhdGEsIGlucHV0TWV0YWRhdGEsIGN1c3RvbURhdGEsIG91dHB1dE1ldGFkYXRhKXsgCnZhciBTNSA9IHNhbXBsZXMuczVwbDJbMF0KdmFyIFMzID0gc2FtcGxlcy5zM29sY2lbMF0KdmFyIENMT1VEX1RPUF9QUkVTU1VSRSA9IFM1LkNMT1VEX1RPUF9QUkVTU1VSRQp2YXIgbWluVmFsID0gMTAwMDAuMDsKdmFyIG1heFZhbCA9IDExMDAwMC4wOwp2YXIgZGlmZiA9IG1heFZhbCAtIG1pblZhbDsKdmFyIGxpbWl0cyA9IFttaW5WYWwsIG1pblZhbCArIDAuMTI1ICogZGlmZiwgbWluVmFsICsgMC4zNzUgKiBkaWZmLCBtaW5WYWwgKyAwLjYyNSAqIGRpZmYsIG1pblZhbCArIDAuODc1ICogZGlmZiwgbWF4VmFsXTsKdmFyIGNvbG9ycyA9IFtbMCwgMCwgMC41XSwgWzAsIDAsIDFdLCBbMCwgMSwgMV0sIFsxLCAxLCAwXSwgWzEsIDAsIDBdLCBbMC41LCAwLCAwXV07CiAgaWYgKENMT1VEX1RPUF9QUkVTU1VSRT4wKXsKICAgcmV0dXJue2RlZmF1bHQ6Y29sb3JCbGVuZChDTE9VRF9UT1BfUFJFU1NVUkUsIGxpbWl0cywgY29sb3JzKX0KfQogIHJldHVybntkZWZhdWx0OltTMy5CMDgqMywgUzMuQjA2KjMsIFMzLkIwNCozLjVdfQp9Cgo%3D){:target="_blank"}
 When EO Browser loads, switch to **code view**, check the **Use additional datasets (advanced)** and **S-3 OLCI** box. Finnally press **Refresh**.
  
## General description of the script  
  
As Sentinel-5P is transparent where there is no data, this script fills in the gaps with true color Sentinel-3 OLCI imagery. It can be useful to get a feeling of the land below the clouds, or to show the underestimation of S5P cloud products, where white clouds are visible. 
The script can be modified to fit any Sentinel-5P product, by just replacing the "band" in custom script, and by replacing the visualization (this is very important, as S5P products have different units). 

## Description of representative images  
  
**Cloud base pressure over OLCI true color**
![base pressure](fig/fig1.jpg) 



