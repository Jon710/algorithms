// lc 141  
// brute force -> push every node to an array and check if it's already been seen

// fast and slow pointer technique
var hasCycle = function (head) {
  if (head === null) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
