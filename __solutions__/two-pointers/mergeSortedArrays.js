// lc 88

// o(m+n log (m + n))
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

// two pointers - o(m + n)
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;

  while (p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      i--;
      p1--;
    } else {
      nums1[i] = nums2[p2];
      i--;
      p2--;
    }
  }
};
