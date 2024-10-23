function longestStrChain(words) {
  words.sort((a, b) => a.length - b.length);

  const dp = {};
  let maxChain = 0;

  for (const word of words) {
    dp[word] = 1;

    for (let i = 0; i < word.length; i++) {
      const prevWord = word.slice(0, i) + word.slice(i + 1);
      if (prevWord in dp) {
        dp[word] = Math.max(dp[word], dp[prevWord] + 1);
      }
    }

    maxChain = Math.max(maxChain, dp[word]);
  }

  return maxChain;
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
