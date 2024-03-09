/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
function minSpeedOnTime(dist, hour) {
  let low = 1,
    high = 10 ** 7,
    ans = -1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (isOnTime(dist, mid, hour)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

function isOnTime(distArr, speed, hour) {
  let hoursNeeded = 0;

  for (const distance of distArr) {
    hoursNeeded = Math.ceil(hoursNeeded);
    hoursNeeded += distance / speed;
  }

  return hoursNeeded <= hour;
}

// console.log(minSpeedOnTime([1, 3, 2], 6));
console.log(minSpeedOnTime([1, 3, 2], 2.7));
