// backtracking
var getFactors = function (n) {
  function backtrack(start, num, arr) {
    if (num === 1) {
      res.push([...arr]);
      return;
    }

    for (let i = start; i >= 2; i--) {
      const rem = num % i;

      if (rem === 0) {
        arr.push(i);
        backtrack(i, num / i, arr);
        arr.pop();
      }
    }
  }

  const res = [];

  if (n === 1) return res;

  backtrack(Math.floor(n / 2), n, []);

  return res;
};
