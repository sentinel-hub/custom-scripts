//VERSION=3 (auto-converted from 1)


//Author of the script: Maryam Salehi 
// Website: https://www.researchgate.net/profile/Maryam_Salehi13


// Date Definition 
//var master_date = "2018-04-20"; var slave_date = "2018-04-24"; // Comacchio, Ferrara, Italy 
//var master_date = "2018-04-20"; var slave_date = "2018-05-06";    
//var master_date = "2018-04-20"; var slave_date = "2018-05-18";    
//var master_date = "2018-04-20"; var slave_date = "2018-05-30";     
//var master_date = "2018-04-20"; var slave_date = "2018-06-17";    
//var master_date = "2018-04-20"; var slave_date = "2018-07-17";   
//var master_date = "2018-04-20"; var slave_date = "2018-08-04"; 

var master_date = "2018-04-20"; var slave_date = "2018-08-22"; 

var master_date = "2018-04-20"; var slave_date = "2018-08-22"; // Comacchio, Ferrara, Italy   

// Selection of polarizations 
function setup() {
  return {
    input: [{
      bands: [
          "VV",
          "VH"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


function filterScenes (scenes) {  
return scenes.filter(function (scene) {
// set dates for master and slave images
var allowedDates = [master_date,slave_date]; 
var sceneDateStr = dateformat(scene.date);
if (allowedDates.indexOf(sceneDateStr)!= -1) return true;
else return false;
  });
}

// Crop Monitoring
function calcB(sample) {
  var outB = (.5*(sample.VV));
  return [outB];
}
function calcG(sample) {
  var outG = (8*(sample.VH));
  return [outG];
}
function calcR(sample) {
  var outR = (1.5*(sample.VV));
  return [outR];
}

function dateformat(d){  
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  var yyyy = d.getFullYear();
  if(dd<10){dd='0'+dd}
  if(mm<10){mm='0'+mm}
  var isodate = yyyy+'-'+mm+'-'+dd;
  return isodate;
}
function evaluatePixel(samples,scenes) {  
  var Rmaster = 0;var Rslave = 0;
  var Gmaster = 0;var Gslave = 0;
  var Bmaster = 0;var Bslave = 0;
  Rmaster = calcR(samples[1]);
  Rslave = calcR(samples[0]);  
  Gmaster = calcG(samples[1]);
  Gslave = calcG(samples[0]);  
  Bmaster = calcB(samples[1]);
  Bslave = calcB(samples[0]);
  Rdif=Rslave-Rmaster;
  Gdif=Gslave-Gmaster;
  Bdif=Bslave-Bmaster;
  return [Rslave,Gdif,Bslave]
}