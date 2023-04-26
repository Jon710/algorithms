/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
  const left = [];
  const right = [];

  for (let i = 0; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];

    if (currentEnd < newStart) {
      left.push(intervals[i]);
    } else if (currentStart > newEnd) {
      right.push(intervals[i]);
    } else {
      newStart = Math.min(newStart, currentStart);
      newEnd = Math.max(newEnd, currentEnd);
    }
  }

  return [...left, [newStart, newEnd], ...right];
};
