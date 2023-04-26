/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
};

// kmp
var rotateString = function (s, goal) {
  let j = 1,
    len = 0,
    lps = [0];

  // construct lps table for 'B'
  while (j < goal.length) {
    if (goal[j] === goal[len]) {
      j++;
      len++;
      lps.push(len);
    } else if (len > 0) len = lps[len - 1];
    else {
      j++;
      lps.push(0);
    }
  }

  let i = 0;
  j = 0;
  // compare the two strings
  while (i < s.length) {
    if (s[i] === goal[j]) {
      i++;
      j++;
    } else if (j > 0) j = lps[j - 1];
    else i++;
  }
  return goal.slice(j) === s.slice(0, A.length - j);
};
