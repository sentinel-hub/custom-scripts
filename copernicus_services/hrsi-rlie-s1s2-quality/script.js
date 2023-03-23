//VERSION=3
function setup() {
  return {
      input: ["QC", "dataMask"],
      output: {bands: 4,
      sampleType: "Auto"
      }
  };

}

const map = [
  [0, 0x5DA400],  //0 - High quality
  [1, 0xBDBD5B],  //1 - Medium quality
  [2, 0xFFC000],  //0 - Low quality
  [3, 0xFF0000],  //1 - Minimal quality
  [205, 0x7B7B7B],  //205 - Cloud or cloud shadow
  [255, 0xFFFFFF],  //255 - No data
];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
let rgbVis = visualizer.process(sample.QC);
return rgbVis.concat(sample.dataMask);
}