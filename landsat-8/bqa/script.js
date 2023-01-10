//VERSION=3

function setup() {
  return {
    input: ["B02", "B03", "B04", "BQA"],
    output: { bands: 3, sampleType: "UINT8" },
  };
}

function evaluatePixel(sample) {
  // define the decoder function

  var bqa = decodeL8C2Qa(sample.BQA);

  // defining the colormap

  if (bqa.water == 1) {
    return [0, 0, 204];
  } else if (bqa.snow == 1) {
    return [255, 0, 255];
  } else if (bqa.cloud == 1) {
    return [225, 225, 225];
  } else if (bqa.dilatedCloud == 1) {
    return [175, 175, 175];
  } else if (bqa.cloudShadow == 1) {
    return [153, 102, 51];
  } else if (bqa.cirrus == 1) {
    return [102, 255, 255];
  } else if (bqa.fill == 1) {
    return [255, 0, 0];
  } else if (bqa.clear == 1) {
    return [1000 * sample.B04, 1000 * sample.B03, 1000 * sample.B02];
  } else {
    return [0, 0, 0];
  }
}
