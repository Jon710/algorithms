// lc 653

var findTarget = function (root, k) {
  function inorder(root, nums) {
    if (!root) return;
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
  }

  const nums = [];

  inorder(root, nums);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[right] + nums[left] === k) return true;
    else if (nums[right] + nums[left] < k) left++;
    else right--;
  }

  return false;
};
