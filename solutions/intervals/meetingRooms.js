/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    //compare end of interval to start of the next
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }

  return true;
};
