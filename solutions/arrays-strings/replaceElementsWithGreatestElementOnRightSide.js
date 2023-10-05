// o(nˆ2)
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentGreatest = -Infinity;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > currentGreatest) {
        currentGreatest = arr[j];
      }
    }

    arr[i] = currentGreatest;
  }

  arr[arr.length - 1] = -1;

  return arr;
};

// o (n)
var replaceElements = function (arr) {
  // start from the right, thats why max is -1
  let max = arr[arr.length - 1];

  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let currentMax = Math.max(max, arr[i]);
    arr[i] = max;
    max = currentMax;
  }

  return arr;
};
