/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let encoded = "";

  for (let s of strs) {
    encoded += String(s.length) + "#" + s; // 5#Hello
  }

  return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const decoded = [];
  let i = 0;
  let j;

  while (i < s.length) {
    j = i;
    while (s[j] !== "#") {
      j++;
    }

    const strLength = Number(s.substring(i, j));
    let str = s.substring(j + 1, strLength + (j + 1));
    decoded.push(str);
    i = strLength + (j + 1); // start at next word
  }

  return decoded;
};

const strs = ["Hello", "World"];

console.log(decode(encode(strs)));
