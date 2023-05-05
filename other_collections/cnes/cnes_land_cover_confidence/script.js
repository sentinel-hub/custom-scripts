//VERSION=3

// This script visualise the confidence of classifier

// Set up input and output settings
function setup() {
    return {
      input: [{
        bands: [
          "OCS_Confidence"
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
    [100, 0x00c800 ],
  ];
  
  // Create visualiser
  const visualizer = new ColorRampVisualizer(ramps);
  
  
  //EvaluatePixel function
  function evaluatePixel(samples) {
    let val = samples.OCS_Confidence;
    let rgb_triplet = visualizer.process(val);
    if (val == 0 || val > 100) {
        rgb_triplet.push(0) // Masked data out of range
    } else {
        rgb_triplet.push(1) // Display visualiser for data within a valid range of confidence
    }
    return rgb_triplet;
  }