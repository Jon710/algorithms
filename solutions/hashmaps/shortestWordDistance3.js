// TLE
// var shortestWordDistance = function(wordsDict, word1, word2) {
//     const map = new Map();
//     let shortest = Infinity;

//     for (let i = 0; i < wordsDict.length; i++) {
//         if (map.has(wordsDict[i])) {
//             map.get(wordsDict[i]).push(i);
//         } else {
//             map.set(wordsDict[i], [i]);
//         }
//     }

//     map.get(word1).forEach(w => {
//         map.get(word2).forEach(w2 => {
//             if (w === w2) return 0;

//             shortest = Math.min(Math.abs(w - w2), shortest);
//         })
//     })

//     return shortest;
// };

var shortestWordDistance = function (wordsDict, word1, word2) {
  let shortest = Infinity;
  let w1 = -1;
  let w2 = -1;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) w1 = i;

    if (w1 >= 0 && w2 >= 0 && w1 !== w2) {
      shortest = Math.min(shortest, Math.abs(w1 - w2));
    }

    if (wordsDict[i] === word2) w2 = i;
  }

  if (w1 >= 0 && w2 >= 0 && w1 !== w2) {
    shortest = Math.min(shortest, Math.abs(w1 - w2));
  }

  return shortest;
};
