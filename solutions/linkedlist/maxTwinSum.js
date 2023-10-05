// var pairSum = function(head) {
//     const arr = [];

//     while (head) {
//         arr.push(head.val);
//         head = head.next;
//     }

//     let n = arr.length;
//     let max = -Infinity;

//     for (let i = 0; i < n; i++) {
//         max = Math.max(max, arr[i] + arr[n - 1 - i]);
//     }

//     return max;
// };

function reverse(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

var pairSum = function (head) {
  let maxSum = -Infinity;
  let fast = head;
  let slow = head;

  // find middle with fast-slow ptrs
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = head;
  // reverse only second half
  slow = reverse(slow);

  while (slow) {
    let currentSum = fast.val + slow.val;
    maxSum = Math.max(currentSum, maxSum);
    slow = slow.next;
    fast = fast.next;
  }

  return maxSum;
};
