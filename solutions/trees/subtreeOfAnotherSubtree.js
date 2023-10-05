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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function isIdentical(node1, node2) {
  if (!node1 || !node2) {
    return !node1 && !node2;
  } else if (node1.val === node2.val) {
    return (
      isIdentical(node1.left, node2.left) &&
      isIdentical(node1.right, node2.right)
    );
  } else {
    return false;
  }
}

var isSubtree = function (root, subRoot) {
  if (!root) {
    return false;
  } else if (isIdentical(root, subRoot)) {
    return true;
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
};

// tree serialization
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// function isIdentical(node1, node2) {
//     if (!node1 || !node2) {
//         return !node1 && !node2;
//     } else if (node1.val === node2.val) {
//         return isIdentical(node1.left, node2.left) && isIdentical(node1.right, node2.right);
//     } else {
//         return false;
//     }
// }

// var isSubtree = function(root, subRoot) {
//     if (!root) {
//         return false;
//     } else if (isIdentical(root, subRoot)) {
//         return true;
//     } else {
//         return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
//     }
// };

var isSubtree = function (s, t) {
  const serialize = (tree) => {
    let res = ``;
    const stack = [tree];
    while (stack.length) {
      let cur = stack.pop();
      if (cur) {
        res += `_${cur.val}`;
        if (cur.left) {
          stack.push(cur.left);
        } else {
          stack.push(null);
        }
        if (cur.right) {
          stack.push(cur.right);
        } else {
          stack.push(null);
        }
      } else {
        res += `_#`;
      }
    }
    return res;
  };
  return serialize(s).includes(serialize(t));
};
