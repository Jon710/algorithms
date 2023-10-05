// var groupAnagrams = function(strs) {
//     const map = new Map();

//     for (const str of strs) { // n
//         const sorted = str.split('').sort().join(''); // k logk

//         if (map.has(sorted)) {
//             map.set(sorted, [...map.get(sorted), str]);
//         } else {
//             map.set(sorted, [str]);
//         }
//     }

//     return Array.from(map.values());
// };

// nk
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const frequency = new Array(26).fill(0); // a - z = 26 characters

    for (const char of str) {
      frequency[char.charCodeAt(0) - 97]++; // 'a' === 97
    }

    const key = frequency.toString();

    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  return [...map.values()];
};
