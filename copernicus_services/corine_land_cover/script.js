//VERSION=3
function setup() {
  return {
    input: ["CLC", "dataMask"],
    output: { 
      bands: 4, 
      sampleType: "AUTO"
    }
  }
}

const map = [
    [1, 0xe6004d],  //111 - Continuous urban fabric
    [2, 0xff0000],  //112 - Discontinuous urban fabric
    [3, 0xcc4df2],  //121 - Industrial or commercial units
    [4, 0xcc0000],  //122 - Road and rail networks and associated land
    [5, 0xe6cccc],  //123 - Port areas
    [6, 0xe6cce6],  //124 - Airports
    [7, 0xa600cc],  //131 - Mineral extraction sites
    [8, 0xa64d00],  //132 - Dump sites
    [9, 0xff4dff],  //133 - Construction sites
    [10, 0xffa6ff], //141 - Green urban areas
    [11, 0xffe6ff], //142 - Sport and leisure facilities
    [12, 0xffffa8], //211 - Non-irrigated arable land
    [13, 0xffff00], //212 - Permanently irrigated land
    [14, 0xe6e600], //213 - Rice fields
    [15, 0xe68000], //221 - Vineyards
    [16, 0xf2a64d], //222 - Fruit trees and berry plantations
    [17, 0xe6a600], //223 - Olive groves
    [18, 0xe6e64d], //231 - Pastures
    [19, 0xffe6a6], //241 - Annual crops associated with permanent crops
    [20, 0xffe64d], //242 - Complex cultivation patterns
    [21, 0xe6cc4d], //243 - Land principally occupied by agriculture with significant areas of natural vegetation
    [22, 0xf2cca6], //244 - Agro-forestry areas
    [23, 0x80ff00], //311 - Broad-leaved forest
    [24, 0x00a600], //312 - Coniferous forest
    [25, 0x4dff00], //313 - Mixed forest
    [26, 0xccf24d], //321 - Natural grasslands
    [27, 0xa6ff80], //322 - Moors and heathland
    [28, 0xa6e64d], //323 - Sclerophyllous vegetation
    [29, 0xa6f200], //324 - Transitional woodland-shrub
    [30, 0xe6e6e6], //331 - Beaches - dunes - sands
    [31, 0xcccccc], //332 - Bare rocks
    [32, 0xccffcc], //333 - Sparsely vegetated areas
    [33, 0x000000], //334 - Burnt areas
    [34, 0xa6e6cc], //335 - Glaciers and perpetual snow
    [35, 0xa6a6ff], //411 - Inland marshes
    [36, 0x4d4dff], //412 - Peat bogs
    [37, 0xccccff], //421 - Salt marshes
    [38, 0xe6e6ff], //422 - Salines
    [39, 0xa6a6e6], //423 - Intertidal flats
    [40, 0x00ccf2], //511 - Water courses
    [41, 0x80f2e6], //512 - Water bodies
    [42, 0x00ffa6], //521 - Coastal lagoons
    [43, 0xa6ffe6], //522 - Estuaries
    [44, 0xe6f2ff], //523 - Sea and ocean
    [48, 0xffffff]  //999 - NODATA
  ];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  return [visualizer.process(sample.CLC)[0], visualizer.process(sample.CLC)[1], visualizer.process(sample.CLC)[2], sample.dataMask];
}
