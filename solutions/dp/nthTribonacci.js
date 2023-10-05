var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  // return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  const table = new Array(n).fill();

  table[0] = 0;
  table[1] = 1;
  table[2] = 1;

  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2] + table[i - 3];
  }

  return table[table.length - 1]; // or table[n]
};
