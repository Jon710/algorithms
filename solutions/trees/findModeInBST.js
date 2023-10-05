// var findMode = function(root) {
//     const modes = [];
//     const map = new Map();
//     let max = -Infinity;

//     if (!root) return modes;

//     function traverse(node) {
//         if(!node) return;
//         map.set(node.val, (map.get(node.val) || 0) + 1);
//         if (map.get(node.val) > max) max = map.get(node.val);
//         traverse(node.left);
//         traverse(node.right);
//     }

//     traverse(root);

//     for (const key of map.keys()) {
//         if (map.get(key) === max) modes.push(key);
//     }

//     return modes;
// };

// ref: https://www.youtube.com/watch?v=qw8KVUqpKnA dominik iija
// time = n; space = 1 (besides recursion stack)
var findMode = function (root) {
  let modes = [];
  let max = -Infinity;
  let count = 0;
  let previousNode = root;

  function traverseInorder(node) {
    if (!node) return;

    traverseInorder(node.left);

    count = previousNode.val === node.val ? count + 1 : 1;

    previousNode = node;

    if (count === max) {
      modes.push(node.val);
    } else if (count > max) {
      modes = [node.val];
      max = count;
    }

    traverseInorder(node.right);
  }

  traverseInorder(root);
  return modes;
};
