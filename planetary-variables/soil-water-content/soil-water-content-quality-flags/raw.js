//VERSION=3

const bits_to_check = [6, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // Bits to check if they are set

function setup() {
  return {
    input: ["QF", "dataMask"],
    output: { bands: 1, sampleType: "UINT8" },
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
    return [NaN];
  }

  // Check if the bits are set
  const bit_set = areBitsSet(sample.QF);

  return [bit_set ? 1 : 0];
}
