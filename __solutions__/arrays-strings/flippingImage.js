/**
 * @param {number[][]} image
 * @return {number[][]}
 */
function reverseRow(row) {
  return row.reverse();
}

function invertRow(row) {
  return row.map((el) => (el === 1 ? 0 : 1));
}

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i] = reverseRow(image[i]);
  }

  for (let i = 0; i < image.length; i++) {
    image[i] = invertRow(image[i]);
  }

  return image;
};

// two pointers approach
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let j = 0;
    let k = image[i].length - 1;

    while (j < k) {
      let temp = image[i][j];
      image[i][j++] = image[i][k];
      image[i][k--] = temp;
    }

  for (j = 0; j < image[i].length; j++) {
      image[i][j] = image[i][j] === 1 ? 0 : 1;
    }
  }

  return image;
};
