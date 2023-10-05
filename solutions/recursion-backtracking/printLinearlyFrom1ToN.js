function print1ToN(i, n) {
  if (i > n) return;

  console.log(i);
  print1ToN(i + 1, n);
}

print1ToN(1, 4)