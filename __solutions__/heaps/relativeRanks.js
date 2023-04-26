/**
 * @param {number[]} score
 * @return {string[]}
 */
// solving with lc pq lib
var findRelativeRanks = function (score) {
  const pq = new MaxPriorityQueue();

  for (let i = 0; i < score.length; i++) {
    pq.enqueue(i, score[i]);
  }

  for (let i = 0; i < score.length; i++) {
    const { element } = pq.dequeue();

    if (i === 0) {
      score[element] = "Gold Medal";
    } else if (i === 1) {
      score[element] = "Silver Medal";
    } else if (i === 2) {
      score[element] = "Bronze Medal";
    } else {
      score[element] = (i + 1).toString();
    }
  }

  return score;
};

// solving with a naive pq with array and sorting
class NaivePQ {
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.comparator = comparator;
  }

  /**
   * Insert element
   * @runtime O(n log n)
   * @param {any} value
   */
  enqueue(value) {
    this.array.push(value);
    this.array.sort(this.comparator);
  }

  /**
   * Retrieves and removes the head or returns null if this Heap is empty.
   * @runtime O(n)
   */
  dequeue() {
    if (!this.size) return null;
    const value = this.array.shift(); // remove element
    return value;
  }

  size() {
    return this.array.length;
  }
}

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const pq = new NaivePQ((a, b) => score[b] - score[a]);
  const res = [];

  for (let i = 0; i < score.length; i++) {
    pq.enqueue(i);
  }

  let i = 1;

  while (pq.size() > 0) {
    const idx = pq.dequeue();

    if (i > 3) {
      res[idx] = String(i);
    } else if (i == 1) {
      res[idx] = "Gold Medal";
    } else if (i == 2) {
      res[idx] = "Silver Medal";
    } else if (i == 3) {
      res[idx] = "Bronze Medal";
    }

    i++;
  }

  return res;
};

// solving with pq with heaps (much faster!)
class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.comparator = (i1, i2) => {
      const value = comparator(this.array[i1], this.array[i2]);
      if (Number.isNaN(value)) {
        throw new Error(
          `Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`
        );
      }
      return value;
    };
  }

  /**
   * Insert element
   * @runtime O(log n)
   * @param {any} value
   */
  enqueue(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  /**
   * Retrieves, but does not remove, the head of this heap
   * @runtime O(1)
   */
  peek() {
    return this.array[0];
  }

  /**
   * Retrieves and removes the head of this heap, or returns null if this heap is empty.
   * @runtime O(log n)
   */
  dequeue(index = 0) {
    if (!this.size) return null;
    this.swap(index, this.size - 1); // swap with last
    const value = this.array.pop(); // remove element
    this.bubbleDown(index);
    return value;
  }

  /**
   * Returns the number of elements in this collection.
   * @runtime O(1)
   */
  get size() {
    return this.array.length;
  }

  /**
   * Move new element upwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleUp() {
    let index = this.size - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  /**
   * After removal, moves element downwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleDown(index = 0) {
    let curr = index;
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const getTopChild = (i) =>
      right(i) < this.size && this.comparator(left(i), right(i)) > 0
        ? right(i)
        : left(i);

    while (
      left(curr) < this.size &&
      this.comparator(curr, getTopChild(curr)) > 0
    ) {
      const next = getTopChild(curr);
      this.swap(curr, next);
      curr = next;
    }
  }

  /**
   * Swap elements on the heap
   * @runtime O(1)
   * @param {number} i1 index 1
   * @param {number} i2 index 2
   */
  swap(i1, i2) {
    [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
  }
}

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const pq = new Heap((a, b) => score[b] - score[a]);
  const res = [];

  for (let i = 0; i < score.length; i++) {
    pq.enqueue(i);
  }

  let i = 1;

  while (pq.size > 0) {
    const idx = pq.dequeue();

    if (i > 3) {
      res[idx] = String(i);
    } else if (i == 1) {
      res[idx] = "Gold Medal";
    } else if (i == 2) {
      res[idx] = "Silver Medal";
    } else if (i == 3) {
      res[idx] = "Bronze Medal";
    }

    i++;
  }

  return res;
};
