/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];

  for (let i = 0; i < num.length; i++) {
    while (k && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }

    stack.push(num[i]);
  }

  while (stack.length && k) {
    stack.pop();
    k--;
  }

  while (stack.length && stack[0] == "0") {
    stack.shift();
  }

  return stack.join("") || "0";
};
