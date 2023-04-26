let temperatures = [];

temperatures[0] = [];
temperatures[0][0] = 10;
temperatures[0][1] = 20;
temperatures[0][2] = 30;
temperatures[0][3] = 40;

temperatures[1] = [];
temperatures[1][0] = 45;
temperatures[1][1] = 100;
temperatures[1][2] = 80;
temperatures[1][3] = 190;

// console.table(temperatures);

// i represents the rows
// j represents the columns
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log("Row:", i);

    for (let j = 0; j < matrix[i].length; j++) {
      console.log("Colum:", j);

      console.log(matrix[i][j]);
    }
  }
}

printMatrix(temperatures);
