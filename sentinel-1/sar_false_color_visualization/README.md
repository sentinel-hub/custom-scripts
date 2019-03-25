# SAR False Color Visualization
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=-6.0992&lng=105.4166&zoom=12&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&time=2019-03-21&preset=CUSTOM&layers=VV,VH,HH&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-1/sar_false_color_visualization/script.js){:target="_blank"}   

## Description
The script visualizes Earth surface in False Color from Sentinel-1 data.  
It helps in maritime monitoring (ice monitoring, ship monitoring,...) land monitoring (agricolture, deforestation,...) and emergency management (flood monitoring, volcano monitoring, ...).

## Contributors:
Annamaria Luongo, https://twitter.com/annamaria_84

## Examples:
### Veira glacier 
2017  
https://apps.sentinel-hub.com/eo-browser/?lat=-49.4601&lng=-73.1207&zoom=12&time=2017-03-20&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFNBUiBmYWxzZSBjb2xvcnMuCmMxID0gMTBlLTQ7CmMyID0gMC4wMTsKYzMgPSAwLjAyOwpjNCA9IDAuMDM7CmM1ID0gMC4wNDU7CmM2ID0gMC4wNTsKYzcgPSAwLjk7CmM4ID0gMC4yNTsKCmJhbmQxID0gYzQgKyBNYXRoLmxvZyAoYzEgLSBNYXRoLmxvZyAoYzYgLyAoYzMgKyAyICogVlYpKSk7CmJhbmQyID0gYzYgKyBNYXRoLmV4cCAoYzggKiAoTWF0aC5sb2cgKGMyICsgMiAqIFZWKSArIE1hdGgubG9nIChjMyArIDUgKiBWSCkpKTsKYmFuZDMgPSAgMSAtIE1hdGgubG9nIChjNiAvIChjNSAtIGM3ICogVlYpKTsKCnJldHVybiBbYmFuZDEsYmFuZDIsYmFuZDNdOyA%3D  

2019  
https://apps.sentinel-hub.com/eo-browser/?lat=-49.4601&lng=-73.1207&zoom=12&time=2019-03-15&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFNBUiBmYWxzZSBjb2xvcnMuCmMxID0gMTBlLTQ7CmMyID0gMC4wMTsKYzMgPSAwLjAyOwpjNCA9IDAuMDM7CmM1ID0gMC4wNDU7CmM2ID0gMC4wNTsKYzcgPSAwLjk7CmM4ID0gMC4yNTsKCmJhbmQxID0gYzQgKyBNYXRoLmxvZyAoYzEgLSBNYXRoLmxvZyAoYzYgLyAoYzMgKyAyICogVlYpKSk7CmJhbmQyID0gYzYgKyBNYXRoLmV4cCAoYzggKiAoTWF0aC5sb2cgKGMyICsgMiAqIFZWKSArIE1hdGgubG9nIChjMyArIDUgKiBWSCkpKTsKYmFuZDMgPSAgMSAtIE1hdGgubG9nIChjNiAvIChjNSAtIGM3ICogVlYpKTsKCnJldHVybiBbYmFuZDEsYmFuZDIsYmFuZDNdOyA%3D 


### Anak Krakatau 
https://apps.sentinel-hub.com/eo-browser/?lat=-6.11086&lng=105.41905&zoom=13&time=2018-12-31&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFNBUiBmYWxzZSBjb2xvcnMuCmMxID0gMTBlLTQ7CmMyID0gMC4wMTsKYzMgPSAwLjAyOwpjNCA9IDAuMDM7CmM1ID0gMC4wNDU7CmM2ID0gMC4wNTsKYzcgPSAwLjk7CmM4ID0gMC4yNTsKCmJhbmQxID0gYzQgKyBNYXRoLmxvZyAoYzEgLSBNYXRoLmxvZyAoYzYgLyAoYzMgKyAyICogVlYpKSk7CmJhbmQyID0gYzYgKyBNYXRoLmV4cCAoYzggKiAoTWF0aC5sb2cgKGMyICsgMiAqIFZWKSArIE1hdGgubG9nIChjMyArIDUgKiBWSCkpKTsKYmFuZDMgPSAgMSAtIE1hdGgubG9nIChjNiAvIChjNSAtIGM3ICogVlYpKTsKCnJldHVybiBbYmFuZDEsYmFuZDIsYmFuZDNdOyA%3D 

### Mozambique Flood 
https://apps.sentinel-hub.com/eo-browser/?lat=-19.7667&lng=34.7065&zoom=10&time=2019-03-20&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFNBUiBmYWxzZSBjb2xvcnMuCmMxID0gMTBlLTQ7CmMyID0gMC4wMTsKYzMgPSAwLjAyOwpjNCA9IDAuMDM7CmM1ID0gMC4wNDU7CmM2ID0gMC4wNTsKYzcgPSAwLjk7CmM4ID0gMC4yNTsKCmJhbmQxID0gYzQgKyBNYXRoLmxvZyAoYzEgLSBNYXRoLmxvZyAoYzYgLyAoYzMgKyAyICogVlYpKSk7CmJhbmQyID0gYzYgKyBNYXRoLmV4cCAoYzggKiAoTWF0aC5sb2cgKGMyICsgMiAqIFZWKSArIE1hdGgubG9nIChjMyArIDUgKiBWSCkpKTsKYmFuZDMgPSAgMSAtIE1hdGgubG9nIChjNiAvIChjNSAtIGM3ICogVlYpKTsKCnJldHVybiBbYmFuZDEsYmFuZDIsYmFuZDNdOyA%3D  

### Mangrove Forest - Brazil's Marajo island 
https://apps.sentinel-hub.com/eo-browser/?lat=-0.6262&lng=-48.9764&zoom=10&time=2019-03-13&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFNBUiBmYWxzZSBjb2xvcnMuCmMxID0gMTBlLTQ7CmMyID0gMC4wMTsKYzMgPSAwLjAyOwpjNCA9IDAuMDM7CmM1ID0gMC4wNDU7CmM2ID0gMC4wNTsKYzcgPSAwLjk7CmM4ID0gMC4yNTsKCmJhbmQxID0gYzQgKyBNYXRoLmxvZyAoYzEgLSBNYXRoLmxvZyAoYzYgLyAoYzMgKyAyICogVlYpKSk7CmJhbmQyID0gYzYgKyBNYXRoLmV4cCAoYzggKiAoTWF0aC5sb2cgKGMyICsgMiAqIFZWKSArIE1hdGgubG9nIChjMyArIDUgKiBWSCkpKTsKYmFuZDMgPSAgMSAtIE1hdGgubG9nIChjNiAvIChjNSAtIGM3ICogVlYpKTsKCnJldHVybiBbYmFuZDEsYmFuZDIsYmFuZDNdOyA%3D …
