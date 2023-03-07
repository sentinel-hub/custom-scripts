//VERSION=3
//UDM2 Classification

function setup() {
  return {
    input: [{
      bands: [
        "UDM2_Clear",
        "UDM2_Snow",
        "UDM2_Shadow",
        "UDM2_LightHaze",
        "UDM2_HeavyHaze",
        "UDM2_Cloud"
      ]
    }],
    output: {
      bands: 4
    }
  }
}

function evaluatePixel(samples) {
  if (samples.UDM2_Snow == 1) {
    return [0, 0.5, 1, 1] // blue
  }
  if (samples.UDM2_Shadow == 1) {
    return [0.4, 0.4, 0.4, 1] //grey
  }
  if (samples.UDM2_LightHaze == 1) {
    return [0, 0.9, 1, 1] //sky blue 
  }
  if (samples.UDM2_HeavyHaze == 1) {
    return [1, 0.7, 1, 1] //light pink
  }
  if (samples.UDM2_Cloud == 1) {
    return [0.7, 0.7, 0.7, 1] //white
  }
  else {
    return [0, 0, 0, 0]
  }
}
