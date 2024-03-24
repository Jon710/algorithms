// BFS uses queues
const { createTreeFromArray } = require("../../helpers");

// O(n) time and space
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    let size = queue.length;
    result.push(queue.map((node) => node.val));

    while (size--) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return result;
};

const arr = [3, 9, 20, null, null, 15, 7];
const root = createTreeFromArray(arr);
console.log(levelOrder(root));
