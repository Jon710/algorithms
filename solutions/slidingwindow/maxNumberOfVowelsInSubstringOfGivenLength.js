// lc 1456
var maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let ans = 0;
  let left = 0;
  let right = 0;
  let currentCount = 0;

  while (right < s.length) {
    if (vowels.includes(s[right])) currentCount++;

    // if current window > k, we check if starting letter of current window is a vowel
    // and if so delete it from currentCount. then, increment left to shrink the window.
    if (right - left + 1 > k) {
      if (vowels.includes(s[left])) currentCount--;

      left++;
    }

    ans = Math.max(ans, currentCount);

    right++;
  }

  return ans;
};
