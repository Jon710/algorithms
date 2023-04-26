/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let glassTruck = 0;
  let paperTruck = 0;
  let metalTruck = 0;
  let glassIdx = 0;
  let paperIdx = 0;
  let metalIdx = 0;

  for (let i = 0; i < garbage.length; i++) {
    for (let j = 0; j < garbage[i].length; j++) {
      if (garbage[i][j] === "G") {
        while (glassIdx < i) {
          glassTruck += travel[glassIdx];
          glassIdx++;
        }

        glassTruck++;
      } else if (garbage[i][j] === "P") {
        while (paperIdx < i) {
          paperTruck += travel[paperIdx];
          paperIdx++;
        }

        paperTruck++;
      } else {
        while (metalIdx < i) {
          metalTruck += travel[metalIdx];
          metalIdx++;
        }

        metalTruck++;
      }
    }
  }

  return metalTruck + glassTruck + paperTruck;
};

// prefix sums
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let lastPaperIdx = 0;
  let lastGlassIdx = 0;
  let lastMetalIdx = 0;
  let totalTime = 0;

  for (let i = 0; i < garbage.length; i++) {
    for (let char of garbage[i]) {
      if (char === "P") lastPaperIdx = i;
      else if (char === "M") lastMetalIdx = i;
      else if (char === "G") lastGlassIdx = i;
    }

    totalTime += garbage[i].length;
  }

  for (let i = 1; i < travel.length; i++) {
    travel[i] = travel[i] + travel[i - 1];
  }

  totalTime += lastPaperIdx === 0 ? 0 : travel[lastPaperIdx - 1];
  totalTime += lastGlassIdx === 0 ? 0 : travel[lastGlassIdx - 1];
  totalTime += lastMetalIdx === 0 ? 0 : travel[lastMetalIdx - 1];

  return totalTime;
};
