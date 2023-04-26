const countElements = (arr) => {
  const set = new Set(arr);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + 1)) count++;
  }

  return count;
};
