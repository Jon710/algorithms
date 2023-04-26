class UnionFind {
  constructor() {
    this.id = new Map();
  }

  find(x) {
    let y = this.id.has(x) ? this.id.get(x) : x;
    if (y !== x) {
      y = this.find(y);
      this.id.set(x, y);
    }
    return y;
  }

  union(x, y) {
    this.id.set(this.find(x), this.find(y));
  }
}
