// interview pen yt: Given a reference to the root of a binary tree and an integer value x, return the number of nodes in the tree that are exactly k away from node with value x.
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.right = new Node(7);

function distanceK(root, x, k) {
  const parentMap = new Map();
  const ans = [];
  let targetNode = null;

  // traverse tree to find the targetNode (x) and build the parent nodes map
  function preorder(node, parent = null) {
    if (!node) return;

    parentMap.set(node, parent);

    if (node.val === x) targetNode = node;

    preorder(node.left, node);
    preorder(node.right, node);
  }

  preorder(root);

  // console.log(parentMap);

  const queue = [[targetNode, 0]];
  const seen = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();
    seen.add(node);

    if (dist === k) ans.push(node.val);

    for (const neighbor of [node.left, node.right, parentMap.get(node)]) {
      if (neighbor && !seen.has(neighbor)) {
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return ans;
}

console.log(distanceK(root, 3, 1)); // [ 4, 6, 1 ]
// console.log(distanceK(root, 3, 2));
// root =    1
//         /   \
//         3     2
//       /   \    \
//     4      6    7
