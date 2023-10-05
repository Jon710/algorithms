class NumArray {
  constructor(nums) {
    this.prefixSum = [];

    this.prefixSum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
    }
  }

  sumRange(left, right) {
    if (!left) {
      return this.prefixSum[right];
    } else {
      return this.prefixSum[right] - this.prefixSum[left - 1];
    }
  }
}
