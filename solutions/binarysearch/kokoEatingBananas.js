// lc 875
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    const hoursSpent = getHoursSpent(mid, piles);

    if (hoursSpent <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

const getHoursSpent = (mid, piles) => {
  let hours = 0;

  for (let pile of piles) {
    hours += Math.ceil(pile / mid);
  }

  return hours;
};

//binary search is about finding a way to narrow the search space!
