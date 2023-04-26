// https://adrianmejia.com/priority-queue-data-structure-and-heaps-time-complexity-javascript-implementation/
// a priority has 2 essential operations:
// enqueue: insert elements on the queue
// dequeue: remove elements from the queue in the same order they were inserted.
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
