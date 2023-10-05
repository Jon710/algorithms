// coderbyte example
function mergeIntervals(intervals) {
  // a[0] - a's start time
  // b[0] - b's start time
  intervals.sort((a, b) => a[0] - b[0]);

  const firstInterval = intervals.shift();

  const merged = [firstInterval];

  while (intervals.length) {
    // compare the last interval seen, which will be the last element in the merged stack
    // to the next available interval in intervals (sorted)
    const a = merged.pop();
    const b = intervals.shift();
    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    // a and b DON'T overlap
    if (bStart > aEnd) {
      merged.push(a);
      merged.push(b);
    } else {
      // they merge
      const c = [];

      // cStart === aStart
      c[0] = aStart;

      // get Max of the two intervals end times
      c[1] = Math.max(aEnd, bEnd);

      merged.push(c);
    }
  }

  return merged;
}

console.log(
  mergeIntervals([
    [1, 4],
    [7, 9],
    [2, 5],
  ])
); // [[1, 5], [7, 9]]
console.log(
  mergeIntervals([
    [6, 7],
    [2, 4],
    [5, 9],
  ])
); // [[2, 4], [5, 9]]
console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [3, 5],
  ])
); // [[1, 6]]
