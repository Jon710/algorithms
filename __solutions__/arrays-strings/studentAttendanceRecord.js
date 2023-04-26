/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let late = 0;
  let absent = 0;

  for (const char of s) {
    if (char === "A") {
      absent++;
      late = 0;
    } else if (char === "L") {
      late++;
    } else {
      late = 0;
    }

    if (absent === 2 || late === 3) return false;
  }

  return true;
};
