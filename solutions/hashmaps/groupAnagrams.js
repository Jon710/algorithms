var groupAnagrams = function (strs) {
  const map = new Map();

  // n
  for (const str of strs) {
    const currentStr = str; // just to help debugging
    const sorted = currentStr.split("").sort().join(""); // k logk

    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), currentStr]);
    } else {
      map.set(sorted, [currentStr]);
    }
  }

  return Array.from(map.values());
};

// nk
// var groupAnagrams = function (strs) {
//   const map = new Map();

//   for (const str of strs) {
//     const frequency = new Array(26).fill(0); // a - z = 26 characters

//     for (const char of str) {
//       frequency[char.charCodeAt(0) - 97]++; // 'a' === 97
//     }

//     const key = frequency.toString();

//     if (map.has(key)) {
//       map.get(key).push(str);
//     } else {
//       map.set(key, [str]);
//     }
//   }

//   return [...map.values()];
// };

// latest. same as the first one
var groupAnagrams3 = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const currentStr = str.split("").sort((a, b) => a.localeCompare(b));
    const sortedStr = currentStr.join("");

    if (map.has(sortedStr)) {
      const strsArr = map.get(sortedStr);
      strsArr.push(str);
      map.set(sortedStr, strsArr);
    } else {
      const strsArr = [];
      strsArr.push(str);
      map.set(sortedStr, strsArr);
    }
  }

  return Array.from(map.values());
};

console.log(groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"]));
