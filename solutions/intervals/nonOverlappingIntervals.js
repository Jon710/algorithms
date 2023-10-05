// lc 435

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = 0;
  let previousEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start >= previousEnd) {
      previousEnd = end;
    } else {
      result++;
      previousEnd = Math.min(end, previousEnd);
    }
  }

  return result;
};
