//VERSION=3

const bits_to_check = [8, 9, 11, 13, 14, 15]; // Bits to check if they are set
const sensing_time = "0130" // "0130" or "1330" or ""

function setup() {
    return {
      input: ["QF", "dataMask"],
      output: {bands: 1, sampleType: "UINT8" },
      mosaicking: "TILE"
    };
  }

//Select files based on sensing time (0130 or 1330)
function preProcessScenes(collections) {
    collections.scenes.tiles = collections.scenes.tiles.filter(function (tile) {
        return tile.dataPath.includes("T" + sensing_time);
    })
    collections.scenes.tiles.sort((a, b) => new Date(b.date) - new Date(a.date));
    return collections
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
    // When there are no dates, return no data
    if (sample.length == 0) return [NaN];

    // Return NaN for no data pixels
    if (sample[0].dataMask == 0) {
      return [NaN]
    }

    // Check if the bits are set
    const bit_set = areBitsSet(sample[0].QF);
    
    return [bit_set ? 1 : 0];
  }
