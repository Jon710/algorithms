// EFFICIENT: o(nlogn)
// Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array.
// It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place.
// But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item.
// A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements.
// The steps of merge sort, then, are:
// 1) Recursively split the input array in half until a sub-array with only one element is produced.
// 2) Merge each sorted sub-array together to produce the final sorted array.

const test1 = [4, 5, 2, 1, 3, 8];
const test2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4];
const test3 = [2, 1];

function merge(left, right) {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  // split array into right and left
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(test1));
console.log(mergeSort(test2));
console.log(mergeSort(test3));
