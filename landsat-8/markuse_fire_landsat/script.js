//VERSION=3
// Landsat 8/9 Intensified Fire Glow Script
// Based on the Pierre Markuse wildfire script, edited using AI by András Zlinszky, Sinergise

function setup() {
  return {
    input: ["B02", "B03", "B04", "B10", "dataMask"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  if (sample.dataMask === 0) return [0, 0, 0];

  // 1. DATA NORMALIZATION (B10 -> Celsius)
  var b10 = sample.B10;
  var LST_C = 0;
  if (b10 > 200) {
    LST_C = (b10 > 1000) ? (b10 * 0.1) - 273.15 : b10 - 273.15;
  } else {
    var K1 = 774.8853;
    var K2 = 1321.0789;
    LST_C = (K2 / Math.log(K1 / (b10 + 0.0001) + 1)) - 273.15;
  }

  // 2. TRUE COLOR BASE (Slightly darkened for better contrast with fire)
  var brightness = 1.8;
  var R = sample.B04 * brightness;
  var G = sample.B03 * brightness;
  var B = sample.B02 * brightness;

  // 3. INTENSE FIRE PARAMETERS
  var minFireC = 45;  // Threshold to start the red glow
  var maxFireC = 115; // Threshold for white-hot center

  if (LST_C > minFireC) {
    // Normalize heat value
    var val = (LST_C - minFireC) / (maxFireC - minFireC);
    val = Math.min(Math.max(val, 0), 1);

    // --- INTENSIFIED RED GLOW LOGIC ---
    // We use Math.pow to create a steep curve.
    // Deep Red starts early; Yellow/White only appears at very high temps.

    var redIntensifier = val * 2.5;            // Strong red base
    var yellowIntensifier = Math.pow(val, 3);  // Yellow kicks in late (intense heat)
    var whiteIntensifier = Math.pow(val, 5);   // White only for the core

    // Apply colors using an additive blend (Screen-like effect)
    R = R + redIntensifier;
    G = G + (yellowIntensifier * 0.8) + (whiteIntensifier * 0.5);
    B = B + (whiteIntensifier * 0.8);

    // Optional: Add a slight "bloom" to the red channel
    R *= 1.2;
  }

  return [R, G, B];
}
