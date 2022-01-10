//VERSION=3
function setup() {
    return {
      input: ["PROB", "dataMask"],
      output: { bands: 3 , sampleType: "AUTO"},
      mosaicking: Mosaicking.TILE
    };
  }
  
  //Create color ramp
  const ramps = [
    [0, 0x000000],
    [100, 0xffffff]
  ];
  
  //Create visualizer
  const visualizer = new ColorRampVisualizer(ramps);
  
  //EvaluatePixel function
  function evaluatePixel(samples, scenes) {
    for (let i = 0; i < samples.length; i++) {
      let sample = samples[i];
      if (sample.dataMask == 1) {
        return [visualizer.process(sample.PROB)[0], visualizer.process(sample.PROB)[1], visualizer.process(sample.PROB)[2]];
      }
    }
  }
  