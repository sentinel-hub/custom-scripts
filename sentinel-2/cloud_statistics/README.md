# Cloud Statistics

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Temporal Playground](https://apps.sentinel-hub.com/sentinel-playground-temporal/?source=S2L2A&lat=42.56016134191609&lng=-1.80450439453125&zoom=9&preset=CUSTOM&layers=B01,B02,B03&maxcc=100&gain=1.0&gamma=1.0&time=2017-03-28%7C2020-07-31&atmFilter=ATMCOR&showDates=false&evalscript=Ly9WRVJTSU9OPTMKdmFyIG51bWJlck9mTW9udGhzVG9Vc2UgPSAxOwoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKCS8vIFRoZSBzY3JpcHQgY2FuIGJlIGFkYXB0ZWQgZm9yIFMyTDFDIGJ5IHJlbW92aW5nIHRoZSAiU0NMIiBiYW5kCiAgICBpbnB1dDogWyJDTE0iLCJTQ0wiLCJkYXRhTWFzayJdLAogICAgb3V0cHV0OiB7IGJhbmRzOiA0IH0sCiAgICBtb3NhaWNraW5nOiAiT1JCSVQiCiAgfTsKfQoKZnVuY3Rpb24gaXNDbG91ZHkoc21wKXsKICAvLyBDaGVjayBpZiBjbG91ZCB1c2luZyBzMmNsb3VkbGVzcyBhbmQgc2NlbmUgY2xhc3NpZmljYXRpb24KICBsZXQgY2xtID0gc21wLkNMTTsKICBsZXQgc2NsID0gc21wLlNDTDsKICAKICBpZiAoY2xtID09IDEpewogICAgLy8gczJjbG91ZGxlc3MKICAgIHJldHVybiBmYWxzZTsgIAogIH0gZWxzZSBpZiAoc2NsID09IDEgfHwgc2NsID09IDMgfHwgc2NsID09IDggfHwgc2NsID09IDkgfHwgc2NsID09IDEwKXsKICAgIC8vIHNhdHVyYXRlZC9kZWZlY3RpdmUsIGNsb3VkIHNoYWRvdywgY2xvdWQgbWVkaXVtIHByb2JhYmlsaXR5LAogICAgLy8gY2xvdWQgaGlnaCBwcm9iYWJpbGl0eSwgY2lycnVzCiAgICByZXR1cm4gZmFsc2U7CiAgfSBlbHNlIHsKICAgIHJldHVybiB0cnVlOwogIH0KfQoKZnVuY3Rpb24gZmlsdGVyU2NlbmVzKHNjZW5lcywgaW5wdXRNZXRhZGF0YSkgewogICAgcmV0dXJuIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24oc2NlbmUpIHsKICAgICAgICByZXR1cm4gc2NlbmUuZGF0ZS5nZXRUaW1lKCkgPj0gKGlucHV0TWV0YWRhdGEudG8uZ2V0VGltZSgpIC0gKG51bWJlck9mTW9udGhzVG9Vc2UgKiAzMSAqIDI0ICogMzYwMCAqIDEwMDApKTsKICAgIH0pOwp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICB2YXIgbm9PZkNsZWFyUHggPSAwOwogIHZhciBub09mU2FtcGxlcyA9IDA7CiAgCiAgLy8gTG9vcCBvdmVyIGF2YWlsYWJsZSBzYW1wbGVzIChpbWFnZXMpCiAgZm9yIChpPTA7aTxzYW1wbGVzLmxlbmd0aDtpKyspCiAgewoJLy9JZiB0aGVyZSBpcyBubyB2YWx1ZSBhdmFpbGFibGUsIHdlIGF2b2lkIGZ1cnRoZXIgY291bnQKICAgIGlmICghc2FtcGxlc1tpXS5kYXRhTWFzaykgY29udGludWU7CiAgICAgbm9PZlNhbXBsZXMrKzsKICAgIAogICAgLy9Dcml0ZXJpYSBmb3IgY2xvdWRsZXNzIHBpeGVsCiAgICBpZiAoCiAgICAgIGlzQ2xvdWR5KHNhbXBsZXNbaV0pCiAgICAgKSBub09mQ2xlYXJQeCsrOwogIH0KCiAgLy90cmFuc3BhcmVudCBpZiB0aGVyZSBpcyBubyBkYXRhCiAgaWYgKG5vT2ZTYW1wbGVzPT0wKSByZXR1cm4gWzAsMCwwLDBdOwoKICAvLyBSYXRpbyBvZiBub24tY2xvdWR5IHBpeGVscwogIHZhciBhdmcgPSBub09mQ2xlYXJQeCAvIG5vT2ZTYW1wbGVzOwoKICAvLyBDb2xvciBzY2hlbWUgZm9yIHZpc3VhbGlzYXRpb24KICB2YXIgY29sb3I9IGNvbG9yQmxlbmQoYXZnLAogICBbMCwgMC4xLCAwLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOSwgMS4wIF0sCiAgIFsKICAgIFswLzI1NSwwLDAvMjU1XSwgICAgICAgIC8vICAtPiAwID0gIzAwMDAwMAogICAgWzE0MS8yNTUsMC8yNTUsMC8yNTVdLCAgIC8vICAtPiAuMSA9ICM4RDAwMDAKICAgIFsyMTkvMjU1LDM2LzI1NSwzNi8yNTVdLCAgLy8gIC0%2BIC4yID0gI0RCMjQyNAogICAgWzIzNi8yNTUsMTI1LzI1NSwwLzI1NV0sICAvLyAgLT4gLjMgPSAjRUM3RDAwCiAgICBbMjM2LzI1NSwxOTkvMjU1LDAvMjU1XSwgLy8gIC0%2BIC40ID0gI0VDQzcwMAogICAgWzExMS8yNTUsMTYxLzI1NSwzMi8yNTVdLCAvLyAgLT4gLjUgPSAjNkZBMTIwCiAgICBbNzUvMjU1LDEyNi8yNTUsMzkvMjU1XSwgLy8gIC0%2BIC42ID0gIzRCN0UyNwogICAgWzcyLzI1NSwxNjgvMjU1LDE0Ni8yNTVdLCAvLyAgLT4gLjcgPSAjNDhBODkyCiAgICBbNjMvMjU1LDE0Mi8yNTUsMTg1LzI1NV0sICAvLyAgLT4gLjggPSAjM0Y4RUI5CiAgICBbMTMzLzI1NSw3OC8yNTUsMTQ0LzI1NV0sICAgLy8gIC0%2BIC45ID0gIzg1NEVBNAogICAgWzg1LzI1NSwzNC8yNTUsMTE1LzI1NV0gICAgICAgICAvLyAgLT4gMS4wID0gIzU1MjI3MwogICBdKTsKCiAgcmV0dXJuW2NvbG9yWzBdLGNvbG9yWzFdLGNvbG9yWzJdLDFdOwp9&temporal=true){:target="_blank"}    
 - [EO Browser](https://sentinelshare.page.link/hscq){:target="_blank"}   

## General description of the script

For a given time-range, this script counts the number of Sentinel-2 L2A cloud-free pixels based on the [s2cloudless](https://medium.com/sentinel-hub/cloud-masks-at-your-service-6e5b2cb2ce8a) algorithm and the [Sen2Cor](https://step.esa.int/main/third-party-plugins-2/sen2cor/) scene classification (SCL) data. The SCL categories used to detect clouds in the current version of the script are:
- saturated/defective
- cloud shadow
- cloud medium probability
- cloud high probability
- cirrus.

The categories can be easily modified to fit users' needs. Furthermore, the SCL band can be removed from the script for compatibility with Sentinel-2 L1C images.

The script returns the ratio of cloud-free pixels against the total number of pixels over the time period.
## Description of representative images

The cloud statistics over the north of Spain for July 2020. The map shows a higher occurence of clouds along the North coastline (Asturias) than inland. Processed by Sentinel Hub.

![clouds](fig/fig2.jpg)

*Above is an example output from the Cloud Statistics script: for each Sentinel-2 pixel, the values represent the ratio of cloud-free images over a given time period to the total number of images for the same period. Therefore, a value of 1 (represented in purple) means that 100% of the images in the time-series were cloud-free, and a value of 0 (in black) signifies that there are no cloud-free images available.*

<ins>Note</ins>: users are free to improve this page and modify any part of the script.
