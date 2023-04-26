function countLetters(s) {
  let total = 1;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    total += count;
  }

  return total;
}
