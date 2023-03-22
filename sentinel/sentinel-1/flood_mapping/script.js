//VERSION=3 (auto-converted from 1)
// Date Definition 
var beforeflood_date = "2019-03-11"; var duringflood_date = "2019-03-23"; // Flood in Aghghala, Iran     
//var beforeflood_date = "2019-01-06"; var duringflood_date = "2019-01-14"; // Flood in Uruguaiana, Rio Grande do Sul, Brazil       
//var beforeflood_date = "2020-01-04"; var duringflood_date = "2020-01-13"; // Flood in southern Iran
 
// Selection of polarization 
function setup() {
  return {
    input: [{
      bands: [
        "VV"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}

function preProcessScenes (collections) {
  var allowedDates = [beforeflood_date,duringflood_date]; // set dates for before-and-during flood analysis
  collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
      var orbitDateFrom = orbit.dateFrom.split("T")[0];
      return allowedDates.includes(orbitDateFrom);
  })
  return collections
}

// Flood mapping
function calcFM(sample) {
  var outvv = sample.VV;
  return [1.5*outvv];
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
  var outbe = 0;
  var outdu = 0;  
  // before-flood image
  outbe = calcFM(samples[1]);
  // during-flood image
  outdu = calcFM(samples[0]);  
  return [outbe,outdu,outdu]
 // ************************************
 // mask creation
 // var dout = outbe - outdu;    
 // return [dout > 0.05 ?  1 : 0]
 // ************************************
}
