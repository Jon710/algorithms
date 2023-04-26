// take/dont take pattern
function printAllSubsequences(array, index, subsequence) {
  // Print the subsequence when reaching a leaf in the call tree
  if (index === array.length) {
    // Condition to avoid printing empty subsequences
    if (subsequence.length > 0) console.log(`[${subsequence}]`);
  } else {
    // Add the element at the current index of the array to the beginning of the next-to-be-formed subsequences
    subsequence.push(array[index]);
    // Print all subsequences which do include the element at the current index of the array
    printAllSubsequences(array, index + 1, subsequence);
    // Remove the element at the current index of the array from the beginning of the next-to-be-formed subsequences
    subsequence.pop();
    // And print all subsequences which don't include the element at the current index of the array
    printAllSubsequences(array, index + 1, subsequence);
  }
}

const array = [3, 1, 2];

printAllSubsequences(array, 0, []);
