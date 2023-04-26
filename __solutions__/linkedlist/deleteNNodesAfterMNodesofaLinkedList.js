/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
  let current = head;

  while (current) {
    let i = 1;
    while (current && i < m) {
      current = current.next;
      i++;
    }

    if (!current) break;

    let temp = current.next;
    let j = 0;
    while (temp && j < n) {
      j++;
      temp = temp.next;
    }

    current.next = temp;
    current = current.next;
  }

  return head;
};
