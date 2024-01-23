---
title: PUCK - Perceptually-Uniform Color Map Kit Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/puck/
nav_exclude: true
examples:
- zoom: '10'
  lat: '73.38827'
  lng: '126.87286'
  datasetId: S2L1C
  fromTime: '2019-06-10T00:00:00.000Z'
  toTime: '2019-06-10T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKCi8qClBlcmNlcHR1YWxseS1Vbmlmb3JtIENvbG9ybWFwIEtpdAphdXRob3I6IEtlZW5hbiBHYW56IChnYW56ayBhdCBycGkgZG90IGVkdSkKU2VwdGVtYmVyIDIwMjAKKi8KCi8qClJlZmVyZW5jZSB3aGl0ZSB2YWx1ZXMgZm9yIEQ2NSBpbGx1bWluYW50LApzZWNvbmRhcnkgb2JzZXJ2ZXIuCiovCnZhciBSRUZfWCA9IDk1LjA0ODkKdmFyIFJFRl9ZID0gMTAwLjAKdmFyIFJFRl9aID0gMTA4Ljg4NDAKCmZ1bmN0aW9uIHBlcmNlbnRfYmV0d2VlbihtaW4sIG1heCwgeCl7CiAgcmV0dXJuICh4IC0gbWluKSAvIChtYXggLSBtaW4pCn0KCmZ1bmN0aW9uIGNsaXAobWluLCBtYXgsIHgpIHsKICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHgpKQp9CgpmdW5jdGlvbiByZ2IybGFiKHJnYikgewogIC8qCiAgQ29udmVydCByZ2IgY29vcmRpbmF0ZXMgdG8gQ0lFTEFCIGNvb3JkaW5hdGVzIHZpYSBYWVouIAogIEV4cGVjdHMgbm9ybWFsaXplZCBSR0IgdmFsdWVzLgoKICBBcml0aG1ldGljIGZyb20gZWFzeXJnYi5jb20KICAqLwogIGxldCBbciwgZywgYl0gPSByZ2IKCiAgZnVuY3Rpb24gdG9fbGluZWFyKHZhbCkgewogICAgaWYgKHZhbCA+IDAuMDQwNDUpCiAgICAgIHJldHVybiBNYXRoLnBvdygodmFsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkKICAgIGVsc2UKICAgICAgcmV0dXJuIHZhbCAvIDEyLjkyCiAgfQoKICBsZXQgcl9saW4gPSB0b19saW5lYXIocikgKiAxMDAKICBsZXQgZ19saW4gPSB0b19saW5lYXIoZykgKiAxMDAKICBsZXQgYl9saW4gPSB0b19saW5lYXIoYikgKiAxMDAKCiAgbGV0IHggPSByX2xpbiAqIDAuNDEyNCArIGdfbGluICogMC4zNTc2ICsgYl9saW4gKiAwLjE4MDUKICBsZXQgeSA9IHJfbGluICogMC4yMTI2ICsgZ19saW4gKiAwLjcxNTIgKyBiX2xpbiAqIDAuMDcyMgogIGxldCB6ID0gcl9saW4gKiAwLjAxOTMgKyBnX2xpbiAqIDAuMTE5MiArIGJfbGluICogMC45NTA1CgogIGxldCB4X3N0ZCA9IHggLyBSRUZfWAogIGxldCB5X3N0ZCA9IHkgLyBSRUZfWQogIGxldCB6X3N0ZCA9IHogLyBSRUZfWgoKICBmdW5jdGlvbiBzdGRfcHJlcCh2YWwpIHsKICAgIGlmICh2YWwgPiAwLjAwODg1NikKICAgICAgcmV0dXJuIE1hdGgucG93KHZhbCwgMS4wIC8gMy4wKQogICAgZWxzZQogICAgICByZXR1cm4gdmFsICogNy43ODcgKyAoMTYuMCAvIDExNi4wKQogIH0KICBsZXQgTCA9IDExNi4wICogKHN0ZF9wcmVwKHlfc3RkKSAtIDE2LjAgLyAxMTYuMCkKICBsZXQgYSA9IDUwMC4wICogKHN0ZF9wcmVwKHhfc3RkKSAtIHN0ZF9wcmVwKHlfc3RkKSkKICBiID0gMjAwLjAgKiAoc3RkX3ByZXAoeV9zdGQpIC0gc3RkX3ByZXAoel9zdGQpKQoKICByZXR1cm4gW0wsIGEsIGJdCn0KCmZ1bmN0aW9uIGxhYjJyZ2IoTGFiKSB7CiAgLyoKICBDb252ZXJ0IENJRUxBQiBjb29yZGluYXRlcyB0byBSR0IgY29vcmRpbmF0ZXMuCgogIEFyaXRobWV0aWMgZnJvbSBlYXN5cmdiLmNvbQogICovCiAgbGV0IFtMLCBhLCBiXSA9IExhYgogIGxldCB2YXJfeSA9IChMICsgMTYuMCkgLyAxMTYuMAogIGxldCB2YXJfeCA9IChhIC8gNTAwLjApICsgdmFyX3kKICBsZXQgdmFyX3ogPSB2YXJfeSAtIChiIC8gMjAwLjApCgogIGZ1bmN0aW9uIHVuZG9fc3RkX3ByZXAodmFsKSB7CiAgICBpZiAoTWF0aC5wb3codmFsLCAzLjApID4gMC4wMDg4NTYpCiAgICAgIHJldHVybiBNYXRoLnBvdyh2YWwsIDMuMCkKICAgIGVsc2UKICAgICAgcmV0dXJuICh2YWwgLSAoMTYuMCAvIDExNi4wKSkgLyA3Ljc4NwogIH0KICB2YXJfeSA9IHVuZG9fc3RkX3ByZXAodmFyX3kpCiAgdmFyX3ggPSB1bmRvX3N0ZF9wcmVwKHZhcl94KQogIHZhcl96ID0gdW5kb19zdGRfcHJlcCh2YXJfeikKCiAgbGV0IHggPSB2YXJfeCAqIFJFRl9YIC8gMTAwCiAgbGV0IHkgPSB2YXJfeSAqIFJFRl9ZIC8gMTAwCiAgbGV0IHogPSB2YXJfeiAqIFJFRl9aIC8gMTAwCgogIGxldCB2YXJfciA9IHggKiAzLjI0MDYgKyB5ICogLTEuNTM3MiArIHogKiAtMC40OTg2CiAgbGV0IHZhcl9nID0geCAqIC0wLjk2ODkgKyB5ICogMS44NzU4ICsgeiAqIDAuMDQxNQogIGxldCB2YXJfYiA9IHggKiAwLjA1NTcgKyB5ICogLTAuMjA0MCArIHogKiAxLjA1NzAKCiAgZnVuY3Rpb24gdW5kb19saW5lYXIodmFsKSB7CiAgICBpZiAodmFsID4gMC4wMDMxMzA4KQogICAgICByZXR1cm4gMS4wNTUgKiBNYXRoLnBvdyh2YWwsICgxLjAgLyAyLjQpKSAtIDAuMDU1CiAgICBlbHNlCiAgICAgIHJldHVybiB2YWwgKiAxMi45MgogIH0KCiAgbGV0IHIgPSBNYXRoLm1heCh1bmRvX2xpbmVhcih2YXJfciksIDApCiAgbGV0IGcgPSBNYXRoLm1heCh1bmRvX2xpbmVhcih2YXJfZyksIDApCiAgYiA9IE1hdGgubWF4KHVuZG9fbGluZWFyKHZhcl9iKSwgMCkKCiAgLy8gbWFwcGluZyBpc24ndCBwZXJmZWN0LCBjb25zdHJhaW4gdG8gWzAsIDFdCiAgcmV0dXJuIFtjbGlwKDAsIDEsIHIpLCBjbGlwKDAsIDEsIGcpLCBjbGlwKDAsIDEsIGIpXQp9CgpjbGFzcyBDb2xvcm1hcCB7CiAgLyoKICBCYXNlIGNsYXNzIGZvciBtYWtpbmcgcGVyY2VwdHVhbGx5IHVuaWZvcm0gY29sb3IgbWFwcy4gVXNpbmcgdGhpcyBjbGFzcyBvbiBpdHMgb3duCiAgc2ltcGx5IG1hcHMgUkdCIGNvb3JkaW5hdGVzIHRvIExBQiBzcGFjZSBhbmQgbGluZWFybHkgaW50ZXJwb2xhdGVzIGluYmV0d2VlbiB2YWx1ZXMuCgogIFVzZSBTZXF1ZW50aWFsQ29sb3JNYXAsIERpdmVyZ2VudENvbG9yTWFwLCBldGMuIGZvciBtb3JlIHNwZWNpZmljIHVzZSBjYXNlcy4KICAqLwogIGNvbnN0cnVjdG9yKGNvbG9yX2FuY2hvcnMsIGRhdGFfYW5jaG9ycywgcmVtYXA9dHJ1ZSwgdW5pZm9ybT1mYWxzZSkgewogICAgaWYgKGNvbG9yX2FuY2hvcnMubGVuZ3RoIDwgMSkKICAgICAgdGhyb3cgIkNvbG9yTWFwIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBjb2xvci4iCiAgICBpZiAoY29sb3JfYW5jaG9ycy5sZW5ndGggIT0gZGF0YV9hbmNob3JzLmxlbmd0aCkKICAgICAgdGhyb3cgIkNvbG9yIGFuZCBkYXRhIGFuY2hvcnMgbXVzdCBiZSBvZiBzYW1lIGxlbmd0aC4iCiAgICAvLyB2ZXJpZnkgdGhhdCB0aGUgZGF0YSBhcnJheSBpcyBzb3J0ZWQgbG93IHRvIGhpZ2gKICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YV9hbmNob3JzLmxlbmd0aDsgaSsrKSB7CiAgICAgIGlmIChkYXRhX2FuY2hvcnNbaV0gPCBkYXRhX2FuY2hvcnNbaSAtIDFdKQogICAgICAgIHRocm93ICJEYXRhIGFuY2hvcnMgYXJyYXkgbXVzdCBiZSBzb3J0ZWQuIgogICAgfQogICAgLy8gbWFwIGluY29taW5nIHJnYiBjb29yZGluYXRlcyBpbnRvIExBQiBzcGFjZQogICAgdGhpcy5kYXRhX2FuY2hvcnMgPSBkYXRhX2FuY2hvcnMKICAgIGlmIChyZW1hcCkgdGhpcy5jb2xvcl9hbmNob3JzID0gY29sb3JfYW5jaG9ycy5tYXAocmdiMmxhYikKICAgIGVsc2UgdGhpcy5jb2xvcl9hbmNob3JzID0gY29sb3JfYW5jaG9ycwogICAgLy8gZG8gdGhlIGxpZ2h0bmVzcyBjb3JyZWN0aW9uLCBpZiBkZXNpcmVkLCBhbmQgdGhlbiBjaGVjawogICAgLy8gaWYgdGhlIGNvcnJlY3Rpb24gbW92ZWQgY29sb3JzIG91dHNpZGUgb2YgUkdCIHNwYWNlCiAgICBpZiAodW5pZm9ybSkgewogICAgICB0aGlzLl9saWdodG5lc3NfY29ycmVjdGlvbigpCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xvcl9hbmNob3JzLmxlbmd0aDsgaSsrKXsKICAgICAgICBsZXQgcmdiID0gbGFiMnJnYih0aGlzLmNvbG9yX2FuY2hvcnNbaV0pCiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZ2IubGVuZ3RoOyBqKyspewogICAgICAgICAgaWYgKHJnYltpXSA8IDAgfHwgcmdiW2ldID4gMSkKICAgICAgICAgICAgdGhyb3cgIkFmdGVyIGxpZ2h0bmVzcyBjb3JyZWN0aW9uLCBjb2xvcnMgYXJlIG91dCBvZiBSR0Igc3BhY2UhIgogICAgICAgIH0KICAgICAgfQogICAgfSAKICB9CgogIF9saWdodG5lc3NfY29ycmVjdGlvbigpIHtyZXR1cm59CgogIGdldF9jb2xvcihkYXRhX3ZhbHVlKSB7CiAgICAvLyByZXR1cm4gZWRnZSB2YWx1ZXMgaWYgZGF0YSB2YWx1ZSBpcyBvb2IKICAgIGlmIChkYXRhX3ZhbHVlIDw9IHRoaXMuZGF0YV9hbmNob3JzWzBdKQogICAgICByZXR1cm4gbGFiMnJnYih0aGlzLmNvbG9yX2FuY2hvcnNbMF0pCiAgICBlbHNlIGlmIChkYXRhX3ZhbHVlID49IHRoaXMuZGF0YV9hbmNob3JzW3RoaXMuZGF0YV9hbmNob3JzLmxlbmd0aCAtIDFdKQogICAgICByZXR1cm4gbGFiMnJnYih0aGlzLmNvbG9yX2FuY2hvcnNbdGhpcy5jb2xvcl9hbmNob3JzLmxlbmd0aC0xXSkKCiAgICByZXR1cm4gbGFiMnJnYihjb2xvckJsZW5kKGRhdGFfdmFsdWUsIHRoaXMuZGF0YV9hbmNob3JzLCB0aGlzLmNvbG9yX2FuY2hvcnMpKQogIH0KfQoKY2xhc3MgTGluZWFyQ29sb3JtYXAgZXh0ZW5kcyBDb2xvcm1hcCB7CiAgLyoKICBTaW1wbGUgbGluZWFyIHJhbXAgY29sb3IgbWFwIGNsYXNzLiBTZXQgdW5pZm9ybSB0byB0cnVlCiAgaW4gdGhlIGNvbnN0cnVjdG9yIHRvIGVuZm9yY2UgY29uc3RhbnQgbGlnaHRuZXNzLgogICovCiAgY29uc3RydWN0b3IoY29sb3JfYW5jaG9ycywgZGF0YV9hbmNob3JzLCB1bmlmb3JtPXRydWUpIHsKICAgIHN1cGVyKGNvbG9yX2FuY2hvcnMsIGRhdGFfYW5jaG9ycywgdHJ1ZSwgdW5pZm9ybSkKICB9CgogIF9saWdodG5lc3NfY29ycmVjdGlvbigpIHsKICAgIC8vIGdldCBvdmVyYWxsIGNoYW5nZSBpbiBsaWdodG5lc3MKICAgIGxldCBMMCA9IHRoaXMuY29sb3JfYW5jaG9yc1swXVswXQogICAgbGV0IExwID0gdGhpcy5jb2xvcl9hbmNob3JzW3RoaXMuY29sb3JfYW5jaG9ycy5sZW5ndGgtMV1bMF0KICAgIGxldCBkTCA9IExwIC0gTDAKCiAgICAvLyBtYWtlIHRoZSBsaWdodG5lc3MgdmFsdWVzIG1vbm90b25pY2FsbHkgY2hhbmdlCiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuY29sb3JfYW5jaG9ycy5sZW5ndGggLSAxOyBpKyspIHsKICAgICAgbGV0IHBlcmNlbnRfaW50ZXJ2YWwgPSBwZXJjZW50X2JldHdlZW4oCiAgICAgICAgdGhpcy5kYXRhX2FuY2hvcnNbdGhpcy5kYXRhX2FuY2hvcnMubGVuZ3RoIC0gMV0sCiAgICAgICAgdGhpcy5kYXRhX2FuY2hvcnNbMF0sCiAgICAgICAgdGhpcy5kYXRhX2FuY2hvcnNbaV0KICAgICAgKQogICAgICB0aGlzLmNvbG9yX2FuY2hvcnNbaV1bMF0gPSBMMCArIChkTCAqIHBlcmNlbnRfaW50ZXJ2YWwpCiAgICB9CiAgfQp9OwoKdmFyIG1hcCA9IFsKICBbMTg5LzI1NSwgMjMwLzI1NSwgMjM3LzI1NV0sCiAgWzc4LzI1NSwgMTIxLzI1NSwgMTUzLzI1NV0sCiAgWzAsIDAsIDUwLzI1NV0sCiAgWzE3LzI1NSwgMTUwLzI1NSwgMTQvMjU1XSwKXQoKdmFyIGRhdGEgPSBbLjIsIC41LCAuNywgLjldIAoKdmFyIGNtYXAgPSBuZXcgTGluZWFyQ29sb3JtYXAobWFwLCBkYXRhLCBmYWxzZSk7CgpmdW5jdGlvbiBzZXR1cCgpIHsKICByZXR1cm4gewogICAgaW5wdXQ6IFsiQjAyIiwgIkIwMyIsICJCMDQiLCAiQjA4IiwgImRhdGFNYXNrIl0sCiAgICBvdXRwdXQ6IHsKICAgICAgYmFuZHM6IDMKICAgIH0KICB9Owp9CgpmdW5jdGlvbiB0cnVlQ29sb3Ioc2FtcGxlKXsKICByZXR1cm4gW3NhbXBsZS5CMDQgKiAyLjUsIHNhbXBsZS5CMDMgKiAyLjUsIHNhbXBsZS5CMDIgKiAyLjVdCn0KCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlKSB7CiAgbGV0IG5kd2kgPSAoc2FtcGxlLkIwMyAtIHNhbXBsZS5CMDgpIC8gKHNhbXBsZS5CMDMgKyBzYW1wbGUuQjA4KQogIGlmIChuZHdpID4gMC4yKSB7cmV0dXJuIGNtYXAuZ2V0X2NvbG9yKG5kd2kpfQogIGVsc2Uge3JldHVybiB0cnVlQ29sb3Ioc2FtcGxlKX0KfQ==
---
## General description of the script

A set of visualization utilities that produce beautiful images designed for human perception from single-channel data (NDVI, spectral angle, etc). Generate quality figures that are true to the data.

Good visualizations depend on good color maps. However, it is very easy to unintentionally create data artifacts or obscure trends unless care is taken. For example, many have written about the problems with rainbow color maps (e.g. Borland and Taylor 2007 and Kovesi 2015, see references). Yet, rainbows remain prevalent in scientific publications (and occasionally on [SentinelHub](https://tinyurl.com/y34rkknf)).

SentinelHub custom scripts have limited support for custom color maps: colorBlend and ColorRampVisualizer. As a result, many users end up hardcoding their colors. Also, these functions use RGB colors instead of a color gamut designed around human perception. The goal of this project is to create tools for custom script developers to generate useful and perceptually uniform color maps. It provides visualization classes for users familiar with CIELAB color space and works to correct colors in RGB space to be perceptually uniform. The underlying mathematics is used by many scientific plotting applications, such as matplotlib, bokeh, chroma.js, and others.

## Details of the script

### How the Script Works

This script supports 4 flavors of color map in addition to functions that inter-convert between the CIELAB, XYZ, and RGB color spaces in pure JavaScript. In each case, the user simply provides two arrays, one for anchor colors and one for data values, and the class will generate the correct color for data values calculated by the script. For example, to generate a brown-green color map for NDVI values in the range [0, 1], simply use:

var ndvi_map = [
// https://www.google.com/search?q=rgb+color+picker
[66/255, 50/255, 28/255],
[0, 209/255, 3/255],
]
var data = [0, 1]
var cmap = new LinearColormap(ndvi_map, data);

function setup() {
return {
input: ["B04", "B08", "dataMask"],
output: { bands: 3 }
}
}

function evaluatePixel(sample) {
let ndvi = (sample.B08 - sample.B04) / (sample.B08 + sample.B04)
return cmap.get_color(ndvi)
}

In addition to LinearColormap, there is DivergentColormap, IsoluminantColormap, and the base class Colormap. The base class expects colors in CIELAB color space and simply calls colorBlend to get in-between colors before converting back to RGB space. All other classes expect colors in RGB space, map them onto CIELAB space, and apply a lightness correction specific to the class. The corrections for each class are:

-   LinearColormap: Lightness monotonically changes across the whole map. Your standard color ramp.
-   DivergentColormap: Lightness reaches a minimum or maximum at the center of the color map and monotonically changes towards the edges of the map. Each edge has the same lightness. Useful for showing how values are distributed around a reference value. However, problems can arise if data features straddle the lightness peak.
-   IsoluminantColormap: Lightness is the same across the whole map. Not very pretty on its own, but useful when one wants to visualize data on top of relief shading.

### Applicability

This script is useful for any continuous, single-channel data product.

### Known Issues

The script is a visualization utility, so false detection issues are not applicable. However, since by definition not all combinations of CIELAB coordinates map onto valid RGB values, the lightness correction may be invalidated by especially poor RGB anchors. For this reason, it is usually best to implement an already-proven color map instead of implementing one from scratch. Also, having too many lines of code can break link sharing. To share your code with others, delete the classes you are not using so the code fits in a URL.

### Color Spaces

RGB color space is defined in terms of the relative brightness of red, green, and blue color used in screens. XYZ color space was specified by the International Commission on Illumination in 1931 following a series of perception experiments with human observers (Smith and Guild 1931). CIELAB color space is the successor to XYZ space, defined in 1976 with the goal of being more perceptually uniform (Judd, CIE Publication No. 015). CIELAB, also known as L*a*b, is defined by three parameters: lightness (L), red-green (a), and blue-yellow (b). Conversion directly to and from RGB and CIELAB space in one step is generally not used. The script converts from RGB to XYZ and then to CIELAB using a D65, secondary-observer reference white. Mathematics of the conversion are available in pseudocode [here](https://www.easyrgb.com/en/math.php).

### Color Maps

Issues with color maps generally stem from the fact that humans perceive differences in color lightness better than differences in color hue or saturation (Cleveland and McGill 1984). In addition, the colors used in a map should have intuitive meaning. Returning to Roy G. Biv, do you instantly understand yellow-green to be between orange and violet? Is it closer to orange or violet? For most people, the relationship is difficult to understand quantitatively.

To make your own color maps there are many battle-tested maps available at SciVisColor. If the distribution of data is unknown, it is best to use a perceptually-uniform color map with a strong overall lightness gradient. SciVisColor recommends a [blue-orange divergent map](https://sciviscolor.org/colormaps/divergent/) for general use.

## Author of the script

Keenan Ganz

## Description of representative images

1. Masked NDVI over Sequim, Washington, USA using a white-green Linear Colormap. The town of Sequim has low NDVI values, while Olympic National Park to the south has very dense vegetation.

![The script example 1](fig/sequim_ndvi.jpg)

2. Hurricane Matthew brightness temperature visualized with a blue-white-red Divergent Colormap. Range is 200-300 K.

![The script example 2](fig/hurricane_matthew_temperature.jpg)

3. Masked NDWI over the Lena River delta using a custom two-wave color map; white-blue-black-green. Lightness correction is not used here to allow for rise/fall. Custom data breaks show extent of detail in the data.

![The script example 3](fig/lena_ndwi.jpg)

4. Isoluminant NDVI over Troy, New York, USA overlaid with relief shading. Note that interpretation of terrain features is unhindered by NDVI data.

![The script example 4](fig/qgis_isoluminant.jpg)

## References

Not used specifically for defining color mapping, but useful reading for designing color maps:

[1] OíDonoghue, Se·n I., et al. ìVisualization of Biomedical Data.î Annual Review of Biomedical Data Science, vol. 1, no. 1, 2018, pp. 275ñ304. Annual Reviews, doi:10.1146/annurev-biodatasci-080917-013424.

[2] Moreland, Kenneth. ìWhy We Use Bad Color Maps and What You Can Do About It.î Electronic Imaging, vol. 2016, no. 16, Feb. 2016, pp. 1ñ6. IngentaConnect, doi:10.2352/ISSN.2470-1173.2016.16.HVEI-133.

[3] Mason, Betsy. ìWhy Scientists Need to Be Better at Data Visualization.î Knowable Magazine | Annual Reviews, Annual Reviews, Nov. 2019. www.knowablemagazine.org, doi:10.1146/knowable-110919-1.

## Credits

Borland, David, and M. Russell Taylor. ìRainbow Color Map (Still) Considered Harmful.î IEEE Computer Graphics and Applications, vol. 27, no. 2, Apr. 2007, pp. 14ñ17. PubMed, doi:10.1109/mcg.2007.323435.

CIE Publication No. 015: Colorimetry. Central Bureau of the CIE, Vienna (2004)

Cleveland, William S., and McGill, Robert. ìGraphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods.î Journal of the American Statistical Association, vol. 79, no. 387, [American Statistical Association, Taylor & Francis, Ltd.], 1984, pp. 531ñ54. JSTOR, JSTOR, doi:10.2307/2288400.

Judd, Deane B., et al. ìSpectral Distribution of Typical Daylight as a Function of Correlated Color Temperature.î JOSA, vol. 54, no. 8, Optical Society of America, Aug. 1964, pp. 1031ñ40. www.osapublishing.org, doi:10.1364/JOSA.54.001031.

Kovesi, Peter. ìGood Colour Maps: How to Design Them.î ArXiv:1509.03700 [Cs], Sept. 2015. arXiv.org, https://arxiv.org/abs/1509.03700.

Smith, T., and J. Guild. ìThe C.I.E. Colorimetric Standards and Their Use.î Transactions of the Optical Society, vol. 33, no. 3, IOP Publishing, Jan. 1931, pp. 73ñ134. Institute of Physics, doi:10.1088/1475-4878/33/3/301.
