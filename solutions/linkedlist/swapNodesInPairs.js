/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let n1 = head;
  let n2 = head.next;

  n1.next = swapPairs(n2.next);
  n2.next = n1;

  return n2;
};
