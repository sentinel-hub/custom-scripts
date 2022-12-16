//VERSION=3
//Author: Fernando Rodríguez Brizuela 
//Date: 30/08/2022
//Cordoba, Argentina
//Landsat5 TM L2

var stretchMin = -0.6; // Adjust to maximize visual information.
var stretchMax = 1;

function setup() 
{
  return   {
    input: ["B02","B05","dataMask"],
    output: {bands: 4},
    mosaicking:"ORBIT"
  };
}

function preProcessScenes (collections)
{
  //var allowedDates = ["2003-08-20","2007-08-31","2011-09-27"];  // lmch_1 no clouds
  //var allowedDates = ["2003-12-26","2007-08-31","2011-09-27"];  // lmch_1 with clouds on lake at t1.
  //var allowedDates = ["1990-08-16","1993-09-09","1996-08-16"];  // lmch_2 no clouds
  var allowedDates = ["1990-08-27","2001-08-25","2010-08-18"];  // palcacocha_1 no clouds
  
  collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) 
  {
    var orbitDateFrom = orbit.dateFrom.split("T")[0];
    return allowedDates.includes(orbitDateFrom);
  })
  return collections
}

function calcMNDWI(sample)
{
  MNDWI = index(sample.B02,sample.B05);
  return [MNDWI];
}

function stretch(val,min,max) 
{
  return (val-min)/(max-min);
}

function evaluatePixel(sample) 
{
  MNDWI_t1 = calcMNDWI(sample[2]); 
  MNDWI_t2 = calcMNDWI(sample[1]);
  MNDWI_t3 = calcMNDWI(sample[0]);

  MNDWI_t1 = stretch(MNDWI_t1,stretchMin,stretchMax);
  MNDWI_t2 = stretch(MNDWI_t2,stretchMin,stretchMax);
  MNDWI_t3 = stretch(MNDWI_t3,stretchMin,stretchMax);

  return [MNDWI_t1,MNDWI_t2,MNDWI_t3,sample[0].dataMask*sample[1].dataMask*sample[2].dataMask]; 
}