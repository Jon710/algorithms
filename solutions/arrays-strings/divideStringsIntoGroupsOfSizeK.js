var divideString = function (s, k, fill) {
  const result = [];
  let temp = "";

  for (const char of s) {
    // add chars to temp till length is less than k
    if (temp.length < k) temp += char;

    // add current to final if it is of size k and reset it
    if (temp.length === k) {
      result.push(temp);
      temp = "";
    }
  }

  // we are left with any group which is not length k fill it w/ fill character
  if (temp.length) result.push(temp + fill.repeat(k - temp.length));

  return result;
};
