/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return [];

  const averages = [];
  const queue = [root];

  while (queue.length) {
    let size = queue.length;
    let levelSum = 0;

    for (let i = 0; i < size; i++) {
      let current = queue.shift();

      levelSum += current.val;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    averages.push(levelSum / size);
  }

  return averages;
};
