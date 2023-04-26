/**
 * @param {number[][]} vec
 */
class Vector2D {
  constructor(vec) {
    this.idx = 0;
    this.vec = vec.flat();
  }

  /**
   * @return {number}
   */
  next() {
    let item = this.vec[this.idx];
    this.idx++;
    return item;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    if (this.idx < this.vec.length) return true;

    return false;
  }
}
