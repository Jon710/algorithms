var shipWithinDays = function (weights, days) {
  let low = Math.max(...weights);
  let high = weights.reduce((acc, weight) => acc + weight, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let numberOfDays = canShipWithinDays(weights, mid);

    if (numberOfDays <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

function canShipWithinDays(w, cap) {
  let days = 1;
  let currentLoad = 0;

  for (let i = 0; i < w.length; i++) {
    if (currentLoad + w[i] > cap) {
      days++;
      currentLoad = w[i];
    } else {
      currentLoad += w[i];
    }
  }

  return days;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
