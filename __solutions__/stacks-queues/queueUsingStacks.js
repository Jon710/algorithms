// lc 232
// by using 2 arrays, we have O(1) amortized time and O(n) space
// amortized -> how often does an operation happen?
class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(val) {
    this.pushStack.push(val);
  }

  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);

queue.pop();

console.log(queue.peek());
