// o(n) time and o(n) space
var isPalindrome = function (head) {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (arr[end] !== arr[start]) return false;

    start++;
    end--;
  }

  return true;
};

// --------------------------=------------------------------------------------------------------------------------------
// o(n) time and o(1) space
function reverse(head) {
  let prev = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

// fast and slow pointer to find middle
// then reverse the second half of the list
// then move slow pointer by 1
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let fast = head;
  let slow = head;

  // find middle (slow)
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse right half
  slow.next = reverse(slow.next);

  // move slow to right half
  slow = slow.next;

  // check whether left half and right half are equal or not
  while (slow) {
    if (head.val !== slow.val) return false;

    head = head.next;
    slow = slow.next;
  }

  return true;
};
