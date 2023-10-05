class SparseVector {
  constructor(nums) {
    this.nums = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) this.nums.push([i, nums[i]]);
    }
  }

  dotProduct(vec) {
    let p1 = 0;
    let p2 = 0;
    let dotProduct = 0;

    while (p1 < this.nums.length && p2 < vec.nums.length) {
      const [p1Idx, p1Val] = this.nums[p1];
      const [p2Idx, p2Val] = vec.nums[p2];

      if (p1Idx === p2Idx) {
        dotProduct += p1Val * p2Val;
        p1++;
        p2++;
      } else if (p1Idx > p2Idx) {
        p2++;
      } else {
        p1++;
      }
    }

    return dotProduct;
  }
}
