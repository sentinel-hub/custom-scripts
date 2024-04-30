//VERSION=3
const map = [
    [0.0, 0x00007d],
    [1.0, 0x004ccc],
    [1.8, 0xff3333],
    [2.5, 0xffe500],
    [4.0, 0x00cc19],
    [4.5, 0x00cc19],
    [5.0, 0xffffff],
  ];
  
  const visualizer = new ColorRampVisualizer(map);
  function setup() {
    return {
      input: ["B10", "B11", "B12", "dataMask"],
      output: [
        { id: "default", bands: 4 },
        { id: "index", bands: 1, sampleType: "FLOAT32" },
        { id: "eobrowserStats", bands: 1 },
        { id: "dataMask", bands: 1 },
      ],
    };
  }
  
  function evaluatePixel(samples) {
    let OTCI = (samples.B12 - samples.B11) / (samples.B11 - samples.B10);
    let imgVals = null;
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    // we restrict the interval to [-10, 10] as it covers most of the value range
    const indexVal =
      samples.dataMask === 1 && OTCI >= -10 && OTCI <= 10 ? OTCI : NaN;
    imgVals = [...visualizer.process(OTCI), samples.dataMask];
    return {
      default: imgVals,
      index: [indexVal],
      eobrowserStats: [indexVal],
      dataMask: [samples.dataMask],
    };
  }  