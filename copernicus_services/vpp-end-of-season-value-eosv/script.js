//VERSION=3

// This custom script visualises VPP EOSV (end of season value) parameter
//VERSION=3
function setup() {
  return {
    input: ["EOSV", "dataMask"],
    output: { bands: 4},
    mosaicking: Mosaicking.TILE
  }
}
const map =
[
  [0, 0xFFFFE5],
  [3750, 0xF7FCB9],
  [7500, 0xD9F0A3],
  [11250, 0xADDD8E],
  [15000, 0x78C679],
  [18750, 0x41AB5D],
  [22500, 0x238443],
  [26250, 0x006837],
  [30000, 0x004529]
]

const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(samples) {
 if (samples.length == 1)
  {
    return [visualizer.process(samples[0].EOSV)[0], visualizer.process(samples[0].EOSV)[1], visualizer.process(samples[0].EOSV)[2], samples[0].EOSV != 32768];
  } 
  else if (samples.length > 1 & samples[0].EOSV != 0 & samples[0].EOSV != 32768)
  {
    return [visualizer.process(samples[0].EOSV)[0], visualizer.process(samples[0].EOSV)[1], visualizer.process(samples[0].EOSV)[2], samples[0].EOSV != 32768];
  } 
  else if (samples.length > 1 & samples[1].EOSV != 0  & samples[1].EOSV != 32768)
  {
    return [visualizer.process(samples[1].EOSV)[0], visualizer.process(samples[1].EOSV)[1], visualizer.process(samples[1].EOSV)[2], samples[1].EOSV != 32768];
  }
 }

