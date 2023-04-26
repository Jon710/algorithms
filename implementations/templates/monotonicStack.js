// decreasing -> https://algo.monster/problems/mono_stack_intro
// Monotonic stack is like a regular stack with one key distinction in the push operation: 
// Before we push a new element onto the stack, we first check if adding it breaks the monotonic condition. 
// If it does, then we pop the top element off the stack until pushing the new element no longer breaks the monotonic condition.
function monotonicStack(nums) {
  const stack = [];

  for (let num of nums) {
    // The monotonic property can only break if and only if the container
    // is not empty and the last item, compared to the entry, breaks
    // the property. While that is true, we pop the top item.
    while (stack.length && stack[stack.length - 1] <= num) {
      stack.pop();

      // Do something with the popped item here
    }

    stack.push(num);
  }

  return stack;
}

console.log(monotonicStack([3, 1, 6, 2, 5, 4]));
