class MinHeap {
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

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.pq = new Heap();

    for (let num of nums) {
      this.pq.enqueue(num);
      if (this.pq.size > this.k) {
        this.pq.dequeue();
      }
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.pq.enqueue(val);

    if (this.pq.size > this.k) {
      this.pq.dequeue();
    }

    return this.pq.peek();
  }
}
// solved with heap
var minMeetingRooms = function (intervals) {
  if (!intervals || !intervals.length) return 0;

  // sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const minPQ = new MinHeap();

  // add first meeting to heap
  minPQ.enqueue(intervals[0][1]);

  for (let i = 1; i < intervals.length; i++) {
    // check if the room is free
    // if so, remove end time that's already passed
    if (intervals[i][0] >= minPQ.peek()) minPQ.dequeue();

    // add current end time
    minPQ.enqueue(intervals[i][1]);
  }

  // heap size === minimum rooms required for all meetings
  return minPQ.size;
};

// solved with leetcode pq lib
var minMeetingRooms = function (intervals) {
  if (!intervals || !intervals.length) return 0;

  // sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const minPQ = new MinPriorityQueue();

  // add first meeting to heap
  minPQ.enqueue(intervals[0][1]);

  for (let i = 1; i < intervals.length; i++) {
    // check if the room is free
    // if so, remove end time that's already passed
    if (intervals[i][0] >= minPQ.front().priority) minPQ.dequeue();

    // add current end time
    minPQ.enqueue(intervals[i][1]);
  }

  // heap size === minimum rooms required for all meetings
  return minPQ.size();
};
