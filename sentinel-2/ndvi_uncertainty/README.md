# Normalized difference vegetation index with uncertainty

## Evaluate and visualize
 - [Sentinel Playground](http://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=40.39519549132737&lng=-3.739471435546875&zoom=11&preset=CUSTOM&layers=B04,B03,B02&maxcc=20&gain=1&gamma=1&time=2015-01-01%7C2017-10-10&atmFilter=&showDates=false&evalscript=ZnVuY3Rpb24gY2xhbXAgKGEpIHsKICByZXR1cm4gYTwwID8gMCA6IGEgPiAxID8gMSA6IGE7Cn0KZnVuY3Rpb24gc2lnTkRWSSAoYjQsIHM0LCBiOCwgczgpIHsKICB2YXIgc3VtID0gYjggKyBiNDsKICB2YXIgbmR2aSA9IChiOCAtIGI0KS9zdW07CiAgdmFyIHNfbmR2aSA9IDIgLyAoc3VtKnN1bSkgKgogICAgICBNYXRoLnNxcnQoYjgqYjgqczQqczQrYjQqYjQqczgqczgpOwogIHZhciBkYXJrbmVzcyA9IGNsYW1wKDEtMipzX25kdmkpOwogIHJldHVybiBbCiAgICAwLjkqY2xhbXAoMS1uZHZpKSpkYXJrbmVzcywKICAgIDAuOCpjbGFtcChuZHZpKSpkYXJrbmVzcywKICAgIDAuMSpkYXJrbmVzc107Cn0KcmV0dXJuIHNpZ05EVkkoQjA0LCAwLjAyLCBCMDgsIDAuMDMpOw%3D%3D)
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=40.4167754&lng=-3.7037901999999576&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-09&preset=CUSTOM&layers=B01,B02,B03&evalscript=ZnVuY3Rpb24gY2xhbXAgKGEpIHsKICByZXR1cm4gYTwwID8gMCA6IGEgPiAxID8gMSA6IGE7Cn0KZnVuY3Rpb24gc2lnTkRWSSAoYjQsIHM0LCBiOCwgczgpIHsKICB2YXIgc3VtID0gYjggKyBiNDsKICB2YXIgbmR2aSA9IChiOCAtIGI0KS9zdW07CiAgdmFyIHNfbmR2aSA9IDIgLyAoc3VtKnN1bSkgKgogICAgICBNYXRoLnNxcnQoYjgqYjgqczQqczQrYjQqYjQqczgqczgpOwogIHZhciBkYXJrbmVzcyA9IGNsYW1wKDEtMipzX25kdmkpOwogIHJldHVybiBbCiAgICAwLjkqY2xhbXAoMS1uZHZpKSpkYXJrbmVzcywKICAgIDAuOCpjbGFtcChuZHZpKSpkYXJrbmVzcywKICAgIDAuMSpkYXJrbmVzc107Cn0KcmV0dXJuIHNpZ05EVkkoQjA0LCAwLjAyLCBCMDgsIDAuMDMpOw%3D%3D)

## Basic information
 - Bands used by the algorithm: B4, B8
 - Bands used by the script: B2, B3, B4, B8

## General description

The normalized difference vegetation index, abbreviated NDVI, is defined as
```math
NDVI := \mathtt{Index}(B8,B4) = \frac{B8-B4}{B8+B4}.
```

The script takes uncertainty of the NDVI product into account. It is expressed in terms of uncertainties of band measurements (see [2, 3]) which are reported by ESA to be 0.02 for B4 and 0.03 for B8. The script encodes the uncertainty with darkness [2].

Figure below shows the color map used by the script.
![Color map of the NDVI uncertainty script from [2][1]](fig/cmap.jng)

## References
 [1] Wikipedia, [Normalized Difference Vegetation Index
](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index). Accessed on October 4th 2017.
 [2] Sentinel-Hub, [Ad hoc testing of algorithms globally](http://sentinel-hub.com/blog/ad-hoc-testing-algorithms-globally). Accessed October 10th 2017.
 [3] Wikipedia, [Propagation of uncertainty](https://en.wikipedia.org/wiki/Propagation_of_uncertainty). Accessed October 10th 2017.
