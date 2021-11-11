# Total Ozone Column over snow in Antarctica

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="\_blank"} it.

<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

- [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=-69.3383478923517&lng=150.02689361572266&zoom=13&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2020-08-01%7C2021-02-08&atmFilter=&showDates=false&evalscript=ZnVuY3Rpb24gc2V0dXAgKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogWwogICAgICAnc3VuWmVuaXRoQW5nbGVzJywKICAgICAgJ3ZpZXdaZW5pdGhNZWFuJywKICAgICAgJ0IwMScsCiAgICAgICdCMDMnLAogICAgICAnQjhBJywKICAgICAgJ2RhdGFNYXNrJwogICAgXSwKICAgIG91dHB1dDogeyBiYW5kczogNCwgc2FtcGxlVHlwZTogJ0FVVE8nIH0KICB9Cn0KCmZ1bmN0aW9uIGRlZ3JlZXNfdG9fcmFkaWFucyAoZGVncmVlcykgewogIC8vIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zCiAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCkKfQoKZnVuY3Rpb24gYW1mIChzemEsIHZ6YSkgewogIC8vIENvbXB1dGUgdGhlIGFpciBtYXNzIGZhY3RvciAoQU1GKQogIC8vIHN6YSBpbiByYWRpYW5zCiAgLy8gdnphIGluIHJhZGlhbnMKCiAgbGV0IGVwc2lsb24gPSBNYXRoLmNvcyhzemEpCiAgbGV0IGV0YSA9IE1hdGguY29zKHZ6YSkKCiAgLy8gQ2FsY3VsYXRlIEFNRgogIHZhciBtID0gMSAvIGVwc2lsb24gKyAxIC8gZXRhCgogIHJldHVybiBtCn0KCmZ1bmN0aW9uIGNhbGNLIChyZWZsQSwgcmVmbEIsIEwpIHsKICAvLyBDb21wdXRlIEsgZnJvbSBFcS4gNQoKICAvLyBhYiBhbmQgY0Fic0IgYXJlIGNvbnN0YW50cyBmcm9tIFRhYmxlIDIKICBjb25zdCBhYiA9IDcuNDggKiBNYXRoLnBvdygxMCwgLTQpCiAgY29uc3QgY0Fic0IgPSAzLjg3ICogTWF0aC5wb3coMTAsIC0yMSkKCiAgdmFyIEsgPSAoTWF0aC5sb2cocmVmbEEgLyByZWZsQikgLSBNYXRoLnNxcnQoYWIgKiBMKSkgLyBjQWJzQgoKICByZXR1cm4gSwp9CgpmdW5jdGlvbiBjYWxjTCAocmVmbEEsIHJlZmxDKSB7CiAgLy8gQ29tcHV0ZSBMIGZyb20gRXEuIDUKCiAgLy8gYWMgaXMgYSBjb25zdGFudCBmcm9tIFRhYmxlIDIKICBjb25zdCBhYyA9IDMuNDkgKiBNYXRoLnBvdygxMCwgLTIpCgogIHZhciBMID0gTWF0aC5wb3coTWF0aC5sb2cocmVmbEMgLyByZWZsQSksIDIpIC8gYWMKCiAgcmV0dXJuIEwKfQoKZnVuY3Rpb24gY29tcHV0ZV9vem9uZSAoc3phLCB2emEsIHJlZmxBLCByZWZsQiwgcmVmbEMpIHsKICAvLyBDb21wdXRlIGFpciBtYXNzIGZhY3RvcgogIGxldCBzemFSYWQgPSBkZWdyZWVzX3RvX3JhZGlhbnMoc3phKQogIGxldCB2emFSYWQgPSBkZWdyZWVzX3RvX3JhZGlhbnModnphKQogIHZhciBtID0gYW1mKHN6YVJhZCwgdnphUmFkKQoKICAvLyBDb21wdXRlIEwKICB2YXIgTCA9IGNhbGNMKHJlZmxBLCByZWZsQykKCiAgLy8gQ29tcHV0ZSBLCiAgdmFyIEsgPSBjYWxjSyhyZWZsQSwgcmVmbEIsIEwpCgogIC8vIENvbXB1dGUgb3pvbmUKICB2YXIgTiA9IEsgLyBtCgogIHJldHVybiBOCn0KCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwgKHNhbXBsZSkgewogIC8vIERlZmluZSBiYW5kcwogIHZhciBTWkEgPSBzYW1wbGUuc3VuWmVuaXRoQW5nbGVzCiAgdmFyIFZaQSA9IHNhbXBsZS52aWV3WmVuaXRoTWVhbgoKICAvLyBTZXQgYmFuZHMgYW5kIHdhdmVsZW5ndGhzIGluIGNtCiAgdmFyIHJlZmxBID0gc2FtcGxlLkIwMQogIHZhciByZWZsQiA9IHNhbXBsZS5CMDMKICB2YXIgcmVmbEMgPSBzYW1wbGUuQjhBCgogIC8vIENvbXB1dGUgb3pvbmUKICBsZXQgb3pvbmVDb2wgPSBjb21wdXRlX296b25lKFNaQSwgVlpBLCByZWZsQSwgcmVmbEIsIHJlZmxDKQoKICAvLyBDb252ZXJ0IG96b25lIGZyb20gbW9sL2NtMiB0byBEVQogIGxldCBrID0gMy43MjIgKiBNYXRoLnBvdygxMCwgLTE3KQogIHZhciBvem9uZUR1ID0gb3pvbmVDb2wgKiBrCgogIC8vIE1ha2UgYSB2aXN1YWxpc2F0aW9uIGJhc2VkIG9uIHRoZSBwcmVzZXQgY29sb3VyIHJhbXAKICBjb25zdCB2aXN1YWxpemVyID0gQ29sb3JHcmFkaWVudFZpc3VhbGl6ZXIuY3JlYXRlUmVkVGVtcGVyYXR1cmUoMTQwLCAzNDApCgogIHJldHVybiBbCiAgICB2aXN1YWxpemVyLnByb2Nlc3Mob3pvbmVEdSlbMF0sCiAgICB2aXN1YWxpemVyLnByb2Nlc3Mob3pvbmVEdSlbMV0sCiAgICB2aXN1YWxpemVyLnByb2Nlc3Mob3pvbmVEdSlbMl0sCiAgICBzYW1wbGUuZGF0YU1hc2sKICBdCn0K){:target="\_blank"}
- [EO Browser](https://sentinelshare.page.link/cFC7){:target="\_blank"}

## General description of the script

Kokhanovsky et al. 2021 propose a simple algorithm to derive the total ozone column and snow properties (spectral albedo and effective light absorption path) from Sentinel-2 L1C measurements over Antarctica. This script is an implementation of the algorithm that calculates the Total Ozone Column over highly-reflective surfaces located beneath a clean Antarctic atmosphere. The algorithm uses reflectance in the spectral range 443–865 nm, more particularly the maximal ozone absorption band (559.8 nm), the maximal ice absorption band (864.7 nm) and the minimum ice and ozone absorption band (442.7 nm), to calculate the K parameter which is correlated to the total ozone column.

The authors validated the results of the algorithm at DOME C (Antarctica) between November and December 2020 against multiple other satellite and ground-based sensors. The algorithm was shown to perform in a similar manner to existing products, as shown in Figure 1 below. More details about the validation process and the interpretation of the results can be found in Kokhanovsky et al. 2021.

![validation](fig/validation.png)
_Figure 1: Validation results of the total ozone column retrieval algorithm compared to other satellite and ground-based sensors. Source: Figure 2 from Kokhanovsky et al. 2021._

The Evalscript is currently designed to display Ozone Values in Dobson Units (DU), with values between 140 and 340 DU being stretched over the 0-255 display range. To return the actual Ozone values, please return the variable `ozoneDu`, setting the `sampleType` to `FLOAT32`. For values in cm2/molecule, return the variable `ozoneCol` in your Evalscript.

Note that the script requires Sentinel-2 L1C images to function correctly and will not work with L2A products. For further information about the areas of application and limitations of the algorithm, please refer to Kokhanovsky et al. 2021.

## Description of representative images

Total Column retrieval from a Sentinel-2 L1C image acquired over Dome C, Antarctica on 8th February 2021. On that date, the Total Ozone Column was uniform over the area. Interestingly, the algorithm not being designed to retrieve values over built-up structures highlights the research station quite well!

![ozone](fig/2021-02-08_ozone.jpg)

## References

The script was based on the analytical equations presented in the following scientific article:

Kokhanovsky, Alexander, Simon Gascoin, Laurent Arnaud, and Ghislain Picard. 2021. "Retrieval of Snow Albedo and Total Ozone Column from Single-View MSI/S-2 Spectral Reflectance Measurements over Antarctica" Remote Sensing 13, no. 21: 4404. https://doi.org/10.3390/rs13214404
