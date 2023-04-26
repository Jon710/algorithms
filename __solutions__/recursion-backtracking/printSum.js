// parametrized
function printSum(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }

  printSum(i - 1, sum + i);
}

// printSum(9, 0);

// functional
function printSumFunc(n) {
  if (n === 0) return 0;
  return n + printSumFunc(n - 1);
}

console.log(printSumFunc(3));
