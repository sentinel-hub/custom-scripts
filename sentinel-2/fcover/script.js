//VERSION=3

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

var degToRad = Math.PI / 180;

function evaluatePixel(sample) {
  var b03_norm = normalize(sample.B03, 0, 0.253061520472);
  var b04_norm = normalize(sample.B04, 0, 0.290393577911);
  var b05_norm = normalize(sample.B05, 0, 0.305398915249);
  var b06_norm = normalize(sample.B06, 0.00663797254225, 0.608900395798);
  var b07_norm = normalize(sample.B07, 0.0139727270189, 0.753827384323);
  var b8a_norm = normalize(sample.B8A, 0.0266901380821, 0.782011770669);
  var b11_norm = normalize(sample.B11, 0.0163880741923, 0.493761397883);
  var b12_norm = normalize(sample.B12, 0, 0.49302598446);
  var viewZen_norm = normalize(Math.cos(sample.viewZenithMean * degToRad), 0.918595400582, 0.999999999991);
  var sunZen_norm  = normalize(Math.cos(sample.sunZenithAngles * degToRad), 0.342022871159, 0.936206429175);
  var relAzim_norm = Math.cos((sample.sunAzimuthAngles - sample.viewAzimuthMean) * degToRad)

  var n1 = neuron1(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n2 = neuron2(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n3 = neuron3(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n4 = neuron4(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);
  var n5 = neuron5(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm);

  var l2 = layer2(n1, n2, n3, n4, n5);

  var fcover = denormalize(l2, 0.000181230723879, 0.999638214715);

  return {default: [fcover]}
}

function neuron1(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	- 1.45261652206
	- 0.156854264841 * b03_norm
	+ 0.124234528462 * b04_norm
	+ 0.235625516229 * b05_norm
	- 1.8323910258 * b06_norm
	- 0.217188969888 * b07_norm
	+ 5.06933958064 * b8a_norm
	- 0.887578008155 * b11_norm
	- 1.0808468167 * b12_norm
	- 0.0323167041864 * viewZen_norm
	- 0.224476137359 * sunZen_norm
	- 0.195523962947 * relAzim_norm;

  return tansig(sum);
}

function neuron2(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	- 1.70417477557
	- 0.220824927842 * b03_norm
	+ 1.28595395487 * b04_norm
	+ 0.703139486363 * b05_norm
	- 1.34481216665 * b06_norm
	- 1.96881267559 * b07_norm
	- 1.45444681639 * b8a_norm
	+ 1.02737560043 * b11_norm
	- 0.12494641532 * b12_norm
	+ 0.0802762437265 * viewZen_norm
	- 0.198705918577 * sunZen_norm
	+ 0.108527100527 * relAzim_norm;

  return tansig(sum);
}

function neuron3(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	+ 1.02168965849
	- 0.409688743281 * b03_norm
	+ 1.08858884766 * b04_norm
	+ 0.36284522554 * b05_norm
	+ 0.0369390509705 * b06_norm
	- 0.348012590003 * b07_norm
	- 2.0035261881 * b8a_norm
	+ 0.0410357601757 * b11_norm
	+ 1.22373853174 * b12_norm
	+ -0.0124082778287 * viewZen_norm
	- 0.282223364524 * sunZen_norm
	+ 0.0994993117557 * relAzim_norm;

  return tansig(sum);
}

function neuron4(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	- 0.498002810205
	- 0.188970957866 * b03_norm
	- 0.0358621840833 * b04_norm
	+ 0.00551248528107 * b05_norm
	+ 1.35391570802 * b06_norm
	- 0.739689896116 * b07_norm
	- 2.21719530107 * b8a_norm
	+ 0.313216124198 * b11_norm
	+ 1.5020168915 * b12_norm
	+ 1.21530490195 * viewZen_norm
	- 0.421938358618 * sunZen_norm
	+ 1.48852484547 * relAzim_norm;

  return tansig(sum);
}

function neuron5(b03_norm,b04_norm,b05_norm,b06_norm,b07_norm,b8a_norm,b11_norm,b12_norm, viewZen_norm,sunZen_norm,relAzim_norm) {
  var sum =
	- 3.88922154789
	+ 2.49293993709 * b03_norm
	- 4.40511331388 * b04_norm
	- 1.91062012624 * b05_norm
	- 0.703174115575 * b06_norm
	- 0.215104721138 * b07_norm
	- 0.972151494818 * b8a_norm
	- 0.930752241278 * b11_norm
	+ 1.2143441876 * b12_norm
	- 0.521665460192 * viewZen_norm
	- 0.445755955598 * sunZen_norm
	+ 0.344111873777 * relAzim_norm;

  return tansig(sum);
}

function layer2(neuron1, neuron2, neuron3, neuron4, neuron5) {
  var sum =
	- 0.0967998147811
	+ 0.23080586765 * neuron1
	- 0.333655484884 * neuron2
	- 0.499418292325 * neuron3
	+ 0.0472484396749 * neuron4
	- 0.0798516540739 * neuron5;

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
