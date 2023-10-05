// we can also use 2pointers and swap
function reverse(array, left, right) {
  if (left >= right) return;

  [array[left], array[right]] = [array[right], array[left]];

  reverse(array, left + 1, right - 1);
}

function printArrayElements(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}

const arr = [1, 2, 3, 4, 2];

reverse(arr, 0, arr.length);

printArrayElements(arr, arr.length);
