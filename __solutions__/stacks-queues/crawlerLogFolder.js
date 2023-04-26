/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];

  for (const log of logs) {
    if (log === "../") {
      stack.pop(log);
    } else if (log === "./") {
      continue;
    } else {
      stack.push(log);
    }
  }

  return stack.length;
};
