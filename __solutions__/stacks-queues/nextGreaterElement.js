// https://www.enjoyalgorithms.com/blog/find-next-greater-element
function nextGreaterElement(arr) {
  let nextGreater;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    nextGreater = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        nextGreater = arr[j];
        break;
      }
    }
    result[i] = nextGreater;
  }

  return result;
}

function nextGreaterElementOptimized(arr) {
  const stack = [];
  const result = [];

  stack.push(0);

  for (let i = 1; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      result[stack[stack.length - 1]] = arr[i];
      stack.pop();
    }

    stack.push(i);
  }

  while (stack.length) {
    result[stack[stack.length - 1]] = -1;
    stack.pop();
  }

  return result;
}

function nextGreaterElementOptimized2(arr) {
  const stack = [];
  const result = [];

  stack.push(0);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack.pop();
    } else {
      result[i] = -1;
    }

    stack.push(arr[i]);
  }

  return result;
}

console.log(nextGreaterElement([2, 3, 9, 1, 5]));
console.log(nextGreaterElementOptimized([2, 3, 9, 1, 5]));
console.log(nextGreaterElementOptimized2([2, 3, 9, 1, 5]));
