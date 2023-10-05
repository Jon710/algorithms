/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const rQueue = [];
  const dQueue = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  while (dQueue.length && rQueue.length) {
    const rIdx = rQueue.shift();
    const dIdx = dQueue.shift();

    if (rIdx < dIdx) {
      rQueue.push(rIdx + senate.length);
    } else {
      dQueue.push(dIdx + senate.length);
    }
  }

  return rQueue.length ? "Radiant" : "Dire";
};

// var predictPartyVictory = function(senate) {
//     const stack = [];
//     senate = senate.split('');

//     for (let i = 0; i < senate.length; i++) {
//         if (!stack.length || stack[stack.length - 1] === senate[i]) {
//             stack.push(senate[i]);
//         } else {
//             senate.push(stack.pop());
//         }
//     }

//     return stack[0] === 'R' ? 'Radiant' : 'Dire';
// };
