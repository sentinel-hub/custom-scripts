//https://forum.sentinel-hub.com/t/temporal-analysis-burned-area/83/6
//script designed by fcbasson and visually improved by pierre.markusse

//script takes two pre-defined dates as an input (in filterScenes) and calculates changes of normalised burn ratio index.

//example is here: https://apps.sentinel-hub.com/sentinel-playground-temporal//?source=S2&lat=-33.99119576995598&lng=23.16793441772461&zoom=12&preset=CUSTOM&layers=B04,B03,B02&maxcc=100&gain=1.0&temporal=true&gamma=1.0&time=2015-01-01%7C2017-07-03&atmFilter=&showDates=false&evalscript=ZnVuY3Rpb24gc2V0dXAgKGRzcykgewogIC8vIGdldCBhbGwgYmFuZHMgZm9yIGRpc3BsYXkgYW5kIGFuYWx5c2lzCiAgc2V0SW5wdXRDb21wb25lbnRzKFtkc3MuQjAyLGRzcy5CMDMsZHNzLkIwNCxkc3MuQjA1LGRzcy5CMDgsZHNzLkIxMl0pOwogIC8vIHJldHVybiBhcyBSR0IKICBzZXRPdXRwdXRDb21wb25lbnRDb3VudCgzKTsKfQoKZnVuY3Rpb24gc3RyZXRjaCh2YWwsIG1pbiwgbWF4KSB7cmV0dXJuICh2YWwgLSBtaW4pIC8gKG1heCAtIG1pbik7fQoKZnVuY3Rpb24gZmlsdGVyU2NlbmVzIChzY2VuZXMsIGlucHV0TWV0YWRhdGEpIHsgIApyZXR1cm4gc2NlbmVzLmZpbHRlcihmdW5jdGlvbiAoc2NlbmUpIHsKLy8gc2V0IGRhdGVzIGZvciBwcmUtYW5kLXBvc3QgZmlyZSBhbmFseXNpcwp2YXIgYWxsb3dlZERhdGVzID0gWyIyMDE3LTA1LTE1IiwiMjAxNy0wNi0yNCJdOyAvLyBLbnlzbmEgZmlyZXMKLy8gZm9ybWF0IHNjZW5lIGRhdGUgdGltZXN0YW1wIHRvIG1hdGNoIGFsbG93ZWQgZGF0ZXMgCnZhciBzY2VuZURhdGVTdHIgPSBkYXRlZm9ybWF0KHNjZW5lLmRhdGUpOwppZiAoYWxsb3dlZERhdGVzLmluZGV4T2Yoc2NlbmVEYXRlU3RyKSE9IC0xKSByZXR1cm4gdHJ1ZTsKZWxzZSByZXR1cm4gZmFsc2U7CiAgfSk7Cn0KCi8vIE5vcm1hbGl6ZWQgQnVybiBSYXRpb24gY2FsY3VsYXRpb24KZnVuY3Rpb24gY2FsY05CUihzYW1wbGUpIHsKICB2YXIgZGVub20gPSBzYW1wbGUuQjA4K3NhbXBsZS5CMTI7CiAgdmFyIG5icnZhbCA9ICgoZGVub20hPTApID8gKHNhbXBsZS5CMDgtc2FtcGxlLkIxMikgLyBkZW5vbSA6IDAuMCk7CiAgcmV0dXJuIG5icnZhbDsKfQoKZnVuY3Rpb24gZGF0ZWZvcm1hdChkKXsgIAogIHZhciBkZCA9IGQuZ2V0RGF0ZSgpOwogIHZhciBtbSA9IGQuZ2V0TW9udGgoKSsxOwogIHZhciB5eXl5ID0gZC5nZXRGdWxsWWVhcigpOwogIGlmKGRkPDEwKXtkZD0nMCcrZGR9CiAgaWYobW08MTApe21tPScwJyttbX0KICB2YXIgaXNvZGF0ZSA9IHl5eXkrJy0nK21tKyctJytkZDsKICByZXR1cm4gaXNvZGF0ZTsKfQoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzLHNjZW5lcykgeyAgCiAgdmFyIG5icnByZSA9IDA7CiAgdmFyIG5icnBvc3QgPSAwOyAgCiAgCiAgLy8gZ2V0IHByZS1maXJlIGltYWdlCiAgbmJycHJlID0gY2FsY05CUihzYW1wbGVzWzFdKTsKICAvLyBnZXQgcG9zdC1maXJlIGltYWdlCiAgbmJycG9zdCA9IGNhbGNOQlIoc2FtcGxlc1swXSk7ICAKICAvLyBnZXQgZGlmZmVyZW5jZSAKICB2YXIgZG5iciA9IG5icnByZSAtIG5icnBvc3Q7CiAgLy8gc2V0IG91dHB1dCBkaXNwbGF5IGxheWVycwogIHZhciBzdHJldGNoTWluID0gMC4wNTsKICB2YXIgc3RyZXRjaE1heCA9IDEuMDA7CiAgdmFyIE5hdHVyYWxDb2xvcnMgPSBbc3RyZXRjaCgyLjggKiBzYW1wbGVzWzBdLkIwNCArIDAuMSAqIHNhbXBsZXNbMF0uQjA1LCBzdHJldGNoTWluLCBzdHJldGNoTWF4KSwgc3RyZXRjaCgyLjggKiBzYW1wbGVzWzBdLkIwMyArIDAuMTUgKiBzYW1wbGVzWzBdLkIwOCwgc3RyZXRjaE1pbiwgc3RyZXRjaE1heCksIHN0cmV0Y2goMi44ICogc2FtcGxlc1swXS5CMDIsIHN0cmV0Y2hNaW4sIHN0cmV0Y2hNYXgpXTsgIAogIHZhciBidXJuTW9kZXJhdGUgPSBbc3RyZXRjaCgyLjggKiBzYW1wbGVzWzBdLkIwNCArIDAuMSAqIHNhbXBsZXNbMF0uQjA1LCBzdHJldGNoTWluLCBzdHJldGNoTWF4KSswLjUsIHN0cmV0Y2goMi44ICogc2FtcGxlc1swXS5CMDMgKyAwLjE1ICogc2FtcGxlc1swXS5CMDgsIHN0cmV0Y2hNaW4sIHN0cmV0Y2hNYXgpKzAuNSwgc3RyZXRjaCgyLjggKiBzYW1wbGVzWzBdLkIwMiwgc3RyZXRjaE1pbiwgc3RyZXRjaE1heCldOyAgCiAgdmFyIGJ1cm5TZXZlcmUgPSBbc3RyZXRjaCgyLjggKiBzYW1wbGVzWzBdLkIwNCArIDAuMSAqIHNhbXBsZXNbMF0uQjA1LCBzdHJldGNoTWluLCBzdHJldGNoTWF4KSswLjUsIHN0cmV0Y2goMi44ICogc2FtcGxlc1swXS5CMDMgKyAwLjE1ICogc2FtcGxlc1swXS5CMDgsIHN0cmV0Y2hNaW4sIHN0cmV0Y2hNYXgpLCBzdHJldGNoKDIuOCAqIHNhbXBsZXNbMF0uQjAyLCBzdHJldGNoTWluLCBzdHJldGNoTWF4KV07CiAgcmV0dXJuIChkbmJyIDwgMC4yNyA%2FCiAgTmF0dXJhbENvbG9ycyA6IChkbmJyIDwgMC42NiA%2FCiAgYnVybk1vZGVyYXRlIDogYnVyblNldmVyZSkKICApOwogIAp9

function setup (dss) {
  // get all bands for display and analysis
  setInputComponents([dss.B02,dss.B03,dss.B04,dss.B05,dss.B08,dss.B12]);
  // return as RGB
  setOutputComponentCount(3);
}

function stretch(val, min, max) {return (val - min) / (max - min);}

function filterScenes (scenes, inputMetadata) {  
return scenes.filter(function (scene) {
// set dates for pre-and-post fire analysis
var allowedDates = ["2017-05-15","2017-06-24"]; // Knysna fires
// format scene date timestamp to match allowed dates 
var sceneDateStr = dateformat(scene.date);
if (allowedDates.indexOf(sceneDateStr)!= -1) return true;
else return false;
  });
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
