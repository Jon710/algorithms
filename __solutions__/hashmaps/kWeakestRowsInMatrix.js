/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// O(m.n + nlogn)
var kWeakestRows = function (mat, k) {
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    let soldiers = 0;

    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) soldiers++;
    }

    map.set(i, soldiers);
  }

  // sort by value. if values are equal, sort by their keys
  let sorted = [...map].sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];

    return a[1] - b[1];
  });

  sorted = sorted.map((a) => a[0]);

  return sorted.slice(0, k);
};

// nice O(mn) solution from Official Solutions (vertical order)
// var kWeakestRows = function (mat, k) {
//   let indexes = new Array(k);
//   let nextInsertIndex = 0;

//   // we search the columns, not rows in this approach
//   for (let c = 0; c < mat[0].length && nextInsertIndex < k; c++) {
//     for (let r = 0; r < mat.length && nextInsertIndex < k; r++) {
//       // If this is the first 0 in the current row.
//       if (mat[r][c] === 0 && (c === 0 || mat[r][c - 1] === 1)) {
//         indexes[nextInsertIndex] = r;
//         nextInsertIndex++;
//       }
//     }
//   }

//   /* If there aren't enough, it's because some of the first k weakest rows
//    * are entirely 1's. We need to include the ones with the lowest indexes
//    * until we have at least k. */
//   for (let r = 0; nextInsertIndex < k; r++) {
//     /* If index i in the last column is 1, this was a full row and therefore
//      * couldn't have been included in the output yet. */
//     if (mat[r][mat[0].length - 1] == 1) {
//       indexes[nextInsertIndex] = r;
//       nextInsertIndex++;
//     }
//   }

//   return indexes;
// };
