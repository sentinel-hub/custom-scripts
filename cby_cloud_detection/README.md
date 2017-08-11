# Braaten-Cohen-Yang cloud detector

## Basic information
- Bands used by the algorithm: B02, B03
- Bands used by the script: B02, B03, B04
- [Try it in Playground](http://apps.sentinel-hub.com/sentinel-playground/?lat=42.74701217318067&lng=-2.9443359375&zoom=5&preset=CUSTOM&layers=B04,B03,B12&maxcc=50&gain=1.0&gamma=1.0&time=2015-01-01|2017-06-06&cloudCorrection=none&atmFilter=&showDates=false&evalscript=dmFyIGJSYXRpbyA9IChCMDIgLSAwLjE3NSkgLyAoMC4zOSAtIDAuMTc1KTsKdmFyIE5HRFIgPSAoQjAyIC0gQjAzKSAvIChCMDIgKyBCMDMpOwoKZnVuY3Rpb24gY2xpcChhKSB7CiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTsKfQoKaWYgKGJSYXRpbyA%2BIDEpIHsgLy9jbG91ZAogIHZhciB2ID0gMC41KihiUmF0aW8gLSAxKTsKICByZXR1cm4gWzAuNSpjbGlwKEIwNCksIDAuNSpjbGlwKEIwMyksIDAuNSpjbGlwKEIwMikgKyB2XTsKfQoKaWYgKGJSYXRpbyA%2BIDAgJiYgTkdEUj4wKSB7IC8vY2xvdWQKICB2YXIgdiA9IDUgKiBNYXRoLnNxcnQoYlJhdGlvICogTkdEUik7CiAgcmV0dXJuIFswLjUgKiBjbGlwKEIwNCkgKyB2LCAwLjUgKiBjbGlwKEIwMyksIDAuNSAqIGNsaXAoQjAyKV07Cn0KCnJldHVybiBbMipCMDQsIDIqQjAzLCAyKkIwMl07)

## General description
In  [1] Braaten, Cohen, and Yang describe a very simple cloud detection algorithm. The whole cloud detection is a simple threshold-based test:
```math
(B02 > 0.175 \land \mathtt{NDGR} > 0) \lor B02 > 0.39
```
where
```math
\mathtt{NDGR} := \mathtt{Index}(B02, B03) = \frac{B02 - B03}{B02 + B03}
```

One can think of this formula as describing a subspace (of the space of Sentinel-2 responses) that contains most of the clouds. The same thing could be written more concisely - the NDGR threshold is really just $`B02>B03`$.

## Assessment of quality

On the Hollstein data set this algorithm achieves 73% classification accuracy; most of the error comes from detecting snow as cloud and failing to detect thin clouds. The corresponding confusion matrix (entries along the left column are taken from Hollstein data, so 8% means that from among all pixels in the train set there are 8% that are clouds but weren't detected):
```
         cloud                    Ncloud
cloud    1142085  (20%)         460329 (8%)
Ncloud    1027308 (18%)        3017989 (53%)
```

However, this algorithm doesn't detect thin clouds (e.g. transparent and translucent clouds) as well as misclassifies snow for cloud. One way to alleviate this is to use SWIR bands to help differentiate snow from cloud:
```math
B11>\tau\land ((B02 > 0.175 \land \mathtt{NDGR} > 0) \lor B02 > 0.39),
```
where we use $`\tau=0.2`$. (This threshold was chosen arbitrarily; a more educated guess would probably give better results.) With this modification we achieve 88% classification accuracy on the Hollstein data set. Most of the error comes from non-detection of cirrus clouds. [Try it](http://apps.sentinel-hub.com/sentinel-playground/?lat=46.65120371539995&lng=13.809814453125&zoom=13&preset=CUSTOM&layers=B04,B03,B12&maxcc=50&gain=1.0&gamma=1.0&time=2015-01-01|2017-06-06&cloudCorrection=none&atmFilter=&showDates=false&evalscript=dmFyIGJSYXRpbyA9IChCMDIgLSAwLjE3NSkgLyAoMC4zOSAtIDAuMTc1KTsKdmFyIE5HRFIgPSAoQjAyIC0gQjAzKSAvIChCMDIgKyBCMDMpOwoKZnVuY3Rpb24gY2xpcChhKSB7CiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTsKfQoKaWYgKEIxMT4wLjEgJiYgYlJhdGlvID4gMSkgeyAvL2Nsb3VkCiAgdmFyIHYgPSAwLjUqKGJSYXRpbyAtIDEpOwogIHJldHVybiBbMC41KmNsaXAoQjA0KSwgMC41KmNsaXAoQjAzKSwgMC41KmNsaXAoQjAyKSArIHZdOwp9CgppZiAoQjExID4gMC4xICYmIGJSYXRpbyA%2BIDAgJiYgTkdEUj4wKSB7IC8vY2xvdWQKICB2YXIgdiA9IDUgKiBNYXRoLnNxcnQoYlJhdGlvICogTkdEUik7CiAgcmV0dXJuIFswLjUgKiBjbGlwKEIwNCkgKyB2LCAwLjUgKiBjbGlwKEIwMyksIDAuNSAqIGNsaXAoQjAyKV07Cn0KCnJldHVybiBbMipCMDQsIDIqQjAzLCAyKkIwMl07).

The algorithm has a similar problem when invoked on Landsat data (try it [here](http://apps.sentinel-hub.com/sentinel-playground/?baseWmsUrl=services-uswest2.sentinel-hub.com&instanceID=5a32b8f5-a7fd-4dfd-9b76-f9b1b9d650b2&source=S2&lat=35.67737855391475&lng=79.156494140625&zoom=10&preset=CUSTOM&layers=B04,B03,B02&maxcc=20&gain=1&gamma=1&time=2015-01-01|2017-06-07&cloudCorrection=none&atmFilter=&showDates=false&evalscript=Ly9CcmFhdGVuLCBDb2hlbiwgWWFuZyAyMDE1CnZhciBiUmF0aW8gPSAoQjAxIC0gMC4xNzUpIC8gKDAuMzkgLSAwLjE3NSk7CnZhciBOR0RSID0gKEIwMSAtIEIwMikgLyAoQjAxICsgQjAyKTsKCmZ1bmN0aW9uIGNsaXAoYSkgewogIHJldHVybiBhPjAgPyBhPDEgPyBhIDogMSA6IDA7Cn0KCmlmIChiUmF0aW8gPiAxKSB7IC8vY2xvdWQKICB2YXIgdiA9IDAuNSooYlJhdGlvIC0gMSk7CiAgcmV0dXJuIFswLjUqY2xpcChCMDQpLCAwLjUqY2xpcChCMDMpLCAwLjUqY2xpcChCMDIpICsgdl07Cn0KCmlmIChiUmF0aW8gPiAwICYmIE5HRFIgPiAwKSB7IC8vY2xvdWQKICB2YXIgdiA9IDUgKiBNYXRoLnNxcnQoYlJhdGlvICogTkdEUik7CiAgcmV0dXJuIFswLjUgKiBjbGlwKEIwNCkgKyB2LCAwLjUgKiBjbGlwKEIwMyksIDAuNSAqIGNsaXAoQjAyKV07Cn0KCnJldHVybiBbMipCMDQsIDIqQjAzLCAyKkIwMl07)).

## References
- [1] Braaten J, Cohen WB, Yang Z. 2015. _Automated cloud and cloud shadow identification in Landsat MSS imagery for temperate ecosystems_. Remote Sensing of Environment. 169:128-138.