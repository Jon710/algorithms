var maxScore = function (cardPoints, k) {
  let total = 0;

  // Sum up the first `k` elements from the left.
  for (let i = 0; i < k; i++) {
    total += cardPoints[i];
  }

  // Initialize `maxScore` with the sum of the first `k` elements.
  let maxScore = total;

  // Slide the window: replace one element from the left with one from the right.
  for (let i = 0; i < k; i++) {
    const leftCard = cardPoints[k - 1 - i];
    const rightCard = cardPoints[cardPoints.length - 1 - i];
    total = total - leftCard + rightCard;
    maxScore = Math.max(maxScore, total);
  }

  return maxScore;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12

// for a human to live truly, self-sacrifice is necessary
