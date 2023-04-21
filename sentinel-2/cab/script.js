//VERSION=3 (auto-converted from 2)
var degToRad = Math.PI / 180;

function evaluatePixelOrig(samples) {
  var sample = samples[0];
  var b03_norm = normalize(sample.B03, 0, 0.253061520471542);
  var b04_norm = normalize(sample.B04, 0, 0.290393577911328);
  var b05_norm = normalize(sample.B05, 0, 0.305398915248555);
  var b06_norm = normalize(sample.B06, 0.006637972542253, 0.608900395797889);
  var b07_norm = normalize(sample.B07, 0.013972727018939, 0.753827384322927);
  var b8a_norm = normalize(sample.B8A, 0.026690138082061, 0.782011770669178);
  var b11_norm = normalize(sample.B11, 0.016388074192258, 0.493761397883092);
  var b12_norm = normalize(sample.B12, 0, 0.493025984460231);
  var viewZen_norm = normalize(Math.cos(sample.viewZenithMean * degToRad), 0.918595400582046, 1);
  var sunZen_norm  = normalize(Math.cos(sample.sunZenithAngles * degToRad), 0.342022871159208, 0.936206429175402);
  var relAzim_norm = Math.cos((sample.sunAzimuthAngles - sample.viewAzimuthMean) * degToRad)

  var n1 = neuron1(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n2 = neuron2(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n3 = neuron3(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n4 = neuron4(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n5 = neuron5(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  
  var l2 = layer2(n1, n2, n3, n4, n5);
  
  var cab = denormalize(l2, 0.007426692959872, 873.908222110306);
  return {
    default: [cab / 300]
  }
}

function neuron1(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	  4.242299670155190
	+ 0.400396555256580 * b03_norm
	+ 0.607936279259404 * b04_norm
	+ 0.137468650780226 * b05_norm
	- 2.955866573461640 * b06_norm
	- 3.186746687729570 * b07_norm
	+ 2.206800751246430 * b8a_norm
	- 0.313784336139636 * b11_norm
	+ 0.256063547510639 * b12_norm
	- 0.071613219805105 * viewZen_norm
	+ 0.510113504210111 * sunZen_norm
	+ 0.142813982138661 * relAzim_norm;

  return tansig(sum);
}

function neuron2(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	- 0.259569088225796
	- 0.250781102414872 * b03_norm
	+ 0.439086302920381 * b04_norm
	- 1.160590937522300 * b05_norm
	- 1.861935250269610 * b06_norm
	+ 0.981359868451638 * b07_norm
	+ 1.634230834254840 * b8a_norm
	- 0.872527934645577 * b11_norm
	+ 0.448240475035072 * b12_norm
	+ 0.037078083501217 * viewZen_norm
	+ 0.030044189670404 * sunZen_norm
	+ 0.005956686619403 * relAzim_norm;

  return tansig(sum);
}

function neuron3(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	+ 3.130392627338360
	+ 0.552080132568747 * b03_norm
	- 0.502919673166901 * b04_norm
	+ 6.105041924966230 * b05_norm
	- 1.294386119140800 * b06_norm
	- 1.059956388352800 * b07_norm
	- 1.394092902418820 * b8a_norm
	+ 0.324752732710706 * b11_norm
	- 1.758871822827680 * b12_norm
	- 0.036663679860328 * viewZen_norm
	- 0.183105291400739 * sunZen_norm
	- 0.038145312117381 * relAzim_norm;

  return tansig(sum);
}

function neuron4(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
    + 0.774423577181620
	+ 0.211591184882422 * b03_norm
	- 0.248788896074327 * b04_norm
	+ 0.887151598039092 * b05_norm
	+ 1.143675895571410 * b06_norm
	- 0.753968830338323 * b07_norm
	- 1.185456953076760 * b8a_norm
	+ 0.541897860471577 * b11_norm
	- 0.252685834607768 * b12_norm
	- 0.023414901078143 * viewZen_norm
	- 0.046022503549557 * sunZen_norm
	- 0.006570284080657 * relAzim_norm;

  return tansig(sum);
}

function neuron5(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	+ 2.584276648534610
	+ 0.254790234231378 * b03_norm
	- 0.724968611431065 * b04_norm
	+ 0.731872806026834 * b05_norm
	+ 2.303453821021270 * b06_norm
	- 0.849907966921912 * b07_norm
	- 6.425315500537270 * b8a_norm
	+ 2.238844558459030 * b11_norm
	- 0.199937574297990 * b12_norm
	+ 0.097303331714567 * viewZen_norm
	+ 0.334528254938326 * sunZen_norm
	+ 0.113075306591838 * relAzim_norm;

  return tansig(sum);
}

function layer2(neuron1, neuron2, neuron3, neuron4, neuron5) {
  var sum =
	+ 0.463426463933822
	- 0.352760040599190 * neuron1
	- 0.603407399151276 * neuron2
	+ 0.135099379384275 * neuron3
	- 1.735673123851930 * neuron4
	- 0.147546813318256 * neuron5;

  return sum;
}

function normalize(unnormalized, min, max) {
  return 2 * (unnormalized - min) / (max - min) - 1;
}
function denormalize(normalized, min, max) {
  return 0.5 * (normalized + 1) * (max - min) + min;
}
function tansig(input) {
  return 2 / (1 + Math.exp(-2 * input)) - 1; 
}

function setup() {
  return {
    input: [{
      bands: [
          "B03",
          "B04",
          "B05",
          "B06",
          "B07",
          "B8A",
          "B11",
          "B12",
          "viewZenithMean",
          "viewAzimuthMean",
          "sunZenithAngles",
          "sunAzimuthAngles"
      ]
    }],
    output: [
        {
          id: "default",
          sampleType: "AUTO",
          bands: 1
        }
    ]
  }
}

function evaluatePixel(sample, scene, metadata, customData, outputMetadata) {
  const result = evaluatePixelOrig([sample], [scene], metadata, customData, outputMetadata);
  return result[Object.keys(result)[0]];
}
