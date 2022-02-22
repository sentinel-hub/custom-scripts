//VERSION=3

// This script visualise land cover validity

// Set up input and output settings
function setup() {
  return {
    input: [{
      bands: [
        "OCS_Validity"
      ]
    }],
    output: {
      bands: 4
    }
  }
}

// Create color map
const ramps = [
  [1, 0x000000],
  [45, 0xe60000 ],
];

// Create visualiser
const visualizer = new ColorRampVisualizer(ramps);

//EvaluatePixel function
function evaluatePixel(samples) {
  let val = samples.OCS_Validity;
  let rgb_triplet = visualizer.process(val);
  if (val == 0) {
      rgb_triplet.push(0) // Masked no data pixels
  } else {
      rgb_triplet.push(1) // Display visualiser for pixels with data
  }
  return rgb_triplet;
}