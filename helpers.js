function createTreeNode(val, left, right) {
  return {
    val: val === undefined ? 0 : val,
    left: left === undefined ? null : left,
    right: right === undefined ? null : right,
  };
}

function createTreeFromArray(arr) {
  if (arr.length === 0) return null;

  let root = createTreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null) {
      current.left = createTreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = createTreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

module.exports = {
  createTreeFromArray,
};
