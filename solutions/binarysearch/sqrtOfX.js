// lc 69
var mySqrt = function (x) {
  let left = 0;
  let right = x;

  if (x < 2) return x;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let result = mid * mid;

    if (result === x) {
      return mid;
    } else if (result < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left - 1;
};

// take u forward
function findNthRoot(x, n) {
  // Initialize boundary values
  let low, high;
  if (x >= 0 && x <= 1) {
    low = x;
    high = 1;
  } else {
    low = 1;
    high = x;
  }

  // used for taking approximations of the answer
  let epsilon = 0.00000001;

  // Do binary search
  let guess = parseInt((low + high) / 2, 10);
  while (Math.abs(Math.pow(guess, n) - x) >= epsilon) {
    if (Math.pow(guess, n) > x) {
      high = guess;
    } else {
      low = guess;
    }
    guess = (low + high) / 2;
  }

  return guess;
}

console.log(findNthRoot(5, 2));


