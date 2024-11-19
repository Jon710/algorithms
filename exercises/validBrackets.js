// You are given a string s containing characters from a set of three types of brackets: "(": ")", "[": "]", "{": "}",.
// Additionally, the string s contains alphabetic chars. Write an algo to determine if the string is brackets-balanced.
// A string is balanced if all brackets are closed in the correct order and correct type and there are no orphans brackets.
// EXAMPLE1:
// INPUT: s = "a{b(c)d}e" -> OUTPUT: true
function isBalanced(s) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    // Check for opening brackets and add to stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets were matched; otherwise, it’s unbalanced
  return stack.length === 0;
}

console.log(isBalanced("a{b(c)d}e")); // Output: true
console.log(isBalanced("{a(b[c]d)e}")); // Output: true
console.log(isBalanced("{a(b[c)d}e")); // Output: false
