class Node {
  constructor(data, depth) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.depth = depth;
  }
}

function swapAtDepth(node, k, depth) {
  if (!node) return;
  if (depth % k === 0) {
    [node.left, node.right] = [node.right, node.left];
  }
  swapAtDepth(node.left, k, depth + 1);
  swapAtDepth(node.right, k, depth + 1);
}

function inOrderTraversal(node) {
  const result = [];
  function traverse(node) {
    if (node) {
      traverse(node.left);
      result.push(node.data);
      traverse(node.right);
    }
  }
  traverse(node);
  return result;
}

function swapNodes(indexes, queries) {
  const root = new Node(1, 1);
  const queue = [root];

  for (let i = 0; i < indexes.length; i++) {
    const currentNode = queue[i];
    const leftData = indexes[i][0];
    const rightData = indexes[i][1];
    if (leftData !== -1) {
      currentNode.left = new Node(leftData, currentNode.depth + 1);
      queue.push(currentNode.left);
    }
    if (rightData !== -1) {
      currentNode.right = new Node(rightData, currentNode.depth + 1);
      queue.push(currentNode.right);
    }
  }

  const result = [];
  for (const query of queries) {
    swapAtDepth(root, query, 1);
    const inOrder = inOrderTraversal(root);
    result.push(inOrder);
  }
  return result;
}

// Example usage:
const indexes = [
  [2, 3],
  [-1, -1],
  [-1, -1],
];
const queries = [1, 1];
console.log(swapNodes(indexes, queries)); // Output: [[3, 1, 2], [2, 1, 3]]
