/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  let t = 0;
  let count = 0;

  while (t < target.length) {
    const start = t;

    for (let s = 0; s < source.length; s++) {
      if (source[s] === target[t]) t++;
    }

    if (t === start) return -1;

    count++;
  }

  return count;
};
