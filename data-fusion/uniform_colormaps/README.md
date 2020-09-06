# PUCK: Perceptually-Uniform Color Map Kit
**A set of visualization utilities that produce beautiful images designed for human perception from single-channel data (NDVI, spectral angle, etc). Generate quality figures that are true to the data.**

SentinelHub custom scripts have limited support for custom colormaps: `colorBlend` and `ColorRampVisualizer`. As a result, many users end up hardcoding their colors. Also, these functions use RGB colors instead of a color gamut designed around human perception. The goal of this project is to create tools for custom script developers to generate useful and perceptually uniform colormaps. It provides visualization classes for users familiar with CIELAB color space and works to correct colors in RGB space to be perceptually uniform. The underlying mathematics is used by many scientific plotting applications, such as `matplotlib`, `bokeh`, `chroma.js`, and others.

# Example Visualizations
[Masked Lena River Delta NDWI (white-blue-black-green `LinearColormap`)](https://tinyurl.com/y6b5hevs)

![lena](images/lena_ndwi.jpg)

[Masked NDVI of Sequim, Washington, USA (white-green `LinearColormap`](https://tinyurl.com/yyt937cj)

![sequim](images/sequim_ndvi.jpg)

[Isoluminant NDVI of Troy, New York, USA (blue-gray-green `IsoluminantColormap`](https://tinyurl.com/y4uhg7t9). Visualized with relief derived from elevation data at the [New York State GIS Clearinghouse](https://gis.ny.gov/).

![ndvi_qgis](images/qgis_isoluminant.JPG)

[Brightness temperature of Hurricane Matthew in October 2016 (blue-white-red `DivergentColormap`)](https://tinyurl.com/y4ybe7te). The classes are sensor-agnostic, so we can use any satellite available for scripting.

![hurricane_matthew](images/hurricane_matthew_temperature.jpg)

# How the Script Works
This script supports 4 flavors of color map in addition to functions that interconvert between the CIELAB, XYZ, and RGB color spaces in pure JavaScript. In each case, the user simply provides two arrays, one for anchor colors and one for data values, and the class will generate the correct color for data values calculated by the script. For example, to generate a brown-green color map for NDVI values in the range `[0, 1]`, simply use:
```js
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
```
In addition to `LinearColormap`, there is `DivergentColormap`, `IsoluminantColormap`, and the base class `Colormap`. The base class expects colors in CIELAB color space and simply calls `colorBlend` to get in-between colors before converting back to RGB space. All other classes expect colors in RGB space, map them onto CIELAB space, and apply a lightness correction specific to the class. The corrections for each class are:
 - `LinearColormap`: Lightness monotonically changes across the whole map. Your standard color ramp.
 - `DivergentColormap`: Lightness reaches a minimum or maximum at the center of the color map and monotonically changes towards the edges of the map. Each edge has the same lightness. Useful for showing how values are distributed around a reference value. However, problems can arise if data features straddle the lightness peak.
 - `IsoluminantColormap`: Lightness is the same across the whole map. Not very pretty on its own, but useful when one wants to visualize data on top of relief shading.

## Applicability
This script is useful for any continuous, single-channel data product.

## Known Issues
The script is a visualization utility, so false detection issues are not applicable. However, since by definition not all combinations of CIELAB coordinates map onto valid RGB values, the lightness correction may be invalidated by especially poor RGB anchors. For this reason, it is usually best to implement an already-proven color map instead of implementing one from scratch. Also, having too many lines of code can break link sharing. To share your code with others, delete the classes you are not using so the code fits in a URL.

## Technical Details

### Color Spaces
RGB color space is defined in terms of the relative brightness of red, green, and blue color used in screens. XYZ color space was specified by the International Commission on Illumination in 1931 following a series of perception experiments with human observers (Smith and Guild 1931). CIELAB color space is the successor to XYZ space, defined in 1976 with the goal of being more perceptually uniform (Judd, CIE Publication No. 015). CIELAB, also known as L\*a\*b, is defined by three parameters: lightness ($L$), red-green ($a$), and blue-yellow ($b$). Conversion directly to and from RGB and CIELAB space in one step is generally not used. The script converts from RGB to XYZ and then to CIELAB using a D65, secondary-observer reference white. Mathematics of the conversion are available in pseudocode [here](https://www.easyrgb.com/en/math.php). 

### Color Maps
Good visualizations depend on good color maps. However, it is very easy to unintentionally create data artifacts or obscure trends unless care is taken. For example, many have written about the problems with rainbow color maps (e.g. Borland and Taylor 2007, see references). Yet, rainbows remain prevalent in scientific publications (and occasionally on [SentinelHub](https://tinyurl.com/y34rkknf)).

Issues with color maps generally stem from the fact that humans perceive differences in color lightness better than differences in color hue or saturation. In addition, the colors used in a map should have intuitive meaning. Returning to Roy G. Biv, do you instantly understand yellow-green to be between orange and violet? Is it closer to orange or violet? For most people, the relationship is difficult to understand quantitatively.

To make your own color maps there are many battle-tested maps available at [SciVisColor](sciviscolor.org). If the distribution of data is unknown, it is best to use a perceptually-uniform color map with a strong overall lightness gradient. SciVisColor recommends a [blue-orange divergent map](https://sciviscolor.org/home/colormaps/contrasting-divergent-colormaps/) for general use.

# References and Further Reading


Borland, David, and M. Russell Taylor. “Rainbow Color Map (Still) Considered Harmful.” IEEE Computer Graphics and Applications, vol. 27, no. 2, Apr. 2007, pp. 14–17. PubMed, doi:10.1109/mcg.2007.323435.

CIE Publication No. 015: Colorimetry. Central Bureau of the CIE, Vienna (2004)

Cleveland, William S., and McGill, Robert. “Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods.” Journal of the American Statistical Association, vol. 79, no. 387, [American Statistical Association, Taylor & Francis, Ltd.], 1984, pp. 531–54. JSTOR, JSTOR, doi:10.2307/2288400.

Judd, Deane B., et al. “Spectral Distribution of Typical Daylight as a Function of Correlated Color Temperature.” JOSA, vol. 54, no. 8, Optical Society of America, Aug. 1964, pp. 1031–40. www.osapublishing.org, doi:10.1364/JOSA.54.001031.

Kovesi, Peter. “Good Colour Maps: How to Design Them.” ArXiv:1509.03700 [Cs], Sept. 2015. arXiv.org, http://arxiv.org/abs/1509.03700.

Mason, Betsy. “Why Scientists Need to Be Better at Data Visualization.” Knowable Magazine | Annual Reviews, Annual Reviews, Nov. 2019. www.knowablemagazine.org, doi:10.1146/knowable-110919-1.

Moreland, Kenneth. “Why We Use Bad Color Maps and What You Can Do About It.” Electronic Imaging, vol. 2016, no. 16, Feb. 2016, pp. 1–6. IngentaConnect, doi:10.2352/ISSN.2470-1173.2016.16.HVEI-133.

O’Donoghue, Seán I., et al. “Visualization of Biomedical Data.” Annual Review of Biomedical Data Science, vol. 1, no. 1, 2018, pp. 275–304. Annual Reviews, doi:10.1146/annurev-biodatasci-080917-013424.

Smith, T., and J. Guild. “The C.I.E. Colorimetric Standards and Their Use.” Transactions of the Optical Society, vol. 33, no. 3, IOP Publishing, Jan. 1931, pp. 73–134. Institute of Physics, doi:10.1088/1475-4878/33/3/301.
