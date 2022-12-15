//VERSION=3 (auto-converted from 1)
/*
Author: Jean-Baptiste Pleynet
*/

const config2 = {
  default: {
    nbPastYears: 3,
    defaultOutputValue: -2,
    ndviMinValue: -1,
    currentIndexesMinValuesNumber: 1,
    pastIndexesMinValuesNumber: 3
  },
  ndviAnomaly: {
    pixelEvalMaxValue: 0.7
  },
  loss: {
    lowerTriggerPremium: 0,
    higherTriggerPremium: 1,
    minimumAverageValuePremium: 0.1,
    minimumPayoutPremium: 0
  }
};

function setup() {
  return {
    input: [{
      bands: [
          "B04",
          "B08"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
};

function preProcessScenes(collections) {
  const nbPastYears = config2.default.nbPastYears;
  collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
    var orbitDateFrom = new Date(orbit.dateFrom);
    return orbitDateFrom.getMonth() === collections.to.getMonth() && orbitDateFrom.getFullYear() >= collections.to.getFullYear() - nbPastYears;
  })
    return collections
};
        
function calculateLoss(currentIndexAverage, pastIndexAverage, minimumAverageValuePremium, lowerTriggerPremium, higherTriggerPremium, minimumPayoutPremium, defaultValue) {
  if (currentIndexAverage === null || pastIndexAverage === null) return defaultValue;
  if (pastIndexAverage < minimumAverageValuePremium || pastIndexAverage <= currentIndexAverage) return 0;
  var percentage = (pastIndexAverage - currentIndexAverage) / pastIndexAverage;
  if (percentage < lowerTriggerPremium) return 0;
  if (percentage > higherTriggerPremium) return 1;
  return Math.max(minimumPayoutPremium, (percentage - (lowerTriggerPremium - minimumPayoutPremium)) / higherTriggerPremium);
};

var calculateNdviAnomaly = function calculateNdviAnomaly(indexesAverages, pixelEvalMaxValue, defaultValue) {
  if (indexesAverages.current === null || indexesAverages.past === null) return defaultValue;
  return Math.max(Math.min(indexesAverages.current - indexesAverages.past, pixelEvalMaxValue), 0 - pixelEvalMaxValue);
};

var calculateNDVI = function calculateNDVI(sample, config) {
  var denom = sample.B04 + sample.B08;
  if (denom === 0) return null;
  var result = (sample.B08 - sample.B04) / denom;
  return result > config.ndviMinValue ? result : null;
};

const evaluatePixel = function (samples, scenes) {
  var indexesAverages = calculateIndexAverages(samples, scenes, config2["default"], calculateNDVI);
  return valueInterpolate(calculateNdviAnomaly(indexesAverages, config2.ndviAnomaly.pixelEvalMaxValue, config2["default"].defaultOutputValue), [config2["default"].defaultOutputValue, 0 - config2.ndviAnomaly.pixelEvalMaxValue, 0, config2.ndviAnomaly.pixelEvalMaxValue], [[0, 0, 0], [1, 0, 0], [1, 1, 1], [0, 1, 0]]);
};

var isClouds = function isClouds(sample) {
  var ngdr = (sample.B03 - sample.B04) / (sample.B03 + sample.B04);
  var ratio = (sample.B03 - 0.175) / (0.39 - 0.175);
  return sample.B11 > 0.1 && (ratio > 1 || ratio > 0 && ngdr > 0);
};

var calculateIndexesForSamples = function calculateIndexesForSamples(samples, scenes, config, processSampleMethod) {
  if (samples.length !== scenes.length) throw new Error('samples and scenes arrays do not have same length');
  return samples.reduce(function (acc, sample, index) {
    if (isClouds(sample)) return acc;
    var indexValue = processSampleMethod(sample, config);
    if (!indexValue) return acc;
    var sceneYear = scenes[index].date.getFullYear();

    if (!acc[sceneYear]) {
      acc[sceneYear] = {
        count: 0,
        sum: 0
      };
    }

    acc[sceneYear].count++;
    acc[sceneYear].sum += indexValue;
    return acc;
  }, {});
};

var calculatePastIndexesAverage = function calculatePastIndexesAverage(indexes, currentYear, config) {
  var pastIndexes = {
    count: 0,
    sum: 0
  };

  for (var i = 1; i <= config.nbPastYears; i++) {
    var indexValue = indexes[currentYear - i];

    if (indexValue && indexValue.count) {
      pastIndexes.count++;
      pastIndexes.sum += indexValue.sum / indexValue.count;
    }
  }

  return pastIndexes.count >= config.pastIndexesMinValuesNumber ? pastIndexes.sum / pastIndexes.count : null;
};

function calculateIndexAverages(samples, scenes, config, processSampleMethod) {
  if (!scenes.length) throw new Error('scenes array is empty');
  var indexes = calculateIndexesForSamples(samples, scenes, config, processSampleMethod);
  var currentYear = scenes[0].date.getFullYear();
  var currentYearIndex = indexes[currentYear];
  return {
    current: currentYearIndex && currentYearIndex.count >= config.currentIndexesMinValuesNumber && currentYearIndex.sum / currentYearIndex.count || null,
    past: calculatePastIndexesAverage(indexes, currentYear, config)
  };
};
