/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  const count = { T: 0, F: 0 };
  let left = 0;
  let maxWindowSize = 0;

  for (let right = 0; right < answerKey.length; right++) {
    count[answerKey[right]]++;

    while (Math.min(count["T"], count["F"]) > k) {
      count[answerKey[left]]--;
      left++;
    }

    maxWindowSize = Math.max(maxWindowSize, right - left + 1);
  }

  return maxWindowSize;
};

// Example usage:
console.log(maxConsecutiveAnswers("TTTFTFTTFFFF", 2)); // Output: 7