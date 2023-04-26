// time: nlogn // space: n
// solving with leetcode's pq lib
var lastStoneWeight = function (stones) {
  const pq = new MaxPriorityQueue();

  for (let stone of stones) {
    pq.enqueue(stone); //log (n)
  }

  // n
  while (pq.size() > 1) {
    const heaviest = pq.dequeue(); // log n
    const secondHeaviest = pq.dequeue(); // log n

    let diff = heaviest.element - secondHeaviest.element;

    if (diff) pq.enqueue(diff); // log n
  }

  return pq.size() === 0 ? 0 : pq._heap._nodes[0].value; // 1
};

// solving by building a naive PQ with array and sorting
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

// time = n * log n
// space = n
var lastStoneWeight = function (stones) {
  const pq = new NaivePQ((a, b) => b - a);

  for (let stone of stones) {
    pq.enqueue(stone); //log (n)
  }

  while (pq.size() > 1) {
    // n
    const heaviest = pq.dequeue(); // log n
    const secondHeaviest = pq.dequeue(); // log n

    let diff = heaviest - secondHeaviest;

    if (diff) pq.enqueue(diff); // log n
  }

  return pq.size() === 0 ? 0 : pq.array[0]; // 1
};

// solving with heap with arrays
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

// time = n * log n
// space = n
var lastStoneWeight = function (stones) {
  const pq = new Heap((a, b) => b - a);

  for (let stone of stones) {
    pq.enqueue(stone); //log (n)
  }

  // n
  while (pq.size > 1) {
    const heaviest = pq.dequeue(); // log n
    const secondHeaviest = pq.dequeue(); // log n

    let diff = heaviest - secondHeaviest;

    if (diff) pq.enqueue(diff); // log n
  }

  return pq.size === 0 ? 0 : pq.array[0]; // 1
};
