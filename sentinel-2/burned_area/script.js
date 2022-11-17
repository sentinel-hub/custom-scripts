//VERSION=3 (auto-converted from 1)

function setup() {
  return {
    input: [{
      bands: [
          "B02",
          "B03",
          "B04",
          "B05",
          "B08",
          "B12"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


function stretch(val, min, max) {return (val - min) / (max - min);}

function preProcessScenes (collections) {
  var allowedDates = ["2017-05-15", "2017-06-24"]; //before and after Knysna fires
  collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
      var orbitDateFrom = orbit.dateFrom.split("T")[0];
      return allowedDates.includes(orbitDateFrom);
  })
  return collections
}

// Normalized Burn Ration calculation
function calcNBR(sample) {
  var denom = sample.B08+sample.B12;
  var nbrval = ((denom!=0) ? (sample.B08-sample.B12) / denom : 0.0);
  return nbrval;
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
  var nbrpre = 0;
  var nbrpost = 0;  
  
  // get pre-fire image
  nbrpre = calcNBR(samples[1]);
  // get post-fire image
  nbrpost = calcNBR(samples[0]);  
  // get difference 
  var dnbr = nbrpre - nbrpost;
  // set output display layers
  var stretchMin = 0.05;
  var stretchMax = 1.00;
  var NaturalColors = [stretch(2.8 * samples[0].B04 + 0.1 * samples[0].B05, stretchMin, stretchMax), stretch(2.8 * samples[0].B03 + 0.15 * samples[0].B08, stretchMin, stretchMax), stretch(2.8 * samples[0].B02, stretchMin, stretchMax)];  
  var burnModerate = [stretch(2.8 * samples[0].B04 + 0.1 * samples[0].B05, stretchMin, stretchMax)+0.5, stretch(2.8 * samples[0].B03 + 0.15 * samples[0].B08, stretchMin, stretchMax)+0.5, stretch(2.8 * samples[0].B02, stretchMin, stretchMax)];  
  var burnSevere = [stretch(2.8 * samples[0].B04 + 0.1 * samples[0].B05, stretchMin, stretchMax)+0.5, stretch(2.8 * samples[0].B03 + 0.15 * samples[0].B08, stretchMin, stretchMax), stretch(2.8 * samples[0].B02, stretchMin, stretchMax)];
  return (dnbr < 0.27 ?
  NaturalColors : (dnbr < 0.66 ?
  burnModerate : burnSevere)
  );
  
}
