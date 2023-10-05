class RandomizedSet {
  constructor() {
    this.map = {};
    this.arr = [];
  }

  insert(val) {
    // Exists
    if (this.map[val] !== undefined) return false;

    // Doesn't exist
    this.map[val] = this.arr.length;
    this.arr.push(val);
    return true;
  }

  remove(val) {
    // Exists
    if (this.map[val] !== undefined) {
      this._swap(this.map[val], this.arr.length - 1);
      this.arr.pop();
      delete this.map[val];
      return true;
    }

    // Doesn't exist
    return false;
  }

  getRandom() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }

  _swap(i, j) {
    const temp = this.arr[i];

    this.map[this.arr[i]] = j;
    this.arr[i] = this.arr[j];

    this.map[this.arr[j]] = i;
    this.arr[j] = temp;
  }
}
