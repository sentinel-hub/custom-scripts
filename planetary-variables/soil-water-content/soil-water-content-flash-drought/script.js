//VERSION=3
const ndaysBackwardAverage = 14;   // The number of days that is used to calculate the swc backward average
const ndaysPrevious = 28; 	    // The time period in days to calculate the change in swc
const scaleFactor = 1000;          // The scale factor for the SWC values
const droughtThreshold = 0.15;     // The SWC value under which conditions are considered drought-like
const differenceThreshold = -0.12; // Threshold signifying a rapid drop in SWC from the previous average value
const daysToLoad = ndaysBackwardAverage + ndaysPrevious; // The number of days looking back to load data for
function setup() {
  return {
    input: ["SWC", "dataMask"],
    output: { bands: 4 },
    mosaicking: "ORBIT"
  };
}
function preProcessScenes(collections) {
  const millisecondsBack = daysToLoad * 24 * 3600 * 1000;
  collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
    const orbitDateFrom = new Date(orbit.dateFrom)
    return orbitDateFrom.getTime() >= (collections.to.getTime() - millisecondsBack);
  })
  return collections
}
function getMeanSWCValue(swc, dataMask) {
  // Get the sum of all SWC values
  let validDateCount = 0;
  let sum = 0;
  for (let i = 0; i < swc.length; i++) {
    if (dataMask[i]) {
      sum += swc[i];
      validDateCount += 1;
    }
  }
  // Calculate the mean SWC value
  let meanSWCValue = NaN
  if (validDateCount > 0) {
    meanSWCValue = sum / validDateCount;
  }
  return meanSWCValue;
}
function evaluatePixel(samples) {
  // When there are no dates, return no data
  if (samples.length == 0) return [NaN, NaN, NaN, 0];
  if (samples.length < daysToLoad) return [NaN, NaN, NaN, 0];
  // Extract SWC values and dataMask
  const swc = samples.slice(0, ndaysBackwardAverage).map(sample => sample.SWC / scaleFactor);
  const dataMask = samples.slice(0, ndaysBackwardAverage).map(sample => sample.dataMask);
  const swcPrevious = samples.slice(ndaysPrevious, ndaysBackwardAverage + ndaysPrevious).map(sample => sample.SWC / scaleFactor);
  const dataMaskPrevious = samples.slice(ndaysPrevious, ndaysBackwardAverage + ndaysPrevious).map(sample => sample.dataMask);
  // Calculate mean SWC value
  const meanSWC = getMeanSWCValue(swc, dataMask);
  const meanSWCPrevious = getMeanSWCValue(swcPrevious, dataMaskPrevious);
  const swcDifference = meanSWC - meanSWCPrevious;
  const isFlashDrought = (meanSWC < droughtThreshold && swcDifference < differenceThreshold) ? 1 : 0;
  let opacity = 0;
  if (isFlashDrought) {
    opacity = 1;
  }
  return [isFlashDrought, 0, 0, opacity];
}