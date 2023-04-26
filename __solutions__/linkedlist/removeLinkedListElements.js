// lc 203

var removeElements = function (head, val) {
  let dummy = new ListNode(-Infinity);
  dummy.next = head;
  let currentNode = head;
  let prev = dummy;

  while (currentNode) {
    if (currentNode.val === val) {
      prev.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      prev = currentNode;
      currentNode = currentNode.next;
    }
  }

  return dummy.next;
};
