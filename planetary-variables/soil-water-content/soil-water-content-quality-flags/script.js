//VERSION=3

const bits_to_check = [6, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // Bits to check if they are set

function setup() {
  return {
    input: ["QF", "dataMask"],
    output: { id: "default", bands: 4 },
  };
}

function areBitsSet(qf) {
  // Check if the bits are set
  for (let idx in bits_to_check) {
    const bit = 1 << (bits_to_check[idx] - 1);
    if ((qf & bit) !== 0) {
      return true;
    }
  }
  return false;
}

function evaluatePixel(sample) {
  // Return NaN for no data pixels
  if (sample.dataMask == 0) {
    return [NaN, NaN, NaN, 0];
  }

  // Check if the bits are set
  const bit_set = areBitsSet(sample.QF);

  // Ensure only flagged pixels are displayed
  let opacity = 0;
  let imgVals = [1, 0, 0];
  if (bit_set) {
    opacity = 0.5;
  }

  return [...imgVals, opacity];
}
