//VERSION=3
//Simple Panchromatic visualization of Sentinel-2 data, using the mean of the band intensities for Red, Green, Blue and Near Infrared
//By András Zlinszky, Sinergise - with help from GitHub Copilot
//https://bsky.app/profile/azlinszky.bsky.social

function setup() {
    return {
      input: ["B02", "B03", "B04", "B08", "dataMask"],
      output: { bands: 4 }
    };
  }
  
  const gain = 0.00025;
  
  function evaluatePixel(sample) {
    // Calculate the mean of the bands
    let pan = (sample.B02 + sample.B03 + sample.B04 + sample.B08) / 4;
  
    return [gain * pan, gain * pan, gain * pan, sample.dataMask];
  }