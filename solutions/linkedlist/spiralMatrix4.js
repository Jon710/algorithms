/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  const matrix = new Array(m).fill(-1).map(() => new Array(n).fill(-1));

  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;

  while (head) {
    for (let i = left; i <= right && head; i++) {
      matrix[top][i] = head.val;
      head = head.next;
    }
    top++;

    for (let j = top; j <= bottom && head; j++) {
      matrix[j][right] = head.val;
      head = head.next;
    }
    right--;

    for (let k = right; k >= left && head; k--) {
      matrix[bottom][k] = head.val;
      head = head.next;
    }
    bottom--;

    for (let l = bottom; l >= top && head; l--) {
      matrix[l][left] = head.val;
      head = head.next;
    }
    left++;
  }

  return matrix;
};
