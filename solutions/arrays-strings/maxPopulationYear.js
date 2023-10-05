// @param {number[][]} logs
// @return {number}
var maximumPopulation = function (logs) {
  const map = new Map(); // map: {1993=1, 1994=1, 1995=2, 1996=1, 1997=1}, then get max value from this map
  let result = 0;
  let max = 1;

  for (let i = 0; i < logs.length; i++) {
    for (let j = logs[i][0]; j < logs[i][1]; j++) {
      if (!map.has(j)) {
        map.set(j, 1);
      } else {
        map.set(j, map.get(j) + 1);
        max = Math.max(max, map.get(j));
      }
    }
  }

  // here we need to sort because there's no treemap implementation in js maps.
  // so we need to convert to array in order to sort its keys
  for (let key of Array.from(map.keys()).sort((a, b) => a - b)) {
    if (map.get(key) === max) {
      result = key;
      break;
    }
  }

  return result;
};

// line sweep algorithm (optimal)
var maximumPopulation = function (logs) {
  const arr = new Array(101).fill(0);
  let max = 0;

  for (const [birth, death] of logs) {
    arr[birth - 1950]++;
    arr[death - 1950]--;
  }

  for (let i = 1; i < 101; i++) {
    arr[i] += arr[i - 1];

    if (arr[i] > arr[max]) max = i;
  }

  return max + 1950;
};
