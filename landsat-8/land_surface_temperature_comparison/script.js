//VERSION=3
/*
Land Surface Temperature Comparison (LSTC)
Author: Mohor Gartner (https://www.linkedin.com/in/mohor-gartner/)
*/

//// Primary developed on Landsat-8 L1. As the main goal is to know only relative temperature differences between areas in the scene,
//// it can be also used on Landsat-8 L2
//// STARTING OPTIONS
// all data sources names
var dataSourcesNames = ["LOTL1", "LOTL1-1"];

// choose on basis of which band (B10 or B11) LST mapping will be done
// NOTE: Landsat-8-9 L2 does not have band B11!
var band = "B10";

// minimum and maximum values for output colour chart red||blue to white for temperature in C.
// note: if values of compared images are higher than the maxC, this would mean white color in case of red or blue gradient.
//   for better distinction it is recommended to have the value somewhat over the expected maximum
var minC = 0;
var maxC = 60;


////INPUT DATA - FOR BETTER RESULTS, THE DATA SHOULD BE ADJUSTED
// NVDIs for bare soil and NDVIv for full vegetation
// Note: NVDIs for bare soil and NDVIv for full vegetation are needed to be evaluated for every scene. However in the custom script, default values are set regarding:
// https://profhorn.meteor.wisc.edu/wxwise/satmet/lesson3/ndvi.html 
// https://www.researchgate.net/post/Can_anyone_help_me_to_define_a_range_of_NDVI_value_to_extract_bare_soil_pixels_for_Landsat_TM
// NVDIs=0.2, NDVIv=0.8
// other source suggests global values: NVDIs=0.2, NDVIv=0.5; https://www.researchgate.net/publication/296414003_Algorithm_for_Automated_Mapping_of_Land_Surface_Temperature_Using_LANDSAT_8_Satellite_Data
var NDVIs = 0.2;
var NDVIv = 0.8;

// emissivity
var waterE = 0.991;
var soilE = 0.966;
var vegetationE = 0.973;
//var buildingE=0.962;
var C = 0.009; //surface roughness, https://www.researchgate.net/publication/331047755_Land_Surface_Temperature_Retrieval_from_LANDSAT-8_Thermal_Infrared_Sensor_Data_and_Validation_with_Infrared_Thermometer_Camera

//central/mean wavelength in meters, B10 or B11
var bCent = (band == "B10") ? 0.000010895 : 0.000012005;

// rho =h*c/sigma=PlanckC*velocityLight/BoltzmannC
var rho = 0.01438; // m K

// input bands according to users selection "band"
var inputBands = (band == "B10") ? ["B03", "B04", "B05", "B10", "dataMask"] : ["B03", "B04", "B05", "B10", "B11", "dataMask"]

// color gradient red to white
let viz = ColorGradientVisualizer.createRedTemperature(minC, maxC);

function setup() {
  let theInputs = [];
  // create input for all inputs
  for (let i = 0; i < dataSourcesNames.length; i++) {
    theInputs.push({
      datasource: dataSourcesNames[i],
      bands: inputBands
    });
  }

  return {
    input: theInputs,
    output: { bands: 3 },
    mosaicking: Mosaicking.ORBIT
  }
}


//emissivity calc
//https://www.researchgate.net/publication/296414003_Algorithm_for_Automated_Mapping_of_Land_Surface_Temperature_Using_LANDSAT_8_Satellite_Data
//https://www.academia.edu/27239873/Investigating_Land_Surface_Temperature_Changes_Using_Landsat_Data_in_Konya_Turkey
function LSEcalc(NDVI, Pv) {
  var LSE;
  if (NDVI < 0) {
    //water
    LSE = waterE;
  } else if (NDVI < NDVIs) {
    //soil
    LSE = soilE;
  } else if (NDVI > NDVIv) {
    //vegetation
    LSE = vegetationE;
  } else {
    //mixtures of vegetation and soil
    LSE = vegetationE * Pv + soilE * (1 - Pv) + C;
  }
  return LSE;
}

function fastArrayFill(value, nElements) {
  let theArray = new Array(nElements);
  for (let i = 0; i < theArray.length; i++) {
    theArray[i] = value;
  }
  return theArray;
}

// turn red to blue gradient
function redToBlueGradient(redGradient) {
  return [redGradient[2], redGradient[1], redGradient[0]]
}

function evaluatePixel(samples) {
  var numberOfSources = dataSourcesNames.length;
  // values to compare from all inputs
  var allValues = fastArrayFill(-999, numberOfSources);

  for (var iSource = 0; iSource < numberOfSources; iSource++) {
    // starting values max, N for multi-temporal
    var LSTmax = -999;
    var N = samples[dataSourcesNames[iSource]].length;


    // multi-temporal: loop all samples in selected timeline
    for (var i = 0; i < N; i++) {
      //// for LST
      // B10 or B11
      var Bi = (band == "B10") ? samples[dataSourcesNames[iSource]][i].B10 : samples[dataSourcesNames[iSource]][i].B11;
      var B03i = samples[dataSourcesNames[iSource]][i].B03;
      var B04i = samples[dataSourcesNames[iSource]][i].B04;
      var B05i = samples[dataSourcesNames[iSource]][i].B05;
      var dataMask0i = samples[dataSourcesNames[iSource]][i].dataMask;

      // some images have errors, whole area is either B10<173K or B10>65000K. Also errors where B03, B04 and B05 =0; or dataMask already provides this information. Therefore no processing if that happens.
      if ((Bi > 173 && Bi < 65000) && (B03i > 0 && B04i > 0 && B05i > 0) && dataMask0i) {
        // ok image
        //1 Kelvin to C
        var b10BTi = Bi - 273.15;
        //2 NDVI - Normalized Difference vegetation Index
        var NDVIi = (B05i - B04i) / (B05i + B04i);
        //3 PV - proportional vegetation
        var PVi = Math.pow(((NDVIi - NDVIs) / (NDVIv - NDVIs)), 2);
        //4 LSE land surface emmisivity  
        var LSEi = LSEcalc(NDVIi, PVi);
        //5 LST
        var LSTi = (b10BTi / (1 + (((bCent * b10BTi) / rho) * Math.log(LSEi))));

        ////temporary calculation
        //if current i is higher than all previous LSTi
        if (LSTi > LSTmax) { LSTmax = LSTi; }
      }
    }

    // calculated LSTmax to array for all sources
    allValues[iSource] = LSTmax;
  }

  // Primary data source RED gradient color generation based on values LSTmax
  let redGradient = viz.process(allValues[0]);

  // Additional data source BLUE gradient color generation based on its values LSTmax
  // developed in case there would be multiple additional data sources. However, on data rendering of BLUE rendering it is not possible to know from which additional data sources it is generated
  let blueGradients = [];
  for (var iblueGrad = 1; iblueGrad < numberOfSources; iblueGrad++) {
    blueGradients.push(redToBlueGradient(viz.process(allValues[iblueGrad])));
  }


  // get maximum temperature from array with max temps for all sources
  let maxTemp = Math.max(...allValues);
  // get index of that max temp from array, so it is known which source has max temp
  let maxTempIndex = allValues.indexOf(maxTemp);

  // if max temp from PRIMARY DATA SOURCE (0), red gradient, otherwise generate blue gradient for the additional datasource with max temperature.
  return (maxTempIndex == 0) ? redGradient : blueGradients[maxTempIndex - 1];

}
