// lc 169

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();

  for (const num of nums) {
    if (map.has(num) && map.get(num) + 1 > nums.length / 2) {
      return num;
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
};

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let cnt = 0;
  const map = new Map();
  for (let a in nums1) {
    for (let b in nums2) {
      m.set(a + b, (map.get(num) || 0) + 1);
    }
  }
  for (let c in nums3) {
    for (let d in nums4) {
      cnt += map.get(-(c + d) || 0);
    }
  }
  return cnt;
};
