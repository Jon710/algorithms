// Time: O(nlogn);
// Space: O(n);
// var topKFrequent = function (words, k) {
//   // 1. use a Map to track the count of each word
//   // 2. use an array to hold the unique word
//   // 3. sort the unique words count > lexico
//   // 4. slice top k

//   // O(n)
//   const countMap = new Map();

//   // O(n)
//   const uniqueWords = [];

//   for (let word of words) {
//     if (countMap.has(word)) {
//       countMap.set(word, countMap.get(word) + 1);
//     } else {
//       countMap.set(word, 1);
//       uniqueWords.push(word);
//     }
//   }

//   // O(nlogn)
//   uniqueWords.sort((word1, word2) => {
//     const count1 = countMap.get(word1);
//     const count2 = countMap.get(word2);

//     if (count1 < count2) {
//       return 1;
//     } else if (count1 > count2) {
//       return -1;
//     } else {
//       if (word1 === word2) {
//         return 0;
//       } else if (word1 < word2) {
//         return -1;
//       } else {
//         return 1;
//       }
//     }
//   });

//   //O(k)
//   return uniqueWords.slice(0, k);
// };

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
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }

  const maxPQ = new Heap(
    // custom compare function: swap if return 1, don't swap if return -1
    (w1, w2) => {
      // compare count first
      if (w1.count > w2.count) return -1;

      if (w1.count < w2.count) return 1;

      // if count is the same, compare string(length and alphabetic order)
      return w1.word > w2.word ? 1 : -1;
    }
  );

  for (let key of map.keys()) {
    maxPQ.enqueue({ word: key, count: map.get(key) }); //log (n)
  }

  for (let i = 0; i < k; i++) {
    const element = maxPQ.dequeue();
    result.push(element.word);
  }

  return result;
};
