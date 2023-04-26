// Q: print your name N times using recursion

function printMyName(i, n) {
  if (i > n) return;

  console.log("joao");
  printMyName(i + 1, n);
}

printMyName(1, 3);
