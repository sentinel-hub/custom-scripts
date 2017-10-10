# Normalized difference vegetation index with uncertainty

## Evaluate and visualize
 - [Sentinel Playground](http://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=40.39519549132737&lng=-3.739471435546875&zoom=11&preset=CUSTOM&layers=B04,B03,B02&maxcc=20&gain=1&gamma=1&time=2015-01-01%7C2017-10-10&atmFilter=&showDates=false&evalscript=ZnVuY3Rpb24gY2xhbXAgKGEpIHsKICByZXR1cm4gYTwwID8gMCA6IGEgPiAxID8gMSA6IGE7Cn0KZnVuY3Rpb24gc2lnTkRWSSAoYjQsIHM0LCBiOCwgczgpIHsKICB2YXIgc3VtID0gYjggKyBiNDsKICB2YXIgbmR2aSA9IChiOCAtIGI0KS9zdW07CiAgdmFyIHNfbmR2aSA9IDIgLyAoc3VtKnN1bSkgKgogICAgICBNYXRoLnNxcnQoYjgqYjgqczQqczQrYjQqYjQqczgqczgpOwogIHZhciBkYXJrbmVzcyA9IGNsYW1wKDEtMipzX25kdmkpOwogIHJldHVybiBbCiAgICAwLjkqY2xhbXAoMS1uZHZpKSpkYXJrbmVzcywKICAgIDAuOCpjbGFtcChuZHZpKSpkYXJrbmVzcywKICAgIDAuMSpkYXJrbmVzc107Cn0KcmV0dXJuIHNpZ05EVkkoQjA0LCAwLjAyLCBCMDgsIDAuMDMpOw%3D%3D)
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=40.4167754&lng=-3.7037901999999576&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-09&preset=CUSTOM&layers=B01,B02,B03&evalscript=ZnVuY3Rpb24gY2xhbXAgKGEpIHsKICByZXR1cm4gYTwwID8gMCA6IGEgPiAxID8gMSA6IGE7Cn0KZnVuY3Rpb24gc2lnTkRWSSAoYjQsIHM0LCBiOCwgczgpIHsKICB2YXIgc3VtID0gYjggKyBiNDsKICB2YXIgbmR2aSA9IChiOCAtIGI0KS9zdW07CiAgdmFyIHNfbmR2aSA9IDIgLyAoc3VtKnN1bSkgKgogICAgICBNYXRoLnNxcnQoYjgqYjgqczQqczQrYjQqYjQqczgqczgpOwogIHZhciBkYXJrbmVzcyA9IGNsYW1wKDEtMipzX25kdmkpOwogIHJldHVybiBbCiAgICAwLjkqY2xhbXAoMS1uZHZpKSpkYXJrbmVzcywKICAgIDAuOCpjbGFtcChuZHZpKSpkYXJrbmVzcywKICAgIDAuMSpkYXJrbmVzc107Cn0KcmV0dXJuIHNpZ05EVkkoQjA0LCAwLjAyLCBCMDgsIDAuMDMpOw%3D%3D)

## Basic information
 - Bands used by the algorithm: B4, B8
 - Bands used by the script: B2, B3, B4, B8

## General description

This script allows you to visually interpret how the normalized density vegetation index (NDVI) [[1]](#ref1) is affected by the uncertainties in detector reflectances of the L1C products.

Since NDVI is defined as a ratio of difference over sum of bands 8 and 4 (near infrared and red):
```math
NDVI := \mathtt{Index}(B8,B4) = \frac{B8-B4}{B8+B4}.
```
the uncertainty propagation [[3]](#ref3) gives us the uncertainty of the index itself as
```math
\Delta_{NDVI} := \frac{\sqrt{B8^2 \Delta_{B4}^2 + B4^2 \Delta_{B8}^2 - 2B4 B8 \Delta_{B4B8}}}{(B8+B4)^2}.
```

where $`\Delta_{B4}`$ and $`\Delta_{B8}`$ are uncertainties of red and near infrared bands respectively (reported by ESA to be 0.02 and 0.03). We left out the mixed part $`\Delta_{B4B8}`$ as if the two uncertainties were not correlated.

The script encodes the uncertainty with darkness, as can be seen in following figure [[2]](#ref2)  
![Color map of the NDVI uncertainty script from [2][1]](fig/cmap.jpg)

## References
<a name="ref1"></a>[1] Wikipedia, [Normalized Difference Vegetation Index
](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index). Accessed on October 4th 2017.   
<a name="ref2"></a>[2] Sentinel-Hub, [Ad hoc testing of algorithms globally](http://sentinel-hub.com/blog/ad-hoc-testing-algorithms-globally). Accessed October 10th 2017.   
<a name="ref3"></a>[3] Wikipedia, [Propagation of uncertainty](https://en.wikipedia.org/wiki/Propagation_of_uncertainty). Accessed October 10th 2017.
