/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// dfs
function connect(root) {
  if (!root || !root.left) return root;

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  connect(root.left);
  connect(root.right);

  return root;
}

class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

// Test Case 1: A simple tree with two levels.
const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

console.log(connect(root1));

// function bfs(root) {
//     const queue = [root];

//     root.next = null;

//     while (queue.length > 0) {
//         const currentNodeToProcess = queue.shift();

//         // solve problem
//         if (!currentNodeToProcess.right) currentNodeToProcess.next = null;
//         // else currentNodeToProcess

//         if (currentNodeToProcess.left) queue.push(currentNodeToProcess.left);

//         if (currentNodeToProcess.right) queue.push(currentNodeToProcess.right);
//     }
// }
