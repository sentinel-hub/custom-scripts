//VERSION=3

const nDaysBackwardAverage = 14; // The number of days that is used to calculate the swc backward average
const nDaysPrevious = 28; // The number of days to look back to compare the current value with the previous value
const scaleFactor = 1000; // The scale factor for the SWC values
const droughtThreshold = 0.15; // The SWC value under which conditions are considered drought-like
const differenceThreshold = -0.12; // Threshold signifying a rapid drop in SWC from the previous average value

function setup() {
  return {
    input: ["SWC", "dataMask"],
    output: { bands: 4 },
    mosaicking: "ORBIT",
  };
}

const daysToLoad = nDaysBackwardAverage + nDaysPrevious; // The number of days looking back to load data for

function preProcessScenes(collections) {
  const millisecondsBack = daysToLoad * 24 * 3600 * 1000;

  collections.scenes.orbits = collections.scenes.orbits.filter(function (
    orbit
  ) {
    const orbitDateFrom = new Date(orbit.dateFrom);
    return (
      orbitDateFrom.getTime() >= collections.to.getTime() - millisecondsBack
    );
  });
  return collections;
}

function getMeanSWCValue(samples) {
  // Get the sum of all SWC values
  let validDateCount = 0;
  let sum = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i].dataMask) {
      sum += samples[i].swc;
      validDateCount += 1;
    }
  }

  // Calculate the mean SWC value
  let meanSWCValue = NaN;
  if (validDateCount > 0) {
    meanSWCValue = sum / validDateCount;
  }

  return meanSWCValue;
}

function evaluatePixel(samples) {
  // When there are no dates, return no data
  if (samples.length == 0) return [NaN, NaN, NaN, 0];
  // When the search interval of the request body is too short to perform the calculation, return no data
  if (samples.length < daysToLoad) return [NaN, NaN, NaN, 0];

  // Extract samples for the two time periods
  const initialSamples = samples.slice(0, nDaysBackwardAverage)
  const previousSamples = samples.slice(nDaysPrevious, nDaysBackwardAverage + nDaysPrevious)

  // Calculate mean SWC value
  const meanSWC = getMeanSWCValue(initialSamples);
  const meanSWCPrevious = getMeanSWCValue(previousSamples);

  const swcDifference = meanSWC - meanSWCPrevious;
  const isFlashDrought =
    meanSWC < droughtThreshold && swcDifference < differenceThreshold ? 1 : 0;

  let opacity = 0;
  if (isFlashDrought) {
    opacity = 1;
  }

  return [isFlashDrought, 0, 0, opacity];
}
