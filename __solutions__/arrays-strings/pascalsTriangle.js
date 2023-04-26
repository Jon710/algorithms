// lc 118

var generate = function (numRows) {
  let triangle = [];

  if (numRows === 0) return triangle;

  // triangle[0] element
  triangle.push([1]);

  // rows for loop
  for (let i = 1; i < numRows; i++) {
    let previousRow = triangle[i - 1];
    let currentRow = [];

    currentRow.push(1);

    // interior of each row.
    // it starts at [1] because we always have 1 at [0]
    for (let j = 1; j < previousRow.length; j++) {
      currentRow[j] = previousRow[j] + previousRow[j - 1];
    }

    currentRow.push(1);

    triangle.push(currentRow);
  }

  return triangle;
};
