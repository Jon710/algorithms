// You are given 2 arrays: one containing strings (words) of lower-case english characters and the other containing strings (patterns) of lower-case english characters.
// Each pattern contains only lower-case english characters and possibly the wildcard character '.' which matches exactly one character. White a fn to determine which patterns match any word in the array words.
// Return the list of patterns that match at least one word, preserving the order of appearance in the patterns array.
// EXAMPLE 1: words = ["grape", "orange", "apple", "melon"], patterns = ["ap.e", "gr..e", ".ra.e"]
function wordsPatternMatch(words, patterns) {
  const result = [];
  for (const pattern of patterns) {
    // ^ and $ are used to match the entire string
    // ^ asserts the start of a line and $ asserts the end of a line
    const regex = new RegExp(`^${pattern}$`);
    for (const word of words) {
      if (regex.test(word)) {
        result.push(pattern);
        break;
      }
    }
  }
  return result;
}

console.log(
  wordsPatternMatch(
    ["grape", "orange", "apple", "melon"],
    ["ap.e", "gr..e", ".ra.e"]
  )
); // ["gr..e", ".ra.e"]
