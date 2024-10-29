//VERSION=3

const bits_to_check = [8, 9, 11, 13, 14, 15]; // Bits to check if they are set
const sensing_time = "0130" // "0130" or "1330" or ""

function setup() {
    return {
      input: ["QF", "dataMask"],
      output: {id: "default", bands: 4 },
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
    if (sample.length == 0) return [NaN, NaN, NaN, 0];

    // Return NaN for no data pixels
    if (sample[0].dataMask == 0) {
      return [NaN, NaN, NaN,  0];
    }

    // Check if the bits are set
    const bit_set = areBitsSet(sample[0].QF);
    
    // Ensure only flagged pixels are displayed
    let opacity = 0;
    let imgVals = [1, 0, 0]
    if (bit_set) {
      opacity = 0.5;
    }
    
    return [...imgVals, opacity];
  }
