//VERSION=3
// This script visualises Corine Land Cover Accounting Layers
function setup() {
  return {
    input: ["CLC_ACC", "dataMask"],
    output: {bands: 4}
        }
                  }

const map = [
    [111, 0xe6004d],  //111 - Continuous urban fabric
    [112, 0xff0000],  //112 - Discontinuous urban fabric
    [121, 0xcc4df2],  //121 - Industrial or commercial units
    [122, 0xcc0000],  //122 - Road and rail networks and associated land
    [123, 0xe6cccc],  //123 - Port areas
    [124, 0xe6cce6],  //124 - Airports
    [131, 0xa600cc],  //131 - Mineral extraction sites
    [132, 0xa64d00],  //132 - Dump sites
    [133, 0xff4dff],  //133 - Construction sites
    [141, 0xffa6ff], //141 - Green urban areas
    [142, 0xffe6ff], //142 - Sport and leisure facilities
    [211, 0xffffa8], //211 - Non-irrigated arable land
    [212, 0xffff00], //212 - Permanently irrigated land
    [213, 0xe6e600], //213 - Rice fields
    [221, 0xe68000], //221 - Vineyards
    [222, 0xf2a64d], //222 - Fruit trees and berry plantations
    [223, 0xe6a600], //223 - Olive groves
    [231, 0xe6e64d], //231 - Pastures
    [241, 0xffe6a6], //241 - Annual crops associated with permanent crops
    [242, 0xffe64d], //242 - Complex cultivation patterns
    [243, 0xe6cc4d], //243 - Land principally occupied by agriculture with significant areas of natural vegetation
    [244, 0xf2cca6], //244 - Agro-forestry areas
    [311, 0x80ff00], //311 - Broad-leaved forest
    [312, 0x00a600], //312 - Coniferous forest
    [313, 0x4dff00], //313 - Mixed forest
    [321, 0xccf24d], //321 - Natural grasslands
    [322, 0xa6ff80], //322 - Moors and heathland
    [323, 0xa6e64d], //323 - Sclerophyllous vegetation
    [324, 0xa6f200], //324 - Transitional woodland-shrub
    [331, 0xe6e6e6], //331 - Beaches - dunes - sands
    [332, 0xcccccc], //332 - Bare rocks
    [333, 0xccffcc], //333 - Sparsely vegetated areas
    [334, 0x000000], //334 - Burnt areas
    [335, 0xa6e6cc], //335 - Glaciers and perpetual snow
    [411, 0xa6a6ff], //411 - Inland marshes
    [412, 0x4d4dff], //412 - Peat bogs
    [421, 0xccccff], //421 - Salt marshes
    [422, 0xe6e6ff], //422 - Salines
    [423, 0xa6a6e6], //423 - Intertidal flats
    [511, 0x00ccf2], //511 - Water courses
    [512, 0x80f2e6], //512 - Water bodies
    [521, 0x00ffa6], //521 - Coastal lagoons
    [522, 0xa6ffe6], //522 - Estuaries
    [523, 0xe6f2ff], //523 - Sea and ocean
    [999, 0xffffff]  //999 - NODATA
  ];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  return [visualizer.process(sample.CLC_ACC)[0], visualizer.process(sample.CLC_ACC)[1], visualizer.process(sample.CLC_ACC)[2], sample.dataMask];
}
   