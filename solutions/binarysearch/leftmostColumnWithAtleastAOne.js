/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
// ladder solution = o(r+c)
// start at bottom right and go left until there's a 1.
// if there's a 1, move up and go left from this position, until it goes out of bound of the matrix
var leftMostColumnWithOne = function (binaryMatrix) {
  const dimensions = binaryMatrix.dimensions();

  let r = dimensions[0] - 1;
  let c = dimensions[1] - 1;
  let idx = -1;

  while (r >= 0 && c >= 0) {
    if (binaryMatrix.get(r, c) === 1) {
      idx = c;
      c--;
    } else {
      r--;
    }
  }

  return idx;
};
