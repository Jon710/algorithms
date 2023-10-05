/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// time: o(n + m); space: o(n) because of set
var getIntersectionNode = function (headA, headB) {
  const set = new Set();

  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }

  return null;
};

// time: o(n + m); space: o(1)
var getIntersectionNode = function (headA, headB) {
  let ptrA = headA;
  let ptrB = headB;

  while (ptrA !== ptrB) {
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }

  return ptrA;
};
