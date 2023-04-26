//lc 1095
const findInMountainArray = function (target, mountainArr) {
  //1.find the peak- binary search
  let left = 0;
  let right = mountainArr.length - 1;
  let peak = 0;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      left = mid + 1;
      peak = mid + 1;
    } else {
      right = mid;
    }
  }

  //2.apply binary search to the left and find the target
  (left = 0), (right = peak);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midNum = mountainArr.get(mid);

    if (midNum === target) {
      return mid;
    } else if (midNum < target) {
      left = mid + 1;
    } else if (midNum > target) {
      right = mid - 1;
    }
  }

  //3.apply the binary search to the right if target not found in left
  (left = peak + 1), (right = length - 1);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midNum = mountainArr.get(mid);

    if (midNum === target) {
      return mid;
    } else if (midNum < target) {
      right = mid - 1;
    } else if (midNum > target) {
      left = mid + 1;
    }
  }

  //if nothing found return -1
  return -1;
};

console.log(findInMountainArray([1, 2, 3, 4, 5, 3, 1]));
