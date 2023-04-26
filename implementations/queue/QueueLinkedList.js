// implementing queues with arrays is possible, but inefficient. O(N) to dequeue an element.
// by using LL, we have constant time because we keep the reference to the pointers and only move them around.
// there are no recursive calls, loops etc...
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;

    const removedNode = this.front;

    if (this.size === 1) this.back = null;

    this.front = this.front.next;
    this.size--;
    return removedNode.val;
  }
}

const queue = new QueueLinkedList();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
// console.log(queue.size);
// console.log(queue.front.val);
console.log(queue.dequeue());
