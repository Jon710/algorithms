var decodeString = function (s) {
  const stack = [];

  for (char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let substring = "";

      while (stack[stack.length - 1] !== "[") {
        substring = stack.pop() + substring;
      }

      stack.pop();

      let k = "";

      // stack not empty and its top is a number
      while (stack.length && !Number.isNaN(Number(stack[stack.length - 1]))) {
        k = stack.pop() + k;
      }

      stack.push(substring.repeat(Number(k)));
    }
  }

  return stack.join("");
};
