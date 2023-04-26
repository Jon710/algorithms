// lc 88

// o(m+n log (m + n))
var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; i < m + n; i++, j++) {
    nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
};

// two pointers - o(m + n)
var merge = function (nums1, m, nums2, n) {
  let firstPointer = m - 1;
  let secondPointer = n - 1;
  let i = m + n - 1;

  while (secondPointer >= 0) {
    let firstNum = nums1[firstPointer];
    let secondNum = nums2[secondPointer];

    if (firstNum > secondNum) {
      nums1[i] = firstNum;
      i--;
      firstPointer--;
    } else {
      nums1[i] = secondNum;
      i--;
      secondPointer--;
    }
  }
};
