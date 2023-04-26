const recurse = (idx, sum, arr, n, subsets) => {
  if (idx === n) {
    subsets.push(sum);
    return;
  }

  // pick element
  recurse(idx + 1, sum + arr[idx], arr, n, subsets);

  // don't pick element
  recurse(idx + 1, sum, arr, n, subsets);
};

const subsetSums = (arr, n) => {
  const subsets = [];
  recurse(0, 0, arr, n, subsets);
  subsets.sort((a, b) => a - b);
  return subsets;
};

// striver
console.log(subsetSums([3, 1, 2], 3));
