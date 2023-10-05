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

// ref https://www.youtube.com/watch?v=YAn_wn2YLQ8
//traverse all the way to end
//then goes backwards comparing values
var removeNodes = function (head) {
  if (!head) return head;

  let max = -Infinity;

  function traverse(node) {
    if (!node) return null;

    node.next = traverse(node.next);

    max = Math.max(max, node.val);

    if (max > node.val) return node.next;

    return node;
  }

  return traverse(head);
};
