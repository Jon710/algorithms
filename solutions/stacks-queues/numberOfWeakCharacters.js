// var numberOfWeakCharacters = function(properties) {
//     let weakCharacters = 0;

//     properties.sort((a, b) => a[0] - b[0]);

//     for (let i = 0; i < properties.length; i++) {
//         for (let j = i + 1; j < properties.length; j++) {
//             if (properties[j][0] > properties[i][0] && properties[j][1] > properties[i][1]) {
//                 weakCharacters++;
//                 break;
//             }
//         }
//     }

//     return weakCharacters;
// };

// var numberOfWeakCharacters = function(properties) {
//     properties.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]);

//     const stack = [];
//     let ans = 0;

//     for(let i = 0; i < properties.length; i++) {
//         while (stack.length && properties[stack[stack.length - 1]][1] < properties[i][1]) {
//             stack.pop();
//             ans++;
//         }

//         stack.push(i);
//     }

//     return ans;
// };

// if attack (idx 0), is equal to next element, we sort based on decreasing defense (idx 1)
// attack idxs will be sorted, so we only need to compare defense idxs
var numberOfWeakCharacters = function (properties) {
  properties.sort((a, b) => (b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]));

  let ans = 0;
  let currentMax = -Infinity;

  for (let i = 0; i < properties.length; i++) {
    if (properties[i][1] < currentMax) ans++;
    currentMax = Math.max(currentMax, properties[i][1]);
  }

  return ans;
};

console.log(
  numberOfWeakCharacters([
    [2, 5],
    [4, 3],
    [4, 9],
    [1, 2],
    [10, 4],
  ])
);
