# PUCK - Perceptually-Uniform Color Map Kit Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://tinyurl.com/y6b5hevs){:target="_blank"} 


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
 - LinearColormap: Lightness monotonically changes across the whole map. Your standard color ramp.
 - DivergentColormap: Lightness reaches a minimum or maximum at the center of the color map and monotonically changes towards the edges of the map. Each edge has the same lightness. Useful for showing how values are distributed around a reference value. However, problems can arise if data features straddle the lightness peak.
 - IsoluminantColormap: Lightness is the same across the whole map. Not very pretty on its own, but useful when one wants to visualize data on top of relief shading.

### Applicability
This script is useful for any continuous, single-channel data product.

### Known Issues
The script is a visualization utility, so false detection issues are not applicable. However, since by definition not all combinations of CIELAB coordinates map onto valid RGB values, the lightness correction may be invalidated by especially poor RGB anchors. For this reason, it is usually best to implement an already-proven color map instead of implementing one from scratch. Also, having too many lines of code can break link sharing. To share your code with others, delete the classes you are not using so the code fits in a URL.

### Color Spaces
RGB color space is defined in terms of the relative brightness of red, green, and blue color used in screens. XYZ color space was specified by the International Commission on Illumination in 1931 following a series of perception experiments with human observers (Smith and Guild 1931). CIELAB color space is the successor to XYZ space, defined in 1976 with the goal of being more perceptually uniform (Judd, CIE Publication No. 015). CIELAB, also known as L*a*b, is defined by three parameters: lightness (L), red-green (a), and blue-yellow (b). Conversion directly to and from RGB and CIELAB space in one step is generally not used. The script converts from RGB to XYZ and then to CIELAB using a D65, secondary-observer reference white. Mathematics of the conversion are available in pseudocode [here](https://www.easyrgb.com/en/math.php). 

### Color Maps
Issues with color maps generally stem from the fact that humans perceive differences in color lightness better than differences in color hue or saturation (Cleveland and McGill 1984). In addition, the colors used in a map should have intuitive meaning. Returning to Roy G. Biv, do you instantly understand yellow-green to be between orange and violet? Is it closer to orange or violet? For most people, the relationship is difficult to understand quantitatively.

To make your own color maps there are many battle-tested maps available at SciVisColor. If the distribution of data is unknown, it is best to use a perceptually-uniform color map with a strong overall lightness gradient. SciVisColor recommends a [blue-orange divergent map](https://sciviscolor.org/home/colormaps/contrasting-divergent-colormaps/) for general use.

## Author of the script

Keenan Ganz

## Description of representative images

1) Masked NDVI over Sequim, Washington, USA using a white-green Linear Colormap. The town of Sequim has low NDVI values, while Olympic National Park to the south has very dense vegetation.

![The script example 1](fig/sequim_ndvi.jpg)

2) Hurricane Matthew brightness temperature visualized with a blue-white-red Divergent Colormap. Range is 200-300 K.

![The script example 2](fig/hurricane_matthew_temperature.jpg)

3) Masked NDWI over the Lena River delta using a custom two-wave color map; white-blue-black-green. Lightness correction is not used here to allow for rise/fall. Custom data breaks show extent of detail in the data.

![The script example 3](fig/lena_ndwi.jpg)

4) Isoluminant NDVI over Troy, New York, USA overlaid with relief shading. Note that interpretation of terrain features is unhindered by NDVI data.

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

Kovesi, Peter. ìGood Colour Maps: How to Design Them.î ArXiv:1509.03700 [Cs], Sept. 2015. arXiv.org, http://arxiv.org/abs/1509.03700.

Smith, T., and J. Guild. ìThe C.I.E. Colorimetric Standards and Their Use.î Transactions of the Optical Society, vol. 33, no. 3, IOP Publishing, Jan. 1931, pp. 73ñ134. Institute of Physics, doi:10.1088/1475-4878/33/3/301.