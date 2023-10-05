var nextGreatestLetter = function (letters, target) {
  if (letters[0] > target || target >= letters[letters.length - 1])
    return letters[0];

  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (letters[mid] <= target) left = mid + 1;
    else if (letters[mid] > target) right = mid;
  }

  return letters[left];
};
// letters = [99, 102, 106] target = 97 === letters = ["c","f","j"], target = "a"
