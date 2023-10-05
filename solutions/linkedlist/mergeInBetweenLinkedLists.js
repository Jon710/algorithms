/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let head1 = list1;
  let prev1 = null;
  let curr1 = list1;
  let i = 0;

  while (i < a) {
    prev1 = curr1;
    curr1 = curr1.next;
    i++;
  }

  prev1.next = list2;
  i = 0;

  while (i <= b - a) {
    prev1 = curr1;
    curr1 = curr1.next;
    i++;
  }

  prev1.next = null;

  let prev2 = null;
  let curr2 = list1;

  while (curr2) {
    prev2 = curr2;
    curr2 = curr2.next;
  }

  prev2.next = curr1;

  return head1;
};
