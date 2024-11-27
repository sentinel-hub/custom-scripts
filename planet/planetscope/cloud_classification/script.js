//VERSION=3
//UDM2 Classification

function setup() {
  return {
    input: [
      {
        bands: ["clear", "snow", "shadow", "haze_light", "haze_heavy", "cloud"],
      },
    ],
    output: {
      bands: 4,
    },
  };
}

function evaluatePixel(samples) {
  if (samples.snow == 1) {
    return [0, 0.5, 1, 1]; // blue
  }
  if (samples.shadow == 1) {
    return [0.4, 0.4, 0.4, 1]; //grey
  }
  if (samples.haze_light == 1) {
    return [0, 0.9, 1, 1]; //sky blue
  }
  if (samples.haze_heavy == 1) {
    return [1, 0.7, 1, 1]; //light pink
  }
  if (samples.cloud == 1) {
    return [0.7, 0.7, 0.7, 1]; //white
  } else {
    return [0, 0, 0, 0];
  }
}
