---
title: OLCI Natural Colours with Sigmoid Script
parent: Sentinel-3
grand_parent: Sentinel
layout: script
permalink: /sentinel-3/natural_colors_sigmoid/
nav_exclude: true
examples:
- zoom: '8'
  lat: '34.196'
  lng: '-117.169'
  datasetId: S3OLCI
  fromTime: '2020-01-24T00:00:00.000Z'
  toTime: '2020-01-24T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: IC8vIFRoaXMgc2NyaXB0IHByb3ZpZGVzIGEgbmF0dXJhbCBjb2xvdXIgdmlzdWFsaXphdGlvbiBvZiBTZW50aW5lbC0zIE9MQ0kgd2l0aCBhIGNvbWJpbmF0aW9uIG9mIGJhbmRzIEIwOCwgQjA2LCBCMDQuCgovLyBBIG1vZGlmaWVkIHNpZ21vaWQgZnVuY3Rpb24gaXMgdXNlZCBpbiB0aGUgZ2FpbiBmb3JtdWxhIHRvIHByZXNlcnZlIHNvbWUgb2YgdGhlIGNsb3VkIGJyaWdodG5lc3MgZHluYW1pYyB3aXRoIGEgcHJvZ3Jlc3NpdmUgc2F0dXJhdGlvbi4KCi8vIFRPQSByZWZsZWN0YW5jZSBvZmZzZXRzIGFyZSBzdWJ0cmFjdGVkIHRvIHJlZCwgZ3JlZW4sIGJsdWUgYmFuZHMgdG8gY29tcGVuc2F0ZSBmb3IgdGhlIFJheWxlaWdoIGRpZmZ1c2lvbi4KCgovLyBMYW1iZGEgY29ycmVzcG9uZCB0byB0aGUgc3RlZXBuZXNzIG9mIHRoZSBjdXJ2ZSBvZiB0aGUgbG9naXN0aWMvc2lnbW9pZCBmdW5jdGlvbiBleHByZXNzZWQgYXMgayBpbiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Mb2dpc3RpY19mdW5jdGlvbgoKLy8gTGFtYmRhIHZhbHVlIG9mIDcgaXMgYSBjb21wcm9taXNlLiAKCi8vIExhbWJkYSB2YWx1ZSBjYW4gYmUgYWRqdXN0ZWQgdG8gbG93ZXIgdmFsdWVzIChlLmcuIDMsIDQsIDUpIHRvIGNhdGNoIG1vcmUgb2YgY2xvdWRzIGJyaWdodG5lc3MgZHluYW1pYy4KCi8vIEhpZ2hlciB2YWx1ZXMgb2YgTGFtYmRhIChlLmcuIDgsIDksIDEwKSB3aWxsIHJlc3VsdCBpbiBicmlnaHRlciBpbWFnZXMgbW9yZSBhZGFwdGVkIHRvIGRhcmsgdmVnZXRhdGVkIGFyZWFzLiBOb3RlIHRoYXQgaW4gdGhpcyBjYXNlIGNsb3VkcyBicmlnaHRuZXNzIHdpbGwgc2F0dXJhdGUuCgoKdmFyIGxhbWJkYSA9IDcuMDsKdmFyIFJFRF9vZmZzZXQgPSAwLjAzOwp2YXIgR1JFRU5fb2Zmc2V0ID0gMC4wNTsKdmFyIEJMVUVfb2Zmc2V0ID0gMC4wODsKCnZhciBSID0gQjA4IC0gUkVEX29mZnNldDsKdmFyIEcgPSBCMDYgLSBHUkVFTl9vZmZzZXQ7CnZhciBCID0gQjA0IC0gQkxVRV9vZmZzZXQ7CgppZiAoUiA8IDApIHtSPTAuMH07CmlmIChHIDwgMCkge0c9MC4wfTsKaWYgKEIgPCAwKSB7Qj0wLjB9OwoKdmFyIFJFRCA9IDIqKDEvKDEgKyBNYXRoLmV4cCgtbGFtYmRhKlIpKS0wLjUpOwp2YXIgR1JFRU4gPSAyKigxLygxICsgTWF0aC5leHAoLWxhbWJkYSpHKSktMC41KTsKdmFyIEJMVUUgPSAyKigxLygxICsgTWF0aC5leHAoLWxhbWJkYSpCKSktMC41KTsKCnZhciBuYXR1cmFsQ29sb3VyID0gW1JFRCwgR1JFRU4sIEJMVUVdOwoKcmV0dXJuIG5hdHVyYWxDb2xvdXI7
---

## General description of the script

This script provides a natural colour visualization of Sentinel-3 OLCI with a combination of bands B08, B06, B04. A modified sigmoid function is used in the gain formula to preserve some of the cloud brightness dynamic with a more progressive saturation. TOA reflectance offsets are subtracted to red, green, blue bands to compensate for the Rayleigh diffusion.

## Details of the script

Lambda correspond to the steepness of the curve of the logistic/sigmoid function expressed as k in [Logistic function](https://en.wikipedia.org/wiki/Logistic_function){:target="_blank"}. Lambda value of 7 is a compromise. Lambda value can be adjusted to lower values (e.g. 3, 4, 5) to catch more of clouds brightness dynamic. Higher values of Lambda (e.g. 8, 9, 10) will result in brighter images more adapted to dark vegetated areas. Note that in this case clouds brightness will saturate.

## Author of the script

Jérôme LOUIS

## Description of representative images

1) The graph shows the shape of the modified sigmoid function for different value of Lambda (steepness of the curve).
![Figure - Modified function](fig/Figure_Modified_Sigmoid.png)

2) The image of California acquired on 24/01/2020 used lambda = 7.
![The script example 1](fig/2020-01-24_Sentinel-3_OLCI_Custom_script_California.jpg)

3) The image of Madagascar acquired on 25/03/2019 used lambda = 9.
![The script example 2](fig/2019-03-25_Sentinel-3_OLCI_Custom_script_Madagascar.jpg)

4) The image of France acquired on 26/02/2019 used lambda = 7.
![The script example 3](fig/2019-02-26_Sentinel-3_OLCI_Custom_script_France.jpg)

5) The image of Typhoon Krosa in Pacific, south of Japan, acquired on 13/08/2019 used lambda = 4.
![The script example 4](fig/2019-08-13_Sentinel-3_OLCI_Custom_script_Typhoon.jpg)

## References

[1] Logistic/Sigmoid function is defined in [Logistic function](https://en.wikipedia.org/wiki/Logistic_function){:target="_blank"}  

## Credits

I would like to thank my wife Ms KEN Soleakhena for her suggestion of using a modified sigmoid function. 
